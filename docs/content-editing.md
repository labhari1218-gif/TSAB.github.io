# TSAB Content Editing Guide

This site is structured so TSAB members can update content either through GitHub or through Decap CMS once the admin login is configured.

## Editable content locations

- `src/content/siteSettings/site.json`
- `src/content/announcements/`
- `src/content/events/`
- `src/content/opportunities/`
- `src/content/achievers/`
- `src/content/team/`
- `src/content/galleryAlbums/`
- `src/content/groups/`

Images should be uploaded under:

- `public/images/branding/`
- `public/images/uploads/`
- `public/images/gallery/`
- `public/images/team/`

## Site-wide settings

Edit `src/content/siteSettings/site.json` to update:

- hero headline
- Telugu brand line
- mission strip
- footer tagline
- email
- social links
- join actions

This file is intended to be managed through Decap once `/admin/` is fully configured.

## Events

Event entries support:

- title
- date and optional end date
- location
- summary
- cover image
- cover alt text
- tags
- registration URL
- status
- optional video links

Use `videoLinks` only for public videos.

## Opportunities

Use opportunities for:

- internships
- jobs
- hackathons
- scholarships
- useful resources

Keep the website summary short and link to the original source for full instructions.

## Achievers

Each achiever entry should include:

- name
- institute
- achievement title
- summary
- photo
- optional photo alt text
- optional external source

## Team

Use the `group` field to place members in:

- `core`
- `cell-lead`
- `volunteer`
- `alumni-mentor`

Use `sortOrder` to control the visible order.

## Gallery albums

Gallery albums now use image objects, not plain image strings.

Each image needs:

- `src`
- `alt`

Albums can also include `videoLinks`.

## Safe publishing rules

- Do not publish WhatsApp screenshots or raw chat exports.
- Do not publish personal phone numbers without consent.
- Use real public forms and links only when they are ready.
- Keep all public copy simple and student-friendly.
- Use Telugu only in identity-led areas, not every paragraph.
