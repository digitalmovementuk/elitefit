> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Elite Fit Bali homepage v2.0: read me

Version: v2.0 — 2026-10-01 · owner: integrator (Step 3) · change log at the bottom.

A concept preview of a new homepage for Elite Fit Bali (gym and recovery club, Pererenan). Framework-free HTML, CSS and JS, assembled from twelve partials. **It is not live and must not be indexed**: the page carries `<meta name="robots" content="noindex, nofollow">`, all data is mock, and the pass checkout is a labelled concept ("Concept preview, nothing is charged or stored"): nothing is charged, stored or sent, and no provider is contacted.

## Where v2.0 lives

v2.0 is frozen as a read-only snapshot in **`_versions/v2.0/`** (taken 01.10.2026, 14:40). The folder root (`homepage-v2.0/`) is now the working copy of the v2.1 change request and no longer equals v2.0. Run, review and measure v2.0 from the snapshot.

## How to run

```sh
python3 -m http.server 8800 --directory "/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30/homepage-v2.0/_versions/v2.0"
```

Then open **http://127.0.0.1:8800/** (that serves `index.html`). Useful variants:

| URL | What it shows |
| --- | --- |
| `http://127.0.0.1:8800/` | the page as shipped (comment-stripped CSS and JS) |
| `http://127.0.0.1:8800/?now=2026-10-01T09:30` | the same with the Bali clock frozen at Thursday 09:30, so the "now / next" markers are reproducible (mock mode only) |
| `http://127.0.0.1:8800/index.dev.html` | the same page linked to the lane sources (`assets/css/`, `assets/js/`), comments kept, for debugging |

Open it at a phone width (390) and at a desktop width (1440). Try: "Buy a pass" (hero, header, buy bar, pass cards) → choose → details → pay → "Simulate payment" → done; the Today day chips and "Full day"; the pass-length switch and Duo; the Recharge rooms (desktop: sticky panel); "Show all five" coaches on a phone.

The concept checkout opens only on a local host (localhost, 127.0.0.1, `file:`, `*.local`, `*.test`) or a host listed in `window.EF_CONFIG.previewHosts`. Anywhere else every "Buy a pass" opens a pre-filled WhatsApp chat and the checkout stays hidden (`assets/js/main.js` §1), so the mock can never run on the club's public domain.

## How to build

The snapshot is read-only: to rebuild v2.0, copy `_versions/v2.0/` to a scratch folder and run there (Node 18 or newer, no dependencies, no network):

```sh
node build.mjs        # index.html + index.dev.html, assets/css-dist/, assets/js-dist/, _build/build-sizes.json
node build.mjs --wp   # also wp/template-parts/*.php and wp/assets/ (WP-MAPPING.md §3)
```

`build.mjs` replaces every `<!-- @include partials/x.html -->` in `index.template.html` (SECTIONS §0 order), strips each partial's header comment and every other HTML comment except `MOCK:` notes, and writes comment-stripped copies of the CSS and JS (JS token streams verified identical to the sources). `--wp` adds the PHP guard line, routes `assets/` URLs through `EF_HOME_URL` and the home link through `home_url()`, strips comments, copies `assets/`, and prints `checkout.php` only when `EF_HOME_CHECKOUT === 'concept'` (staging and proposal only). The PHP is untested (no PHP on the build machine).

## File map (by lane)

| Owner | Files |
| --- | --- |
| Step 1, design lead (Fable) | `_build/CONCEPT.md`, `_build/SECTIONS.md`, `_build/ART-DIRECTION.md`, `assets/css/tokens.css`, `assets/css/base.css`, `assets/fonts/` (+ `LICENSES.md`) |
| M, motion | `assets/css/motion.css`, `assets/js/motion.js`, `MOTION-AND-DESIGN.md` (+ html), `_build/motion-states.json` |
| L1, header and hero | `partials/header.html`, `partials/hero.html`, `assets/css/hero.css`, `assets/js/hero.js`, `assets/img/hero-*`, `assets/video/hero-reel-9x16.mp4` |
| L2, pass shop, buy bar, checkout | `partials/passes.html`, `partials/buybar.html`, `partials/checkout.html`, `assets/css/shop.css`, `assets/js/shop.js` |
| L3, Today strip | `partials/schedule.html`, `assets/css/schedule.css`, `assets/js/schedule.js`, `assets/data/schedule.mock.json` |
| L4, the club and Recharge | `partials/zones.html`, `partials/recovery.html`, `assets/css/zones.css`, `assets/css/recovery.css`, `assets/img/zone-*`, `assets/img/rec-*` |
| L5, coaches, reviews, visit, footer | `partials/trainers.html`, `partials/reviews.html`, `partials/visit.html`, `partials/footer.html`, `assets/css/community.css`, `assets/img/team-*`, `assets/img/visit-*` |
| L6, data and API | `assets/js/api.js`, `assets/data/passes.json`, `API-CONTRACT.md` (+ html), `WP-MAPPING.md` (+ html) |
| Integrator | `index.template.html`, `build.mjs`, `index.html`, `index.dev.html`, `assets/js/main.js`, `assets/css-dist/`, `assets/js-dist/` (generated), `CHANGELOG`, `DEVIATIONS`, `MEDIA-SOURCES`, `TRACEABILITY`, `README` (+ html twins), `_build/integration-report.md` |
| Lane reports and scratch | `_build/lane-*-report.md`, `_build/preview/` (lane previews and screenshots, not part of the page) |
| QA evidence | `_qa/v2.0/` (integrator runs in `perf/integrator-r1/`, `perf/integrator-r2/`) |

Page order (`index.html`): header · main (hero, today, passes, club, recharge, coaches, reviews, visit) · footer · buy bar · checkout. Scripts load `defer` in the order api, shop, schedule, hero, motion, main; the only inline script is the head one-liner that sets `html.js` and, with no reduced-motion or data-saver request, `html.motion-ok`.

## Mock and real

| Part | In v2.0 | Real (later) |
| --- | --- | --- |
| Prices | `assets/data/passes.json` (checked against BRAND-NOTES item 5), read through `EFApi.getPasses()` | the same file or the WordPress price source behind `GET /api/passes` |
| Today's classes | `assets/data/schedule.mock.json`, a weekly template from v1.3 expanded to Bali dates by `api.js`; seats ("N spots left") invented | GymMaster public schedule through the edge layer (`GET /api/schedule`); live seat counts probably unavailable |
| Checkout | concept: validation runs, nothing is stored or sent; "Pay now" is inert; "Simulate payment" flips the mock session to paid; reference `EF-MOCK-0001` | Xendit hosted checkout via `POST /api/checkout` (API-CONTRACT.md); phase 1 instead links "Buy a pass" to GymMaster sign-up or WhatsApp |
| Leads | `EFApi.submitLead` returns a mock id, stores nothing; no UI uses it | `POST /api/lead` to GoHighLevel |
| Reviews | three Google reviews republished by the club, count 84, static HTML | same, updated by hand |
| Clock | Bali time from `EFApi.now()`; `?now=` freezes it in mock mode | device clock in Bali time zone |
| Media | the club's own photos and reel, proposal use only (MEDIA-SOURCES.md) | originals from the club, consent for the coach portraits |
| Search | `noindex, nofollow`; no JSON-LD (AIOSEO owns schema in WordPress; v1.3's block was typed `HealthClub` and also carried `noindex`) | AIOSEO decides title, description, robots and schema |

## Documents

- `CHANGELOG.md` — what v2.0 is, lanes and models, what changed against v1.3.
- `DEVIATIONS.md` — every deviation with its reason, and the one open question for Raoul (Duo day price per pass).
- `MEDIA-SOURCES.md` — every media and font file with source and licence; nothing external loads at runtime.
- `TRACEABILITY.md` — every benchmark and stack-shop recommendation → where it is built or why not.
- `_build/integration-report.md` — integration edits (before → after), budget numbers, what is and is not in the snapshot, source fixes not applied.
- `MOTION-AND-DESIGN.md`, `API-CONTRACT.md`, `WP-MAPPING.md` — motion, back end, WordPress.

Each has a self-contained `.html` twin.

## Change log

- v2.0 — 2026-10-01 — first version (integrator), written after the v2.0 freeze.
