# TSAB Website Plan

This repository is for the official **Telugu Students Association Bhopal (TSAB)** website.

## Recommended stack

- **Astro** for the site framework
- **GitHub Pages** for free hosting
- **GitHub Actions** for deployment
- **Markdown / JSON content files** for easy updates
- **Optional:** **Decap CMS** later if TSAB wants a friendlier editor UI for non-technical contributors

## Why this stack

This setup gives TSAB:

- free hosting for a public site
- fast performance
- a modern custom UI
- version history for every change
- clean collaboration through GitHub
- a path to automation with Codex

## Important product decision

Do **not** publish raw WhatsApp chats on the website.
Use the chats privately to understand:

- what TSAB does
- what content repeats often
- what sections members need most
- what team structure already exists

## What the chats suggest about TSAB

The WhatsApp exports show that TSAB is not just an event club. It currently behaves like a student community with four operational layers:

1. **Community / Main group**
   - welcome messages
   - announcements
   - identity building
   - public-facing communication

2. **Forum group**
   - opportunities
   - internships
   - jobs
   - resources
   - academic updates
   - important forms and notices

3. **Volunteer / Social media group**
   - website handling
   - Instagram / X support
   - team coordination

4. **Media cell**
   - event photos and videos
   - archive collection
   - visual content pipeline

This means the website should mirror TSAB's real workflows.

## Suggested public sitemap

- **Home**
- **About TSAB**
- **Events**
- **Achievers**
- **Opportunities**
- **Gallery**
- **Team**
- **Join / Contact**

## Best homepage structure

### 1. Hero section

- TSAB logo
- strong one-line message
- quick CTAs:
  - Join TSAB
  - View Events
  - Explore Opportunities

Suggested tone:

> A home for Telugu students in Bhopal — community, culture, opportunities, and growth.

### 2. What TSAB does

Use 4 cards:

- Community
- Events & Culture
- Opportunities
- Media & Memories

### 3. Upcoming / featured section

Show:

- next event
- latest opportunity
- latest achiever

### 4. Achievers spotlight

This should become a signature TSAB section.

Suggested card fields:

- name
- institute
- achievement title
- short story
- optional image
- link to full post / reel / article

### 5. Gallery preview

Show 6 to 8 latest images with a “View full gallery” button.

### 6. Team / working groups

Show four public working areas instead of embedding chats:

- Community & Outreach
- Opportunities Forum
- Volunteer / Social Media
- Media Cell

### 7. Contact / socials

Include:

- Instagram
- WhatsApp join link
- email
- optional Google Form

## Visual direction

The shared posters strongly suggest a visual identity already exists.

### Core palette

- **Royal Blue / Deep Telugu Blue** as the main brand color
- **Gold / Saffron Gold** as the accent color
- **Off-white** for text backgrounds and content cards

### Style guidance

- elegant, not corporate
- youthful, but not childish
- strong Telugu cultural cues used sparingly
- premium cards with rounded corners
- use decorative motifs only as section accents, not everywhere
- preserve the TSAB logo as the strongest visual anchor

### Typography direction

- one clean modern sans-serif for UI
- one elegant serif only for headings or special cultural highlights
- keep body copy simple and highly readable

## Recommended content model

Store content in structured folders.

```text
src/
  content/
    events/
    achievers/
    opportunities/
    announcements/
    team/
    gallery/
  pages/
  components/
  layouts/
public/
  images/
    gallery/
    team/
    branding/
```

## Non-technical editing plan

### Option A — simplest right now
Use **GitHub web editing** only.

Editors can:
- upload images in the browser
- edit Markdown files in the browser
- change text without running code locally

This is the lowest-complexity way to start.

### Option B — friendlier later
Add **Decap CMS** after v1.

This gives:
- a form-based editor UI
- media upload support
- easier content editing for non-technical users
- Git-based version history underneath

## Recommendation for TSAB

Start with **Option A** for launch.
Move to **Option B** only after the site structure is stable.

Why:
- GitHub Pages + Astro is already enough to launch
- Decap adds auth and workflow overhead
- TSAB first needs a clean content model and consistent process

## How image updates should work

### Easy version for editors

1. Open GitHub repository
2. Go to `/public/images/gallery/`
3. Upload new photos
4. Open the related gallery or event Markdown file
5. Add image filenames to the frontmatter
6. Commit changes in browser

### Even easier version later

Use Decap CMS to let editors upload from an admin panel.

## Suggested public content types

### Event
- title
- date
- location
- cover image
- summary
- gallery folder / image list
- registration link

### Achiever
- name
- institute
- batch / department
- achievement
- description
- photo
- optional external link

### Opportunity
- title
- category
- deadline
- source link
- short summary
- tags

### Team member
- name
- role
- institute
- bio
- image
- social link

## Best practices for TSAB

- keep chats private; publish only curated content
- avoid cluttering the homepage with too many announcements
- make **Achievers** and **Opportunities** core pillars
- use **Events + Gallery** to show community energy
- keep editing rules simple enough for future student teams
- document every recurring workflow in this repo

## Recommended packages / integrations

Start small.

### Core
- `astro`
- `typescript`

### Styling
- `tailwindcss`
- `@astrojs/tailwind`

### Content / SEO / utility
- `@astrojs/sitemap`
- Astro content collections

### Optional later
- `decap-cms-app`
- image lightbox package
- analytics

## Suggested build phases

### Phase 1 — planning
- finalize sitemap
- finalize color system
- finalize content types
- collect logo assets
- collect 20 to 40 best photos

### Phase 2 — build v1
- Home
- About
- Events
- Gallery
- Team
- Contact

### Phase 3 — build v2
- Achievers
- Opportunities
- announcements archive
- search / filters

### Phase 4 — editor experience
- improve docs
- train editors
- optionally add Decap CMS

## What Codex should automate

Use Codex for:

- generating Astro components
- creating content collection schemas
- building cards, grids, and layouts
- writing helper scripts for image and content handling
- generating starter Markdown entries
- improving responsiveness and accessibility
- creating contributor docs

Do **not** use Codex as the final source of truth for names, dates, or official announcements.

## First tasks to do now

1. Confirm TSAB logo asset
2. Confirm official social links
3. Confirm whether the website name should be `tsabhopal` or `telugustudentsbhopal`
4. Confirm whether **Opportunities** should be public
5. Confirm whether **Achievers** should include external success stories and reels
6. Confirm the four public group names to show on the site

## Suggested homepage tagline ideas

- **A home for Telugu students in Bhopal**
- **Culture, community, opportunities, and growth**
- **Connecting Telugu students across Bhopal**
- **From belonging to becoming**

## Repo workflow for the team

- one main branch
- use pull requests for larger changes
- use direct browser edits for tiny content updates
- keep all images compressed before upload
- use one content owner for each section:
  - events owner
  - gallery owner
  - opportunities owner
  - achievers owner
  - website maintainer

## Nice-to-have future features

- year-wise gallery archive
- event registration forms
- searchable opportunities board
- alumni / mentors section
- institute-wise student directory (private only, if ever built)
- sponsor / partner showcase

## Final recommendation

Yes — **Astro + GitHub Pages is a strong choice for TSAB**.

It is the best route when your priorities are:
- free hosting
- custom design
- clean performance
- Codex-assisted development
- long-term control

But for **very easy non-technical editing**, GitHub Pages alone is not enough by itself.
The practical path is:

- **Launch with Astro + GitHub Pages + browser-based GitHub edits**
- **Add Decap CMS later if the team needs a friendlier editing panel**
