# Elite Fit Group Fitness page: Editorial concept

| | |
| --- | --- |
| Version | v1.2, 28 Oct 2026 |
| Live page | https://digitalmovementuk.github.io/elitefit-ops/groupfitness-prototype/variants/s2-editorial/ |
| Status | Design concept, one of five style variants of the same page. Not the club's live website. `noindex, nofollow`. |

## Direction in three lines

1. The page reads like Elite Fit's own magazine: eight numbered spreads, "01//08" to "08//08", in the style of the handbook's section covers, alternating black and paper white, with one terracotta offer spread.
2. An asymmetric 12-column grid, oversized Gilroy ExtraBold caps that slide up line by line inside masks, hairline rules and numbered index rows (handbook p. 32), real Elite Fit stills that drift slowly as you scroll, and video only as small inset frames.
3. The schedule is a printed timetable on desktop (seven day columns × morning, afternoon, evening) and a date strip with refined list rows on the phone. Both open the same booking sheet.

## Changelog

| Version | Date | Change |
| --- | --- | --- |
| v1.2 | 28 Oct 2026 | Final QA fixes. |
| v1.1 | 27 Oct 2026 | Review fixes: "Conditioning" title no longer clipped (sized to its column); new real Sculpt still with faces and upper bodies in frame; phones open on the cover photo with the folio, then the title, plus "In this issue" cover lines; editorial booking-sheet skin (folio step labels "02//05", full-bleed clip with a caption line, ruled tables, underlined fields, numbered option rows); one Sample chip per row and one note on the timetable; stronger line masks on folios and headlines, parallax ±6 %; concept bar with a link to all concepts; review quote shortened to its first sentence. |
| v1 | 27 Oct 2026 | First release of the Editorial style: cover, next up, four class features, timetable, coaches, after class, pull quote, Duo offer, first class, visit, footer. Shared booking engine and data from v1. |

## How to view and test

Everything in `../../v1/README.md` ("How to view and test") applies here: `?class=<id>` deep links, `?now=2026-10-28T07:30` to set the Bali clock, and the `ef-gf-v1` localStorage key (shared with v1, so a demo booking made on v1 shows here too). On desktop (1200 px and wider) the whole week is on screen; below 1200 px pick a day in the strip.

## What is shared and what is this variant's own

Shared from `../../v1/assets/` by relative link, never copied:

- `js/api.js`, `js/booking.js`, `js/media.js`: the demo API, the booking sheet and flow, and the lazy video player. Unchanged.
- `data/groupfitness.json`: every class, coach, time and price.
- `fonts/` (Gilroy), `logo/`, and the photos and clips listed under "Shared media" below.

This variant's own files:

| File | Purpose |
| --- | --- |
| `index.html` | The page |
| `assets/css/editorial.css` | Tokens (the four brand colours, flat), grid, type, every section, and the motion block at the end |
| `assets/css/sheet.css` | Skin for the shared booking sheet (base rules adapted from v1 `booking.css`, editorial skin at the end) |
| `assets/js/paths.js` | Points the data file's media paths (`assets/img/…`, written for the v1 page) at `../../v1/` before the booking engine uses them. Runs right after `api.js`. |
| `assets/js/motion.js` | Line masks, enter-view reveals, hairline draws, frame reveals, the spot odometer; scroll-linked parallax and the progress line with a fallback where CSS scroll timelines are missing |
| `assets/js/page.js` | Renders and wires the page: visitor toggle, next up, class features, the timetable and the phone list, the filter panel, coaches, sticky CTAs |
| `assets/img/` | Nine new crops (see credits) |
| `og-s2-editorial.jpg` | Share image, 1200 × 630, cropped from the cover still |

## Motion

All motion is purposeful and stays under the house limits: reveals take 0.6 s or less, native scroll only (no scroll-jacking, snapping or wheel handlers), and every key line is readable without waiting.

- Cover: the headline's three lines slide up inside masks on load (0.52 s, 70 ms apart); the cover frame opens; the still drifts slowly with scroll.
- Every section headline: a line-mask reveal when it enters (0.46 s, 45 ms between lines). The original markup is restored after the reveal.
- Hairline rules draw from the left; photo frames open from a 7 % inset; index rows, next-up rows and coach portraits rise in a short stagger.
- Scroll-linked: still photos drift ±5 % inside their frames (CSS `animation-timeline: view()`), and a 2 px progress line fills under the masthead (`scroll()`). Where those are missing, a passive scroll listener with `requestAnimationFrame` does the same for the stills in view.
- Fast scrolling cuts reveals to 0.15 s so nothing lags.
- Reduced motion or Save-Data: no transforms, no autoplay, posters only. With JavaScript off every word and photo is visible.

## Deviations from the shared brief

- **Folio numbers instead of eyebrow-only heads.** Each section opens with "(.0N) LABEL" as its eyebrow and the folio "0N//08" on the same hairline, as on the handbook's section covers.
- **Phones open on the picture.** Below 768 px the cover photo (4:5) comes first under the folio, then the title, as a magazine cover does. "In this issue" cover lines link to the four class features, so the lead no longer repeats the family names.
- **Editorial sheet skin.** `booking.js` is unchanged; `page.js` reads its "Step 2 of 5" label and also shows it as a folio "02//05". Stock clips are captioned "Stock clip, not filmed at Elite Fit" under the frame.
- **One Sample chip per row.** Rows and cards carry one chip at their end instead of one per field; the desktop timetable carries one note above the grid.
- **Timetable from 1200 px, list below.** Between 1024 and 1199 px the phone list is used, because seven columns would be too narrow for class names.
- **One new step in the data path.** `paths.js` rewrites the media paths in the loaded data in memory so the unchanged `booking.js` finds the class clips, posters and coach photos from this folder. The data file itself is not changed.
- **`assets/img/rec-sauna.webp`** is a 192 × 240 crop of v1's sauna photo, because `booking.js` loads that thumbnail by a page-relative path on the confirmation step.

## Sample data

The sample items are the same as v1 and are listed in `../../v1/README.md` ("Sample data"). This variant adds no new sample data. Every sample level and length carries a "Sample" chip on the page.

## Media credits

### New crops in `assets/img/` (Elite Fit's own footage)

Source and author: **Elite Fit, own footage** (the club's header film and its "Better together" film). Rights: copyright Elite Fit. Used here only for this design concept, not licensed for reuse. Stills were taken from the films and cropped; nothing was added or retouched.

| File | Shows | From |
| --- | --- | --- |
| `cover-1600.webp` (desktop), `cover-m-720.webp` (phones, 4:5) | Members doing kettlebell deadlifts on the outdoor turf | Header film (landscape), 0:05 |
| `sculpt-core-1200.webp`, `sculpt-core-720.webp` | Three members doing core work on mats on the outdoor turf | Header film (landscape), 0:07 |
| `boxing-bag-720.webp` | A member working the Elite Fit heavy bag in gloves | "Better together" film, 0:03 |
| `coach-spot-720.webp` | A coach spotting a barbell lift in front of the logo wall | Header film (landscape), 0:11 |
| `table-1600.webp`, `table-800.webp` | A large group sharing lunch at the long table in the restaurant | Header film (landscape), 0:09 |
| `rec-sauna.webp` | The sauna (small crop of v1 `img/rec-sauna.webp`) | Elite Fit own photo |

### Shared media

Everything else comes from `../../v1/assets/` and is credited in `../../v1/README.md` ("Media credits"): the boxing and mobility stock clips and stills from Pexels (tagged "Stock clip" and "Stock photo" on the page), the sculpt and entrance clips, the coach portraits and the club photos. No new stock media was added.

## Fonts and logo

Same as v1, see `../../v1/README.md` ("Fonts and logo"): Gilroy from the club's own site (licence to be confirmed, to be removed from the public repo after Patrick's review), and the club's own logo files. The footer sets the ELITE FIT logotype full width with clear space of at least one logo height above and below.
