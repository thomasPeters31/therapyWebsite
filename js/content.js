(() => {
  const getByPath = (obj, path) => {
    if (!path) return undefined;
    return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
  };

  const applyText = (root, data) => {
    root.querySelectorAll('[data-content]').forEach((el) => {
      const value = getByPath(data, el.getAttribute('data-content'));
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    root.querySelectorAll('[data-content-attr]').forEach((el) => {
      const mappings = el.getAttribute('data-content-attr');
      if (!mappings) return;
      mappings.split(',').forEach((pair) => {
        const [attr, path] = pair.split(':').map((part) => part.trim());
        if (!attr || !path) return;
        const value = getByPath(data, path);
        if (typeof value === 'string') {
          el.setAttribute(attr, value);
        }
      });
    });
  };

  const applyMeta = (data) => {
    if (data.meta && typeof data.meta.title === 'string') {
      document.title = data.meta.title;
    }
  };

  fetch('content/site.json', { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Unable to load site content.');
      }
      return response.json();
    })
    .then((data) => {
      applyMeta(data);
      applyText(document, data);
    })
    .catch((error) => {
      console.warn(error);
    });
})();
