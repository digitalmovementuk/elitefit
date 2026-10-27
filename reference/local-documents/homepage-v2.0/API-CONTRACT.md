> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Elite Fit Bali: back-end API contract (five endpoints)

Version: v1.0 — 2026-10-01 · owner: lane L6 (data and API) · status: contract for the future build. The v2.0 homepage ships the mock adapter only (section 11). Change log at the bottom.

This is what the real back end must do so that `assets/js/api.js` can switch from `mode: 'mock'` to `mode: 'live'` without a front-end change. It is internal. Nothing in it is client-facing copy.

## 0. How to read this file

| Tag | Meaning |
|---|---|
| `[R§n]` | Statement from `research/stack-shop-v1.0/stack-and-shop-recommendation.md`, section n. |
| `[S1]`…`[S14]`, `[L1]`…`[L5]`, `[I1]`…`[I8]`, `[U1]` | Source id in `research/stack-shop-v1.0/sources.csv`. The research read each Sx on 2026-10-01. |
| VERIFIED / INFERRED / UNKNOWN | The research's own label, kept as is. INFERRED is reasoning, not a read fact. UNKNOWN means nobody has checked. |
| TBC | "To confirm with the club / GymMaster". Used wherever the research did not verify a GymMaster object, field or behaviour. No GymMaster, Xendit or GoHighLevel detail is invented here. |
| PROPOSAL | Our own design choice (a limit, a header, a retention period). Not researched. Change it if the build finds a reason. |
| `[CT §n]`, `[SEC §n]`, `[BN n]` | `_build/CONTRACT.md`, `_build/SECTIONS.md`, `proposal/site-preview/BRAND-NOTES.md` item n. |

## 1. Architecture and source of truth

```
Browser (WordPress page, api.js live adapter)
   |  HTTPS, JSON, no keys, no cookies
   v
Edge / API layer  (Cloudflare Worker, code in GitHub)        [R§1, INFERRED design]
   |-- GET  /api/passes            price list + membership-type mapping
   |-- GET  /api/schedule          cached GymMaster class schedule
   |-- POST /api/checkout          validate, price, create Xendit hosted checkout
   |-- GET  /api/checkout/:id      status for the confirmation screen
   |-- POST /api/lead              enquiry -> GoHighLevel (+ GymMaster prospect)
   |-- POST /webhooks/xendit       internal, not a browser endpoint
   |
   +--> GymMaster   system of record: members, memberships, schedule, bookings, payment log, (door access TBC)
   +--> Xendit      hosted checkout: the only place a card or wallet is entered
   +--> GoHighLevel one-way mirror: contact, consent, source, purchase summary, follow-up
```

| Concern | System of record | Mirror / copy | Rule |
|---|---|---|---|
| Members, memberships, validity | GymMaster [R§1, S1] | GoHighLevel gets a purchase summary and expiry date only [R§6] | Never edited in GoHighLevel. |
| Class schedule | GymMaster [S1] | Edge cache, 5 min, last-good copy [R§7] | The page never waits on GymMaster. |
| Bookings, check-in, door access | GymMaster (booking needs a member token [S1]; door access: TBC whether the club uses GymMaster for it) | none | The page never books. Button reads "Book in the app" [R§7]. |
| Pass price list shown on the site | `passes.json` / edge config (v2.0: `assets/data/passes.json`) | GymMaster membership prices must equal it | TBC: which side the club edits. PROPOSAL: edge config is read by the page, a nightly job compares it with GymMaster and alerts on any difference. |
| Money | Xendit (hosted page; card data never touches our systems [R§1, R§9]) | GymMaster payment log entry [S1] | The browser redirect never proves payment. Only the signed webhook does. |
| Orders before payment | Edge store (KV or small database, TBC at build) | GoHighLevel opportunity "Checkout started" [R§6] | Holds personal data, so it has a retention rule (section 8). |
| Contacts, consent, source, follow-up | GoHighLevel [R§6] | GymMaster prospect (leads) | One-way: edge writes, nothing flows back. |
| Contracts, waivers, billing tokens, payment history, health data | GymMaster only; health detail nowhere [R§6, R§9] | none | Never in GoHighLevel. Bloodwork stays in FORM's separate Shopify carts [BN 11]. |

Provider notes the contract depends on:

- GymMaster has a public Member Portal API v1500 with `api_key` as query or form parameter; member calls use a login token of about one hour; keys come in two types, "for Members" and "for Staff" [VERIFIED S1]. Which call needs which key type: TBC (the research needs a staff key for phase 2, [R§1]).
- GymMaster has no webhooks in its API reference [VERIFIED S1, 0 matches]. The edge polls for changes (for example expiring memberships) [R§1].
- Xendit is listed by GymMaster for Indonesia and covers cards, QRIS, e-wallets and bank virtual accounts in IDR [VERIFIED S3, S4, S10]. Stripe is "Preview" only in Indonesia and GoHighLevel has no Xendit or Midtrans connector, so GoHighLevel receives purchase events and does not take the money [VERIFIED S9, S14].
- Midtrans is the documented alternative [R§4]. The five browser endpoints below do not change if the provider changes; only section 6 does.

## 2. Conventions (all endpoints)

| Topic | Rule |
|---|---|
| Base URL | Same origin as the page, path `/api/…`, routed to the edge layer (`EF_CONFIG.apiBase` empty or the site origin). PROPOSAL: same origin avoids CORS and a preflight on every call. If a separate host is used, allow-list the club's origins only. |
| Format | UTF-8 JSON. Request `Content-Type: application/json`, response `application/json; charset=utf-8`. Unknown request fields: ignored by the mock, rejected with `invalid_request` by the live server. |
| Dates and times | Day = `YYYY-MM-DD` in Bali time. Instants = ISO 8601 with offset (`2026-10-01T09:00:00+08:00`). Bali is UTC+8 all year, no daylight saving [R§7]. Time zone name `Asia/Makassar`. |
| Money | Integers in rupiah, no decimals (`350000`), `currency: "IDR"`. Display formatting (`IDR 350.000`) is the page's job [SEC §0]. Xendit's exact amount format: TBC at build, not read in the research. |
| Ids | Strings. Checkout session ids in live mode are unguessable (PROPOSAL: at least 128 bits of randomness), because the id is the only credential the status call has. Mock ids are `mock-0001`. |
| Auth | No user login. No secret in the browser. GymMaster, Xendit and GoHighLevel keys live only in the edge layer [R§1]. Abuse protection (PROPOSAL, not researched): origin allow-list, per-IP rate limits (each endpoint below), a bot challenge or honeypot on `checkout` and `lead`. |
| Idempotency | `POST /api/checkout` and `POST /api/lead` take an `Idempotency-Key` header (PROPOSAL: 8 to 64 characters `A-Za-z0-9_-`, kept 24 h). Same key and same body: the first response is replayed with `Idempotent-Replayed: true`. Same key, different body: 409 `idempotency_conflict`. The live adapter generates a key when the caller gives none. |
| Caching | Per endpoint below. All POSTs and the status call: `Cache-Control: no-store`. |
| Rate limits | Per endpoint below, per IP. All numbers are PROPOSAL. Over the limit: 429 `rate_limited` with `Retry-After` seconds. |
| Versioning | Section 10. |
| Request id | Every response carries `X-Request-Id`; every error body repeats it as `requestId`. Logs hold the id, never the personal data. |

## 3. Error model

Body of every non-2xx response:

```json
{ "error": { "code": "invalid_start_date", "message": "startDate must be a real day from today up to 90 days ahead (Bali time).", "field": "items[0].startDate", "requestId": "req_8f3c…" } }
```

`api.js` turns it into `Error` objects with `name: 'EFApiError'`, `code`, `message`, `status` (HTTP status), `field`, `requestId`, and `retryAfter` (seconds, from `Retry-After`). The mock produces the same objects without `requestId`.

| code | HTTP | When | What the page does |
|---|---|---|---|
| `invalid_request` | 400 | Malformed JSON, missing or mistyped field, unknown field, bad `date` or `days`, bad id. `field` names it. | Shows a generic retry message. |
| `empty_order` | 422 | `items` missing, empty or longer than 5. | Bug on our side. |
| `invalid_tier` | 422 | `tierId` not in the price list and not `class`. | Bug on our side. |
| `invalid_length` | 422 | `lengthId` not valid for the tier; class passes need `c1` or `c10`. | Bug on our side. |
| `invalid_quantity` | 422 | `qty` not a whole number 1 to 10. | Bug on our side. |
| `invalid_start_date` | 422 | `startDate` missing, not a real day, before today, or more than 90 days ahead (Bali time). | Back to the date field. |
| `duo_not_available` | 422 | `duo: true` with a length other than `day` or `w4`, or a class pass. | Switches Duo off. |
| `invalid_customer` | 422 | `customer.name`, `.email` or `.whatsapp` fails (`field` says which). | Message under the field. |
| `invalid_lead` | 422 | `name`, `whatsapp`, `interest` or `source` fails. | Message under the field. |
| `consent_required` | 422 | Live only: `consent.privacy` is not `true`. | Shows the consent line. |
| `not_found` | 404 | Unknown or purged checkout session id. | "Start again". |
| `session_expired` | 409 | Paying or continuing an expired session. | "Start again". |
| `idempotency_conflict` | 409 | Same `Idempotency-Key`, different body. | Bug on our side. |
| `rate_limited` | 429 | Over the limit. | Waits `retryAfter`, then retries once. |
| `upstream_unavailable` | 503 | GymMaster or Xendit did not answer, and no last-good copy exists. | "We could not reach the booking service…" with a WhatsApp link. |
| `server_error` | 500 | Anything else. | Same message. |
| `unavailable` | 503 (mock only) | `passes.json` could not be loaded. The live server uses `upstream_unavailable`. | Same message. |
| `network_error`, `timeout`, `config_missing` | 0 (client only) | Live adapter: no connection, no answer within `timeoutMs` (default 12 s), `apiBase` not set. | Same message. |

## 4. The five endpoints

### 4.1 `GET /api/passes`

| | |
|---|---|
| Purpose | The price list and the pass rules the shop renders. `EFApi.getPasses()`. |
| Source of truth | v2.0: `assets/data/passes.json` (prices from the club's membership page, updated 17.09.2026, [BN 5]). Live: edge config with the same shape; each price maps to a GymMaster membership type (section 7). |
| Auth | none |
| Query | none |
| Caching | PROPOSAL: `Cache-Control: public, max-age=300, stale-while-revalidate=86400`, edge `s-maxage=3600`, purged on every price change. |
| Rate limit | PROPOSAL: 60 per minute per IP. |
| Idempotent | Yes (GET). |
| Errors | `rate_limited`, `server_error`. |

Response 200, schema (extra fields may appear; the client ignores what it does not know):

| Field | Type | Rule |
|---|---|---|
| `schemaVersion` | integer | `1`. |
| `currency` | string | `IDR`. |
| `updated` | `YYYY-MM-DD` | Date of the club's price list. |
| `source` | string | Where the numbers come from. |
| `lengths[]` | `{ id, label, chip, per, days }` | `id` ∈ `day, week, w4, w12, w26, w52`; `days` 1, 7, 28, 84, 182, 364. |
| `tiers[]` | `{ id, name, tag, description, prices }` | `id` ∈ `perform, elite, recharge`; `prices` has one integer per length id. |
| `duo` | `{ people, lengths[], dayPassEach, dayPassTiers[], fourWeek{} }` | `people` 2. `dayPassEach` is per person. `fourWeek.<tier>` is the price for two. |
| `classPasses[]` | `{ id, tierId: "class", lengthId, name, price, classes }` | `lengthId` `c1` or `c10`. Reserved, section 9. |
| `notes[]` | strings | Visitor-facing notes shown with the prices. |

Example (shortened; the full file is `assets/data/passes.json`):

```json
{ "schemaVersion": 1, "currency": "IDR", "updated": "2026-09-17",
  "lengths": [ { "id": "day", "label": "Day pass", "chip": "Day", "per": "day pass", "days": 1 } ],
  "tiers": [ { "id": "perform", "name": "Perform", "tag": "Gym floor and classes",
               "description": "Gym floor, outdoor area, all classes.",
               "prices": { "day": 350000, "week": 1100000, "w4": 2200000, "w12": 5500000, "w26": 10000000, "w52": 18000000 } } ],
  "duo": { "people": 2, "lengths": ["day", "w4"], "dayPassEach": 225000, "dayPassTiers": ["perform", "elite", "recharge"],
           "fourWeek": { "perform": 3800000, "elite": 4400000, "recharge": 3400000 } },
  "classPasses": [ { "id": "class-single", "tierId": "class", "lengthId": "c1", "name": "Single class", "price": 300000, "classes": 1 } ],
  "notes": [ "A day pass is credited toward a membership if you join afterwards." ] }
```

### 4.2 `GET /api/schedule?date=YYYY-MM-DD&days=7`

| | |
|---|---|
| Purpose | The class schedule for the Today strip. `EFApi.getSchedule({ date, days })`. |
| Source of truth | GymMaster. Upstream call: `GET /portal/api/v1/booking/classes/schedule?week=YYYY-MM-DD` with `api_key` only; it returns all classes for 7 days from the date; optional `companyid`, `resourceid`, `classid`, `staffid`; "may be cached for up to 5 minutes" [VERIFIED S1]. Needs the club's `companyid` and an API key (TBC). |
| Auth | none for the browser. The edge holds the GymMaster key. |
| Query | `date` optional, default today in Bali; must be 7 days back to 28 days ahead (PROPOSAL, keeps the cache keys few). `days` optional integer 1 to 7, default 7 (one GymMaster call returns 7 days [S1]). |
| Caching | Edge cache 5 min per (`date`,`days`), matching GymMaster's own 5-minute rule; last-good copy in KV for 24 h [R§7]. Response header `Cache-Control: public, max-age=60, stale-while-revalidate=300` (PROPOSAL). |
| Rate limit | PROPOSAL: 120 per minute per IP (the edge cache absorbs it). |
| Fallback chain | Fresh (up to 5 min) → last-good copy with `stale: true` and `generatedAt` (up to 24 h) → the static weekly timetable kept in WordPress → "Full timetable" link [R§7]. The page never waits on GymMaster. |
| Idempotent | Yes. |
| Errors | `invalid_request` (`field`: `date` or `days`), `rate_limited`, `upstream_unavailable` (no fresh and no last-good copy). The page then shows "Timetable unavailable right now." plus the Full timetable link [SEC §3]. |

Response 200:

| Field | Type | Rule |
|---|---|---|
| `source` | string | `gymmaster` live; `mock-of-gymmaster` in the mock. |
| `tz` | string | `Asia/Makassar`. |
| `generatedAt` | ISO instant | When the edge built this copy. |
| `stale` | boolean | Live only. `true` when the last-good copy is served. |
| `mock`, `mockFields`, `degraded` | boolean, string[], boolean | Mock only. `mockFields` lists the invented fields; `degraded` is true when the mock template file was missing. |
| `days[]` | `{ date, dow, classes[] }` | One entry per requested day; `dow` 1=Monday … 7=Sunday. |
| `classes[]` | see below | Sorted by `start`. A day without classes has `[]`. |

Class object and where each field comes from:

| Our field | Type | GymMaster source field [S1] | Note |
|---|---|---|---|
| `id` | string | class id TBC | Unique per date. The edge builds it from GymMaster's class id plus the date. If GymMaster gives no stable id (TBC), hash of name, date and start. |
| `classId` | string | class id TBC | Same class every week (mock only today). |
| `date` | `YYYY-MM-DD` | `arrival` / date | Exact field name: TBC against a live response. |
| `start`, `end` | `HH:MM` 24 h | `starttime`, `endtime` | Classes are one hour [BN 6]. |
| `startsAt`, `endsAt` | ISO with `+08:00` | derived | |
| `title` | string | `name` | "Tinos" is shown as "Martijn" [BN 7]: a display map in the edge config. |
| `trainer` | string | `staffname` | `staffphoto` exists; v2.0 does not show it. |
| `zone` | `workout`, `cafe`, `spa` | `location` | The mapping from GymMaster locations or resources to a zone: TBC with the club. All current classes are on the Perform side. |
| `spotsLeft` | integer or `null` | `availability` | Seats and booking need a member token [VERIFIED S1]. Show it only if GymMaster fills `availability` [R§7]; otherwise `null`. The mock passes through the invented value from `schedule.mock.json` (clamped to `capacity`); a template class without one gets a hash of class id and date. |
| `capacity` | integer or `null` | not in the research's field list | `null` live unless GymMaster provides it (TBC). Invented in the mock (from `schedule.mock.json`, default 12). |
| `bookable` | boolean | derived | "Can be booked in the GymMaster app". The page never books. |

Example:

```json
{ "source": "gymmaster", "tz": "Asia/Makassar", "generatedAt": "2026-10-01T09:28:00+08:00", "stale": false,
  "days": [ { "date": "2026-10-01", "dow": 4, "classes": [
    { "id": "gm-4821@2026-10-01", "classId": "gm-4821", "date": "2026-10-01", "start": "09:00", "end": "10:00",
      "startsAt": "2026-10-01T09:00:00+08:00", "endsAt": "2026-10-01T10:00:00+08:00",
      "title": "Boxercise Beginner", "trainer": "Rey", "zone": "workout", "spotsLeft": null, "capacity": null, "bookable": true } ] } ] }
```

### 4.3 `POST /api/checkout`

| | |
|---|---|
| Purpose | Check the order, price it on the server, create the hosted payment, return where to send the visitor. `EFApi.createCheckout(order)`. Called when the visitor leaves the `details` step [SEC §12]. |
| Source of truth | The price list (4.1). The client total is never trusted: the server recomputes it. |
| Auth | none. Origin allow-list, bot challenge (PROPOSAL). |
| Idempotency | `Idempotency-Key` header, required live. In the mock, `order.idempotencyKey` is optional and does the same. |
| Caching | `no-store`. |
| Rate limit | PROPOSAL: 10 per minute per IP; 5 open sessions per email or WhatsApp number per hour. |
| Errors | `invalid_request`, `empty_order`, `invalid_tier`, `invalid_length`, `invalid_quantity`, `invalid_start_date`, `duo_not_available`, `invalid_customer`, `consent_required`, `idempotency_conflict`, `rate_limited`, `upstream_unavailable`, `server_error`. Order of checks: shape, items (in order), customer, consent. |

Request body:

| Field | Type | Required | Rule |
|---|---|---|---|
| `items[]` | array, 1 to 5 | yes | v2.0 UI sends one item. |
| `items[].tierId` | string | yes | `perform`, `elite`, `recharge`, or reserved `class` (section 9). |
| `items[].lengthId` | string | yes | `day`, `week`, `w4`, `w12`, `w26`, `w52`; for `class`: `c1`, `c10`. |
| `items[].qty` | integer 1 to 10 | no, default 1 | A Duo pair counts as one unit. |
| `items[].startDate` | `YYYY-MM-DD` | yes, except `class` | Today (Bali) to 90 days ahead. GymMaster sign-up takes a start date and a first payment date [VERIFIED S1]. |
| `duo` | boolean | no, default false | Order-level. Allowed only with `day` or `w4`, never with `class`. Day Duo price is per person, so one unit costs 2 × `dayPassEach`; 4-week Duo price is already for two. |
| `customer.name` | string 1 to 120 | yes | Trimmed. |
| `customer.email` | string, at most 254 | yes | Basic address check. |
| `customer.whatsapp` | string | yes | 7 to 15 digits, optional leading `+`; spaces, dashes, dots and brackets are stripped. |
| `partner` | `{ name, email?, whatsapp? }` | live, TBC | Second person of a Duo. Not in [CT §6] and not sent by the v2.0 UI; whether GymMaster needs the second person at purchase: TBC (question 9, section 12). Ignored by the mock. |
| `consent` | `{ privacy, marketing, analytics }` booleans | live: `privacy` must be `true` | Travels with the checkout so server-side events and follow-up respect it [R§9]. Optional in the mock, which stores nothing. |
| `utm` | `{ source, medium, campaign }` strings | no | For the contact record [R§1]. Only with consent to analytics (PROPOSAL). |

Machine-readable form of the v2.0 fields (JSON Schema 2020-12):

```json
{ "$schema": "https://json-schema.org/draft/2020-12/schema", "type": "object", "required": ["items", "customer"], "additionalProperties": false,
  "properties": {
    "items": { "type": "array", "minItems": 1, "maxItems": 5, "items": { "type": "object", "required": ["tierId", "lengthId"], "additionalProperties": false,
      "properties": { "tierId": { "enum": ["perform", "elite", "recharge", "class"] },
                      "lengthId": { "enum": ["day", "week", "w4", "w12", "w26", "w52", "c1", "c10"] },
                      "qty": { "type": "integer", "minimum": 1, "maximum": 10, "default": 1 },
                      "startDate": { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" } } } },
    "duo": { "type": "boolean", "default": false },
    "customer": { "type": "object", "required": ["name", "email", "whatsapp"], "additionalProperties": false,
      "properties": { "name": { "type": "string", "minLength": 1, "maxLength": 120 },
                      "email": { "type": "string", "maxLength": 254 },
                      "whatsapp": { "type": "string", "pattern": "^[+]?[0-9 .()-]{7,24}$" } } },
    "partner": { "type": "object" }, "consent": { "type": "object" }, "utm": { "type": "object" } } }
```

Example request and response:

```http
POST /api/checkout
Idempotency-Key: 5d0c1d1e-7a62-4c71-9a43-3c8b1f6e2a10
Content-Type: application/json

{ "items": [ { "tierId": "elite", "lengthId": "w4", "qty": 1, "startDate": "2026-10-05" } ], "duo": true,
  "customer": { "name": "Test Visitor", "email": "test@example.com", "whatsapp": "+62 812 0000 0000" },
  "consent": { "privacy": true, "marketing": false, "analytics": false } }
```

```json
{ "id": "ef_4k9q7t2m8x1c5v3b6n0z", "status": "awaiting_payment", "total": 4400000, "currency": "IDR",
  "paymentUrl": "https://checkout.xendit.co/…", "expiresAt": "2026-10-01T10:00:00+08:00",
  "lines": [ { "tierId": "elite", "lengthId": "w4", "qty": 1, "startDate": "2026-10-05", "duo": true,
               "label": "Elite · 4 weeks", "unitPrice": 4400000, "subtotal": 4400000 } ] }
```

Session fields: `id`, `status` (`awaiting_payment`), `total`, `currency`, `paymentUrl` (the hosted checkout URL; the mock returns `null` and adds `mock: true`), `expiresAt` (30 minutes after creation, both in the mock and live), `lines[]`. HTTP 201; 200 with `Idempotent-Replayed: true` on a replay. The page redirects to `paymentUrl` when `mode === 'live'` [shop.js].

Server steps, in order:

1. Validate and price (rules above; the mock implements exactly these).
2. Resolve each item to a GymMaster membership type through the mapping (section 7). An unmapped item: 500 `server_error`, alert to DM (a configuration bug, not a visitor error).
3. Create the hosted payment at Xendit with our session id as the merchant reference, the total, a 30-minute expiry and the success and failure return URLs (capabilities to confirm in section 6).
4. Store the pending order (items, customer, consent, UTM, Xendit reference) with the retention rule of section 8.
5. Best effort, asynchronous, never blocking the response: GoHighLevel contact upsert with tag `checkout-started` and the pass, plus an opportunity at "Checkout started" [R§6].
6. Return the Session.

If step 3 fails, nothing is stored as paid and the response is 503 `upstream_unavailable`.

### 4.4 `GET /api/checkout/:id`

| | |
|---|---|
| Purpose | Status for the confirmation screen. `EFApi.getCheckoutStatus(id)`. |
| Source of truth | The edge order store. `paid` is set only by the verified Xendit webhook (section 6), never by the browser returning from the hosted page. `expired` is set by Xendit's expiry event or by the edge when `expiresAt` has passed, whichever comes first (INFERRED). |
| Auth | The unguessable session id is the credential. The response holds no personal data. |
| Caching | `no-store`. |
| Rate limit | PROPOSAL: 60 per minute per IP; the page polls every 3 s, for at most until `expiresAt`. |
| Errors | `invalid_request`, `not_found`, `rate_limited`, `server_error`. |

Response 200: `{ "id": string, "status": "awaiting_payment" | "paid" | "expired" | "failed", "reference": string | null }`.

| Field | Rule |
|---|---|
| `reference` | `null` until paid. Then the reference the visitor shows at reception [SEC §12]. The edge writes it into the GymMaster payment note so reception can find the order (PROPOSAL; the `note` field of `payment/log` exists [S1]). The mock returns `EF-MOCK-0001` built from the session id. |

```json
{ "id": "ef_4k9q7t2m8x1c5v3b6n0z", "status": "paid", "reference": "EF-7Q2M-4K9T" }
```

A paid order whose GymMaster write has not yet succeeded still reads `paid`. The edge retries the write and alerts DM and the club if it keeps failing (section 6). The visitor has paid and must not be told otherwise.

### 4.5 `POST /api/lead`

| | |
|---|---|
| Purpose | A question or tour request that is not a purchase. `EFApi.submitLead(lead)`. No v2.0 screen calls it (the visible contact routes are WhatsApp links); it is the reserved route for a later enquiry form. |
| Source of truth | GoHighLevel owns the follow-up status (PROPOSAL). The edge also creates a GymMaster prospect with `POST /portal/api/v1/prospect/create`, which updates the prospect if details match and accepts `promotion_id` [VERIFIED S1]. Which side the front desk works in: TBC (question 1). |
| Auth | none. Honeypot and bot challenge (PROPOSAL). |
| Idempotency | `Idempotency-Key` header. |
| Caching | `no-store`. |
| Rate limit | PROPOSAL: 5 per minute per IP. |
| Errors | `invalid_request`, `invalid_lead` (`field`: `name`, `whatsapp`, `interest`, `source`), `consent_required`, `idempotency_conflict`, `rate_limited`, `upstream_unavailable`, `server_error`. |

Request:

| Field | Type | Required | Rule |
|---|---|---|---|
| `name` | string 1 to 120 | yes | |
| `whatsapp` | string | yes | Same rule as `customer.whatsapp`. |
| `interest` | string | yes | `pass`, `membership`, `tour`, `recovery`. |
| `source` | string at most 64 | no | Where on the page it came from (for example `visit`). |
| `consent` | `{ privacy, marketing }` | live: `privacy` must be `true` | `marketing: true` allows the WhatsApp follow-up; WhatsApp Business API templates are phase 3 and need Meta business verification and one official number [R§6]. |

Response 201: `{ "ok": true, "id": "lead_…" }` (mock: `mock-lead-0001`; the mock validates, stores nothing, sends nothing).

```http
POST /api/lead
{ "name": "Test Visitor", "whatsapp": "+62 812 0000 0000", "interest": "tour", "source": "visit", "consent": { "privacy": true, "marketing": true } }
```

## 5. Checkout state machine mapped to API calls and events

Page state is `data-checkout-step` on `#checkout`: `choose`, `details`, `pay`, `done` [CT §4]. Server state is the order status; the browser only sees four values.

| Page step or move | Browser call | Edge | GymMaster | Xendit | GoHighLevel |
|---|---|---|---|---|---|
| open, `choose` | `getPasses()` once per page load (cached in memory) | serves the price list | none | none | none |
| `choose` → `details` | none | none | none | none | none |
| `details` → `pay` | `createCheckout(order)` | validate, price, store pending order | none yet | create hosted payment, 30-minute expiry | upsert contact tag `checkout-started`, opportunity "Checkout started" [R§6] |
| `pay`, "Pay now" (live) | `window.location = paymentUrl` | none | none | visitor chooses a method on the hosted page: card, QRIS, e-wallet, bank transfer [R§1, S10] | none |
| return to the site (live) | `getCheckoutStatus(id)`, every 3 s | read order status | none | none | none |
| webhook `paid` (server side, independent of the browser) | none | verify, mark `paid`, fulfil | create member + membership, log the payment | sends the event | opportunity → "Paid", confirmation [R§6] |
| `pay` → `done` | `getCheckoutStatus(id)` returns `paid` | | | | |
| `awaiting_payment` → `expired` | status returns `expired` | edge job or Xendit expiry event | none | invoice expires | optional reminder, see below |
| `failed` | status returns `failed` | mark failed | none | payment refused | none |

Notes:

- The v2.0 concept has "Payment method" chips (Card, QRIS, E-wallet, Bank transfer) in the `pay` step [SEC §12]. In the live flow the visitor picks the method on Xendit's hosted page, so those chips become information only, unless Xendit's hosted checkout accepts a pre-selected method (TBC, not read in the research).
- "Simulate payment" exists only in the mock (`EFApi._simulatePayment(id)`). It does not exist in live mode.
- Abandoned checkout: a GoHighLevel workflow waits about one hour; if no "paid" tag has arrived it sends one reminder by email (WhatsApp template in phase 3), only if `consent.marketing` allows [R§6].
- The mock expires a session 30 minutes after `now()` (frozen by `?now=` while testing).

## 6. Webhook flow and payment layer

Webhook endpoint `POST /webhooks/xendit` is internal (not a browser endpoint, not in `EFApi`) [R§1].

```
Visitor      Page/api.js        Edge Worker           Xendit            GymMaster          GoHighLevel
  |  details    |                    |                   |                  |                  |
  |------------>| createCheckout     |                   |                  |                  |
  |             |------------------->| validate + price  |                  |                  |
  |             |                    | create hosted pay |                  |                  |
  |             |                    |------------------>|                  |                  |
  |             |                    |<-- paymentUrl ----|                  |                  |
  |             |                    | store pending ----------------------------------------> contact + "Checkout started"
  |             |<-- Session --------|                   |                  |                  |
  |  Pay now    | location=paymentUrl|                   |                  |                  |
  |------------------------------------------------------>| pay (card/QRIS/wallet/VA)           |
  |             |                    |<-- webhook "paid" (signed) --|       |                  |
  |             |                    | verify, dedupe by event id   |       |                  |
  |             |                    | mark paid                    |       |                  |
  |             |                    |--------------------------------> signup / add membership + payment log
  |             |                    |------------------------------------------------------> opportunity "Paid", confirmation
  |<-- back to site --------------------------|                   |       |                  |
  |             | getCheckoutStatus  |                   |                  |                  |
  |             |------------------->| status = paid, reference            |                  |
  |             |<-------------------|                   |                  |                  |
```

What is verified about each provider, and what must be confirmed in the provider's own reference at build time (the research read product and pricing pages, not the Xendit API reference):

| Need | Status |
|---|---|
| Xendit processes IDR for cards (Visa, MC, JCB, AMEX), QRIS, e-wallets (DANA, GoPay, OVO, ShopeePay listed), bank virtual accounts; fees per transaction, no monthly fee stated | VERIFIED S10 (e-wallet rates and Apple Pay or Google Pay: UNKNOWN [R§11]) |
| Hosted payment page and payment links | VERIFIED S10 (Payment Links product listed). Which API creates it (invoice or payment link): TBC at build |
| Create a payment with our reference, amount, expiry, return URLs, optional method restriction | TBC: not read |
| Webhook authenticity check (signature or token) and retry behaviour | TBC: not read. Design for duplicates and out-of-order delivery regardless |
| Look up a payment's status by reference (to heal a missed webhook) | TBC: not read |
| Account in the club's legal name, owner KYC, payouts to the club's bank | INFERRED [I1]; owner task, week 1 [R§2 F2] |
| PT PMA onboarding rules | UNKNOWN [R§11] |

Webhook handling rules (PROPOSAL, from the research's flow [R§1, R§6]):

1. Verify authenticity first. Reject anything that fails with 401 and log it.
2. Deduplicate by the provider's event id. Respond 200 quickly; do the fan-out from a queue.
3. On `paid`, in this order: (a) mark the order `paid` and store the provider payment id; (b) GymMaster: if the visitor is new, `POST /portal/api/v1/signup` with the membership type, start date and first payment date; if the visitor is a current member, `POST /portal/api/v1/memberships` for that member [VERIFIED S1]; (c) `POST /portal/api/v2/payment/log` with amount, a note holding our reference, and a method name [VERIFIED S1]; (d) GoHighLevel opportunity to "Paid" and the confirmation; (e) server-side analytics events (Meta CAPI, GA4 Measurement Protocol) only when the consent flag stored with the order allows it [R§9].
4. Retry each step with backoff. If GymMaster still fails, the order stays `paid`, fulfilment stays pending, DM and the club are alerted with the reference.
5. On expiry or failure: mark the order, no GymMaster write.

GymMaster behaviours the research could not verify, to test in the club's own account before phase 2 [R§3, R§11]: whether `payment/log` settles the new membership's charge (the sign-up usually skips payment, `onlinecash` on the membership object [VERIFIED S1]); what sign-up does when the email already exists; how to find a current member by email or phone (`GET /portal/api/v1/members` lists current members [VERIFIED S1]); the API key type each call needs; IDR as the club's currency setting; QRIS or e-wallets through GymMaster's own billing (cards only shown [S3]).

Polling instead of webhooks from GymMaster: a scheduled edge job reads memberships that are about to expire and sends the date to GoHighLevel for renewal reminders [R§6, INFERRED].

## 7. Field mapping: `passes.json` ids to GymMaster membership types

The research did not read the club's GymMaster account, so no membership type id or name is known. Every cell below is **TBC with the club / GymMaster**. What is verified is the shape: a sign-up takes a `membershiptypeid`, a start date and a first payment date; the membership object carries a price with a currency symbol, a sign-up fee and `onlinecash` [VERIFIED S1].

| `lengthId` (days) | Perform | Elite | Recharge |
|---|---|---|---|
| `day` (1) | `perform.day` → TBC | `elite.day` → TBC | `recharge.day` → TBC |
| `week` (7) | `perform.week` → TBC | `elite.week` → TBC | `recharge.week` → TBC |
| `w4` (28) | `perform.w4` → TBC | `elite.w4` → TBC | `recharge.w4` → TBC |
| `w12` (84) | `perform.w12` → TBC | `elite.w12` → TBC | `recharge.w12` → TBC |
| `w26` (182) | `perform.w26` → TBC | `elite.w26` → TBC | `recharge.w26` → TBC |
| `w52` (364) | `perform.w52` → TBC | `elite.w52` → TBC | `recharge.w52` → TBC |
| Duo day (per person) | `duo.day` → TBC (one price, 225.000 each, all tiers: TBC) | same | same |
| Duo `w4` (for two) | `duo.w4.perform` → TBC | `duo.w4.elite` → TBC | `duo.w4.recharge` → TBC |
| `class` `c1`, `c10` (reserved) | `class-single`, `class-10` → TBC (class pack, credit or product) | n/a | n/a |

To confirm for every row: the GymMaster membership type id; that its term matches our `days` (1, 7, 28, 84, 182, 364); that its price equals `passes.json` and the sign-up fee is 0 or shown; prepaid fixed term, not auto-renewing (the club's price list is prepaid fixed terms [R§2 F5, L2]); the access rules (Perform 6:00–22:00, Recharge 6:30–22:00 [BN 4]; door access if GymMaster runs it).

Known gaps, none solved by the API:

| Gap | Why it matters | Source |
|---|---|---|
| Day passes as short membership types may count as "current members" while they run and could push the club over its plan tier (Foundation up to 100, Advanced 400, Professional 1,300) | Money: plan price USD 89, 129 or 209 per month | [I8], VERIFIED S2 for the tiers, INFERRED for the effect. Alternative to test: sell day passes as a casual product. |
| "A day pass is credited toward a membership if you join afterwards" | How GymMaster applies the credit is unknown | [BN 5], [R§10 q3] |
| Duo needs two people | The order has one `customer`; GymMaster probably needs two member records (TBC) | `partner` field, section 4.3 |
| Partner discounts with memberships of 4 weeks or longer | Not an API function; handled by staff | [BN 5] |

## 8. Data protection points that change the build

| Point | Build consequence | Label |
|---|---|---|
| Consent comes first | A consent tool loads before GTM. GA4 and the Meta Pixel fire only after consent (Google Consent Mode). Consent state travels with the checkout (`consent` in the order) and is stored with it. Server-side purchase events leave the edge only when that flag allows. | INFERRED [R§9, I7] |
| Indonesia's Personal Data Protection Law (Law 27/2022) | A privacy notice that covers online checkout; a lawful basis (consent where marketing is involved); processor agreements with GymMaster, GoHighLevel, Cloudflare and Xendit, including cross-border transfer. The law text was not re-read for this file. GymMaster and GoHighLevel hosting regions: UNKNOWN. | INFERRED [R§9], UNKNOWN [R§9] |
| GDPR for visitors from the EU | Treat tracking as consent-required for everyone. The banner exists anyway. | INFERRED [R§9] |
| Card data | Never collected on our pages: redirect to Xendit's hosted page. Smallest PCI scope (the SAQ A route). No third-party tag on the pass-picker step beyond what consent allows. | INFERRED [R§9, I2] |
| Health data | Bloodwork and treatment details stay out of GoHighLevel and GymMaster notes. FORM's own Shopify carts stay separate. | INFERRED [R§6, R§9] |
| What the edge stores | Pending orders hold name, email, WhatsApp, consent and UTM. PROPOSAL: unpaid orders deleted 30 days after expiry; paid orders kept as long as the club's accounting rules require (TBC with the club's accountant); logs carry request ids, not personal data; consent record = timestamp, policy version, the exact text shown. | PROPOSAL |
| What GoHighLevel holds | Contact details, consent, source and UTM, purchase summary (pass, amount, date), lifecycle tags, expiry date. Never card data, never health detail. | INFERRED [R§6] |
| Existing privacy policy | The footer links `elitefitbali.com/privacy-policy/` [SEC §10]. Whether it covers online purchase, GymMaster, GoHighLevel and Xendit: TBC. | [R§10 q8] |
| Cookies | The mock adapter sets none and writes no storage. Live mode sends `credentials: 'omit'`: the API needs no cookie. | verified in `L6-test.js` |

## 9. Reserved class-pass extension

Declined for v2.0 (class passes stay information plus a WhatsApp link [CT §12.1]), documented so the back end does not need a second contract later.

- Order item: `{ "tierId": "class", "lengthId": "c1" | "c10", "qty": n }`. `startDate` optional. `duo` must be false. Price from `classPasses[]` (single class 300.000, 10-class pass 2.000.000, no gym floor access [BN 5]).
- The mock accepts it and totals it; no UI sends it.
- GymMaster object for a class pack or credit: TBC. Classes are booked in the app with a member token [S1], so a class pass buyer must become a member first.

## 10. Versioning

| Rule | Detail |
|---|---|
| Path | `/api/…` stays stable. A breaking change moves to `/api/v2/…`; `api.js` gets the new path in its live adapter and the old one stays until the page is updated. All items in this table are PROPOSAL. |
| Header | Every response carries `X-EF-Api-Version: 1`. |
| Additive changes | New optional response fields are not breaking. The client ignores unknown fields. |
| Data | `passes.json` carries `schemaVersion: 1`. |
| Parity test | The same Playwright suite (`_build/preview/L6-test.js`) runs against the mock and, later, against a staging back end: same inputs, same error codes. Today it also exercises the live adapter against local fakes (no provider). |

## 11. What is mock in v2.0, and what is real

| Piece | v2.0 | Real later |
|---|---|---|
| `EFApi.mode` | `'mock'` | `'live'` through `window.EF_CONFIG` (WordPress injects it) |
| Prices in `passes.json` | Real: the club's published price list, updated 17.09.2026 [BN 5] | Same numbers from edge config |
| Class names, times, trainers | Real: the club's schedule as captured in v1.3 [SEC §3] | GymMaster schedule through the edge |
| `spotsLeft`, `capacity` | Invented, marked MOCK in `schedule.mock.json` and passed through unchanged (a class without `spotsLeft` gets a hash of class id and date); stable on reload | `availability` if GymMaster fills it, otherwise `null` |
| "Now" and "Next" | Real clock in Bali time; `?now=2026-10-01T09:30` freezes it, mock mode only | Real clock only |
| `createCheckout` | Validates and prices from `passes.json`, returns `paymentUrl: null`, `mock: true`. No payment provider is contacted. | Xendit hosted checkout |
| Paid status | Only after `EFApi._simulatePayment(id)` (the "Simulate payment" button) | Only after the signed Xendit webhook |
| GymMaster member and payment log | Nothing is written | Created after `paid` |
| GoHighLevel | Nothing is sent | One-way mirror |
| Lead | `{ ok: true, id: 'mock-lead-…' }`, nothing stored | Contact in GoHighLevel, prospect in GymMaster |
| Storage | Memory only: no `localStorage`, no cookies, no network except the two same-origin JSON files | The server keeps the orders |
| Live adapter | Written and tested against local fakes. `LIVE (NOT WIRED)`: it cannot run in mock mode. | Switched on at phase 2 |

## 12. Questions for the owner that block going live (plain words)

From [R§10]. Each says what it blocks.

| # | Question | Blocks |
|---|---|---|
| 1 | Do you run the club on GymMaster today? Which plan, how many current members, who is the admin? Can GymMaster give us an API key for members and one for staff? Is online sign-up switched on? What is your company id in GymMaster? Is door access run by GymMaster? | The live schedule (a key is enough), and everything after it |
| 2 | Which payment provider is connected in GymMaster, if any? How do you take payment at the desk today: card machine, QRIS, bank transfer? Do you already hold a Xendit, Midtrans or DOKU account, and in which legal name (PT, PT PMA, CV, individual)? | Online payment. The payment account must be in the club's own name with your own paperwork [R§2 F2] |
| 3 | Do memberships stay prepaid for a fixed term, or should they renew by themselves? What are the refund and cancellation rules? How do you credit a day pass toward a membership today? | The checkout terms and the GymMaster set-up |
| 4 | Is there any merchandise to sell (products, stock, prices, photos, pickup only)? | Not the homepage. Merchandise is out of scope until the range exists [R§2 F4] |
| 5 | Who holds the domain and DNS, the hosting, the WordPress admin, the Elementor Pro and JetEngine licences, Google Tag Manager, GA4, Meta Business Manager and the Google Business Profile? | Publishing, the edge layer (it needs DNS on Cloudflare, TBC), consent and tracking |
| 6 | Which WhatsApp number is the official one: +62 851-9552-0220 or +62 857-2022-1101? Is it on the WhatsApp Business app today? | Every WhatsApp link, lead follow-up and the confirmation message. v2.0 uses +62 851-9552-0220 [BN 4] |
| 7 | Which address is right: Jalan Sempol No. 26 or Jalan Munduk Tengah No. 3? | Structured data and the map [BN 9] |
| 8 | Do you have a customer list or consent records, and a current privacy policy? | Compliance with the data protection law; importing contacts into the CRM |
| 9 | (From this contract, not the research.) When two people buy a Duo, must both be registered at purchase, or can the second person register at reception? | The order form (a `partner` field) and the GymMaster set-up |
| 10 | (From this contract.) Does the Duo day price of 225.000 per person apply to all three passes? The promo page shows one price. | The Duo day total [BN 5] |
| 11 | (From this contract.) May day passes be sold as short GymMaster memberships, given the plan's member limit? | The GymMaster plan cost |

## Change log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-10-01 | First version: architecture, conventions, error model, five endpoints, state machine, webhook flow, GymMaster mapping, data protection, reserved class pass, versioning, mock-versus-real table, owner questions (lane L6). |
