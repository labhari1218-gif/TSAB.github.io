# Codex Prompt For Motion, Polish, Public Copy Cleanup, And Final QA

Use this file when:
- the website already exists
- you want a premium polish pass
- you want better spacing, motion, interaction, and responsiveness
- you want all internal/instructional/reviewer-style copy removed
- you want the site checked like a real production review

This file is for the stage after the main build exists.

---

## Paste This To Codex

```text
I need you to do a full production-style polish pass on this website.

Goal:
- improve spacing, consistency, responsiveness, and interaction quality
- add or refine motion where it improves the experience
- remove internal, instructional, reviewer-facing, scaffold, placeholder, or planning-style copy from the public website
- make the site feel ready for public review and deployment

Important constraints:
- do not change the actual product meaning
- do not change the brand identity unless I explicitly ask
- do not change the logo unless I explicitly ask
- do not change the routes unless necessary
- do not break CMS schemas or editable content structure
- do not leave behind hidden build or layout issues

Your job:
1. Inspect the existing repo and understand:
   - framework
   - layout structure
   - motion system if one exists
   - content source structure
   - whether the project uses a CMS
2. Audit the full public site for:
   - overlapping text
   - clipped nav items
   - broken spacing
   - inconsistent card heights
   - weak mobile behavior
   - broken hover states
   - missing focus states
   - visible placeholder text
   - instructional or reviewer-style copy
   - CMS/editor guidance accidentally visible in the public UI
3. Improve the visual quality with restrained, production-appropriate motion and interaction.
4. Keep the experience accessible and performant.
5. Run full build and browser QA before finishing.

Motion and polish rules:
- use motion only where it improves clarity, delight, or hierarchy
- prefer subtle reveal, hover, spotlight, tilt, and depth effects
- avoid gimmicky motion
- avoid heavy WebGL unless truly justified
- preserve mobile performance
- add `prefers-reduced-motion` support if it is missing

Public copy cleanup rules:
- remove phrases like:
  - “this page should”
  - “use this page”
  - “the public site should”
  - “instead of a chat archive”
  - “starter demo”
  - “placeholder”
  - “keep this concise”
  - “add a markdown file”
- replace them with natural, public-facing website copy
- keep the meaning, but remove the internal tone

QA requirements:
- run `npm run build`
- run project checks if available
- use Playwright to inspect:
  - homepage
  - about
  - events index
  - one event detail page
  - opportunities index
  - one opportunity detail page
  - achievers index
  - gallery index
  - working groups
  - team
  - join
  - mobile menu
- check desktop, tablet, and mobile widths
- specifically look for overlap, clipping, overflow, missing images, dead links, broken buttons, and inconsistent spacing

What I want in your final answer:
1. what you changed
2. what issues you found
3. what you fixed
4. what you verified with build/tests/browser QA
5. any remaining risks

Do not stop after one fix. Do a full pass and leave the site feeling deployment-ready.
```

---

## Best Use Case

Use this prompt after the site is already built and mostly functional.

It is especially useful when:
- the site feels messy
- some copy still sounds internal
- motion feels inconsistent
- spacing looks uneven
- pages were built over many iterations and need a final unifying pass

---

## What Codex Should Be Looking For

Codex should actively look for:
- navigation overlap
- hero CTA visibility problems
- broken responsive breakpoints
- uneven section spacing
- cards that feel visually inconsistent
- reviewer-facing copy
- old scaffold wording
- leftover placeholder media text
- dead or misleading CTAs
- fragile motion that breaks layout

---

## Best Short Prompt For Future Use

If you want a short version, use this:

```text
Do a full production-style polish pass on this website. Audit the entire public site for layout issues, overlap, clipping, inconsistent spacing, weak responsiveness, broken interactions, and any internal/instructional/reviewer-style copy. Improve the motion and interaction quality without changing the brand, routes, or CMS structure. Then run build checks and a full Playwright browser QA pass across the main pages on desktop, tablet, and mobile. Leave the site feeling publicly deployable.
```

---

## Main Mistakes To Avoid

Do not:
- only fix the one issue I point at and ignore the rest of the site
- add flashy motion without checking mobile behavior
- leave internal wording visible in public UI
- break CMS rendering while polishing components
- stop before doing a browser pass

The point of this prompt is not “make one edit.”
The point is “act like the final reviewer before deployment.”
