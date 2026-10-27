> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane L5 report: coaches, reviews, visit, footer

Version: v1.0 — 2026-10-01 · owner: L5 (Sonnet 5.5, xhigh) · for the integrator (Step 3) and Michael.

Change log: v1.0 — 2026-10-01 — first build and verification.

## 1. Files written

- `partials/trainers.html` (`#coaches`), `partials/reviews.html` (`#reviews`), `partials/visit.html` (`#visit`), `partials/footer.html` (`#site-footer`)
- `assets/css/community.css` (namespaces `.team*`, `.rev*`, `.visit*`, `.foot*`; no motion rules, no hex or rgb literals, tokens only)
- `assets/img/team-rey.webp`, `team-ain.webp`, `team-icha.webp`, `team-martijn.webp`, `team-putu.webp`, `visit-entrance.webp`, `visit-entrance-800.webp`, `visit-logo-white.png`
- Scratch, not part of the page: `_build/preview/L5.html`, `L5-build.py` (assembles L5.html from the partials), `L5-team.js` (reference toggle), 24 screenshots `L5-<width>-<engine>-<section>-final.png`
- `_build/lane-L5-report.md` (+ `.html` twin)

## 2. Hooks and events

`data-motion` values used (all from SECTIONS §13): `reveal-words` (the three H2s), `reveal` (ledes, button rows, count line, `.visit__media`), `stagger` (`.team__grid`, `.rev__grid`, `.visit__facts`, children carry `data-motion-item`), `lift` (`.team__card`), `tile` (`.team__img`, `.visit__img`), `counter` (`.rev__count .num`, `data-value="84"`), `press` (every `.btn`). No new hooks invented. Footer carries none.
State attributes: `.team__more[aria-expanded][data-state="closed|open"]` (set by main.js, see §7). Opener attributes: none (SECTIONS gives my sections no checkout openers). No events emitted. `body[data-buybar="open"] .foot` padding is CSS (measured 32 px closed, 96 px open).
`.visit__img` sits inside `.visit__media[data-motion="reveal"]` so that "tile + reveal" are two separate elements and work whichever way motion.js parses the attribute.

## 3. Choices where the spec is silent or ambiguous

1. Card order is the spec's order (Rey, Ain, Icha, Martijn Taken, Putu), not BRAND-NOTES order, so the three focus lines show first on mobile.
2. "Show all five" needs behaviour but L5 owns no JS. CSS collapses cards 4 and 5 below 760 only under `html.js` and `:has()` support, so with no JS, no `html.js` or an old browser all five show and the button is hidden (checked). One extra string: the open state reads "Show fewer" (two spans, CSS switches them). Everything else is spec wording.
3. Visit desktop: the spec words no head position. The head spans the top, then image (7/12) left and facts and buttons right, from 1280 up. DOM order is image, head, facts, so mobile reads image, head, facts as specified. 760 to 1279 stays stacked (image 3:2, or 16:9 from 1024; facts as label and value rows). Side by side below 1280 made the facts column tall and turned the picture into a strip that cuts the EF sign.
4. Coaches desktop: five columns from 1200; 760 to 1199 is 3 + 2 with the last row filled (6-column grid, the last two cards 5:4 so rows match). Below 1200 the five cards would be under 185 px wide.
5. Footer: logo left and four columns from 1200; 1024 to 1199 puts the logo above the four columns (the phone number wrapped mid-digit otherwise). The address in the Contact column is a link to the Maps URL (v1.3 linked it; the spec lists it as text).
6. Hours: times keep the spec's `6:00–22:00` form (BRAND-NOTES form) and are wrapped in `.num` (Syne, tabular). The house rule asks for 24-hour `06:00`; the spec wording was copied as written. Flag for Michael if the rule should win.
7. Facebook is in the footer only (spec's Visit facts do not list it; the brief mentioned it for Visit).
8. Cite line: `<cite class="rev__cite">` with a `.rev__src` span in my own namespace instead of the shared `.label`, because `.label` is centred by base.css below 760 and the spec says cite left.
9. Footer concept line: SECTIONS §10 words none; the only visible concept label stays the checkout notice (CONTRACT §1). A `MOCK:` note is in the partial's header comment.
10. JSON-LD: the spec does not ask for it in these sections, so there is none. v1.3's `HealthClub` block (address, geo -8.6389587 / 115.1378823, hours 06:00–22:00, sameAs, no aggregateRating) matches my facts and can be carried over by the integrator unchanged.
11. Static map: none (v1.3 had no map image, the club's Static Maps tile carries an API key and is not copied). No iframe, no third-party request (0 measured).

## 4. Media and sources

| File | Source | Size | Note |
|---|---|---|---|
| `team-rey.webp` | v1.3 `trainer-rey.webp` (640x853), crop top 640x800, resized 600x750, q82 | 17.3 KB | club's `2025/02/REY-scaled.webp` |
| `team-ain.webp` | v1.3 `trainer-ain.webp`, same | 20.1 KB | `2026/05/ain.jpg-e1779367708306.jpeg` |
| `team-icha.webp` | v1.3 `trainer-icha.webp`, same | 18.4 KB | `2025/02/ICHA-scaled.webp` |
| `team-martijn.webp` | v1.3 `trainer-martijn.webp`, same | 15.6 KB | `2025/02/TINOS-scaled.webp` (the live site shows it under "Martijn Taken") |
| `team-putu.webp` | v1.3 `trainer-putu.webp`, same | 17.9 KB | `2025/02/PUTU-scaled.webp` |
| `visit-entrance.webp` | `brand/evidence-v1.0/site-images-original/2026_09_1.jpg` (6000x4000), crop 5460x3640 from the top-left, 1200x800, blur 0.7, q60 | 102.8 KB | club's `2026/09/1-scaled.jpg` |
| `visit-entrance-800.webp` | same, 800x533, blur 0.5, q58 | 58.7 KB | used through `srcset`/`sizes` |
| `visit-logo-white.png` | v1.3 `logo-white.png`, copied as is (208x173, EF mark and ELITE FIT wordmark, club's own PNG) | 1.9 KB | club's `2023/11/Elite_fit_master-1-3.png` |

Rights, as recorded by v1.3 (`MEDIA-SOURCES.md`) and the evidence README: every file is the club's own material from elitefitbali.com, "client's own copyright, proposal use only" until the owner supplies originals. v1.3 recorded nothing about the coaches' permission for portraits, so none is claimed here; the portraits need the owner's and the coaches' consent before live publication. The portrait originals were never downloaded by the evidence run (only the 640 px webp), so 600 px is the best resolution available. Portraits are all below 21 KB. `visit-entrance.webp` is over the ~60 KB guide: the facade photo is dense (palm fronds, scooters, cobbles) and 60 KB at 1200 px needed quality below 40; phones get the 800 px file (58.7 KB). Focal points (judged by eye on the render): portraits crop 3:2 on mobile with `object-position` per coach (Rey 50% 12%, Ain 50% 3%, Icha 50% 4%, Martijn 50% 32%, Putu 50% 26%), heads fully in frame; entrance 58% 50% (mobile and tablet), 30% 50% in the desktop crop.

## 5. Verification (what was measured, what was judged by eye)

Preview: `_build/preview/L5.html`, served on port 8807, Playwright 1.63. WebKit iPhone 390x844 and 375x812 (DPR 2, `isMobile`, `hasTouch`), Chromium 1440x900. Final run after the last CSS and font change.

Measured:
- No horizontal scroll (`scrollWidth <= innerWidth`, body too): WebKit at 320, 375, 390, 760; Chromium at 760, 820, 1024, 1199, 1200, 1279, 1280, 1440. All pass.
- Tap targets (every `a` and `button` inside my four sections, bounding box): 25 at 390 and 375, minimum 44 high and 49 wide; 24 at 1440, minimum 44 x 44. None under 44 either way (the footer "Visit" link was 37 wide on desktop until `min-width: var(--tap)` was added).
- Contrast, computed from the computed styles of 22 element groups at 390 and 1440: minimum 5.12:1 (café eyebrow on the bench), all above the AA need (4.5 normal, 3 large). Token pairs: steel ink 13.97, ink-2 7.13; card on steel 12.33 / 6.30; bench ink 5.97, oak-wall ink-2 5.12; card on bench 7.99 / 6.85; concrete ink 13.61, ink-2 5.49; ink button on concrete 13.61.
- Console: clean (no error, warning, page error or failed request) in WebKit 390, WebKit 375 and Chromium 1440. Requests not to localhost: 0.
- "Show all five": at 390 and 375 touch, initial 3 cards and button shown, `aria-expanded="false"`; tap shows 5, `aria-expanded="true"`, `data-state="open"`, label "Show fewer"; second tap returns to 3. At 1440 five cards in five columns and the button is `display: none`. With `html.js` removed at 390 all five show and the button is hidden.
- Partials: first line is a comment, tags balance, no `<script>`, no `<style>`, no inline style or handler attribute, ids unique, every external href found verbatim in v1.3 `index.html` or SECTIONS.md, the three quotes are byte-identical to v1.3 and SECTIONS. CSS: no `transition`, `animation`, `@keyframes` or `scroll-timeline`, no colour literal.
- Image selection (`currentSrc`): the 1200 px entrance loads at 1024, 1280 and 1440 (DPR 1); the phone choice was not logged.

Judged by eye (screenshots at 390, 375, 320, 820, 1024, 1280, 1440): portrait crops and headroom, entrance crop, section composition, rhythm (steel, bench, concrete, steel), the footer logo size, the wrap of the long CTA label at 320, the footer bottom line wrap at 390 and 375.
Not measured: real-device touch feel, motion (not in this lane), frame time, LCP and transfer budget (integrator and Step 4), screen-reader output.

## 6. Fact check (text and links against BRAND-NOTES and v1.3)

| Item on the page | Source | Result |
|---|---|---|
| Address `Jalan Sempol No. 26, Pererenan, Kabupaten Badung, Bali`; H2 `Jalan Sempol 26, Pererenan.` | BRAND-NOTES 4, SECTIONS 9 | match |
| Hours `Perform 6:00–22:00 · Recharge 6:30–22:00 · seven days a week`; footer line the same | BRAND-NOTES 4 (Perform 6:00–22:00, Recharge 6:30–22:00, 7 days) | match |
| Phone `+62 857-2022-1101`, `tel:+6285720221101` | BRAND-NOTES 4, v1.3 footer | match |
| WhatsApp `+62 851-9552-0220`, `https://wa.me/6285195520220` (+ the two spec prefilled texts) | BRAND-NOTES 4 (number on the 2026 sales pages; older pages use 6285720221101, owner flag already in BRAND-NOTES) | match |
| Email `info@elitefitbali.com` as `mailto:` | BRAND-NOTES 4 | match |
| Instagram `@elitefitbali` → `https://www.instagram.com/elitefitbali/`; Facebook → `https://www.facebook.com/elitefitbali` | BRAND-NOTES 4, v1.3 | match |
| Maps `https://maps.app.goo.gl/4qwxZzF3nnM1jeh36` (address, button, review count) | v1.3, SECTIONS 8, 9 | match |
| `On site`: `Restaurant. Treatments on request, booked 48 hours ahead.` | BRAND-NOTES 6 | match |
| Coaches Rey, Ain, Icha, Martijn Taken, Putu; focus lines as SECTIONS 7 (Putu: `Coach`, none claimed) | BRAND-NOTES 7 (Rey published; others derived from classes taught) | match, no credential added |
| Three quotes, `Tom J.`, `Marianne`, `Åsmund Tveitevoll`, `Google review` | BRAND-NOTES 8, v1.3 `#reviews` | byte-identical to v1.3 |
| `84` with `data-value="84"`, `reviews on Google`, no rating number, no stars, no aggregateRating | BRAND-NOTES 8 | match (the quote "great aircondition" is the reviewer's own word, attributed to him; BRAND-NOTES 13 only bars it as a club statement) |
| Footer links Partner discounts, Privacy policy, Terms | SECTIONS 10 | match |
| Banned wording in visible copy (superlatives, "concept", "keyword", "SEO") | CONCEPT §4, SECTIONS global copy rules | none |

## 7. Requests to other lanes and the integrator

1. **main.js (integrator), required for mobile "Show all five"** (the same code runs in `_build/preview/L5-team.js`):
   ```js
   document.addEventListener('click', function (e) {
     var btn = e.target.closest ? e.target.closest('.team__more') : null;
     if (!btn) return;
     var open = btn.getAttribute('data-state') === 'open';
     btn.setAttribute('data-state', open ? 'closed' : 'open');
     btn.setAttribute('aria-expanded', open ? 'false' : 'true');
   });
   ```
   If main.js lacks it while `html.js` is set, cards 4 and 5 stay hidden on phones and the button does nothing. The `html.js` head one-liner (CONTRACT §6) is part of the contract the CSS relies on.
2. Motion lane (M): `counter` on `.rev__count .num` has `min-width: 2ch` (right-aligned), so the count-up cannot change the width; the markup text is the final `84`, so no-JS and reduced motion show the real number. `tile` targets `.team__img` and `.visit__img`, both already `overflow: hidden` with a radius.
3. Shop lane (L2): `body[data-buybar="open"] .foot` is handled in community.css.
4. Integrator: copy the media table in §4 into MEDIA-SOURCES.md; keep v1.3's JSON-LD without aggregateRating (§3 item 10); the partials use `assets/...` paths relative to the page root.
5. Michael, for the club (not code): the portraits and their consent; the WhatsApp number discrepancy already noted in BRAND-NOTES 4.

## 8. Open issues

- Hanken Grotesk: while this lane was being built, `assets/fonts/hanken-grotesk-latin-var.woff2` was the Italic face (`italicAngle -8`, name "Hanken Grotesk Italic") and every body text rendered slanted. The Fable lead replaced it at 11:36 (now `italicAngle 0`, "Regular"); all final screenshots and numbers above are on the upright file. Nothing left to do, recorded because earlier renders of other lanes may show italics.
- `visit-entrance.webp` is 102.8 KB against the ~60 KB guide (reason in §4).
- The EF sign in the entrance photo is partly hidden by a palm frond and the right edge of the wordmark is trimmed in the 1280 to 1439 desktop crop; the full sign is only visible in a different photo, which the club would have to supply.
- Not verified: motion behaviour of the hooks (M's lane), the real build.mjs include path, screen-reader reading order.
