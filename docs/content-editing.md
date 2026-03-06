# TSAB Content Editing Guide

This site is structured so TSAB members can update most content through GitHub without editing Astro components.

## What to edit

Use these folders for content updates:

- `src/content/events/`
- `src/content/opportunities/`
- `src/content/achievers/`
- `src/content/team/`
- `src/content/galleryAlbums/`
- `src/content/groups/`
- `src/content/announcements/`

Use `public/images/` for uploaded images and placeholders.

## How to add an event

1. Open `src/content/events/`.
2. Duplicate an existing event file or create a new Markdown file.
3. Keep the frontmatter fields consistent.
4. Update:
   - `title`
   - `slug`
   - `date`
   - `location`
   - `summary`
   - `coverImage`
   - `tags`
   - `status`
5. Add the event description below the frontmatter.

## How to add an opportunity

1. Open `src/content/opportunities/`.
2. Create a new Markdown file.
3. Set:
   - `category`
   - `organization`
   - `deadline`
   - `summary`
   - `sourceUrl`
   - `isActive`
4. Keep website copy short and point users to the source link for full details.

## How to add an achiever story

1. Open `src/content/achievers/`.
2. Create a new Markdown file.
3. Add the member’s:
   - name
   - institute
   - achievement title
   - summary
   - photo path
4. Use the Markdown body for the longer story.

## How to update the team page

1. Open `src/content/team/`.
2. Edit existing member files or add new ones.
3. Set the correct `group` value:
   - `core`
   - `cell-lead`
   - `volunteer`
   - `alumni-mentor`
4. Use `sortOrder` to control the display order.

## How to add a gallery album

1. Upload images to `public/images/gallery/`.
2. Open `src/content/galleryAlbums/`.
3. Create or edit the album Markdown file.
4. Update:
   - `title`
   - `eventDate`
   - `coverImage`
   - `images`
   - `summary`
   - `year`

## Image naming guidance

Use predictable lowercase file names:

- `event-name-cover.jpg`
- `event-name-01.jpg`
- `event-name-02.jpg`
- `team-member-name.jpg`
- `achiever-name.jpg`

Avoid spaces in image file names.

## Where to replace placeholders

Replace these first:

- `src/lib/site.ts`
  - email
  - social links
  - logo path
- `public/images/branding/logo-placeholder.svg`
- `public/images/placeholders/`
- placeholder team and achiever entries in `src/content/`

## Safe publishing rules

- Do not publish private WhatsApp exports.
- Do not publish personal phone numbers without consent.
- Keep source links authoritative for forms, jobs, scholarships, or registrations.
- Use real photos only when TSAB has permission to publish them.
