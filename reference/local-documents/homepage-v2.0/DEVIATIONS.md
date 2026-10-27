> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Deviations: Elite Fit Bali homepage v2.0

Version: v2.0 — 2026-10-01 · owner: integrator (Step 3) · every known deviation from Raoul's brief, `_build/CONTRACT.md` (v1.1), `_build/SECTIONS.md` and the research, one line each with the reason. Sources: the seven lane reports, `_build/CONCEPT.md` §10–11 and the integration step (`_build/integration-report.md`). Change log at the bottom.

## Open point for Raoul (one question)

**Duo day pass: does IDR 225.000 per person apply to all three passes (Perform, Elite, Recharge)?** The page shows it for all three because the promo page shows a single Duo day price (BRAND-NOTES item 5, "Duo day pass 225.000 each"). Per tier it is unconfirmed: a Duo Recharge day would be 75.000 below its single day pass, a Duo Perform day 125.000 below. `passes.json` carries it as `duo.dayPassTiers` (marked as an assumption, API-CONTRACT question 10).

## Brief and research

| # | Deviation | Reason |
| --- | --- | --- |
| B1 | The hero is about 66svh (CONTRACT/house rule), and on phones the reel runs inside it behind the concrete board, not full screen. | The first screen must also show the club name, "Buy a pass" and a peek of today's classes (CONTRACT §9.1). |
| B2 | The reel shows about 223 px on a 390×844 phone (204 px at 375×812) instead of the spec's 280–320 px. | The board holds the two-line eyebrow reserve, H1, sub and both buttons (334 px); only dropping the ghost button would win back about 52 px, and the spec keeps it on screens 700 px tall or more (lane L1 §5.4). |
| B3 | Class passes stay information plus a WhatsApp link; they are not in the checkout. | CONTRACT §12.1 declined the design lead's request for v2.0; `tierId: "class"` with `c1`/`c10` is reserved in `api.js` and API-CONTRACT.md. |
| B4 | Schedule cards are one vertical column on phones, not a horizontal strip. | One-column mobile rule (CONTRACT §1, house rule "nothing side by side"); the horizontal scroll lives in the day chips and in the desktop rail (lane L3 §3.1). |
| B5 | "N spots left" / "Full" is shown on schedule cards although SECTIONS §3 does not list it; the numbers are invented (MOCK) and switch off in one place (`SHOW_SPOTS` in `schedule.js`). | The lane brief asked for seats. GymMaster's public schedule needs no login but seats need a member token, so live seat counts are probably unavailable (lane L6 finding 2): decide before anything is published. |
| B6 | Hours are written `6:00–22:00` (SECTIONS and BRAND-NOTES form), not the house 24-hour form `06:00–22:00`. | The spec wording was copied as written (lane L5 §3.6); one find-and-replace if the house rule should win. Class times keep `09:00–10:00`. |
| B7 | The header wordmark "ELITE FIT" is set in Syne 700 next to the EF mark PNG; the club's PNG wordmark is used in the footer only. | Syne Bold matches the entrance sign at 0.89 glyph overlap (CONCEPT §10, SECTIONS §1). |
| B8 | The hero reel is a 540×960, 13.67 s web cut (1.3 MB) instead of 720×1280, 20–25 s. | Weight rule (≤ 1.5 MB, mobile-journey-c: v1.3's 6.4 MB reel took 35 s on slow 4G); 13.67 s holds the gym-to-pool sequence; the source is a screen recording of Instagram, so 540 px is near its real resolution (lane L1 §4). |
| B9 | Coach portraits have no recorded permission. | v1.3 recorded none; owner's and coaches' consent is needed before live use (lane L5 §4). |
| B10 | The first-view transfer is measured from navigation to `load` + 2 s; the hero clip, which starts after `load` and idle (about 20–40 ms after `load` on P1), is reported on its own line and in the total. | CONTRACT §8 definition. On P1: first view 372.7 KB, clip 1,274.9 KB, total 1,647.7 KB. |
| B11 | Lane JS is 34.1 KB gzip as shipped (comments and indentation stripped by build.mjs), above the 30 KB guidance of stack-shop §8. | No minifier or library may be added (CONTRACT §1); 42.4 KB gzip as authored. This is guidance, not a CONTRACT §8 budget. |
| B12 | The pages here are served by `python3 -m http.server`, which does not compress; every byte figure is the uncompressed transfer. | Local preview; a real host with gzip or brotli sends about a third of the text bytes. |

## Contract and spec (lane decisions, accepted by the integrator)

| # | Deviation | Reason |
| --- | --- | --- |
| C1 | CONTRACT v1.1 amendments beyond v1.0: §12.1 class passes declined; §12.2 state attributes `data-scrolled`, `body[data-buybar]`, `body[data-scroll-lock]`, opener attributes; §12.3 extra partial `zones.html` + `zones.css` + `zone-*` (L4); §12.4 hooks `clock`, `tile`, hero layer `board`, `--num-stage`; §12.5 LCP reminder. | Decisions on the design lead's change requests (CONCEPT §11). |
| C2 | The design lead's specimen proofs exist for two engine/size pairs only: WebKit 390 (first screen) and Chromium 1440 (`_build/preview/fable-*.png`), taken after the colour swap. | CONCEPT §10; the ratio table in the specimen is computed live from the tokens. |
| C3 | `hanken-grotesk-latin-var.woff2` was first the italic cut (italicAngle −8) and rendered all body text slanted; it was replaced by the upright file on 01.10.2026 and the wrong file kept as `_build/_wrong-download-…ITALIC….woff2`. | Reported by lanes L3 and L4; fixed in `assets/fonts/LICENSES.md` v1.1. Earlier lane screenshots may show italics. |
| C4 | Hero poster is the pool-deck frame at 34.70 s, not v1.3's 38.0 s frame; `object-position` is `50% 60%` instead of `50% 40%`. | The poster must be frame 0 of the loop and the 38 s frame sits 3 frames before a cut; at 40 % the phone shows roof and treetops (lane L1 §5.1, 5.3). |
| C5 | Header from 760 to 1023 px shows logo, "Buy a pass" and Menu. | The spec defines only < 760 and ≥ 1024, and the buy bar hides from 760 (lane L1 §5.5). |
| C6 | Tablet hero window is a near-square cover crop (60 % wide), not 9:16. | A true 9:16 at 60 % width would be about 790 px tall and break the 66svh hero (lane L1 §5.6). |
| C7 | Header background `color-mix(var(--surface) 86 %)` instead of the literal `rgba(217,214,204,.86)`. | No colour value outside tokens.css (lane L1 §5.8). |
| C8 | Pause control: constant name "Pause video" with `aria-pressed`, icon swaps. | A changing label plus `aria-pressed` would be announced as "Play video, pressed" (lane L1 §5.10). |
| C9 | Shop card prices carry `aria-label="IDR 350.000"`, not "350.000 rupiah"; the visible card number is digits only with the unit in `.shop__per`. | The lane brief asked for the IDR form; every other price on the page reads `IDR 350.000` (lane L2 §3). |
| C10 | Copy written by lanes where the spec had none: checkout validation and error messages, "Prices are unavailable right now…" (L2); "That was the last class today.", "No classes this day.", "First two only" (L3); zone tile labels "The gym floor" / "Pool deck and four rooms" / "On the Perform side" from the lede (L4); "Show fewer" (L5); the WhatsApp pre-fill "Hello Elite Fit Bali! I would like to buy a pass (Perform, day pass)." used when the checkout is switched off (integrator). | Needed for the states; to be checked by the copy owner. |
| C11 | The Today H2 stays "Today at Elite Fit" when another day is selected. | Spec wording; the design lead may prefer "Monday at Elite Fit" (lane L3 §3.5). |
| C12 | Below 375 px the day-chip row borrows 8 px of the page gutter on each side. | Seven 44 px targets need 332 px (lane L3 §3.8). |
| C13 | `zone-perform.webp` comes from `2023/12/DSC00061.jpg`, not the spec's `2026/09/6`. | That photo shows treadmills; the spec's alt text and line describe plate-loaded machines (lane L4 §6.1). |
| C14 | The jacuzzi stage photo shows a person at the pool edge; its alt stays the spec's "Tiled edge of the warm pool". | SECTIONS keeps the person at the edge of the frame; ART-DIRECTION said no people (lane L4 §6.3): needs Raoul's yes. |
| C15 | Recharge: one sticky text panel per stage (four in the DOM); the stage dots exist only in the desktop enhanced state; the temperature is 60 px on a 390 phone. | One markup for static and enhanced states; dots would be dead without the script; the spec's size formula (lane L4 §6.4–6.6). |
| C16 | Coaches: five columns from 1200 px, 3 + 2 from 760 to 1199; Visit side by side only from 1280; footer logo above the columns from 1024 to 1199; Facebook only in the footer; review cite uses its own `.rev__src` span. | Card and column widths at those sizes (lane L5 §3). |
| C17 | No JSON-LD on the page. | AIOSEO owns schema in WordPress (WP-MAPPING §10); v1.3's block is typed `HealthClub` with one 06:00–22:00 hours entry, and v1.3 also carries `noindex`. |
| C18 | `?now=` freezes the mock clock (it does not tick) and is ignored in live mode. | Reproducible QA (lane L6 §3). |
| C19 | Motion: picture reveals and the Recharge dot use transform, not `clip-path`; the checkout sheet does not animate its height. | `clip-path` dropped 3–7 % of desktop frames at 4× CPU; height is not animatable under CONTRACT §1 (lane M §3). |

## Integration step (`_build/integration-report.md` has before/after for each)

| # | Deviation | Reason |
| --- | --- | --- |
| I1 | The page carries `<meta name="robots" content="noindex, nofollow">`. | Concept preview, not live (README). In WordPress AIOSEO owns robots; the staging copy stays noindexed, production must not. |
| I2 | The mock checkout opens only on local hosts (localhost, 127.0.0.1, file:, *.local, *.test) or hosts listed in `EF_CONFIG.previewHosts`; anywhere else every "Buy a pass" opens a pre-filled WhatsApp chat and `#checkout` is hidden. `node build.mjs --wp` prints `checkout.php` only when `EF_HOME_CHECKOUT === 'concept'`. | WP-MAPPING §1 hard gate: the mock must not reach the public domain. |
| I3 | `tokens.css` fallbacks are four weight-specific faces (Syne 600 and 700 on Arial Bold, Hanken ≤ 500 and ≥ 600 on Arial) instead of one per family. | Font-swap shifts: the H2s fell back to Arial Regular 21 % too narrow. |
| I4 | Hero lede max-width 20.5rem (was 21rem); hero card price one line at 26 px below 1280; "EF Hero Body Fallback" 99 % (was 99.8 %). | Font-swap shifts at 390 (rewrapped lede), 1024 (card grew 27 px) and the desktop nav. Known defect in the snapshot: at exactly 759 px the 99 % face makes the lede one line shorter than Syne, so a late font swap grows the hero board by 26 px (forced-swap CLS 0.012); the fix (back to 99.8 %) is listed for v2.1 in `_build/integration-report.md` §7. |
| I5 | The hero `<video>` has no `poster` attribute; the poster `<img>` underneath is the picture until the clip shows a frame. | Chromium named the `<video>` as the LCP element; now the preloaded `<img>` is named (CONTRACT §8: "never the video"). |
| I6 | The checkout sheet has one fixed height for every step (full height minus 24 px on phones, `min(90vh, 50rem)` from 760); tier prices in the dialog are 22 px from 760. | Steps no longer resize the sheet or re-centre the dialog; tier rows no longer grow on a length tap. |
| I7 | `index.html` links comment-stripped copies (`assets/css-dist/`, `assets/js-dist/`); `index.dev.html` links the lane sources. | Weight (conflict e); the sources keep every comment. |
| I8 | Favicon is an empty data URI (`<link rel="icon" href="data:,">`). | No square club icon exists in the assets; it avoids a 404 request. WordPress prints the Site Icon. |
| I9 | `theme-color` is the literal `#DFDDD0` in the head. | A meta tag cannot read a CSS token; it equals `--c-concrete-l88` (WP-MAPPING §8). |

## Change log

- v2.0 — 2026-10-01 — first version (integrator), from the lane reports, CONCEPT §10–11 and the integration step.
