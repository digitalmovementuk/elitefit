# Elite Fit Group Fitness page: Kinetic type concept

| | |
| --- | --- |
| Version | v1.2, 28 Oct 2026 |
| Live page | https://digitalmovementuk.github.io/elitefit-ops/groupfitness-prototype/variants/s4-kinetic/ |
| Baseline | `../../v1/` (groupfitness concept v1). Same content, data, booking engine and brand rules; a different visual style. |
| Status | Design concept. Not the club's live website. The page carries `noindex, nofollow`. |

## The direction in three lines

1. Type is the hero: Gilroy ExtraBold set at poster size and fitted to the column ("FIND / YOUR / PEOPLE.", the class families, the coach names, "BRING YOUR +1."), after the handbook's section covers and the terracotta voice page (p. 3, 16, 19, 27).
2. The words move with the scroll (native scroll, small sideways drift, always readable), headlines rise word by word, a slow pausable marquee carries the ten real class names, and the real numbers (33 classes a week, 10 classes, 4 coaches) count up.
3. Photos and clips sit in the gaps the words leave, never under them. Black stage, white bands, one full-bleed terracotta moment: the Duo Day Pass offer.

## How to view and test

Same as v1 (see `../../v1/README.md`): tap **Book a class**, or pick a day and a class in the schedule, and go through the demo booking. `?class=<id>` opens a class sheet directly, `?now=2026-10-28T07:30` sets the Bali clock, and the demo state lives in the `ef-gf-v1` localStorage key (shared with v1 and the other styles on the same domain).

## Changelog

| Version | Date | Change |
| --- | --- | --- |
| v1.2 | 28 Oct 2026 | Final QA fixes. |
| v1.1 | 27 Oct 2026 | Review fixes: count-ups start at 70 % and settle in 0.4 s; the third number is now 10 different classes; sculpt shown as the whole 16:9 frame (re-cut clip); the marquee Pause button sits in its own dock; the hero Stock clip chip sits in the clip; Conditioning on one line; booking sheet skinned with a giant step numeral and a hero-scale confirmation; concept bar with a link to all concepts; shorter review quote; one Sample chip per card. |
| v1 | 27 Oct 2026 | First release of the Kinetic type style: new page markup, CSS and motion layer; v1's booking engine reused unchanged. |

## What is shared, what is new

Shared with v1, linked by relative path and not copied:

- `../../v1/assets/js/api.js` and `../../v1/assets/js/booking.js` (the booking engine), unchanged.
- `../../v1/assets/data/groupfitness.json` (all class, coach, timetable and price data).
- `../../v1/assets/fonts/` (Gilroy), `../../v1/assets/logo/`, `../../v1/assets/img/` and `../../v1/assets/video/`.

New in this folder:

| File | Purpose |
| --- | --- |
| `index.html` | The page in the Kinetic type style. All page hooks of v1 are kept, so the shared engine works as is. |
| `assets/css/kinetic.css` | Tokens (the four brand colours plus opacity), layout, components and the motion layer (reveals, scroll-driven drift, marquee). |
| `assets/css/sheet.css` | Skin for the shared booking sheet (class names from v1): giant step numeral, hero-scale confirmation. |
| `assets/js/bridge.js` | Points the shared data's media paths (`assets/img/…`, `assets/video/…`) at `../../v1/` before the engine reads them. No network calls. |
| `assets/js/motion.js` | Split-word reveals, enter-view reveals, count-up numbers, the marquee, the scroll-drift fallback for browsers without CSS scroll timelines, the spot odometer. |
| `assets/js/media.js` | Lazy, capped, pausable clips (same rules as v1's, without the hero panels). |
| `assets/js/page.js` | Renders and wires the page: visitor toggle, next up, numbers, class chapters, schedule and filter sheet, coaches, sticky CTAs. |
| `assets/img/rec-sauna.webp` | A 192 x 240 crop of v1's `rec-sauna.webp` for the confirmation card (the shared engine asks for `assets/img/rec-sauna.webp` next to the page). |
| `og-s4-kinetic.jpg` | Share image, 1200 x 630, rendered from this page. |

## Copy changes against v1 (handbook voice, humanized, no facts removed)

- Hero lead drops "33 classes a week", which is now the number moment: "Boxing, HYROX, sculpt and stretch in Pererenan, with coaches who learn your name."
- New number captions: "33 classes a week." · "10 different classes, from Boxercise to Stretching." · "4 coaches teach all of them."
- Classes lead: "Four kinds of class. Pick the one that fits your mood." Coaches lead: "Tap a coach to see when they're on this week." (Both avoid repeating the numbers.)
- After class, four rows after handbook p. 22 (Train, recover, eat, work. Together.): "Perform and Elite passes include the gym floor and the outdoor area." · "Recharge is included with Elite and the Duo Day Pass." · "Healthy food and good company, with coffee before or after class." · "Co-working is free in the café and restaurant with an Elite membership." All from the club's pass terms (`/promo-duo/`, 27 Oct 2026).
- The First class / Been before toggle moved from the hero to Next up.
- The Recharge card sits on the sauna photo (no people), so the white card never covers a face.

## Deviations (stated on purpose)

- **Hero headline on three lines.** "FIND / YOUR / PEOPLE." sets one word per line; that is the signature of this style. Every section headline stays within two lines on a phone where the words allow it.
- **225K is not counted up.** The direction asked for a count-up on 225K; the house motion rule says no counters on prices, so 225K appears with a rise reveal instead. 33, 10 and 4 count up, starting at 70 % of the real value and never above it.
- **Sculpt clip.** The shared clip was re-cut on 27 Oct to a 16:9 group shot. Its faces spread across the frame, so the sculpt chapter tile and its sheet header show the whole 16:9 frame instead of the 4:5 tile used for the other families: no face is cut or covered.
- **Review quote** is shortened to its first sentence with an ellipsis, so nothing sits near the banned "Not just a gym".
- **Marquee.** The reference teardown left marquees out because they move without being asked. Here it is slow, pauses on hover and focus, has a Pause button, stops with reduced motion and Save-Data, and is a static wrapped list without JavaScript.
- **Sheet crops.** The shared data's focus points cut heads in the sheet's landscape frame, so this skin overrides the crop per clip in CSS (no change to the engine or the data).

## Sample data, data sources, media credits

Unchanged from v1. Every sample item, every data source and every media credit is listed in `../../v1/README.md`. No new stock media was added; the only new image file is the sauna crop above (Elite Fit's own photo).

## Fonts and logo

As in v1: Gilroy from the club's own website, to be removed from the public repo after Patrick's review (see `../../v1/README.md`). The logo files are the club's own; nothing was traced or redrawn.

## Tech notes

- Static files, vanilla ES5, no libraries, no CDN, no third-party requests. One same-origin `fetch` of the shared JSON.
- Scroll-linked effects use CSS scroll-driven animations (`animation-timeline: view()` and `scroll()`) where the browser has them; otherwise `motion.js` writes the progress from one passive scroll handler, only for words near the screen. Native scroll only: no wheel or touch handlers, no snapping, no pinning beyond `position: sticky` on desktop chapter clips.
- `prefers-reduced-motion` and Save-Data: no transforms, no autoplay (posters), marquee static, numbers static. Without JavaScript all content is visible.

## Self-test (27 Oct 2026, local server with GitHub Pages-like gzip and Range support)

- Automated checks (WebKit iPhone 375 and 390, Chromium 1440): 1,356 checks, 0 open defects (28 Oct 2026 run). Five booking journeys (Day, Duo, pack, member, waitlist) reach the confirmation on all three viewports, with back steps, `?class=` deep link, `.ics` and WhatsApp share.
- Lighthouse mobile, median of 3: Performance 99, Accessibility 100, Best Practices 100 (SEO 66 because of the intended `noindex`).
- 0 console errors, 0 third-party requests, no horizontal scroll at 375, 390 or 1440, brand scan clean (four colours, no gradients, one terracotta button per screen, one terracotta word per headline).
