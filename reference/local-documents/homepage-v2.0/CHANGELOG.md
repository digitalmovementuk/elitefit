> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Changelog: Elite Fit Bali homepage

Version: v2.0 — 2026-10-01 · owner: integrator (Step 3) · this file starts the v2.0 line; v1.3 keeps its own changelog in `proposal/site-preview/CHANGELOG.md`.

## v2.0 — 2026-10-01

### What this version is

A new homepage concept for Elite Fit Bali, built from scratch after v1.3 was judged "too generic and template-like". The hero is a concrete type block ("Perform. Recharge.") with the club's own reel as an inset window and a working pass card; today's classes sit directly under it; the pass shop sells day, week and 4–52-week passes and Duo through a four-step checkout that is a labelled concept (nothing is charged, stored or sent); Recharge is a four-room sequence from 4° to 100°. Framework-free HTML, CSS and JS in twelve partials, one per WordPress template part. It is a preview: `noindex`, mock data, nothing published.

### How it was built (three steps, seven parallel lanes)

| Step / lane | Owner | Model | Files |
| --- | --- | --- | --- |
| Step 1, design lead | Fable lead | Fable (the design and copy model of the house routing; the lane files name it "Fable lead") | `_build/CONCEPT.md`, `SECTIONS.md`, `ART-DIRECTION.md`, `assets/css/tokens.css`, `base.css`, `assets/fonts/` |
| Coordination | Michael (orchestrator) | Opus 5.5 | `_build/CONTRACT.md` v1.0–v1.1, `LANE-BRIEF-COMMON.md`, seed `passes.json` |
| M, motion | lane M | Opus 5.5 | `assets/css/motion.css`, `assets/js/motion.js`, `MOTION-AND-DESIGN.md` (+ html) |
| L1, header and hero | lane L1 | Opus 5.5 | `partials/header.html`, `hero.html`, `assets/css/hero.css`, `assets/js/hero.js`, hero media |
| L2, pass shop, buy bar, checkout | lane L2 | Sonnet 5.5 | `partials/passes.html`, `buybar.html`, `checkout.html`, `assets/css/shop.css`, `assets/js/shop.js` |
| L3, Today strip | lane L3 | Sonnet 5.5 (xhigh) | `partials/schedule.html`, `assets/css/schedule.css`, `assets/js/schedule.js`, `assets/data/schedule.mock.json` |
| L4, the club and Recharge | lane L4 | Sonnet 5.5 (xhigh) | `partials/zones.html`, `recovery.html`, `assets/css/zones.css`, `recovery.css`, `zone-*` and `rec-*` images |
| L5, coaches, reviews, visit, footer | lane L5 | Sonnet 5.5 (xhigh) | `partials/trainers.html`, `reviews.html`, `visit.html`, `footer.html`, `assets/css/community.css`, `team-*` and `visit-*` images |
| L6, data and API | lane L6 | Sonnet 5.5 (xhigh) | `assets/js/api.js`, `assets/data/passes.json`, `API-CONTRACT.md`, `WP-MAPPING.md` (+ html) |
| Step 3, integrator | integrator | Opus 5.5 | `index.template.html`, `build.mjs`, `index.html`, `index.dev.html`, `assets/js/main.js`, `CHANGELOG`, `DEVIATIONS`, `MEDIA-SOURCES`, `TRACEABILITY`, `README` (+ html twins), `_build/integration-report.md`, budget runs in `_qa/v2.0/perf/integrator-r1/` |
| Step 4, formal QA | five QA agents | (their reports) | `_qa/v2.0/` |

### What changed against v1.3

| Area | v1.3 (`proposal/site-preview/`) | v2.0 (`homepage-v2.0/`) |
| --- | --- | --- |
| Hero | full-bleed reel with a centred statement (the mass pattern of 9 of 29 benchmark sites) | ~66svh concrete board with the two-word Syne headline, the reel as an inset window (phones: behind the board), live Bali clock, desktop pass card with price and Buy |
| First screen on a phone | hero only | club name, "Buy a pass" and a peek of today's classes (journey J1) |
| Today's classes | a weekly table further down (`#classes`) | "Today at Elite Fit" directly under the hero: now / next markers in Bali time, seven day chips, full day in one tap, GymMaster mock data |
| Buying | "Pick a length, pick your access, pay online" cards and a checkout dialog | length switch (day to 52 weeks), three tiers, Duo prices, four-step concept checkout (choose, details with validation, pay, done), sticky buy bar with WhatsApp on phones; off localhost the buttons fall back to WhatsApp |
| Recovery | one dark section | "Four rooms, 4° to 100°": four measured stage tones, temperatures as rolling numbers, sticky panel on desktop |
| Sections | buy, pillars, recovery, classes, trainers, merchandise shop, visit, reviews, join | hero, today, passes, the club, Recharge, coaches, reviews, visit (merchandise and the final call-to-action dropped; "Bloodwork" pillar dropped) |
| Type | Syne + Manrope from Google Fonts | Syne + Hanken Grotesk, self-hosted, preloaded, weight-tuned fallbacks (zero layout shift on the swap) |
| Colour | brand sand and coral | measured palette from the club's own surfaces (concrete, black steel, cream bench, sand tile, sauna timber) plus the coral accent; one file swaps it |
| Motion | none to speak of | motion layer: headline rise, price odometer, clock roll, schedule now-dot, Recharge dissolve, card lifts; reduced motion, data-saver and no-JS show the complete static page |
| Reel | 720×1280, 52 s, 6.4 MB, page 6.8 MB | 540×960, 13.67 s loop, 1.3 MB, starts after `load`, never under data-saver or reduced motion |
| Weight (P1 phone profile) | not measured on this profile; 35 s on slow 4G in mobile-journey-c | first view 372.7 KB, clip 1,274.9 KB on its own line, LCP 1.55 s (median of 5 on the frozen snapshot), CLS 0 |
| Data | prices in the markup | prices only from `assets/data/passes.json` through `EFApi`; API contract for GymMaster, Xendit and GoHighLevel; WordPress mapping |
| Build | one hand-written `index.html` | 12 partials → `node build.mjs` → `index.html` (comment-stripped assets) and `index.dev.html` (sources); `--wp` writes WordPress template parts |
| Search | `HealthClub` JSON-LD and `noindex` | no JSON-LD (AIOSEO owns schema in WordPress), `noindex, nofollow` because it is a preview |

### Integration step (detail in `_build/integration-report.md`)

- v2.0 is frozen in `_versions/v2.0/` (01.10.2026, 14:40); the folder root became the v2.1 working copy.
- Assembled the page per SECTIONS §0; head with the motion one-liner, preloads, CSS and deferred scripts in contract order.
- `main.js`: checkout gate, header menu, "Show all five", motion failsafe, skip link.
- Resolved: hero words in spans (two-beat headline), font-swap layout shift (tokens.css and hero.css), checkout sheet height and tier rows, LCP named on the poster `<img>`, comment stripping (JS 45.6 → 37.1 KB gzip, CSS 36.9 → 19.8 KB gzip), mock gate for public hosts.

## Change log of this file

- v2.0 — 2026-10-01 — first version (integrator).


---

Version: v2.1 — 2026-10-02 · owner: integrator · the v2.1 entry of this changelog.

## v2.1 — 2026-10-02

### What this version is

v2.0 plus the five additions of Raoul's change request of 2026-10-01 and the mobile additions he asked for the same day. Additive: nothing from v2.0 was renamed or removed, and v2.0 stays frozen in `_versions/v2.0/`. Still a preview: `noindex`, nothing published, pushed or sent, no account created, nobody at the club contacted. The brief is `_build/v2.1/CHANGE-REQUEST-v2.1.md`, the lane contracts are in `_build/v2.1/LANES.md`, the evidence is in `_qa/v2.1/`. The motion moments are tabulated in [MOTION-UX-AUDIT.md](MOTION-UX-AUDIT.md), the footage sources in the v2.1 section of [MEDIA-SOURCES.md](MEDIA-SOURCES.md), and what to ask the club for in [INSTAGRAM-REQUESTS.md](INSTAGRAM-REQUESTS.md).

### A. Floating WhatsApp button

- What: one round link to the club's number with the existing message (`wa.me/6285195520220`, "Hello Elite Fit Bali! I have a question"), opens in a new tab with `rel="noopener"`, label "Message us on WhatsApp". New `partials/whatsapp.html` and `assets/css/whatsapp.css`, no JavaScript. 56 px, WhatsApp green with a dark glyph (9.36:1; a white glyph would reach only 2.0:1), bottom right inside the safe-area insets. Its z-index is 49: under the header (50), the buy bar (60) and the checkout sheet (100).
- Phones: always visible. Contract change of 2026-10-01: it no longer hides while the buy bar is open. It lifts above the open bar (`#buybar[data-state="open"] ~ .wa-fab`, same duration and easing as the bar's own slide, with measured lift heights for narrow widths), and the bar's own WhatsApp icon is hidden so two WhatsApp buttons never show at once. On phones the footer gets 92 px of bottom padding so its last line clears the button.
- Pulse: two concentric rings in alternation, each 2.2 s of a 3.6 s loop with a rest, plus a small heartbeat of the disc; transform and opacity only. It stops on hover and keyboard focus and fades in about 2.4 s after load. Without `html.motion-ok` (reduced motion, data-saver, no JavaScript) it is visible at once with a static two-ring halo.
- Measured: 0 console errors.
- Why: one tap to the club from anywhere on a phone. The always-on position and the stronger pulse are Raoul's changes of 2026-10-01.
- Deviations lane A recorded: the keyframes live in `whatsapp.css` (CONTRACT §3 says `motion.css`), one hex value `#25D366` is declared as `--wa-green`, the footer rule on `.foot` lives in `whatsapp.css`, and the button runs three looping CSS animations while visible (two rings and the heartbeat).

### B. Review line

- What: one slim line under the hero buttons (nested in `.hero__copy` right after `.hero__ctas`). Left, a badge: the official Google "G" as inline SVG in its original colours, a bold "4.7", a star row filled to 4.7 (four stars and 70 % of the fifth), "488 reviews"; the whole badge links to the club's Google reviews (the Maps link of the footer) in a new tab, accessible name "Rated 4.7 out of 5 on Google, 488 reviews". Right, one real 5-star review at a time, changing every 5 s with a crossfade, each with its own stars, the reviewer's name as published and the label "Google review". Files: `partials/reviewline.html`, `assets/css/reviewline.css`, `assets/js/reviewline.js`, `assets/data/reviews.json` (also inlined as `#revline-data`, so it works from `file://`). No third-party script, no `aggregateRating`.
- The figures were checked before they went in. Rating 4.7: confirmed by the Google panel (2026-09-30), the live Google Maps page and the Maps embed data on `/recharge/` (both 2026-10-01). Count: **488, not 84**. Google shows 488; the 84 is the club's own Trustindex widget import. The brief's accessible name said 84, the page says 488. The count line of the `#reviews` section was changed from 84 to 488 as well (lane E4, on lane B's request).
- The five quotes, all 5 stars, verbatim, trimmed only at the end: Åsmund Tveitevoll, Marianne, asyraf140796, Tom J., C K. Verified against the club's Trustindex widget, which names Google as the original source: Åsmund Tveitevoll, asyraf140796, C K. **Unverified: Marianne** (the text comes from the club's own testimonial slider; its Google origin rests on the brand notes and was not re-checked) and **Tom J.** (taken from the v2.0 page, not found on any club page reachable on 2026-10-01). The "Google review" label on these two is therefore unconfirmed.
- Measured: quote in Hanken Grotesk 500 at 16 px (15 px below 360 px wide, 17 px from 760, 18 px from 1024); score in Syne 700 at 24 px on phones (28 px from 760); contrast 13.61:1 for score, quote and count; tap targets 44 px high. The line is visible without scrolling at 375x667, 375x812, 390x844 and 1440x900, and its height is the same in every state (CLS 0). It pauses on hover, focus and touch and while the tab is hidden, stops after two full passes (WCAG 2.2.2), and under reduced motion or data-saver keeps the first review with a 44 px "Next review" control. The first review is in the HTML, so there is no empty state. JS +902 B gzip, CSS 1,184 B gzip.
- Why: a first-time visitor sees real, checkable proof without scrolling. The hero grows with the line (see Known open items).

### C. Real club footage instead of stills

- What: seven decorative stills now play a short silent loop from the club's own footage: `zone-perform`, `zone-recharge`, `zone-classes`, `rec-ice`, `rec-steam`, `rec-sauna`, `visit-entrance`. The jacuzzi stays a still (the only footage of that room is the same 0.85 s shot as the ice room, with the jets off) and so do the five trainer portraits (no clip shows or names a trainer). The hero keeps its reel.
- Source: seven clips cut from the club's own master files in its public media library on elitefitbali.com, not from the screen-recorded reel: `Header-Portrait.mov` (1080x1350, the clean master of the walkthrough) and, for one shot of `zone-classes`, `Header-Video-Landscape.mov`. The five club pages that were read hold no `<video>` tag (about 20 other club pages were not read). Instagram could not be read through the allowed route. Per slot: file, window, bytes, loop and crop are in the v2.1 section of [MEDIA-SOURCES.md](MEDIA-SOURCES.md).
- Encoding: H.264, no audio, faststart, seamless loops of 3.1 to 4.5 s, seven clips together 3,556,599 B (3.4 MB, budget 6 MB), plus seven WebP posters of 189,000 B together, each the exact first frame of its clip so nothing jumps when playback starts.
- Integration: each `<img>` became a `<video class="clip" muted loop playsinline preload="none" poster>` in the same figure with the same aspect-ratio box; new `assets/css/media.css` and `assets/js/media.js` (1,189 B gzip). A clip is fetched only when its frame is within half a screen of the view and plays only while on screen; at most 2 play at once on phones; in Recharge only the active room's clip plays (the number and tone lead, the clip follows about 450 ms later); posters only under reduced motion, data-saver or when autoplay is refused (iPhone Low Power Mode), with 0.0 px layout difference. The tile reveal, parallax and Recharge dim work on the video.
- Why: Raoul asked for real club footage wherever a decorative photo sits. The limits are stated in [MEDIA-SOURCES.md](MEDIA-SOURCES.md): people appear in two clips (bodies without faces in the classes clip, a swimmer from behind in the recharge clip) and no guest release is known, clips also appear in the hero loop, the club's masters are for proposal use only, and the originals are needed before launch.

### D. Menu button focus ring

- What: the thick black ring on the header menu button after a tap is gone. The ring now shows for keyboard focus only (`:focus-visible`), drawn as a ring that closes in (scale 1.2 to 1, 240 ms). The iOS grey tap flash is off on the header controls, `main.js` marks focus that arrives without a key with `[data-e1-quiet]`, and forced-colours mode keeps a real outline.
- Cause: a plain tap leaves no focus, but the ring appeared when script moved focus (Escape, anchor jump) because WebKit matches `:focus-visible` for script focus, and the tap flash was on.
- Measured: a plain tap on the toggle leaves it unfocused with ring 0 (WebKit 390x844, `_qa/v2.1/E1/r4-menu`); after a tap on "Today's classes" the focus lands on the heading with no outline; with the keyboard the toggle and the jump target show their ring (`_qa/v2.1/E1/r5-final`).
- Why: Raoul's phone screenshot showed the ring.

### E. Motion design (four lanes)

- Counts: 65 moments kept (64 in the four lane audits plus the next-class card) and 24 ideas cut because they had no UX job, in [MOTION-UX-AUDIT.md](MOTION-UX-AUDIT.md) with trigger, duration and easing, phone version, reduced-motion version and how each was measured.
- E1, hero, header, navigation: a choreographed arrival (header, headline, footage settle, hero buttons, review line, an invitation arrow on "Today's classes"), a header that condenses on scroll, a menu sheet that grows out of its toggle, an underline that follows the section in view, smooth anchor jumps that land flush under the header, and a restrained pointer pull on the primary buttons (desktop only).
- E2, class schedule: a day-tab pill, cards that slide in from the side of the chosen day without an empty frame, a live "now" dot, a progress line on the class that is on, a countdown, visible state changes when a class starts or ends, and cards that travel when the full day opens or closes.
- E3, pass shop and checkout: prices that roll when the length changes, card prices that count up once, a physical press, a buy bar that slides in and out with intent, a checkout that grows from the tapped button, a tier frame that travels between rows, a step progress bar, an error shake, a brief success celebration, soft placeholders for late prices, and a busy line after 300 ms.
- E4, zones, Recharge, facts, cards: each zone moves in its own character (workout crisp, café warm, spa slow), soft thresholds between zones, the Recharge temperature scale with number, tone, clip and words changing together, hours and the day-pass price that slide into place once, a reviews counter, card and tile reveals with a keyboard focus lift, a thin scroll cue painted in the zone colours on phones and tablets, and a calm footer.
- Measured (Chromium, CPU throttled 4x, phone profile): frame time 59.3 to 60 fps in E1, 60 in E2, 56.1 to 60 in E3, 59.8 in E4; CLS 0. JS added, gzip against v2.0: B +902 B, E1 +1,506 B, E2 +985 B, E3 +1,190 B, E4 +730 B, A none.
- UX proof: taps are the same as in v2.0 (1 tap to today's classes; 7 taps for a day pass and 8 for a membership). Seconds to today's classes are longer by the smooth jump (see Known open items).
- Why: Raoul wanted motion where it improves the UX. Every moment has a job (orient, guide, confirm, explain, build desire, or make waiting shorter), and ideas without one were cut.

### Mobile additions (Raoul, 2026-10-01)

- All three packages in one phone viewport (E3): the "What's included" rows collapse and open on a tap. The Choose buttons end at 598 to 599 px at 390x844 and 375x812; at 375x667 the three end at 290, 436 and 583 px.
- Sticky length selector (E3): the six lengths in a 3 x 2 grid stick under the header inside `#passes` (44 px targets, 15 px text), so the length can be changed anywhere in the section and all three prices change. It lets go where the section's content ends.
- Sticky temperature readout (E4): in Recharge on phones a readout pinned under the header (70.5 px tall) shows the room in view: the number rolls in the right direction, the tone crossfades, the room name and "n of 4" rise in, and a 0 to 100 degree scale shows a marker. It lets go where the sauna block ends. Measured at 390x844, 375x812 and 375x667: pinned at 56 px in every frame, no overlap with the buy bar.
- Polished menu with EF-style social icons (E1): one hidden sprite of four symbols (Instagram, Facebook, WhatsApp, Google Maps) drawn with the EF mark's slant; the menu shows three 44 px icons. The sheet is 565 px tall and needs no inner scroll at 390x844, 375x812 and 375x667.
- Coach avatars: a round face (44 px) on every class card, 56 px on the first-view card, from `assets/img/avatar-ain.webp`, `-icha`, `-martijn` and `-rey` (an initials circle where a coach has no file). 36 of 36 class cards across the seven days render one.
- Next-class card and countdowns: below the hero on phones, a card shows the class on now, else the next one, else the first of the following day, with its coach's face and a countdown. It is fully inside the first view at 390x844, 375x812 and 375x667. Every class card of today carries its own countdown ("Starts in …", "X min left", "Finished"). One clock, updating every 30 s and when the tab comes back. Tapping the card selects that day, rings the class for 2.4 s and jumps to `#today`. 0 console errors, CLS 0 (Chromium 390), no horizontal overflow at 320 and 390. schedule.js dist is 6,161 B gzip against 4,371 B in v2.0, 528 B of it from this job.

### Data

- Real class timetable: `assets/data/schedule.club.json`, 36 classes (Mon 7, Tue 7, Wed 5, Thu 5, Fri 6, Sat 3, Sun 3), read from the club's timetable page on 2026-10-01. Every row (day, start, end, class, coach) equals the v1.3 capture in `schedule.mock.json`, which already held the real week; each row now carries its club class-page URL. No seat numbers are invented or shown: the club publishes none (seats live in the GymMaster app behind a member login), `spotsLeft` and `capacity` are `null`, and `SHOW_SPOTS` is `false`. The coach printed TINOS shows as Martijn, as in the coaches section. `api.js` reads the club file.
- Data inlined: `build.mjs` writes `passes.json` and `schedule.club.json` into one JSON block (`#ef-inline-data`) and the review data is inlined as `#revline-data`, so the page works from `file://`, where `fetch` is blocked.
- Why: Raoul asked for a better real-scenario preview.

### Fixes

- Buy bar columns: with the bar's own WhatsApp icon hidden, the price text fell into the 44 px icon column and wrapped into a narrow stack. The bar now has two columns (`shop.css`, 2026-10-02).
- Header opacity: the header background is 96 % of the surface colour, up from 86 % in v2.0 (`hero.css`).
- Hero font fallback: kept at 99.8 %, because 99 % rewrapped the lede at 759 px on the font swap (+26 px, CLS 0.012). The centred desktop nav got its own fallback face "EF Hero Nav Fallback" at 98.5 % (it moved 3 to 4 px on the swap at 99.8 %), and the facts row has its own face (integration report §7.1).

### build.mjs

- `--out <dir>` builds into a scratch folder and symlinks the static asset folders, so parallel lanes never write the shared `index.html`; `--quiet` silences the log.
- Partials may include nested partials (`<!-- @include partials/<name>.html -->`, one level); the review line sits inside the hero this way.
- New registered files: the whatsapp partial and CSS, the reviewline partial, CSS and JS, and the media CSS and JS.
- Inline data block, see Data.

### Tools

- `_build/v2.1/dev-live.mjs` (v1.0): a live dev server, local only (127.0.0.1). It watches the sources, rebuilds with `node build.mjs --out <preview dir>` and never touches the shared `index.html`, serves with Range support so video works, swaps the stylesheets in place on CSS-only edits and reloads otherwise, names the changed files in a small toast, and shows a build error in red while the last good build keeps serving. Usage: `node dev-live.mjs --root <project dir> [--port 8200] [--out <dir>] [--open]`.
- `_build/v2.1/with-browser-lock.sh` (v2.1.1): runs a command only when one of two machine-wide browser slots is free and the 1-minute load average is below 6 (it waits up to 2 minutes in 30 s steps), and clears stale slots.
- `_build/v2.1/media/tools/`: the clip cutter, loop and manifest checks (`clip.py`, `plans.py`, `manifest.py`, `loopcheck.py` and helpers), described in `_build/v2.1/media/ENCODING.md`.

### What is real and what is not verified

- Real: the rating 4.7 and the count 488 (Google), three of the five quotes, all footage (the club's own public master files), the class timetable (the club's page, read 2026-10-01).
- Unverified: the Marianne and Tom J. quotes; releases for the guests visible in the classes and recharge clips; where the club uses the master files on its live site; the club's current Instagram reels; which WhatsApp number is the club's official one; behaviour on a real iOS device; WebKit frame time (it cannot be throttled).

### Known open items

1. **320 px overflow scan.** Earlier runs (lanes B, C-int, E1 and E2) measured a page 324 px wide at 320, about 4 px from `.m-odo` and `.rec__bar-mark` in Recharge (also with the v2.0 stills put back, so not the clips). Later runs show none (lane A's re-run at 320x568 and 320x640; the next-class run on 2026-10-02: scroll width 320 at 320). No full scan of the final build (every section, the checkout open, Recharge walked) is on record.
2. **Hero height.** The hero should be about two thirds of the first view (60 to 70 %). It grows with the review line: lane B measured 76.1 % at 375x667, 72.3 % at 1280x720 and 72.4 % at 1024x768; later phone runs measure 68.3 % at 375x667, 66.9 % at 375x812, 66 % at 390x844 and 74.4 % at 320x640. The desktop sizes were not re-measured on the final build.
3. **Two WhatsApp numbers.** The page uses +62 851 9552 0220 (`wa.me/6285195520220`, from the change request). The club's live floating button opened +62 857 2022 1101 in the 2026-10-01 journey research (`research/mobile-journey-c-v1.0/journey-report.md`); both numbers appear on the club's pages. Which one is official is unconfirmed (open question 6 in `research/stack-shop-v1.0/stack-and-shop-recommendation.md`).
4. **Anchor scroll timing against v2.0.** The brief asks for smooth anchor jumps and for seconds "the same or better". Taps are equal; the seconds are longer by the glide: 0.21 s (WebKit) and 0.44 s (Chromium) in lane E1's stopwatch, 323 / 328 ms against 279 / 280 ms on phones in lane E2's. v2.0 jumped instantly and landed 12 px low with the focus on the body; v2.1 lands flush under the header with the focus on the heading.
5. WebKit 390: something above `#today` grows 8 px within about 3 s of load, so the strip moves from 205 to 213 px (lane E2's finding; not from the strip, not re-checked here).
6. At 320x568 the WhatsApp button covers the review badge's link over 44 x 44 px (lane A's request 3), and at 320 px wide the Recharge pass's Choose button sits under the button at rest (lane E3: not a one-screen size). Neither is shown as fixed in the files read.
7. The review count can be stale on go-live day: refresh `reviews.json` and `reviewline.html`.
8. The club's timetable shows a second, hidden time field on four Thursday items (HYROX 8:00, Mobility 7:00); the visible times were used. Weekend classes run on set dates, and the GymMaster app is the real source of truth. Worth one question to the club before go-live.
9. Colour tags of the clips (BT.709 matrix and TV range tagged, primaries and transfer unspecified) were not compared with the posters in a browser; the check is ready (`_build/v2.1/media/ENCODING.md` §5).
10. Documents not updated for v2.1 in this pass: `README.md`, `TRACEABILITY.md`, `DEVIATIONS.md` (the v2.1 deviations of lane A are listed in `_build/v2.1/requests/A-to-integrator.md`), `API-CONTRACT.md`, `WP-MAPPING.md` and `MOTION-AND-DESIGN.md` (v1.0). As read on 2026-10-01, `README.md` lines 48 and 63, `WP-MAPPING.md` line 60 and `API-CONTRACT.md` lines 163, 183 to 184 and 468 still name the mock timetable file. The shared `index.html` is the v2.0 build (last written 2026-10-01 14:39); v2.1 previews are in `_preview/`, and the integrator's final `node build.mjs` writes the v2.1 page.
11. The public preview repository is a separate step and needs Raoul's go. Nothing was pushed.

### Change log of this section

- v2.1 — 2026-10-02 — first version (document lane), compiled from `_build/v2.1/` (change request, lanes, lane audits and reports, requests), `_qa/v2.1/` evidence files and the sources; nothing was measured again.


- v2.1 — 2026-10-02 — v2.1 entry appended by the integrator (prepared in _build/v2.1/CHANGELOG-v2.1-section.md).

## v2.2 — 2026-10-08

- Hero: new "Coaching today" row (desktop, from 1024 px): the round photos and names of the coaches on today's timetable (Tinos is shown as Martijn, as in the timetable). Files: `partials/hero.html`, `assets/css/hero.css`, `assets/js/hero.js`; rebuilt with `node build.mjs`.
- The row keeps its height before it fills (no layout shift). Hero height at 1440 × 900: 666 → 682 px. Hidden on phones and below 1024 px.
- Snapshot of the previous page: `_versions/v2.1/index.html`. Nothing published or sent.

### Change log of this section

- v2.2 — 2026-10-08 — entry added with the coaches row.
