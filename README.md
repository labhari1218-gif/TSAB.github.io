# TSAB Website

The official TSAB website is built with Astro and deployed to GitHub Pages as a static site.

## Stack

- Astro
- Markdown content collections
- GitHub Pages
- GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Build and checks

```bash
npm run check
npm run build
```

## Content structure

Repeatable site content lives in `src/content/`:

- `siteSettings/`
- `events/`
- `opportunities/`
- `achievers/`
- `team/`
- `galleryAlbums/`
- `groups/`
- `announcements/`

Static images live in `public/images/`.

## CMS

Decap CMS admin files are in:

- `public/admin/`
- `oauth/`

The public site stays on GitHub Pages. The Decap OAuth proxy must be deployed separately on Vercel.

## Editing without code changes

Use GitHub’s browser editor for most updates.

1. Open the repo on GitHub.
2. Edit or add the relevant Markdown file under `src/content/`.
3. Upload any related image into `public/images/`.
4. Commit the change in the browser.

Detailed instructions are in [docs/content-editing.md](/home/hari-krishna/Desktop/TSAB/docs/content-editing.md).

Additional setup docs:

- [docs/decap-cms.md](/home/hari-krishna/Desktop/TSAB/docs/decap-cms.md)
- [docs/image-checklist.md](/home/hari-krishna/Desktop/TSAB/docs/image-checklist.md)

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Astro site and publishes it to GitHub Pages.

Configured deployment target:

- Site URL: `https://labhari1218-gif.github.io`
- Base path: `/TSAB.github.io`

## Replace placeholders before public launch

Current v1 content intentionally includes starter/demo placeholders for:

- team members
- achiever stories
- event posters
- gallery imagery
- join/contact links

Update these before publishing the production version widely.
