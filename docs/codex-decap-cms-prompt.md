# Codex Prompt For Reusable Decap CMS Setup

Copy the prompt below into Codex when you want the same kind of Decap CMS layer on top of another website or app.

## Paste This To Codex

```text
I need you to add a production-ready Decap CMS layer to this project and handle the full setup carefully so we avoid common OAuth and config mistakes.

Goal:
- Add Decap CMS for non-technical editing
- Keep the main site/app deployed normally
- Add a separate OAuth helper service for Decap login if GitHub backend is used
- Make the setup easy to maintain and document

What I want you to do:
1. Inspect the existing repo first and understand the current stack, routes, content model, and deployment setup.
2. Add Decap CMS in a way that matches the current project structure instead of forcing a generic blog structure.
3. Move editable hardcoded site settings into CMS-managed data files where appropriate.
4. Add editing for the main collections/content types in the project.
5. Keep all public routes stable unless explicitly necessary to change them.
6. Add clear docs for editors and admins.
7. Validate the full flow locally as far as possible.

Important implementation rules:
- If using the GitHub backend, use a separate OAuth helper service.
- Put the OAuth helper in a separate folder like `oauth/`.
- Use Vercel-compatible serverless functions under `oauth/api/`.
- Add a simple `/api/ping` endpoint for fast deployment verification.
- Add safe env validation for OAuth helper code.
- Never log secret values. Only log booleans or missing variable names.
- Keep the OAuth callback URL explicit and documented.

Critical Decap auth rules:
- `backend.base_url` in `public/admin/config.yml` must be the bare origin only, for example:
  `https://your-oauth-helper.vercel.app`
- Do not set `base_url` to `/api`.
- Put the path in `auth_endpoint`, for example:
  `api/auth`
- The GitHub OAuth callback URL should usually be:
  `https://your-oauth-helper.vercel.app/api/callback`
- The OAuth helper env var `COMPLETE_URL` should match that same callback URL exactly.
- If Decap popup login reaches the callback page but the CMS does not log in, check origin matching first.

Required deliverables:
- `public/admin/index.html`
- `public/admin/config.yml`
- Decap collections for the project’s real content types
- CMS-managed settings data file if the project currently hardcodes editable branding/site text
- `oauth/api/auth.js`
- `oauth/api/callback.js`
- `oauth/api/ping.js`
- `oauth/vercel.json`
- `oauth/README.md`
- editor/admin documentation in `docs/`

Required debugging safeguards:
- Add a helper that validates:
  - `ORIGIN`
  - `ADMIN_PANEL_URL`
  - `COMPLETE_URL`
  - `OAUTH_CLIENT_ID`
  - `OAUTH_CLIENT_SECRET`
- If any are missing, throw a clear error listing only missing names.
- Add safe diagnostics only if needed.

What I want in your final response:
1. What you changed
2. What still requires manual setup
3. Exact values I must use for:
   - GitHub OAuth App homepage URL
   - GitHub OAuth App callback URL
   - Vercel environment variables
   - Decap `base_url`
   - Decap `auth_endpoint`
4. Exact test URLs, including:
   - `/admin/`
   - `/api/ping`
   - `/api/auth`
5. Any likely failure points and how to verify them quickly

Do not stop at partial setup. Implement the code, docs, and validation together.
```

## Use This Manual Checklist Too

After Codex finishes, verify these exact things:

1. `public/admin/config.yml`
   - `base_url` is the OAuth service origin only
   - `auth_endpoint` contains the path, such as `api/auth`

2. Vercel OAuth project
   - framework preset is appropriate for the service
   - root directory is `oauth`
   - `https://YOUR-DOMAIN/api/ping` works

3. GitHub OAuth App
   - homepage URL is the public CMS page
   - callback URL is the OAuth helper callback URL

4. Environment variables
   - names exactly match the code
   - values are not blank
   - redeploy after changing them

5. Decap login flow
   - `Login with GitHub` opens popup
   - popup reaches callback page
   - popup closes
   - CMS actually logs in

## The Main Mistake To Avoid

Do not set:

```yaml
base_url: https://your-oauth-helper.vercel.app/api
auth_endpoint: auth
```

Use:

```yaml
base_url: https://your-oauth-helper.vercel.app
auth_endpoint: api/auth
```

That exact difference prevents the popup origin mismatch that caused the login handoff issue here.
