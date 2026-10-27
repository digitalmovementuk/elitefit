> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Elite Fit homepage v2.0: build contract

Version: v1.0 — 2026-10-01 · owner: Michael (orchestrator) · binding for every lane. Change log at the bottom.

This file is the only thing the parallel lanes share. Read it before you write a file. It fixes names, so lanes can work at the same time without seeing each other's output. Where it conflicts with a lane's own idea, the contract wins; raise the conflict in your report, do not fix it silently.

## 0. Paths

- ROOT = `/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30`
- OUT = `ROOT/homepage-v2.0` (all output goes here; the QA proof goes to `OUT/_qa/v2.0/`)
- Baseline, read-only, copy from it, never edit: `ROOT/proposal/_internal/versions/site-preview-v1.3/` (archived) and `ROOT/proposal/site-preview/` (same content, has BRAND-NOTES.md, MEDIA-SOURCES.md, the WebP images, the reel `assets/video/hero-reel-9x16.mp4`)
- Evidence: `ROOT/research/*`, `ROOT/brand/evidence-v1.0/*` (originals in `site-images-original/`, inventory in `typography-and-media/image-inventory.csv`, zone colours in `zone-clusters.json`)
- Never overwrite or edit anything outside OUT. Never overwrite a file another lane owns. Never overwrite an earlier QA file: new run = new folder name with a suffix (`-r2`).

## 1. Locks (from Raoul's brief, condensed)

- Homepage only. Framework-free HTML, CSS and JS. English, visitor-facing, no internal wording, no medical claims, nothing unpublished. Facts and prices only from BRAND-NOTES.md and the evidence files.
- The pass shop and checkout are a labelled concept: no real data collected, no payment provider contacted, nothing published, committed, pushed or sent. Every mock carries a `MOCK:` comment in code and a visible "Concept preview, nothing is charged or stored" label in the checkout.
- Fonts: Syne for display, one open body face, no Ageo, no Gilroy. Square corners are a CEx rule and do not apply here.
- Mobile below 760 px: one column, centred eyebrows, labels and chips (use the shared classes), tap targets 44 px or more, nothing side by side.
- No library unless its licence is recorded in `OUT/MEDIA-SOURCES.md` and the file is self-hosted under `assets/vendor/`. Default: no library.
- Motion rules: no scroll-jacking, no pinned traps, animate transform and opacity only (anything else only if measured at 60 fps), reduced-motion and data-saver honoured with the layout intact, zero layout shift.
- No Firecrawl, no paid API calls, no external accounts. Playwright only for browser work.

## 2. File ownership (no shared files)

| Owner | Files (all under OUT) |
|---|---|
| Step 1, Fable lead | `_build/CONCEPT.md`, `_build/SECTIONS.md` (section list, markup contract, English copy), `_build/ART-DIRECTION.md`, `assets/css/tokens.css`, `assets/css/base.css`, `assets/fonts/*` |
| M, motion lead | `assets/css/motion.css`, `assets/js/motion.js`, `MOTION-AND-DESIGN.md` (+ `.html` twin), `_build/lane-M-report.md` |
| L1, hero | `partials/header.html`, `partials/hero.html`, `assets/css/hero.css`, `assets/js/hero.js` (only if needed), `assets/img/hero-*`, `assets/video/hero-*` |
| L2, pass shop | `partials/passes.html`, `partials/buybar.html`, `partials/checkout.html`, `assets/css/shop.css`, `assets/js/shop.js` |
| L3, schedule | `partials/schedule.html`, `assets/css/schedule.css`, `assets/js/schedule.js`, `assets/data/schedule.mock.json` |
| L4, recovery and zones | `partials/recovery.html`, `partials/zones.html`, `assets/css/recovery.css`, `assets/css/zones.css`, `assets/img/rec-*`, `assets/img/zone-*` (namespaces `.rec*`, `.zones*`) |
| L5, people and place | `partials/trainers.html`, `partials/reviews.html`, `partials/visit.html`, `partials/footer.html`, `assets/css/community.css`, `assets/img/team-*`, `assets/img/visit-*` (and every extra section the list gives to L5) |
| L6, data and API | `assets/js/api.js`, `assets/data/passes.json` (seeded by Michael, L6 owns it from now), `API-CONTRACT.md` (+ `.html`), `WP-MAPPING.md` (+ `.html`) |
| Step 3, integrator | `index.html`, `build.mjs`, `assets/js/main.js`, `CHANGELOG.md`, `DEVIATIONS.md`, `MEDIA-SOURCES.md`, `TRACEABILITY.md` (+ `.html` twins), budget runs |

Lane preview pages are allowed in `_build/preview/<lane>.html` (tokens.css + base.css + your partial + your CSS/JS + api.js). They are scratch, not part of the page.

## 3. Partials

- One HTML fragment per partial, no `<html>`, `<head>`, `<body>`, no `<script>`, no inline `<style>`, no inline event handlers. The integrator loads scripts and assembles the page (`build.mjs` replaces `<!-- @include partials/x.html -->`; each partial maps to one WordPress `template-parts/*.php`).
- The first line of each partial is an HTML comment: lane, owner, `data-motion` values used, JS hooks used, assets used.
- Section root: `<section id="<id>" class="sec sec--<name>" data-zone="workout|cafe|spa|neutral" aria-labelledby="<id>-title">`. Section order and ids come from `_build/SECTIONS.md`.
- Class namespaces so lanes never collide: hero `.hero*` and `.hdr*`; shop `.shop*`, `.buybar*`, `.co*` (checkout); schedule `.sched*`; recovery `.rec*`; people and place `.team*`, `.rev*`, `.visit*`, `.foot*`. Shared classes (`.container`, `.sec`, `.btn`, `.eyebrow`, `.chip`, `.label`, `.stack`) belong to `base.css`; nobody redefines them. A lane that needs a variant adds a modifier in its own namespace.
- Lane CSS contains no `transition`, no `animation`, no `@keyframes`, no `scroll-timeline`. All motion is `motion.css` / `motion.js`, keyed off `data-motion` attributes and the state attributes below. (`scroll-snap`, `position: sticky` and `:focus-visible` outlines are layout, not motion, and stay in the lane.)
- Images: `width` and `height` attributes on every `<img>`, `loading="lazy"` below the first screen, WebP, `alt` text that describes the picture. Video: `muted loop playsinline`, `preload="none"` or `metadata`, always a real `poster`.

## 4. State attributes (how lanes talk to the motion layer without sharing files)

| Attribute | Set by | Meaning |
|---|---|---|
| `data-state="open\|closed"` | shop.js, main.js | sheets, dialogs, menu, accordions |
| `data-checkout-step="choose\|details\|pay\|done"` on `#checkout`; each panel has `data-step="…"` and `data-active="true"` when current | shop.js | checkout state machine |
| `data-selected="true"` | shop.js, schedule.js | selected pass length, tier, day tab |
| `data-now="true"`, `data-next="true"`, `data-past="true"` on schedule items | schedule.js | the now / next marker |
| `data-value="350000"` plus `data-format="idr"` on a price element | shop.js | price source of truth; motion.js morphs the visible number when `data-value` changes; the real text stays in the DOM and in `aria-label` |
| `data-stage="0..3"` on `.rec`, `data-stage-active="true"` on a stage | motion.js (progressive enhancement) | recovery sequence position. Without JS, all four stages are visible one after another |
| `data-zone="workout\|cafe\|spa\|neutral"` | markup | motion personality of the zone (crisp / warm / slow) |
| `data-scrolled="true\|false"` on `#site-header` | motion.js | header condensed state (presentation only) |
| `body[data-buybar="open\|closed"]`, `body[data-scroll-lock]` | shop.js | sticky buy bar visible; page scroll locked while the checkout sheet is open (no layout shift: compensate the scrollbar on desktop) |
| opener attributes `data-open-checkout`, `data-tier`, `data-length`, `data-duo` | markup (any lane) | shop.js listens by delegation on `document` and opens the checkout with that preselection |

Rule: a lane may change these attributes; it never animates. The motion layer never changes content, only presentation.

## 5. `data-motion` vocabulary (seed; `_build/SECTIONS.md` is the authority and may extend it)

`reveal` (fade and rise; `data-motion-delay` in ms; `data-motion-from="up|left|right|scale"`) · `reveal-words` (headline) · `stagger` (container; children carry `data-motion-item`) · `parallax` (`data-motion-depth="0.08"`) · `hero` (container; layers `data-motion-layer="media|wordmark|copy|card|cue"`) · `header` · `price-morph` · `sheet` · `step` · `buybar` · `now-next` · `tab-indicator` · `recovery` (layers `data-motion-layer="image|tone|temp|label"`) · `lift` (card hover) · `press` (button press) · `counter`.

A lane that needs a hook not on this list invents `data-motion="x-<lane>-<name>"` and lists it in the header comment of its partial; the motion lead reads those comments and maps them in Step 3.

## 6. JS contract

Classic deferred scripts, each an IIFE that attaches to `window`; no ES modules, no bundler. Load order set by the integrator: `api.js`, `shop.js`, `schedule.js`, `hero.js`, `motion.js`, `main.js`. No script is render-blocking. An inline one-liner in `<head>` (integrator) sets `html.js`, and `html.motion-ok` only when `prefers-reduced-motion: no-preference` and not `navigator.connection.saveData`. All initial hidden states in `motion.css` are gated by `html.motion-ok`, so no-JS, reduced-motion and data-saver show the full layout.

```
window.EFApi = {
  mode: 'mock',                                   // 'mock' | 'live'
  tz: 'Asia/Makassar',                            // Bali, UTC+8
  now(): Date,                                    // honours ?now=2026-10-01T09:30 (Bali local) for QA
  baliParts(date): { ymd, hhmm, dow },            // dow 1=Mon … 7=Sun
  getPasses(): Promise<Passes>,                   // GET  /api/passes
  getSchedule({ date, days }): Promise<Schedule>, // GET  /api/schedule?date=YYYY-MM-DD&days=7
  createCheckout(order): Promise<Session>,        // POST /api/checkout
  getCheckoutStatus(id): Promise<Status>,         // GET  /api/checkout/:id
  submitLead(lead): Promise<{ ok, id }>           // POST /api/lead
}
```

- `order` = `{ items: [{ tierId, lengthId, qty, startDate }], duo: boolean, customer: { name, email, whatsapp } }`. `lengthId` ∈ `day|week|w4|w12|w26|w52`.
- `Session` (mock) = `{ id, status: 'awaiting_payment', total, currency: 'IDR', paymentUrl: null, expiresAt, mock: true }`. In live mode `paymentUrl` is the Xendit hosted checkout URL and the page redirects to it.
- `Status` = `{ id, status: 'awaiting_payment|paid|expired|failed', reference }`. The mock adapter flips to `paid` after the "Simulate payment" button in the labelled concept panel.
- `submitLead` = `{ name, whatsapp, interest: 'pass|membership|tour|recovery', source }`; mock returns `{ ok: true, id: 'mock-…' }`, stores nothing.
- Custom events on `document` (all `detail` objects): `ef:passselect` `{tierId, lengthId, price}` · `ef:checkout:step` `{from, to}` · `ef:schedule:render` `{date}` · `ef:schedule:nownext` `{nowId, nextId}` · `ef:recovery:stage` `{index, key}`. Lanes emit, the motion layer and main.js listen.
- `console.error` must stay silent on a healthy load. The mock adapter logs one `console.info('[EF mock adapter]')` line.

## 7. Data shapes

`assets/data/passes.json` (seeded, prices verified against BRAND-NOTES item 5; do not change a number; L6 may add fields):
`{ currency, updated, source, lengths: [{id, label, days}], tiers: [{id, name, prices: {day, week, w4, w12, w26, w52}}], duo: {dayPassEach, fourWeek: {perform, elite, recharge}}, classPasses: [{id, name, price, classes}], notes: [] }`

`assets/data/schedule.mock.json` (L3; a weekly template that `api.js` expands to dates): `{ source: 'mock-of-gymmaster', tz, template: [{ dow: 1, classes: [{ id, start: 'HH:MM', end, title, trainer, zone: 'workout|cafe|spa', spotsLeft, capacity, bookable }] } … 7 days] }`. `getSchedule` returns `{ source, tz, generatedAt, days: [{ date, dow, classes: [...] }] }`. The class names, times and trainers come from the live club schedule as captured in v1.3 `index.html` and the evidence files; mark invented fields (`spotsLeft`, `capacity`) as mock.

## 8. Budgets and how they are measured (the Step 4 agents use exactly this)

- Profile P1 (the pass/fail one, "mid-range phone"): Chromium via CDP, viewport 390x844, DPR 2, `Emulation.setCPUThrottlingRate` 4, network 1.6 Mbit/s down, 750 kbit/s up, 150 ms RTT (Lighthouse mobile default). Profile P2 for information: CPU 4, 9 Mbit/s, 60 ms. Median of 5 cold runs (new context, empty cache).
- LCP ≤ 2.5 s (`largest-contentful-paint` observer, P1). The LCP element must be a small poster or the headline, preloaded; never the video.
- CLS = 0.00 over a whole session: load, scroll to the end, every motion state, every checkout step, font swap. Fonts: `font-display: swap`, preloaded, with a size-adjusted fallback.
- First-view transfer ≤ 900 KB: bytes on the wire (CDP `Network.loadingFinished.encodedDataLength`) from navigation to `load` plus 2 s idle. Media that starts after that (the hero clip, started on idle and never under data-saver) is reported on its own line, and the total with it is reported too. State this definition in the report.
- No render-blocking scripts: every `<script>` is `defer`/`async`; the only inline script is the `<head>` one-liner.
- Frame time (Chromium, CPU 4x): rAF deltas during every motion state, p50 / p95 / p99, share of frames over 16.7 ms and over 33 ms, plus `longtask` count. Report honestly; target 60 fps (p95 ≤ 16.7 ms).
- No horizontal scroll at 320, 360, 375, 390, 414, 600, 759, 760, 768, 820, 1024, 1280, 1440, 1920 (`scrollWidth <= innerWidth`, also with the checkout sheet open).
- No console errors or failed requests on load and through every journey.
- Browsers: WebKit iPhone 375x812 and 390x844 (DPR 2, `isMobile`, `hasTouch`), Chromium 1440x900, one tablet width (820x1180).

## 9. Journeys (the stopwatch counts them exactly like this)

Start: fresh load at 390x844 (mobile) or 1440x900 (desktop), cookie-free, `?now=2026-10-01T09:30`. A tap is one discrete tap or click. A scroll gesture is counted separately and reported; the DoD is met only if the number of taps is within the limit; scroll gestures are listed next to it.
1. First screen (mobile 390x844, no scroll): club name or logo, the primary "Buy a pass" action and a peek of today's classes (the strip header and the first class card at least partly visible) are all inside the viewport.
2. Today's schedule: ≤ 2 taps to see the full day list.
3. Day pass to the first checkout step: ≤ 3 taps. The first checkout step is `details` (the step after `choose`); also report taps to `choose`.
4. Membership (any tier, 4 weeks) to the first checkout step: ≤ 4 taps.
Each journey is run at 390 and at 1440, with seconds from first tap to the step being visible and settled.

## 10. Tooling that exists on this machine

- Playwright 1.63: `require('/Users/raoulito/.npm/_npx/705bc6b22212b352/node_modules/playwright')`; browsers chromium-1246 and webkit-2365 are installed; `recordVideo` works (VP8 `.webm`).
- No system ffmpeg. The bundled one at `~/Library/Caches/ms-playwright/ffmpeg-1011/ffmpeg-mac` does VP8/WebM only (can decode the reel, can extract frames, cannot write H.264).
- System `python3` has OpenCV 5.0 (WebP write and `avc1` MP4 write both tested OK) and Pillow 11. macOS `sips`, `avconvert`, `afconvert` exist.
- Serve with `python3 -m http.server <port> --directory "OUT"`. Ports: Michael 8800, fable 8801, M 8802, L1 8803, L2 8804, L3 8805, L4 8806, L5 8807, L6 8808, integrator 8809, QA render 8811, a11y 8812, journey 8813, perf 8814, verdict 8815. Pick only your own.
- Never `cd` out of OUT in a shared shell and never write into another session's scratchpad. Temp files go in your own scratchpad.

## 11. Reporting

Every lane writes details into `_build/lane-<id>-report.md` and sends the parent a final message of 12 lines at most: files written, `data-motion` hooks used, open issues for the integrator, anything you could not verify. Say plainly what is mock and what you measured. Documents carry a version line and a change log; each document in the table above gets an `.html` twin (self-contained, light theme).

## 12. Decisions on the design lead's change requests (CONCEPT §11), v1.1

1. Class passes: DECLINED for v2.0. They stay information plus a WhatsApp link, as SECTIONS §4 says (the brief names day, week, 4-12-26-52-week and Duo for the shop). `api.js` and API-CONTRACT.md document `tierId: "class"` with `lengthId: "c1" | "c10"` as reserved for a later release; the mock adapter accepts it but no UI sends it.
2. State attributes `data-scrolled`, `body[data-buybar]`, `body[data-scroll-lock]` and the opener attributes: ACCEPTED, added to §4.
3. Extra partial `partials/zones.html` + `assets/css/zones.css` + `assets/img/zone-*`, namespace `.zones*`, owner L4: ACCEPTED, added to §2.
4. Hooks `clock`, `tile`, hero layer `board`, `--num-stage`: ACCEPTED. `_build/SECTIONS.md` §13 is the authority for every `data-motion` value. `clock` text is written by `hero.js` (L1) from `EFApi.now()`; the motion layer only animates it.
5. Performance reminder for M and L1: the LCP element is the hero poster image (preloaded, `fetchpriority="high"`) or the headline, and it must never start at `opacity: 0`; hero choreography animates `transform` on layers around it.

## Change log

- v1.0 — 2026-10-01 — first version (Michael).
- v1.1 — 2026-10-01 — decisions on the design lead's change requests (§12), L4 owns zones, state attributes extended (Michael).
