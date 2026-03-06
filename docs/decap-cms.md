# TSAB Decap CMS Setup

## Public admin URL

Once deployed, the admin panel will live at:

`https://labhari1218-gif.github.io/TSAB.github.io/admin/`

## Repo files

- `public/admin/index.html`
- `public/admin/config.yml`
- `oauth/`

## Steps

1. Deploy the `oauth/` directory as a separate Vercel project.
2. Create a GitHub OAuth App.
3. Set the Vercel environment variables described in `oauth/README.md`.
4. Replace `base_url` in `public/admin/config.yml` with the deployed Vercel OAuth base URL.
5. Open `/admin/` and test login.

## Notes

- The public site remains on GitHub Pages.
- Decap uses GitHub commits directly on the `main` branch.
- `publish_mode` is `simple`, so content updates commit directly without editorial workflow.
