# AGENTS.md — Codex instructions for the TSAB website repository

## Project goal

Build and maintain the official TSAB website using Astro and GitHub Pages.
The site must be:

- fast
- mobile-first
- easy to update
- visually aligned with the TSAB logo and poster identity
- simple enough for future student teams to maintain

## Product principles

1. **Do not publish private WhatsApp content directly.**
   Chats are only a planning input.

2. **TSAB is more than an events page.**
   The website must represent:
   - community
   - opportunities
   - achievers
   - events
   - media archive

3. **Non-technical editing matters.**
   Prefer content-driven architecture over hard-coded text.

4. **Performance matters.**
   Avoid heavy client-side frameworks unless truly needed.

## Tech rules

- Use Astro first
- Prefer server-free static output suitable for GitHub Pages
- Prefer Astro components over unnecessary JS frameworks
- Use Tailwind for styling if a utility-first workflow is chosen
- Use Astro content collections for structured content
- Keep the dependency list minimal

## Design rules

- Primary palette: deep royal blue + gold accents
- Preserve the TSAB logo prominently
- Use cultural motifs only as restrained accents
- Keep cards clean and modern
- Keep spacing generous
- Make the homepage feel energetic and welcoming

## Accessibility rules

- semantic HTML first
- visible focus states
- good color contrast
- alt text for all meaningful images
- readable text sizes on mobile
- keyboard-accessible navigation

## Content architecture

Create collections for:

- events
- achievers
- opportunities
- team
- gallery
- announcements

Each collection should have a schema.
Do not leave content untyped if it is repeatable.

## Editing model

Design content so it can be edited by:

1. GitHub browser edits now
2. Decap CMS later

Avoid structures that require developers to edit component code just to change content.

## Image handling

- store original branding assets separately
- compress gallery images before commit
- create predictable file naming
- use responsive image rendering where possible
- do not inline massive images into pages

## Homepage priorities

The homepage should communicate, in this order:

1. who TSAB is
2. why it exists
3. what members can do now
4. what is happening next
5. what TSAB has already achieved

## Public information priorities

Prefer publishing:
- mission
- event announcements
- achiever stories
- opportunities
- photo galleries
- team information
- contact details

Avoid publishing:
- private phone numbers without consent
- raw group chats
- internal coordination messages
- sensitive documents

## Recommended component list

- Navbar
- Hero
- Section heading
- CTA buttons
- Feature cards
- Event cards
- Opportunity cards
- Achiever cards
- Gallery grid
- Team grid
- Footer

## Build order

1. layout and theme tokens
2. navbar / footer
3. homepage sections
4. content collections
5. events pages
6. achievers pages
7. gallery pages
8. opportunities pages
9. editor documentation

## Definition of done

A task is only done when:

- code is responsive
- content is editable without code changes where appropriate
- pages are accessible
- build passes
- deploy config works for GitHub Pages
- documentation is updated if workflow changes

## Avoid

- unnecessary animation overload
- hard-coding content that belongs in collections
- exposing internal WhatsApp details
- overusing gold decorative borders everywhere
- adding packages without a clear reason

## Good prompts for Codex in this repo

- “Create an Astro content collection schema for achievers with name, institute, achievement, description, image, and optional link.”
- “Build a responsive homepage hero for TSAB using blue and gold branding with CTA buttons and logo placement.”
- “Create a gallery page that reads from content files and displays images in a responsive grid.”
- “Write contributor documentation for non-technical editors updating event posts through GitHub web UI.”

## Output style for Codex

When generating code:
- keep files small and modular
- add clear comments only where useful
- prefer readable naming
- avoid overly clever abstractions
- keep future student maintainers in mind
