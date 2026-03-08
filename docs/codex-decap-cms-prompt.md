# Codex Prompt For Full Decap CMS Setup From Zero

Use this file when:
- you already have a website or app repo
- nothing is set up yet for Decap CMS
- there is no `oauth/` folder yet
- there is no Vercel OAuth helper yet
- there is no GitHub OAuth App yet
- there are no Vercel environment variables yet
- the human using the repo may not know GitHub, Vercel, OAuth, or deployment flows

This file is meant to prevent the exact mistakes that happened during the TSAB setup:
- wrong `base_url`
- wrong callback URL
- wrong Vercel root directory
- wrong env var names
- debugging OAuth before `/api/ping` works
- leaving instructional draft copy in the public website

---

## Paste This To Codex

```text
I need you to add a complete Decap CMS setup to this project from zero.

Assume the human user may not know:
- GitHub navigation
- GitHub Actions
- GitHub OAuth Apps
- Vercel project setup
- Vercel environment variables
- how to test or debug login issues

So your job is not only to write the code. Your job is also to guide the human clearly, step by step, with exact clicks, exact values, exact URLs, and exact troubleshooting order.

Current state:
- The app/site repo already exists.
- The app may already build and deploy.
- Decap CMS is NOT set up yet.
- There is NO oauth folder yet unless you create it.
- There is NO Vercel OAuth helper project yet.
- There is NO GitHub OAuth App yet.
- There are NO Vercel environment variables yet.
- I need both implementation and human guidance.

Your job:
1. Inspect the repo first and understand:
   - framework
   - routes
   - content model
   - where editable text currently lives
   - how the site is currently deployed
2. Implement Decap CMS in a way that fits this repo instead of forcing a generic blog structure.
3. Move editable hardcoded settings and public copy into CMS-managed data files where appropriate.
4. Add Decap collections for the real content types used by the project.
5. Add a separate OAuth helper service for GitHub login.
6. Add safe debugging and validation so OAuth issues are easy to diagnose.
7. Add documentation that a beginner can follow without guessing.
8. Do not stop at partial setup. Finish the code, docs, validation, and the human instructions together.

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
- Add env var validation.
- Never log secrets.
- If diagnostics are needed, log only booleans or missing env var names.
- Add a small `/api/ping` endpoint so routing can be tested before OAuth debugging.

Critical auth rules you must follow:
- In Decap config, `backend.base_url` must be the bare OAuth helper origin only.
- Do NOT set `base_url` to `/api`.
- Put the path into `auth_endpoint`.
- Correct pattern:
  - `base_url: https://your-oauth-helper.vercel.app`
  - `auth_endpoint: api/auth`
- GitHub OAuth callback should normally be:
  - `https://your-oauth-helper.vercel.app/api/callback`
- The OAuth helper env var `COMPLETE_URL` must exactly match that callback URL.
- The GitHub OAuth App callback URL must match that same callback URL exactly.

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
- add or update docs in `docs/`
- include a beginner editor guide
- include a beginner admin/OAuth setup guide
- include troubleshooting for popup/login issues
- include a final “what to do next” checklist

What I need in your final answer:
1. What code/files you created or changed
2. What still must be done manually
3. A step-by-step GitHub OAuth App setup guide:
   - where to click
   - what to type
   - what exact URLs to enter
4. A step-by-step Vercel setup guide:
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
7. A troubleshooting section in this exact order:
   - `/api/ping` 404
   - `/api/auth` 500
   - popup opens but CMS does not log in
   - callback page hangs
   - wrong env var names
   - wrong `base_url`
   - stale Vercel deployment
8. A final section called:
   - `Do These Steps In Order`

Important:
- Treat the human like a beginner and remove ambiguity.
- Do not say “configure this in Vercel” without also saying exactly where to click.
- Do not assume the user knows where GitHub OAuth Apps live.
- Do not leave temporary debug copy or instructional copy in public-facing website pages.
- If you introduce placeholder content, make it easy to replace and keep it out of the public UI tone.
- Validate the site with build checks and browser checks before finishing.
```

---

## What Codex Should Usually Build

If the project uses the GitHub backend for Decap, Codex should usually create:

- `public/admin/index.html`
- `public/admin/config.yml`
- a CMS-managed site settings file if the website currently hardcodes editable public text
- `oauth/api/auth.js`
- `oauth/api/callback.js`
- `oauth/api/ping.js`
- `oauth/vercel.json`
- `oauth/README.md`
- one or more docs files under `docs/`

The OAuth helper is separate from the main site.
The public site may stay on GitHub Pages, Vercel, Netlify, or another host.
The OAuth helper exists only to complete GitHub login for Decap.

---

## Human Setup Guide After Codex Finishes

This is the manual part the human does in the browser after Codex finishes the repo code.

## Step 1: Push The Repo To GitHub

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

1. Open `https://vercel.com/dashboard`
2. Click `Add New...`
3. Click `Project`
4. Import your GitHub repo
5. When Vercel asks for project settings:
   - `Framework Preset`
     - choose `Other`
   - `Root Directory`
     - enter `oauth`
   - `Build Command`
     - leave default unless Codex explicitly says otherwise
   - `Output Directory`
     - leave blank unless Codex explicitly says otherwise
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

Before GitHub login testing, confirm the helper is alive.

Open:

`https://YOUR-OAUTH-DOMAIN/api/ping`

Expected result:

```json
{"ok":true,"route":"/api/ping"}
```

### If `/api/ping` gives 404

The Vercel project setup is wrong. Check this in order:
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
  - example:
    `My Site Decap CMS`

- `Homepage URL`
  - use your public CMS page
  - example:
    `https://YOUR-USERNAME.github.io/YOUR-REPO/admin/`

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

If the code expects these exact env var names, then names like:
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

will not work unless the code was explicitly written to use them.

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

Environment variable changes do not update old deployments automatically.

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

If Codex changed `public/admin/config.yml` locally:

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

## Do These Steps In Order

1. Push the repo
2. Deploy the `oauth/` folder to Vercel
3. Test `/api/ping`
4. Create the GitHub OAuth App
5. Add Vercel env vars
6. Redeploy Vercel
7. Verify `public/admin/config.yml`
8. Open `/admin/`
9. Log in with GitHub
10. Confirm collections appear

---

## Best Short Prompt For Future Use

If you want a short version to paste quickly, use this:

```text
Add Decap CMS to this repo from zero. Assume nothing is set up yet. Build the full code integration, add a separate Vercel OAuth helper under `oauth/`, create `/api/ping`, `/api/auth`, and `/api/callback`, move editable hardcoded settings into CMS-managed content where appropriate, and document every manual step I must do in GitHub and Vercel. Treat the human as a beginner: give exact click-by-click instructions, exact field values, exact URLs, exact env var names, exact test order, and a troubleshooting sequence. Very important: set Decap `base_url` to the bare OAuth helper origin only, and put the path into `auth_endpoint` like `api/auth`. Do not use `base_url` with `/api`. Also make sure no internal instructional copy is left in the public site.
```

---

## Main Mistakes To Avoid

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

Do not:
- debug GitHub OAuth before `/api/ping` works
- assume env var names
- assume the user knows GitHub or Vercel navigation
- leave planning or reviewer-style copy in the public UI

That exact discipline prevents most repeat issues.
