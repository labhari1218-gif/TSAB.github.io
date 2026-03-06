# TSAB Decap OAuth Service

This directory contains the Decap CMS GitHub OAuth proxy that should be deployed separately on Vercel.

## Deploy target

- Host this folder as its own Vercel project
- Keep the public Astro site on GitHub Pages

## Required environment variables

- `ORIGIN=https://labhari1218-gif.github.io`
- `ADMIN_PANEL_URL=https://labhari1218-gif.github.io/TSAB.github.io/admin/`
- `COMPLETE_URL=https://YOUR-VERCEL-OAUTH-DOMAIN.vercel.app/api/callback`
- `OAUTH_CLIENT_ID=...`
- `OAUTH_CLIENT_SECRET=...`

## GitHub OAuth App

Create a GitHub OAuth App with:

- Homepage URL:
  `https://labhari1218-gif.github.io/TSAB.github.io/admin/`
- Authorization callback URL:
  `https://YOUR-VERCEL-OAUTH-DOMAIN.vercel.app/api/callback`

After deployment, replace `base_url` in `public/admin/config.yml` with:

`https://YOUR-VERCEL-OAUTH-DOMAIN.vercel.app/api`
