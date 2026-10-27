# Elite Fit Group Fitness page: Cinematic stage concept

| | |
| --- | --- |
| Version | v1.2, 28 Oct 2026 |
| Live page | https://digitalmovementuk.github.io/elitefit-ops/groupfitness-prototype/variants/s1-stage/ |
| Status | Style variant of the design concept. Not the club's live website. The page carries `noindex, nofollow`. |
| Baseline | [v1](../../v1/) (same content, data and booking engine) |

## Direction in three lines

1. The page is a film: a title card that opens on a short trailer, four picture chapters (one per class family), a calm black stage for the showtimes and the booking, a terracotta intermission for the one offer, end credits.
2. Signature: as you scroll, a card-sized video frame grows to full-bleed (CSS scroll-driven animation on each chapter's runway), while a sticky chapter bar swaps the family title. No text ever sits on the picture.
3. Black-dominant, few words, long breaths between beats. Terracotta is only the one booking button on screen, one word per headline and the intermission.

## How to view and test

Same as v1: tap **Book a class**, or pick a day and a class on the stage, then go through joining, details, the demo payment and the confirmation. Nothing is charged or sent.

- Deep link: `?class=boxercise-beginner` (or a session id such as `?class=boxercise-beginner-20261028-0800`) opens that class's sheet.
- Another time: `?now=2026-10-28T07:30` shows the page at that Bali time.
- Reset: the demo shares v1's `localStorage` key `ef-gf-v1` (same origin), so a booking made on v1 also shows here. Run `localStorage.removeItem('ef-gf-v1')` in the console, or use a private tab.

## Changelog

| Version | Date | Change |
| --- | --- | --- |
| v1.2 | 28 Oct 2026 | Final QA fixes. |
| v1.1 | 27 Oct 2026 | Review fixes: the title card opens on a video trailer (4:5 on phones, 16:9 beside the headline on desktop) with a "Next up" line under the buttons; Boxing on desktop now ends in a centred 4:5 stage from the vertical clip (head to waist in frame) instead of a head-only close-up; the booking sheet has its own film skin (slate "02 / 05" with the scene name, frame-strip progress, edge-to-edge clip); coaches run as full-bleed portrait credits on phones; After class is one full-bleed café shot and one line; concept bar with a link to all concepts; one Sample chip per schedule row; review quote cut to its first sentence. |
| v1 | 27 Oct 2026 | First release of the cinematic variant: title card, chapter menu, four scroll-grown video chapters with a sticky chapter bar, the stage (next up and the week), cast, after class, terracotta intermission, programme notes (first class), closing shot (visit) and end credits. |

## What is shared with v1 (not duplicated)

- Booking engine: `../../v1/assets/js/api.js` and `../../v1/assets/js/booking.js`, linked unchanged. Skinned by `assets/css/s1-sheet.css`.
- Data: `../../v1/assets/data/groupfitness.json` (loaded by api.js). Every real and sample item is listed in [v1's README](../../v1/README.md#data-sources).
- Fonts, logo files, coach and club photos and the clips inside the booking sheet: `../../v1/assets/`. Credits in [v1's README](../../v1/README.md#media-credits).

## Files in this folder

| Path | What |
| --- | --- |
| `index.html` | The page |
| `assets/css/s1.css` | Tokens, layout, sections, motion |
| `assets/css/s1-sheet.css` | Skin for v1's booking sheet |
| `assets/js/base.js` | Rebases the media paths in the shared JSON to `../../v1/` before anything renders |
| `assets/js/motion.js` | Reveals, chapter bar swap, the frame-grow fallback, odometer |
| `assets/js/media.js` | Lazy, capped, pausable clips; picks the 16:9 (desktop) or the 9:16 (phone) clip per screen |
| `assets/js/page.js` | Next up, chapters, schedule, filters, coaches, sticky CTAs (shared page hooks) |
| `assets/video/trailer-tall.mp4`, `assets/video/trailer-wide.mp4` (+ posters) | The title-card trailer (credits below) |
| `assets/video/*-wide.mp4`, `assets/img/*-wide-poster.webp` | New 16:9 chapter clips for desktop (credits below) |
| `assets/video/*-tall.mp4`, `assets/img/*-tall-poster.webp` | New 9:16 chapter clips for phones (credits below) |
| `assets/img/rec-sauna.webp` | 192 x 240 copy of v1's sauna photo for the confirmation card (booking.js asks for `assets/img/rec-sauna.webp` next to the page) |
| `og-gf-s1.jpg` | Share image (1200 x 630, a screenshot of this page) |

## Motion

| Section | Effect | Trigger | Timing | Reduced motion / Save-Data |
| --- | --- | --- | --- | --- |
| Title card | Trailer screen opens from a card, headline lines rise out of a mask | load | 0.6 s / 0.5 s, readable by 250 ms | poster only, no movement |
| Chapter menu, headlines | Clip-path wipe left to right | enter view | 0.5 s fast-start (0.15 s when scrolling fast) | shown at once |
| Chapters | Card-sized frame grows to full-bleed, picture settles from 1.14 to 1 | scroll position (`view-timeline` on the runway); IntersectionObserver + 0.6 s transition where scroll timelines are missing | follows scroll | full frame, posters only |
| Chapter bar | Family title swaps with a vertical wipe; progress line | chapter crosses mid-screen; scroll | 0.38 s; follows scroll | swap without movement |
| Stage | Showtimes rise in, list cross-fade, day indicator slide, spot odometer | enter view, tap | 0.2 to 0.45 s | instant |
| Cast | Portraits wipe up from the bottom, 80 ms apart | enter view | 0.55 s | shown at once |
| After class | Café picture drifts plus or minus 5 % (depth) | scroll position (`view()`) | follows scroll | static |
| Intermission | Terracotta curtain opens from the centre, text rises | enter view | 0.6 s | shown at once |

Native scroll only: sticky positioning and scroll timelines, no snap, no wheel or touch hijack. Every clip has a Pause button.

## Deviations from v1 and the brief (all intentional)

1. Order: the class chapters come straight after the title card; Next up opens the stage after the chapters (the brief: "the schedule and booking sit on a calm black stage after the chapters"). Book a class in the title card and the sticky bar opens the next class with room at any point.
2. The "First class / Been before" toggle sits on the stage above the schedule, not in the hero.
3. The title card's video is a trailer cut from the four chapter clips (phones) or from three chapter clips plus the club's restaurant shot (desktop). It carries no text: the headline sits below it (phones) or beside it (desktop).
4. Chapter class lines open the booking sheet directly instead of expanding in place.
5. The chapters use new clips: 16:9 on desktop and 9:16 on phones, so the full-bleed frame never crops a face at its edge (v1's 3:4 clips would lose a quarter of their width on a phone). Conditioning is the club's own footage on desktop and stock footage on phones, so its "Stock clip" tag shows on phones only. The booking sheet keeps v1's clips.
6. Boxing has only a vertical source, so on desktop its frame grows into a centred 4:5 stage (the 9:16 clip) instead of full-bleed, keeping her head to waist in frame. The other three chapters grow to full-bleed.
7. Scroll-linked effects (the frame grow, the café drift) follow the brief, which allows scroll-driven animations with a fallback, and replace v1's enter-view-only rule for this variant.

## New media in this folder

| Files | Used for | Source | Author | Licence | Edit |
| --- | --- | --- | --- | --- | --- |
| `assets/video/trailer-tall.mp4`, `assets/img/trailer-tall-poster.webp` | Title card, phones | Cut from this folder's four 9:16 chapter clips (credits in this table) | khezez, Pavel Danilyuk, Elite Fit | as the source clips | Four 1.6 s shots, 4:5 crops framed to keep every head in, hard cuts, 720 x 900, 6.4 s |
| `assets/video/trailer-wide.mp4`, `assets/img/trailer-wide-poster.webp` | Title card, desktop | Cut from this folder's conditioning, sculpt and mobility 16:9 clips plus the restaurant-table shot of the club's landscape header film | Elite Fit, Pavel Danilyuk | as the source clips; the club footage is copyright Elite Fit, used for this design concept only | Four 1.6 s shots, hard cuts, the restaurant shot slowed to 0.7x with motion interpolation, 1280 x 720, 6.4 s |
| `assets/video/conditioning-wide.mp4`, `assets/img/conditioning-wide-poster.webp` | Conditioning chapter, desktop | Elite Fit, own footage (the club's landscape header film) | Elite Fit | Copyright Elite Fit, used for this design concept only | The kettlebell shot on the outdoor turf (about 0.8 s), slowed to 0.4x with motion interpolation, played forward then back for a seamless loop, 1280 x 720 |
| `assets/video/sculpt-wide.mp4`, `assets/img/sculpt-wide-poster.webp` | Sculpt chapter, desktop | Elite Fit, own footage (same film) | Elite Fit | Copyright Elite Fit, used for this design concept only | The core-work shot on mats (about 0.9 s), same treatment |
| `assets/video/mobility-wide.mp4`, `assets/img/mobility-wide-poster.webp` | Mobility & Stretch chapter, desktop | [Pexels video 6326792, "Women Stretching on a Mat"](https://www.pexels.com/video/women-stretching-on-a-mat-6326792/) | [Pavel Danilyuk](https://www.pexels.com/@pavel-danilyuk/) | [Pexels License](https://www.pexels.com/license/) | 16:9 crop of the 1080 x 1920 original, 3 to 10 s, 1280 x 720, muted |
| `assets/video/boxing-tall.mp4`, `assets/img/boxing-tall-poster.webp` | Boxing chapter (phones full-bleed, desktop 4:5 stage), chapter menu | [Pexels video 34801443](https://www.pexels.com/video/intense-boxing-training-session-in-gym-34801443/) | [khezez](https://www.pexels.com/@khezez/) | [Pexels License](https://www.pexels.com/license/) | Full 9:16 frame, two windows (0 to 3.0 s, 4.5 to 6.2 s) joined with a 0.3 s crossfade, 720 x 1280, 4.4 s |
| `assets/video/conditioning-tall.mp4`, `assets/img/conditioning-tall-poster.webp` | Conditioning chapter, phones | [Pexels video 6326788](https://www.pexels.com/video/fitness-trainer-in-a-class-6326788/) | [Pavel Danilyuk](https://www.pexels.com/@pavel-danilyuk/) | [Pexels License](https://www.pexels.com/license/) | Full 9:16 frame, 12.5 to 19.5 s (v1's window), 720 x 1280 |
| `assets/video/sculpt-tall.mp4`, `assets/img/sculpt-tall-poster.webp` | Sculpt chapter, phones | Elite Fit, own footage (the club's landscape header film) | Elite Fit | Copyright Elite Fit, used for this design concept only | 9:16 window of the core-work shot, 0.4x with motion interpolation, forward and back, 720 x 1280 |
| `assets/video/mobility-tall.mp4`, `assets/img/mobility-tall-poster.webp` | Mobility & Stretch chapter, phones | [Pexels video 6326791](https://www.pexels.com/video/people-stretching-on-a-mat-6326791/) | [Pavel Danilyuk](https://www.pexels.com/@pavel-danilyuk/) | [Pexels License](https://www.pexels.com/license/) | Full 9:16 frame, 0.2 to 8.2 s (v1's window), 720 x 1280 native |
| `assets/img/rec-sauna.webp` | Confirmation card | Elite Fit, own photo (v1's `rec-sauna.webp`) | Elite Fit | Copyright Elite Fit, used for this design concept only | Resized to 192 x 240 |

Every clip is H.264, no audio, 0.8 to 1.4 MB, `preload="none"`, and loads only near the screen.

## Sample data

Unchanged from v1. Everything tagged "Sample" on the page is listed in [v1's README](../../v1/README.md#sample-data): spots, full classes and the waitlist, calendar dates, most class levels, four class descriptions, the Injury Prevention & Mobility length, the four families and their feel lines, coach bios, the member sign-in, the payment methods, the booking reference and the WhatsApp reminder.

## Fonts and logo

Gilroy and the logo files are v1's (`../../v1/assets/fonts/`, `../../v1/assets/logo/`). The Gilroy web licence is still an open item, see v1's README. This folder holds no font files.
