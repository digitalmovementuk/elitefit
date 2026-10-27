# Elite Fit Group Fitness page: Panels app concept

| | |
| --- | --- |
| Version | v1.2, 28 Oct 2026 |
| Live page | https://digitalmovementuk.github.io/elitefit-ops/groupfitness-prototype/variants/s5-panels/ |
| Baseline | [`../../v1/`](../../v1/) (same content, data, booking engine and brand rules) |
| Status | Design concept. Not the club's live website. The page carries `noindex, nofollow`. |

## Direction in three lines

1. Booking-first and app-like: the page behaves like the club's booking app, and every block is a control or a card.
2. It opens on full-height class panels (a horizontal accordion with a spotlight on desktop, a stack of dark grey cards on phones), and the schedule follows straight after on a white app surface with a sticky date bar.
3. A bottom tab bar (Classes · Schedule · Coaches · Visit) replaces the sticky CTA on phones, and the tapped panel, ticket, row, coach card or button grows into the class sheet (View Transitions API, with a slide as the fallback).

## Changelog

| Version | Date | Change |
| --- | --- | --- |
| v1.2 | 28 Oct 2026 | Final QA fixes. |
| v1.1 | 27 Oct 2026 | Review fixes. Phones now open straight on the panel stack: one headline line and one Book pill above it, and the rest of the hero copy below it. Phone sheet transition: only the poster or the title is shared and the sheet slides up on its own, so there is no double exposure, and the sheet is in place within 0.35 s. A Book pill joins the tab bar once the hero's Book button has left the screen. The confirmation is a ticket with the booking ref on a notched stub. The concept bar reads "Concept · Panels app · demo bookings only · All concepts →". One Sample chip per ticket or row. The review quote is cut to its first sentence. The re-cut landscape Sculpt clip (16:9) is framed per shape: the full width on phones and in the sheet, and exactly its centred 9:16 window in the tall desktop panels, so every face is whole or out of frame (checked at 375, 390, 1280 and 1440). |
| v1 | 27 Oct 2026 | First version: panels hero, ticket rail, sticky date bar, tab bar, shared-element sheet transitions, app skin for the v1 booking engine. |

## How to view and test

- Open the page on a phone. Tap a class panel to open it, then tap one of its classes, a ticket under "Next up", or a row in the week. The sheet grows out of what you tapped.
- Desktop: hover or tab across the panels. The one under the pointer opens and the others dim.
- Deep link: `?class=boxercise-beginner` (or a session id such as `?class=boxercise-beginner-20261028-0800`) opens the class sheet directly. `?coach=rey` opens a coach. `?view=filters` opens the filters.
- Another time: `?now=2026-10-28T07:30` shows the page at that Bali time.
- Reset: the demo shares the v1 storage key `ef-gf-v1` (see `../../v1/README.md`). A private tab always starts clean.

## What this variant reuses from v1 (nothing is copied)

| Shared file | Used for |
| --- | --- |
| `../../v1/assets/js/api.js`, `../../v1/assets/js/booking.js` | The booking engine, linked unchanged: schedule data, sample spots, class sheet, join, details, demo pay, done, waitlist, `.ics`, WhatsApp share, `?class=` deep links, back and browser back. |
| `../../v1/assets/data/groupfitness.json` | All class, coach, timetable, price and club data (read by `api.js`). |
| `../../v1/assets/fonts/`, `../../v1/assets/logo/`, `../../v1/assets/img/`, `../../v1/assets/video/` | Gilroy, the logo files, every photo, poster and clip. |

Files of this variant: `index.html`, `assets/css/app.css` (page), `assets/css/sheet.css` (skin for the booking sheet and the View Transitions), `assets/js/paths.js`, `assets/js/motion.js`, `assets/js/media.js`, `assets/js/page.js`, `assets/img/rec-sauna.webp`, `og-s5-panels.jpg`.

## Deviations from the shared brief (and why)

1. **No sticky "Book a class" bar on phones.** The direction replaces it with the bottom tab bar. Once the hero's own Book button has left the screen, a small terracotta "Book →" pill joins the right end of the tab bar, so there is still one terracotta button per screen. The tab bar slides away whenever a sheet opens and sits under the sheet, so it never covers a field or the sheet's primary button. The desktop header still shows "Book a class →" after the hero.
2. **Class families live in the hero panels.** The open panel carries what the v1 chapters carried (feel line, length, level, the classes with their next time, "See … times →"). "Next up" is a rail of three ticket cards at the top of the booking surface.
3. **`assets/js/paths.js`.** The shared data file lists media as `assets/…` paths written for `v1/index.html`. This small script runs before `booking.js` and points those paths at `../../v1/` once the data has loaded. The engine itself is untouched, so there is no fork.
4. **`assets/img/rec-sauna.webp`.** `booking.js` hard-codes `assets/img/rec-sauna.webp` for the Recharge card on the confirmation. This is a new 192 × 240 crop of the club's own sauna photo (v1 `img/rec-sauna.webp`) at the size the card shows, so the confirmation has no broken image.
5. **Offer block contrast.** White text on terracotta passes only as large text (3.7:1), so the eyebrow is a white chip with black text, and the body copy sits on a black card inside the terracotta block.
6. **One terracotta button per screen with a sheet open.** While a sheet is open, terracotta buttons on the page behind the scrim turn dark grey, so the sheet's own button is the only terracotta one on screen.
7. **Logo never tilted.** The two pass cards in the offer are rotated, so they carry no logo (a "1 of 2" / "2 of 2" tag instead).

No new stock media. Media credits for every shared photo and clip: [`../../v1/README.md`](../../v1/README.md#media-credits). New files here: `assets/img/rec-sauna.webp` (Elite Fit own photo, crop of the v1 file, same rights) and `og-s5-panels.jpg` (share image rendered from this page).

## Sample data

Same items as v1, listed in [`../../v1/README.md`](../../v1/README.md#sample-data), and tagged "Sample" on the page. Specific to this variant:

- The spot meters (14 ticks) draw the sample capacity of 14 and the sample spots left. The tickets carry a Sample chip, and the schedule carries the Sample note.
- "Open now · until 22:00" is worked out in the browser from the published hours (06:00 to 22:00, Bali time). The hours are real; the live status is a demo of how the page could show them.

## Motion (all native scroll, reveals 0.6 s or less)

| Section | Effect | How |
| --- | --- | --- |
| Hero panels | Hover/focus accordion (flex 1 → 2.8, 0.6 s), siblings dim to 45 %, detail column fades in; phones: one card opens, its clip frame grows to 16:10 | CSS transitions, `page.js` sets `.is-open` / `.is-spot` |
| Hero panels | Settle to 0.955 as the hero leaves | CSS `animation-timeline: view()`; IntersectionObserver class without scroll-driven support |
| Headlines, cards | Rise, stagger, deal (photo cards to ±3°), fan (pass cards), mask (Recharge card) | IntersectionObserver adds `.m-in` once |
| Photos and clips | Scale-in frames 1.12 → 1 | `view()` timeline; IO fallback |
| First class stepper | The line fills with scroll | named `view-timeline`; IO fallback |
| App bar, tab bar | Scroll progress hairline | `scroll()` timeline; JS fallback |
| Schedule | Day indicator slides, rows slide in from the side of the chosen day, FLIP on filter changes, spot meters fill tick by tick, docked date bar | WAAPI + CSS |
| Booking | Shared-element sheet transitions, booked check draws, odometer roll on spots, tab badge pop | View Transitions API, CSS |

`prefers-reduced-motion` and Save-Data: no transforms, no View Transitions, posters only (Play buttons), fades only. Without JavaScript all copy is visible and the week shows as a static timetable.

## Checked (27 Oct 2026)

Automated checks, WebKit iPhone 375 and 390, Chromium 1440: all five booking journeys (Day Pass, Duo, pack, member, waitlist) reach the confirmation on every viewport, with back at each step, the `.ics` file and the WhatsApp share. 0 console errors, 0 third-party requests, no horizontal scroll, only the four brand colours, no gradients, one terracotta button per screen. Lighthouse mobile: Performance 100, Accessibility 100, Best Practices 100 (SEO is low on purpose: the page is `noindex`).

## Tech notes

Static files, vanilla ES5, no libraries, no third-party requests. View Transitions: on phones only the poster (or title) and the sheet are named, and the scrim keeps the browser's default view-transition fade. Custom keyframes on the scrim pseudo-element crashed headless WebKit when a test tool finished all animations, so do not add them back. Script order (all `defer`): `../../v1/assets/js/api.js` → `paths.js` → `motion.js` → `media.js` → `../../v1/assets/js/booking.js` → `page.js`.
