# Codex Prompt For Full Decap CMS Setup From Zero

Use this file when:
- you have built a website/app repo
- nothing is set up yet for Decap CMS
- there is no `oauth/` folder yet
- there is no Vercel OAuth helper yet
- no GitHub OAuth App exists yet
- no Vercel environment variables exist yet
- you want Codex to implement the code and also guide you through every manual step

This file has two parts:

1. a prompt you can paste into Codex
2. a manual human checklist for the parts Codex cannot do by itself

---

## Paste This To Codex

```text
I need you to add a complete Decap CMS setup to this project from zero.

Current state:
- The app/site repo already exists.
- The app may already build and deploy.
- Decap CMS is NOT set up yet.
- There is NO oauth folder yet unless you create it.
- There is NO Vercel OAuth helper project yet.
- There is NO GitHub OAuth App yet.
- There are NO Vercel environment variables yet.
- I need both implementation and step-by-step instructions for everything manual.

Your job:
1. Inspect the existing repo first and understand:
   - framework
   - routes
   - content model
   - where editable text currently lives
   - current deployment setup
2. Implement Decap CMS in a way that fits this project instead of forcing a generic blog structure.
3. Move editable hardcoded site settings into CMS-managed content/data files where appropriate.
4. Add collections for the real content types used by this project.
5. Add a separate OAuth helper service for GitHub login.
6. Document the exact manual steps I must do in GitHub and Vercel after your code changes.
7. Tell me the exact URLs, exact field values, and exact button clicks I must use.
8. Do not stop at partial setup. Finish code, docs, and validation together.

Implementation requirements:
- Add:
  - `public/admin/index.html`
  - `public/admin/config.yml`
- If using GitHub backend, create:
  - `oauth/api/auth.js`
  - `oauth/api/callback.js`
  - `oauth/api/ping.js`
  - `oauth/vercel.json`
  - `oauth/README.md`
- Use a separate OAuth helper deployment on Vercel.
- Add safe environment variable validation.
- Never log secret values.
- If diagnostics are needed, log only booleans or missing env var names.

Critical auth rules you must follow:
- In Decap config, `backend.base_url` must be the OAuth helper ORIGIN only.
- Do NOT set `base_url` to `/api`.
- Put the path into `auth_endpoint`.
- Correct pattern:
  - `base_url: https://your-oauth-helper.vercel.app`
  - `auth_endpoint: api/auth`
- GitHub OAuth callback should normally be:
  - `https://your-oauth-helper.vercel.app/api/callback`
- The OAuth helper env var `COMPLETE_URL` must exactly match that callback URL.
- Add `/api/ping` so deployment can be tested before login debugging.

Required env vars to support:
- `ORIGIN`
- `ADMIN_PANEL_URL`
- `COMPLETE_URL`
- `OAUTH_CLIENT_ID`
- `OAUTH_CLIENT_SECRET`

If any required env vars are missing:
- throw a clear custom error listing only the missing names
- do not print secret values

Required docs:
- update or add docs in `docs/`
- include an editor guide
- include an admin/OAuth setup guide
- include troubleshooting for popup/login issues

What I need in your final answer:
1. What code/files you created or changed
2. What still must be done manually
3. A step-by-step manual setup section for GitHub OAuth App:
   - where to click
   - what to type
   - what exact URLs to enter
4. A step-by-step manual setup section for Vercel:
   - how to create/import the OAuth helper project
   - what root directory to use
   - what framework preset to choose
   - what env vars to add
   - how to redeploy
5. Exact values to use for:
   - homepage URL
   - callback URL
   - Decap `base_url`
   - Decap `auth_endpoint`
   - every env var
6. Exact test URLs:
   - the CMS page
   - `/api/ping`
   - `/api/auth`
7. A quick troubleshooting section:
   - popup opens but CMS does not log in
   - callback page hangs
   - 404 on `/api/ping`
   - 500 on `/api/auth`
   - env var mismatch
   - wrong `base_url`

Also:
- If this repo is missing structure needed for CMS-managed settings, create it.
- If helpful, add a reusable markdown guide inside the repo for future reuse.
- Prefer the smallest robust implementation.
```

---

## What Codex Should Build In The Repo

If the project is using GitHub as the Decap backend, Codex should usually create:

- `public/admin/index.html`
- `public/admin/config.yml`
- a CMS-managed settings/content file if branding or page copy is currently hardcoded
- `oauth/api/auth.js`
- `oauth/api/callback.js`
- `oauth/api/ping.js`
- `oauth/vercel.json`
- `oauth/README.md`
- one or more docs files under `docs/`

The OAuth helper is separate from the main site.
The public site can stay on GitHub Pages, Vercel, Netlify, or anywhere else.
The OAuth helper only exists to complete GitHub login for Decap.

---

## Human Setup Guide After Codex Finishes

This is the part you do manually in the browser after Codex finishes the repo code.

### Step 1: Push The Repo To GitHub

If the repo is not pushed yet:

```bash
git add .
git commit -m "Add Decap CMS setup"
git push -u origin main
```

If it is already pushed, continue.

---

## Step 2: Create The Vercel OAuth Helper Project

If Codex created an `oauth/` folder, deploy that folder as its own Vercel project.

### What to click in Vercel

1. Open [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click `Add New...`
3. Click `Project`
4. Import your GitHub repo
5. When Vercel asks for project settings:
   - `Framework Preset`:
     use `Other`
   - `Root Directory`:
     enter `oauth`
   - `Build Command`:
     leave default unless Codex explicitly says otherwise
   - `Output Directory`:
     leave blank unless Codex explicitly says otherwise
6. Click `Deploy`

### What you should get

After deploy, Vercel gives you a domain like:

`https://your-project-name.vercel.app`

You will use that domain in:
- GitHub OAuth App
- `public/admin/config.yml`
- Vercel environment variables

---

## Step 3: Test The OAuth Helper Before Anything Else

Before GitHub login testing, check whether the helper is alive.

Open:

`https://YOUR-OAUTH-DOMAIN/api/ping`

Expected result:

```json
{"ok":true,"route":"/api/ping"}
```

### If `/api/ping` gives 404

The Vercel project setup is wrong. Check:
- root directory is exactly `oauth`
- the `oauth/api/` folder exists in the repo
- the latest deployment is using the latest commit

Do not debug GitHub OAuth until `/api/ping` works.

---

## Step 4: Create The GitHub OAuth App

This is done in GitHub, not in the repo.

### What to click in GitHub

1. Open GitHub
2. Click your profile picture in the top-right
3. Click `Settings`
4. In the left sidebar, scroll down and click `Developer settings`
5. Click `OAuth Apps`
6. Click `New OAuth App`

### What to enter

Use these values:

- `Application name`
  - use something clear, for example:
    `My Site Decap CMS`

- `Homepage URL`
  - use your public CMS page, for example:
    `https://YOUR-USERNAME.github.io/YOUR-REPO/admin/`
  - if your main site is hosted elsewhere, use that public `/admin/` URL

- `Application description`
  - optional
  - example:
    `OAuth login for Decap CMS`

- `Authorization callback URL`
  - use:
    `https://YOUR-OAUTH-DOMAIN/api/callback`

7. Click `Register application`

### After app creation

You will see:
- `Client ID`

Then:
1. Click `Generate a new client secret`
2. Copy the `Client Secret`

Save both:
- `Client ID`
- `Client Secret`

You will need them in Vercel.

---

## Step 5: Add Vercel Environment Variables

Go back to the Vercel OAuth project.

### What to click

1. Open the OAuth helper project in Vercel
2. Click `Settings`
3. Click `Environment Variables`

### What to add

Add these exact names.
The names must exactly match the code.

#### Variable 1

- Name:
  `ORIGIN`
- Value:
  the public site origin only

Example:

`https://YOUR-USERNAME.github.io`

Not:
- not the full `/admin/` URL
- not the OAuth helper URL

#### Variable 2

- Name:
  `ADMIN_PANEL_URL`
- Value:
  your full public Decap admin URL

Example:

`https://YOUR-USERNAME.github.io/YOUR-REPO/admin/`

#### Variable 3

- Name:
  `COMPLETE_URL`
- Value:
  your OAuth callback URL

Example:

`https://YOUR-OAUTH-DOMAIN/api/callback`

#### Variable 4

- Name:
  `OAUTH_CLIENT_ID`
- Value:
  your GitHub OAuth App Client ID

#### Variable 5

- Name:
  `OAUTH_CLIENT_SECRET`
- Value:
  your GitHub OAuth App Client Secret

### Important

If the code uses these exact env var names, then names like:
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

will not work unless the code was written to use them.

### Environments

When Vercel asks where to apply them:
- select `Production`
- also select `Preview` if you want preview deployments to work too

---

## Step 6: Redeploy The Vercel OAuth Helper

After adding environment variables, you must redeploy.

### What to click

1. In the Vercel OAuth project, click `Deployments`
2. Open the latest deployment
3. Click `Redeploy`

Environment variable changes do not fix old deployments automatically.

---

## Step 7: Verify The OAuth Helper URLs

Test these in order:

### 1. Ping

Open:

`https://YOUR-OAUTH-DOMAIN/api/ping`

Expected:

```json
{"ok":true,"route":"/api/ping"}
```

### 2. Auth

Open:

`https://YOUR-OAUTH-DOMAIN/api/auth`

Expected:
- redirect to GitHub OAuth
- or at least not a 404

If it shows 500:
- check Vercel runtime logs
- check env var names
- check env var values are not blank

---

## Step 8: Verify `public/admin/config.yml`

This is the most important Decap config rule.

### Correct

```yaml
backend:
  name: github
  repo: YOUR-USERNAME/YOUR-REPO
  branch: main
  base_url: https://YOUR-OAUTH-DOMAIN
  auth_endpoint: api/auth
```

### Wrong

```yaml
backend:
  base_url: https://YOUR-OAUTH-DOMAIN/api
  auth_endpoint: auth
```

Why this matters:
- Decap compares popup `event.origin` with `base_url`
- popup origin is only:
  `https://YOUR-OAUTH-DOMAIN`
- it is never:
  `https://YOUR-OAUTH-DOMAIN/api`

If `base_url` includes `/api`, the popup may complete GitHub auth but the CMS will ignore the login result.

---

## Step 9: Push Config Changes If Needed

If you changed `public/admin/config.yml` locally:

```bash
git add public/admin/config.yml
git commit -m "Configure Decap OAuth"
git push
```

Then wait for the main site to redeploy.

---

## Step 10: Open The CMS

Open your public admin page:

`https://YOUR-USERNAME.github.io/YOUR-REPO/admin/`

Then:
1. Click `Login with GitHub`
2. GitHub popup should open
3. Approve the OAuth App if asked
4. Popup should close
5. CMS should log in

---

## Quick Troubleshooting

### Problem: `/api/ping` is 404

Check:
- Vercel project root directory is `oauth`
- `oauth/api/ping.js` exists
- latest deployment is from latest commit

### Problem: `/api/auth` is 500

Check:
- env vars exist
- env var names match code exactly
- env var values are not blank
- Vercel redeploy happened after env var creation

### Problem: GitHub popup opens, reaches callback, but CMS does not log in

Check first:
- `public/admin/config.yml`
- `base_url` must be the bare origin only
- `auth_endpoint` must contain `api/auth`

This is the most common Decap OAuth bug.

### Problem: Popup gets stuck on “Logging you in…”

Check:
- callback URL in GitHub OAuth App matches `COMPLETE_URL`
- callback URL matches the actual callback route used by the code
- popup message/origin logic in the OAuth callback matches the Decap auth client

### Problem: No popup opens

Check:
- browser popup blocker
- JS console errors on the CMS page
- whether `/admin/config.yml` is loading correctly

### Problem: Login works but saving content fails

Check:
- logged-in GitHub account has write access to the repo
- repo in `config.yml` is correct
- branch name in `config.yml` is correct

---

## Reusable Template Values

Replace these placeholders for any future project:

- `YOUR-USERNAME`
- `YOUR-REPO`
- `YOUR-OAUTH-DOMAIN`

Examples:

- Public CMS page:
  `https://YOUR-USERNAME.github.io/YOUR-REPO/admin/`
- OAuth callback:
  `https://YOUR-OAUTH-DOMAIN/api/callback`
- Ping:
  `https://YOUR-OAUTH-DOMAIN/api/ping`
- Auth:
  `https://YOUR-OAUTH-DOMAIN/api/auth`

---

## Best Short Prompt For Future Use

If you want a short version to paste quickly, use this:

```text
Add Decap CMS to this repo from zero. Assume nothing is set up yet. Build the full code integration, add a separate Vercel OAuth helper under `oauth/`, create `/api/ping`, `/api/auth`, and `/api/callback`, move editable hardcoded settings into CMS-managed content where appropriate, and document every manual step I must do in GitHub and Vercel. In your final answer, give me exact click-by-click steps for creating the GitHub OAuth App, creating the Vercel project, adding env vars, redeploying, and testing login. Very important: set Decap `base_url` to the bare OAuth helper origin only, and put the path into `auth_endpoint` like `api/auth`. Do not use `base_url` with `/api`.
```

---

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

That exact difference avoids the popup origin mismatch that causes GitHub login to appear successful while Decap still stays logged out.
