> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# homepage-v3 build contract

Version: v3.0 — 2026-10-02 · owner: orchestrator (Michael)
Changelog: 2026-10-02 created. Binding for every lane. Questions or change requests: write a file in `_build/requests/` (one file per request) and carry on with a default.

P = `/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30/homepage-v3` (all paths below are relative to P). Live: http://127.0.0.1:8201/ (Direction A, v2.1, runs on :8200). The server rebuilds and reloads on every save; CSS swaps in place.

## 1. Structure (own build, nothing from v2.x)
- `index.template.html` + `partials/*.html` -> `index.html` via `node build.mjs` (generated, never edit `index.html`). The dev server runs the build on save.
- Partial name = placement: `h-*.html` into `<head>` (preloads) · `00-09` header region · `10-49` `<main>` in file order · `50-99` fixed UI after `</main>`.
- Styles: `assets/css/<lane>.css`, linked in the template in this order: tokens, base, components, hero, classes, nutrition, training, rest, pricing, buybar, whatsapp, menu, checkout, motion.
- Scripts: ES modules. `assets/js/main.js` boots; `hero.js` loads first, all other modules load after the `load` event in idle time. A module exports `init(ctx)`. `ctx` = `{ t, copy, reduced, saveData, motion, phone (MediaQueryList), root }`.
- Shared helpers (read-only for lanes): `assets/js/timetable.js` (WITA clock, timetable model, live/next class, countdown, hours/open state). Missing helper? Request it.
- Media: `assets/img`, `assets/video`, `assets/fonts`, `assets/data`. Raw inputs stay untouched in `_inputs/` (APFS clones of the club's own files, logged in `INPUTS.md`).

## 2. Ownership (a lane edits only its own files; nothing is shared)
| Lane | Files |
|---|---|
| hero (Opus 5.5 max) | `partials/h-hero.html`, `00-header.html`, `10-hero.html`, `css/hero.css`, `js/hero.js`, `img/hero-*`, `video/hero-*`, `img/logo-*` |
| design-system D1 (Fable 5.1) | `css/tokens.css`, `css/base.css`, `css/components.css`, `fonts/*`, `component-sheet.html`, `DESIGN-SYSTEM-PERFLAB.*` |
| classes | `partials/20-classes.html`, `css/classes.css`, `js/classes.js` |
| nutrition | `partials/30-nutrition.html`, `css/nutrition.css`, `js/nutrition.js`, `data/menu.json` (from the menu lane), `img/nutrition-*`, `video/nutrition-*` |
| training | `partials/31-training.html`, `css/training.css`, `js/training.js`, `img/training-*`, `video/training-*` |
| rest | `partials/32-rest.html`, `css/rest.css`, `js/rest.js`, `img/rest-*`, `video/rest-*` |
| pricing | `partials/40-pricing.html`, `50-buybar.html`, `51-whatsapp.html`, `css/pricing.css`, `buybar.css`, `whatsapp.css`, `js/pricing.js`, `buybar.js`, `whatsapp.js`, `data/site.json`, `data/offers.json` |
| facts | `FACTS.*`, `data/hours.json`, `_build/facts/*` |
| menu | `data/menu.json` (hands over to nutrition), `MENU-SOURCING.*` |
| voice | `VOICE-GUIDE-ELITEFIT.*` |
| copy writer | `copy/copy.json`, `copy/COPY-v3.0.*` |
| motion (Opus 5.5 max) | `css/motion.css`, `js/motion.js`, `MOTION-V3.*`; may edit other lanes' partials only AFTER those lanes' ready markers exist and only to add `data-*` hooks |
| menu sheet | `partials/01-menu.html`, `css/menu.css`, `js/menu.js`, `data/menu-nav.json`, `img/social-*` (own icons), `copy/slots/menu.json` |
| checkout | `partials/52-checkout.html`, `css/checkout.css`, `js/checkout.js`, `data/checkout.json`, `copy/slots/checkout.json` |
| orchestrator | `build.mjs`, `index.template.html`, `js/main.js`, `js/timetable.js`, `partials/29-pillars-intro.html`, `README`, `CHANGELOG`, `DECISIONS`, `INPUTS`, `_build/CONTRACT.md` |

## 3. Tokens (names are the contract; D1 supplies the values from the measured Performance Lab system)
Use only `var(--…)` from `assets/css/tokens.css`: colour `--bg --bg-raised --bg-sunken --bg-inverse --fg --fg-muted --fg-faint --fg-inverse --line --line-strong --brand --accent --accent-ink --focus --ok --live --wa --overlay` · type `--font-display --font-body --font-mono --fs-micro --fs-label --fs-small --fs-body --fs-lead --fs-h3 --fs-h2 --fs-h1 --lh-tight --lh-snug --lh-body --tr-display --tr-body --tr-label --fw-*` · space `--s-1…--s-10 --gutter --maxw --header-h --buybar-h --section-y` · shape `--r-0…--r-3 --r-pill --bw` · motion `--ease-out --ease-inout --ease-press --dur-press --dur-ui --dur-reveal --dur-slow` · z `--z-*`. A lane that needs a new token adds it to its OWN css file under its own prefix (e.g. `--cls-…`), never to tokens.css. Shared component classes (buttons, chips, rows, cards, fields) come from `components.css` (D1); until it exists use your own class names with your lane prefix and switch later.

## 3b. Events between lanes (no shared files)
- `ef:menu` (document CustomEvent): dispatched by the header menu button (`[data-menu]`, hero lane); the menu sheet (menu lane) opens/closes and keeps `aria-expanded` of `[data-menu]` in sync.
- `ef:checkout` (document CustomEvent, `detail: { tier, length, duo }`, ids as in passes.json): dispatched by the primary button on each pricing card (pricing lane) and by any other buy action; the checkout lane opens the journey. Until the checkout module signals `window.EF.checkoutReady === true` the pricing button falls back to its wa.me link.
- First-viewport rule (Raoul 2026-10-02): at 390x844 the hero ends at 60 to 62 svh and the Classes heading plus the complete now/next card sit fully inside the first viewport, not covered by the WhatsApp button; the same at 375x667 and 360x740 as far as the 60 svh minimum allows.

## 4. Section markup contract
- Every section: `<section class="sec sec--<name>" id="<anchor>" data-sec="<name>" aria-labelledby="<anchor>-h">` with an `h2.sec__title#<anchor>-h` inside a `div.wrap`. Anchors: `classes`, `elite-nutrition`, `elite-training`, `elite-rest`, `pricing` (pillars head = `pillars`).
- Mobile first, one column below 760 px, nothing side by side on a phone except small label pairs; no horizontal overflow from 320 px; tap targets 44 px or more; body text 15-16 px or more; AA contrast. Mobile text centred only for hero items (see hero), section copy left-aligned unless the design system says otherwise.
- Media: `<video muted loop playsinline preload="none">` with a real poster; lazy; the page never has more than 2 clips playing on a phone (`data-clip` marks them, motion/lane code plays only those near the viewport). Stills where no footage exists.
- Interactive controls are real `<button>`/`<a>`/`<input>`; state in `aria-*`; focus ring from base.css.

## 5. Copy system (strings come from the copy writer, never from lanes)
- Every visible string sits in an element with `data-copy="key"` (text only, no child tags) and carries a provisional English text. `build.mjs` replaces it with `copy/copy.json[key]` when the key exists. Attributes: `data-copy-attr="aria-label:key;title:key2"`. JS strings: `ctx.t('key', {n: 3})` with `{n}` placeholders; the copy map is inlined in the page.
- Each lane lists its slots in `copy/slots/<lane>.json`: `{ "<key>": { "role": "h2|label|button|body|list-item|tab|aria|…", "max": 40, "provisional": "…", "note": "what it must say, which kind of fact it may use" } }`. Key = `<lane>.<thing>`. Data strings that come from the data files (class names, times, prices, temperatures, coach names, menu items) are rendered from data, not from copy.json.
- English, plain, for the visitor. No internal wording on the page (no "prototype", "SEO", "keyword", "landing page", "Direction", "v3"). No invented fact, number, price, seat count, name or offer.

## 6. Voice guard (summary, full text in VOICE-GUIDE-ELITEFIT.md)
Welcoming, personal, calm; speaks to one person; community and belonging; practical for people who live in Bali. Banned: hype, status, competition words (elite athlete, beast, crush, shred, no excuses, exclusive, luxury, VIP, transformation promises); "Elite" only inside product and pillar names (Elite tier, Elite Nutrition, Elite Training, Elite Rest), never as a boast; no clinical, testing or performance-outcome claims; no new superlatives or promises.

## 7. Budgets (set at step 1, reported at freeze)
- First view transfer (cold, phone 390x844, up to `load` + 3 s, clips excluded because they start after load) <= 900 KB. Hero poster is the LCP element, preloaded, <= 220 KB. CLS 0.
- JavaScript, whole Phase 1 page <= 60 KB gzip; first-view JS (main + hero + timetable) <= 14 KB gzip. CSS whole page <= 40 KB gzip. Fonts <= 120 KB first view (subset, `font-display: swap`, preload the display face only).
- Clips: <= 450 KB each at 3 to 5 s (webm/vp9 or mp4/h264 pair is the lane's call), poster first, `preload="none"`.
- Motion: transform and opacity only (anything else only with a 60 fps measurement noted in MOTION-V3.md); at most 3 simultaneous animations; UI feedback <= 600 ms; atmospheric reveals <= 900 ms; interruptible; never delays a primary action; reduced motion and data-saver keep layout and information; no scroll hijacking; no overlay in the first 3 s.

## 8. Reporting and logging
- One line per change: `_tools/log.sh <lane> <file> "<what>"`.
- Ready marker when a deliverable is usable by others: write `_build/ready/<lane>.ready` (one line: time + what is ready). Wait for another lane's marker with a loop of at most 9 minutes per Bash call, then carry on with what you have.
- Decisions: one line each into `DECISIONS.md` (append, format `- 2026-10-02 · <lane> · <decision> · why`).
- Documents: every document carries `Version: v3.0 — <date>` and a Change log at the bottom, and exists as `.md` plus an `.html` twin made with `node _tools/md2html.mjs <file.md>`.
- Lane report at the end: `_build/reports/<lane>.md` and your final message to the orchestrator (<= 10 lines: what is done, what to look at in the live tab, what is open).

## 9. Hard rules (all lanes)
No booking, buying, subscribing, account creation, form submission, outreach, publishing or pushing. No contact with the club or with theperformancelab.ca beyond reading public pages for the measurement lanes. Nothing of The Performance Lab (name, logo, photos, video, icons, code, font files, sentences) enters the site or the repo; screenshots of the Lab are internal evidence under `research/lab/` only. Nothing from `homepage-v2.0/` is copied or imported except the raw inputs already cloned into `_inputs/`; `homepage-v2.0/` is read-only for everyone, v2.x docs are a behaviour spec only. Secrets (Firecrawl key) are never printed or written.

## Change log
- v3.0 — 2026-10-02: created.
