> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

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
