# TSAB Portal Plan

## Product position

TSAB should be positioned as a **modern student community portal for Telugu students in Bhopal**.

The portal should answer four questions quickly:

1. What is TSAB?
2. What can I join right now?
3. What opportunities and events are active?
4. How do I become part of the community?

## Why this direction fits TSAB

Insights from the uploaded group exports:

- The main TSAB community focuses on welcome messages, identity, and central announcements.
- The forum group acts as a utility layer for internships, jobs, opportunities, and resources.
- The volunteer group shows that TSAB already has a social/web operations mindset.
- The media group acts as a collection point for event photos and videos.

This means the website should not be treated as a simple cultural brochure. It should act as a **community gateway + event hub + opportunity board + memory archive**.

## Benchmark takeaways from similar sites

### Telugu Samiti IIT Delhi
Useful pattern:
- simple top navigation
- event-led public identity
- gallery and contributor visibility

### ISA-style student association sites
Useful pattern:
- home + about + events + gallery + team + resources
- clear join or contact CTA
- public updates without exposing internal coordination

### What TSAB should do better than them
TSAB should add:
- Achievers as a signature section
- Opportunities as a first-class section
- Working Groups as visible participation paths
- a cleaner student-portal feel instead of a brochure feel

## Information architecture

### 1. Home
Purpose:
- explain TSAB in one screen
- move visitors toward joining, events, or opportunities

Sections:
- hero with logo and CTA
- what TSAB offers
- next event
- latest opportunities
- featured achiever
- gallery preview
- join groups / working groups
- footer with socials and contact

### 2. About TSAB
Purpose:
- explain mission and identity

Sections:
- who we are
- why TSAB exists in Bhopal
- who can join
- values
- short journey / timeline

### 3. Events
Purpose:
- make TSAB feel active and alive

Structure:
- upcoming events first
- past events archive second
- each event page should include poster, summary, venue, date, gallery, and optional registration link

### 4. Opportunities
Purpose:
- translate the forum-group value into a public utility page

Subsections:
- internships
- jobs
- hackathons / competitions
- scholarships / useful calls
- campus or external resources

Editorial rule:
- only curated, relevant items
- never dump everything from chats

### 5. Achievers
Purpose:
- make member success visible
- inspire participation

Card fields:
- name
- institute
- batch / program
- achievement title
- short story
- photo
- optional external link

### 6. Gallery
Purpose:
- preserve community memory without cluttering the homepage

Recommended structure:
- album-based by event
- 8–12 images per album preview
- clear year / event titles

### 7. Working Groups
Purpose:
- show how the community operates
- create clear participation pathways

Cards:
- Main Community
- Forum & Opportunities
- Volunteer / Social Media
- Media Cell

Each card should include:
- what this group does
- who it is for
- what kind of updates it shares
- a join / contact action

### 8. Team
Purpose:
- show legitimacy and accountability

Sections:
- core team
- cell leads
- volunteers
- alumni mentors (optional)

### 9. Join / Contact
Purpose:
- convert visitors into members or contributors

Actions:
- join community
- join volunteer efforts
- submit media
- nominate achievers
- contact TSAB

## Homepage UX blueprint

### Hero
Headline:
A home for Telugu students in Bhopal.

Supporting line:
Community, culture, opportunities, and growth — all in one place.

Primary CTA:
Join TSAB

Secondary CTA:
Explore Events

Tertiary CTA:
See Opportunities

### Offer cards
Use four cards:
- Community
- Events & Culture
- Opportunities
- Media & Memories

### Dynamic spotlight row
Three equal cards:
- next event
- latest opportunity
- featured achiever

### Join pathways section
Use the four groups as pathway cards with small descriptions and a join action.

## Content model

Recommended Astro collections:

- announcements
- events
- opportunities
- achievers
- team
- galleryAlbums
- groups

## Folder structure

```text
src/
  content/
    announcements/
    events/
    opportunities/
    achievers/
    team/
    galleryAlbums/
    groups/
  components/
  layouts/
  pages/
public/
  images/
    branding/
    team/
    gallery/
```

## Best editing workflow for non-technical users

### Stage 1: GitHub browser editing
Use this first because it is simplest.

Editors can:
- open a content file in GitHub
- edit Markdown or JSON
- upload images in the browser
- commit changes with a short message

Use this for v1 launch.

### Stage 2: Decap CMS later
Add only if content updates become frequent and teammates struggle with GitHub.

Benefits:
- form-style editing
- media upload UI
- easier authoring

Do not add it before the basic content model is stable.

## Codex workflow

Use Codex for:
- generating content schemas
- building Astro pages and reusable components
- creating responsive layouts
- wiring GitHub Pages deployment
- writing editor docs
- enforcing design consistency from AGENTS.md

Do not use Codex for:
- making product decisions without written instructions
- exposing private WhatsApp data
- inventing organizational facts

## Connectors / apps worth using

### Strongly recommended
- GitHub: for repo access and PR-based work
- Google Drive: if TSAB planning docs, posters, or forms live there

### Optional
- Canva: for poster or social asset workflow only
- Gmail / Google Calendar: if you want ChatGPT to help turn messages or event dates into publishable updates

### Not necessary at the start
- extra design-generation tools
- heavy CMS tools
- multiple PM tools

## Design language

### Visual theme
Modern student portal with cultural roots.

### Look and feel
- premium but approachable
- clean layouts
- card-driven content
- mobile-first spacing
- blue + gold brand identity
- Telugu cues as subtle accents, not heavy decoration

### Component style
- sticky navbar
- glass or soft surface hero accents used sparingly
- rounded cards
- concise icons
- strong CTA buttons
- clean footer

## Recommended pages for version 1

Launch first with:
- Home
- About
- Events
- Opportunities
- Gallery
- Team
- Contact

Then add:
- Achievers
- Working Groups details
- simple editor handbook

## Recommended pages for version 2

- achiever nomination form
- volunteer signup flow
- searchable opportunities archive
- tag-based gallery albums
- FAQ for new Telugu students in Bhopal

## Practical rules

- never publish raw chat logs
- never publish private numbers without consent
- keep every repeatable item in content collections
- optimize images before upload
- keep homepage focused and not overloaded
- one strong CTA per section

## Success criteria

The site is successful if a new student can:
- understand TSAB in under 10 seconds
- join the community in under 1 minute
- find current events or opportunities easily
- see that TSAB is active, welcoming, and useful

And a non-technical team member can:
- publish an event
- upload photos
- update a card
- change text from the browser with documentation
