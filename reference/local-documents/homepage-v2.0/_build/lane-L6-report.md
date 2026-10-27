> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane L6 report: data and API contract

Version: v1.0 — 2026-10-01 · lane L6 (Sonnet 5.5, xhigh) · port 8808. Nothing was committed, pushed, published or sent. No provider was contacted and no paid call was made.

## 1. Files written

| File | What |
|---|---|
| `assets/js/api.js` | `window.EFApi`, CONTRACT section 6 surface plus the mock-only `_simulatePayment`. 524 lines, 26.3 KB raw, 8.5 KB gzip (unminified). |
| `assets/data/passes.json` | Fields added; no number changed. |
| `API-CONTRACT.md` + `.html` | Back-end contract: GymMaster, Xendit hosted checkout, GoHighLevel mirror, edge layer, five endpoints, state machine, webhook flow, mapping, data protection, reserved class pass, versioning, mock-versus-real table, owner questions. |
| `WP-MAPPING.md` + `.html` | One WordPress template: plugin recommendation, partial-to-PHP table, `build.mjs --wp` rules, enqueue and `defer`, `EF_CONFIG`, head items, fonts, images, AIOSEO, consent, caching, QA gates, rollout and rollback, risks. |
| `_build/preview/L6.html`, `L6-preview.js`, `L6-test.js`, `L6-results.json`, `L6-*-r2.png`, `L6-doc-*-r2.png` | Preview page, Playwright suite, results, screenshots. |
| `_build/lane-L6-report.md` | This file. |

Both documents carry a version line and a change log in the `.md` and the `.html` (four files).

## 2. `passes.json`

Compared with the seeded copy: 32 numeric leaves checked, 0 changed. Added fields:

- top level: `schemaVersion: 1`
- `lengths[]`: `chip` (the chip label, "Day", "4 weeks"…) and `per` (the `.shop__per` text, "day pass", "7 days"…)
- `tiers[]`: `tag` (from SECTIONS section 4) and `description` (from the v1.3 buy cards)
- `duo`: `people: 2`, `lengths: ["day","w4"]`, `dayPassTiers: ["perform","elite","recharge"]`
- `classPasses[]`: `tierId: "class"` and `lengthId: "c1" | "c10"`

`duo.dayPassTiers` is an assumption: the promo page shows one Duo day price (225.000 each), and nobody has confirmed it applies to all three passes (API-CONTRACT question 10). L2's `shop.js` already reads `duo.people`, `duo.lengths` and `duo.dayPassTiers`.

## 3. `api.js`: what it does and the choices I made

Ambiguities in the spec, resolved with the simplest reading:

| Topic | Choice |
|---|---|
| Duo day pass | The price is per person, so one Duo unit costs 2 × 225.000 = IDR 450.000. The 4-week Duo price is already for two (3.800.000 / 4.400.000 / 3.400.000). `shop.js` computes it the same way. |
| `?now=` | Freezes `now()` (does not tick), mock mode only; a live page ignores it. Invalid values (text, month 13, hour 25, minute 61, 30 Feb, date only, with an offset, empty) are ignored. Seconds are accepted. |
| `getSchedule` limits | `days` 1 to 7 (one GymMaster call returns 7 days). `date` from 7 days back to 28 days ahead. Anything else rejects with `invalid_request` and `field`. No arguments = today, 7 days. |
| `spotsLeft`, `capacity` | Per L3's request: passed through from `schedule.mock.json` (invented values, marked MOCK there), `spotsLeft` clamped to `capacity`. A class without a `spotsLeft` gets a hash (FNV-1a of class id and date). `capacity` defaults to 12. Stable on reload either way. |
| Class ids | `<templateId>@<date>` (unique per date), plus `classId`, `date`, `startsAt`, `endsAt` (+08:00). |
| Template absent | Seven empty days, `degraded: true`, no rejection, not fetched again. (A browser prints its own 404 line for a missing file; the real file exists now, so it does not appear.) |
| Order limits | 1 to 5 items, `qty` 1 to 10 (default 1), `startDate` from today to 90 days ahead (Bali). L2 uses the same 90. Class passes: `tierId: "class"`, `lengthId` `c1` or `c10`, no Duo, no start date needed. |
| Idempotency | Optional `order.idempotencyKey`. Same key and same order returns the same session; a different order gives `idempotency_conflict`. In live mode it travels as the `Idempotency-Key` header. |
| Session | `{ id: 'mock-0001', status: 'awaiting_payment', total, currency: 'IDR', paymentUrl: null, expiresAt: now + 30 min, mock: true, lines }`. `lines` is extra (label, unit price, subtotal). |
| Status | `{ id, status, reference }`; `reference` is `null` until paid, then `EF-MOCK-0001` (built from the session id, as SECTIONS section 12 shows). `expired` after `expiresAt`. |
| `_simulatePayment(id)` | Flips the state at once and returns a `Promise<Status>`; the status fields are also readable on the returned promise, so a caller that treats it as synchronous or as a promise both work. Unknown id: `not_found`; expired: `session_expired`. Absent in live mode. |
| Errors | `Error` objects, `name: 'EFApiError'`, `code`, `message`, `status`, `field`. Catalogue in API-CONTRACT section 3. Bad input rejects the promise; nothing throws synchronously. `console.error` is never called. |
| Console | One line per load: `[EF mock adapter] mock data only: nothing is charged, stored or sent.` |
| Live adapter | `LIVE (NOT WIRED)` block: `fetch(apiBase + '/api/…')`, `credentials: 'omit'`, 12 s timeout, error-body mapping, `Retry-After`, a generated `Idempotency-Key`. Selected only by `EF_CONFIG.mode === 'live'`. |
| Config | `EF_CONFIG = { mode, apiBase, assetBase, assetVersion, timeoutMs }`. Asset base derives from `document.currentScript.src` (`../` from the script URL), so any path works. |
| `html.js` | Not set by `api.js`; it is the integrator's `<head>` one-liner (as L3 noted). WP-MAPPING section 8 has the snippet. |

## 4. Verification (real results)

`node _build/preview/L6-test.js` starts its own server on 8808, runs the suite in Chromium and WebKit, writes `L6-results.json`. Last run: **139 of 139 checks pass in each engine** (278 in total, 0 failures). Groups (Chromium): surface 2, passes 7, schedule 23, time 14, checkout 13, status 8, idempotency 3, invalid orders 30, lead 9, console 2, network 5, storage 4, template 5, expiry 1, live stub 12, config 1.

Mutation check: I broke the Duo day total and the `spotsLeft` formula on purpose; the suite failed 3 checks per engine; I restored the file and it is green again.

**Prices.** The test types the BRAND-NOTES item 5 table by hand, independently of `passes.json`, and compares all 18 tier prices plus Duo and class prices. All equal.

| Tier | Day | Week | 4 weeks | 12 weeks | 26 weeks | 52 weeks |
|---|---|---|---|---|---|---|
| Perform | 350.000 | 1.100.000 | 2.200.000 | 5.500.000 | 10.000.000 | 18.000.000 |
| Elite | 450.000 | 1.600.000 | 2.700.000 | 7.500.000 | 14.000.000 | 25.000.000 |
| Recharge | 300.000 | 1.000.000 | 2.000.000 | 5.000.000 | 9.000.000 | 14.000.000 |

Duo: 225.000 each (day); 4 weeks for two: Perform 3.800.000, Elite 4.400.000, Recharge 3.400.000. Class pass: 300.000 and 2.000.000.

| Check | Result |
|---|---|
| `getSchedule({date:'2026-10-01', days:7})` | 7 days, dates 01 to 07 Oct, dow 4,5,6,7,1,2,3; 36 classes (L3's template); all fields present; unique ids; sorted |
| `spotsLeft` stable | Identical after a reload and in a fresh browser context without `?now`; equals the template value clamped to capacity; the hash fallback matches an independent FNV-1a calculation |
| `?now=2026-10-01T09:30` | `now()` = 01:30Z; `baliParts` = `{2026-10-01, 09:30, dow 4}`; midnight rolls at 16:00Z; Sunday = 7; new year rolls; 8 invalid forms ignored |
| `createCheckout` totals | Day Perform 350.000, 4-week Elite Duo 4.400.000, 52-week Recharge 14.000.000, each equal to `passes.json` and to the BRAND-NOTES figure. Also: Duo day Perform 450.000, 3 × day Recharge 900.000, class c1 300.000, class c10 2.000.000, two items 8.600.000, start date +90 days accepted |
| Status flip | `awaiting_payment` (reference null) → `_simulatePayment` → `paid`, reference `EF-MOCK-0001`; other sessions unchanged; unknown id `not_found` 404 |
| Expiry (fake clock) | `awaiting_payment` at +29 min, `expired` at +31 min, paying it gives `session_expired` 409 |
| Invalid orders | 24 orders rejected with the right `code`, HTTP-style `status` and `field` (empty, six items, unknown tier or length, class with `day`, qty 0/11/1.5/"1", start date yesterday/+91/missing/wrong format, Duo on 12 weeks/week/class, Duo not boolean, no customer, empty name, bad email, WhatsApp letters or too short, consent not an object); all are `Error` instances; a null order rejects, never throws |
| Leads | `{ok:true, id:'mock-lead-0001'}`, four interests accepted, four invalid cases rejected |
| Console | Exactly one `[EF mock adapter]` info line per load; no error, no warning, no page error |
| Network | Only GET, same origin; the adapter fetched exactly `passes.json` and `schedule.mock.json`, once per load; no `/api/` request |
| Storage | `localStorage` 0, `sessionStorage` 0, `document.cookie` empty, no context cookie, no IndexedDB database, no Cache Storage entry |
| Live stub (against Playwright route fakes on a `.invalid` host; no provider) | Right paths and query, `Idempotency-Key` header (given and generated), key removed from the body, error body mapped to `Error`, `Retry-After` 7 on 429, `config_missing`, `network_error`, `timeout`; mode `live` has no `_simulatePayment`, ignores `?now`, never fetches the mock JSON, prints no mock line |
| Config | `assetBase` and `assetVersion` honoured |

Preview page `_build/preview/L6.html` (screenshots `L6-1440-chromium-r2.png`, `L6-390-webkit-r2.png`, `L6-375-webkit-r2.png`): I looked at them. First pass had the price table cut off at 390 px; I transposed it and let cells wrap, and the second pass reads. `scrollWidth <= innerWidth` measured at 1440 (Chromium), 390 and 375 (WebKit) for the page. The two HTML twins were measured at 320, 375, 390 (WebKit) and 1440 (Chromium): no horizontal page scroll, zero external requests, empty console; wide tables scroll inside their own wrapper. Judged only by eye: how the tables and code blocks look.

Not verified:

- Nothing was run against GymMaster, Xendit or GoHighLevel (none contacted, by design).
- The PHP in WP-MAPPING is not run or linted: there is no PHP or WordPress on this machine. Lint and test on staging.
- The WordPress version, host, caching plugin and consent tool on the club's site are unknown.
- GymMaster field names (`arrival`, `starttime`, `availability`…) come from `sources.csv` S1, not from a live response.

## 5. Findings for the integrator and for Michael

1. **The mock checkout must not reach the public domain.** The research's phase 1 is a live schedule plus a link to GymMaster sign-up or WhatsApp, not our checkout (R§1). WP-MAPPING section 1 makes it a hard gate; the integrator and L2 need a flag to repoint or hide `data-open-checkout` for production.
2. **Live seat counts probably do not exist.** GymMaster's public schedule needs no login but seats and booking need a member token (S1). So live `spotsLeft` and `capacity` are `null` unless GymMaster fills `availability`. `schedule.js` already checks `typeof c.spotsLeft === 'number'`, so it will cope; the copy "N spots left" should not be a promise.
3. **Duo needs two people.** The order has one `customer`. A live Duo probably needs a second member record in GymMaster; API-CONTRACT adds an optional `partner` field and asks the owner (question 9). Also unconfirmed: the Duo day price for all three passes (question 10) and the member-limit effect of selling day passes as short memberships (question 11, research I8).
4. **The "Payment method" chips (Card, QRIS, E-wallet, Bank transfer) in the pay step have no live equivalent** unless Xendit's hosted page accepts a pre-selected method (not read in the research). Information only for now.
5. **Structured data.** The v1.3 block is typed `HealthClub` (a LocalBusiness subtype), not `LocalBusiness`. It lists one opening-hours entry 06:00–22:00 while Recharge opens 06:30, an unresolved address, and one of two phone numbers. v1.3 also has `noindex`, which must not reach production. AIOSEO owns title, description, canonical, robots and schema; print the block only if AIOSEO cannot, and never twice.
6. **JS weight.** `api.js` is 8.5 KB gzip unminified, out of the research's 30 KB gzip JS budget (R§8). `build.mjs` should minify.
7. **Partials today:** 58.7 KB raw, 13.0 KB gzip; first-line comments are about 8 KB raw. Strip them in the production build (WP-MAPPING section 3).

## 6. Requests to other lanes

- Integrator (`build.mjs`, `index.html`): add a `--wp` mode with the six rules in WP-MAPPING section 3 (PHP guard line, `assets/` prefix, `href="/"` to `home_url`, strip comments, copy `assets/`); load `api.js` first and `defer`; print the `html.js` / `motion-ok` one-liner in the head (WP-MAPPING section 8 has the exact text); inject `EF_CONFIG` before `api.js`; add the production flag from finding 1.
- L2: nothing required. `shop.js` already matches `api.js` on field names, error codes, the 90-day start window, the Duo rule and the `_simulatePayment` then `getCheckoutStatus` sequence. Note for live: when `paymentUrl` arrives the page should poll `getCheckoutStatus` every 3 s after the return from the hosted page (API-CONTRACT 4.4).
- L3: nothing required; `schedule.mock.json` is read as-is and its `spotsLeft` and `capacity` now pass through.
- Motion (M), L1, L4, L5: none.

## Change log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-10-01 | First version (lane L6). |
