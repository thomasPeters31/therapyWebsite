# therapyWebsite

## Non-technical content editing (no code access)

This site now loads its text/content from `content/site.json`. There is also a CMS-ready admin panel at `/admin` using Decap CMS.

### Option A: Use the CMS UI (recommended)
1. Host this site on Netlify (free and secure).
2. Enable **Identity** in Netlify and turn on **Git Gateway**.
3. Invite only the two editors (you and the owner) as Netlify Identity users.
4. Visit `https://your-site.netlify.app/admin` and log in to edit content.
5. Use the clearly labeled fields to update text, then click **Publish**.

Only invited Identity users can access the CMS.

### Option B: Edit the content file directly
Open `content/site.json` and update the text fields. No HTML edits are required.

## Files added
- `content/site.json` (all editable text and links)
- `js/content.js` (loads content JSON into the page)
- `admin/index.html` + `admin/config.yml` (Decap CMS admin)
