> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane L2 report: pass shop, sticky buy bar, checkout panel

Version: v1.0 — 2026-10-01 · owner: L2 (Sonnet 5.5) · for the integrator and the motion lead.

Everything purchasable is a labelled concept. Nothing is stored or sent, no provider is contacted, nothing is published or committed.

## 1. Files written

| File | What |
|---|---|
| `partials/passes.html` | `#passes` (SECTIONS §4), word for word |
| `partials/buybar.html` | `#buybar` (SECTIONS §11) |
| `partials/checkout.html` | `#checkout` (SECTIONS §12) |
| `assets/css/shop.css` | `.shop*`, `.buybar*`, `.co*`; layout and surface only, tokens only; no motion declarations (grep: 0 hits for transition / animation / keyframes, 0 hex or rgb values) |
| `assets/js/shop.js` | IIFE, `window.EFShop`; no console.error / warn, no storage |
| `_build/preview/L2*` | scratch: `L2.html` (real api.js), `L2-stub.html` (stub api, `?fail=passes|checkout|status|slowpaid`), `L2-nojs.html`, `L2-build.mjs`, `L2-test.mjs`, `L2-shot.mjs`, `L2-smoke.mjs`, `L2-stub-api.js`, `L2-results.json`, `L2-*.png` |
| `_build/lane-L2-report.md` | this file (no `.html` twin: it is a build note, not a deliverable) |

No images, fonts or media. Inline SVG only (WhatsApp glyph copied from v1.3 `index.html`, close cross, nothing else). No library.

## 2. Hooks and attributes

`data-motion` used: `reveal-words` (H2), `reveal` (`.shop__controls`, `.shop__notes`, `.shop__classes`), `tab-indicator` (`.shop__lengths`, `.co__lengths`), `stagger` + `data-motion-item` (`.shop__grid`, tier cards), `lift` (tier cards), `price-morph` (every price), `press` (every `.btn`), `buybar` (`#buybar`), `sheet` (`#checkout`), `step` (`.co__panel`). No invented hooks.

State attributes set by `shop.js` (CONTRACT §4):

- `#checkout[data-state=open|closed]`, `#checkout[data-checkout-step=choose|details|pay|done]`, `.co__panel[data-active=true|false]`, `.co__steps li[aria-current=step][data-done=true|false]` (the step list uses `data-co-step`, not `data-step`, so it cannot collide with the panels).
- `data-selected=true|false` on length chips (shop and sheet), tier cards in the sheet, payment-method chips. Also `aria-checked`, roving `tabindex`.
- Price elements: `textContent` and `aria-label` are written first, `data-value` last. Nothing is written when the value is unchanged (a load with matching numbers causes no mutation).
- `#buybar[data-state=open|closed]` and `body[data-buybar=open|closed]`.
- `body[data-scroll-lock=true]` and `html[data-scroll-lock=true]` while the sheet is open; `html` gets `--ef-sbw` (scrollbar width) and CSS applies `overflow: hidden; padding-right: var(--ef-sbw)`.
- Not in the contract, mine: `data-bare` on price elements that show digits only (the three shop cards), `data-nudge="true"` on the Duo helper line, `data-co-action` / `data-co` as JS hooks inside the sheet, `aria-busy` on `.co__sheet` while an API call runs.

Events on `document`: `ef:passselect {tierId, lengthId, price, duo, total, source:'shop'|'checkout'}` (shop: on every length or Duo change; sheet: on open and every change; `price` = price as shown on a card, `total` = order total), `ef:checkout:step {from, to}` (`from:null` on open). Closing the sheet emits no step event (`to:null` would break listeners that index panels by `to`); closing is `data-state="closed"`.

Openers: delegated `click` on `document` for `[data-open-checkout]` with optional `data-tier`, `data-length`, `data-duo`. Missing `data-length` / `data-duo` take the shop switch; missing or unknown `data-tier` → `perform`; an unknown length → the shop switch; Duo is dropped when not allowed for that length.

`window.EFShop`: `open({tier,length,duo})`, `close()`, `isOpen()`, `state()`, `ready` (promise), `priceFor()`, `totalFor()`, `formatIdr()`.

## 3. Behaviour decisions (where the spec left room)

- **Price text.** SECTIONS §4 shows the shop card number as `350.000` with the unit in `.shop__per` (`IDR · day pass`) and `aria-label="350.000 rupiah"`; the lane brief asks for `aria-label="IDR 350.000"`. I followed the brief for the label and the spec for the visible text (`data-bare` = digits only). Every other price (buy bar, sheet tiers, summary, pay title, pay total) reads `IDR 350.000`, as the global copy rule says.
- **Prices only from `EFApi.getPasses()`.** The numbers in the partials are the no-JS fallback (day prices, buy bar 300.000, class passes) and equal the JSON. Class-pass prices in the shop row are rewritten from `classPasses` (`data-class-price`). The sheet and shop never type a number.
- **Duo.** Allowed lengths and tiers come from `passes.json` (`duo.lengths`, `duo.dayPassTiers`, `duo.people`, `duo.fourWeek`). A Duo day pass shows 225.000 each; the order total is 2 × 225.000 = IDR 450.000 (same maths as `api.js`). A 4-week Duo price is already for two. `qty` is always 1, `duo: true` goes on the order. Duo resets and the switch is `aria-disabled` when another length is picked; tapping a disabled switch bolds the helper line.
- **Class passes**: information plus the WhatsApp link only (CONTRACT §12.1). No class option anywhere in the sheet.
- **Choose step layout.** Continue is a sticky row at the bottom of the sheet, so it is reachable whatever the height. "Prefer to ask first? WhatsApp us" follows in the flow (it scrolls). At 390×844 the first-day field and the summary peek are visible on open; the sheet still scrolls by 84 px (375×812: 115 px).
- **Details step**: real validation, own messages, inline, `aria-invalid`, errors linked by `aria-describedby`, focus to the first invalid field, errors clear while typing, nothing is stored or sent. Messages are mine (not in the spec): "Enter the name for the pass." / "Enter the name as it should appear on the pass." / "Enter your email address." / "That email address does not look right. Check for a missing @ or dot." / "Enter your WhatsApp number." / "Use the full number with country code, for example +62 812 3456 7890." WhatsApp accepts an international number (`+` or `00`, 8 to 15 digits) or an Indonesian national number (`0` + 8 to 12 digits); it is normalised before it goes to `createCheckout`. The first day is today to today + 90 days (the limit `api.js` enforces); out-of-range messages are inline.
- **Pay step**: `Pay now` is `aria-disabled` and inert; "Simulate payment" calls `EFApi._simulatePayment(id)` (mock only) then `EFApi.getCheckoutStatus(id)` and moves to done. Reference shown = `status.reference` (`EF-MOCK-0001` style from api.js). If a mock status still reads `awaiting_payment`, the concept still ends in the confirmation (the Simulate button is the payment). `expired` / `failed` give an inline message. In `live` mode a `https://` `paymentUrl` redirects (never reached in v2.0).
- **Errors, all inline and friendly, never a console error**: API down at load (inline notice under the shop controls, static day prices stay, chips do nothing; the sheet opens with an inline message and Continue does not advance); `createCheckout` failing (message on the details step, not stuck busy); status failing (message on the pay step). Panel messages scroll into view above the sticky row.
- **Modal plumbing**: `role=dialog aria-modal`, focus to `#co-title` (tabindex -1) on open and on every step; Tab and Shift+Tab wrap inside the sheet; `inert` on every other `body` child (falls back to `aria-hidden`); Escape, backdrop click, Close and Done close; focus returns to the opener (retries for ~240 ms in case a motion layer keeps it hidden for a frame); a history entry is pushed on open, so the browser Back button closes the sheet and stays on the page (UI closes consume that entry, so open/close cycles do not pile up history); `history.scrollRestoration` is `manual` while open and 600 ms after, so Back and "See today's classes" never jump the page. Closing wipes the form and the session. `See today's classes` closes, scrolls to `#today` and focuses `#today-title`.
- **Buy bar**: opens when `#hero-cta` has left the viewport (falls back to `#hero`, then to always), closes while the sheet is open and while `#site-footer` is in view, `display: none` from 760. The bar is an action row (WA 44×44, text, CTA ≥ 44), exempt from the one-column rule; the 4-step progress list in the sheet and the pay-summary key/value rows are exempt the same way.
- **Tablet 760–1023**: pass cards stay one column (max 34 rem, centred); three across from 1024 (Elite 24 px taller). The sheet is a centred 520 px dialog from 760; the six length chips sit in a 3×2 grid there.
- **No JS** (needs `html.js` from the integrator's head one-liner): the length switch, Duo switch and Choose buttons are hidden (`html:not(.js)`), the three day prices and the notes stay; the sheet and the bar are hidden by their closed state.
- Added accessible text not in the spec: `(opens in a new tab)` visually hidden on the two WhatsApp text links; a hidden `Error: ` prefix in each field message; a visually hidden `<legend>Pass</legend>` for the tier radios.

## 4. What I measured (WebKit iPhone 390×844 and 375×812 with touch, Chromium 1440×900; script `_build/preview/L2-test.mjs`, results in `L2-results.json`)

144 checks, 0 failed; 66 width checks, 0 failed; console: 0 errors, 0 warnings, 0 page errors, 0 failed requests (only the one `[EF mock adapter]` info line).

- **Prices**: all 18 length × tier prices checked by clicking the chips, against a separate copy of the BRAND-NOTES item 5 numbers typed into the test (not read from passes.json): visible text, `data-value`, `aria-label` and the `.shop__per` label exact (WebKit 390 and Chromium 1440). Duo: day 225.000 each on all three cards, 4 weeks 3.800.000 / 4.400.000 / 3.400.000 for two; Duo enabled only for day and 4 weeks, resets on 12 weeks. In the sheet: Recharge Duo day = IDR 450.000 total, 12 weeks = IDR 5.000.000, summary and pay total follow.
- **Price fit**: the widest price (25.000.000) as text is 326 px in a 339 px card at 1440 and 244 px in 254 px at 1024; no price element overflows its card at any length (checked for all 18 at 390 and 1440).
- **Elite card** is 24 px taller at 1440, 1280, 1024 (392 vs 368, 391 vs 367, 397 vs 373).
- **Tap budget** (taps counted by the script; the times are DOM times with no motion layer present, so they exclude the sheet animation): day pass → details: **2 taps** (hero CTA, Continue), choose visible after 35 ms (WebKit 390) / 60 ms (Chromium 1440), details after 78 / 134 ms; the same 2 at 375. 4 weeks (hero path: CTA, "4 weeks" chip, Continue): **3 taps**, 124 ms (390), 166 ms (1440), 115 ms (375). 4 weeks from the shop (chip, Choose Elite, Continue): **3 taps**, 154 / 167 / 138 ms, and it carries Elite + 4 weeks (IDR 2.700.000) into the sheet. Limits are 3 and 4.
- **Openers**: header button, hero CTA, Today foot button, buy-bar CTA, Choose buttons, plus synthetic elements with `data-duo`, `data-duo="false"`, bad values and no attributes: all land on the expected tier / length / Duo.
- **Checkout steps** (all screenshotted): choose → details (empty, then malformed, then valid) → pay → back to details with typed values kept → pay → simulate → done. Event order verified: `null>choose, choose>details, details>pay, pay>details, details>pay, pay>done`. Nothing in localStorage, sessionStorage or cookies.
- **Escape, Back, backdrop, Close, focus**: Escape closes and returns focus to the opener; the browser Back button closes (stays on the page, focus returns); backdrop tap closes; Close closes; history length does not grow after open/close cycles; Tab ×40 and Shift+Tab ×20 never leave the sheet in Chromium; keyboard open (Enter on the header button) then Escape returns focus to it. WebKit on macOS does not Tab to buttons or links by default, so after the last control Tab goes to the browser chrome (activeElement = body); focus never reached the page behind (it is `inert`). I did not test with Full Keyboard Access on.
- **Scroll lock without shift**: with a real 15 px classic scrollbar (forced in Chromium, because headless macOS uses overlay bars), opening and closing the sheet moved nothing (header, container, card x and width, scrollY all identical before, during, after) and CLS over load + open + close was 0.00.
- **Buy bar**: closed at the top, opens after scrolling past the hero CTA (pinned to the bottom edge, 64 px high, WA 44×44, CTA 44 px tall, "Day passes from IDR 300.000"), closes while the sheet is open, returns after closing with focus on its CTA, closes in the footer and again at the top; never visible at 1440 (`display: none`).
- **No horizontal scroll** (`scrollWidth ≤ innerWidth` for html and body), closed and with the sheet open at choose, details, details with errors, pay and done: 320, 375, 390 (WebKit), 760, 1024, 1440 (Chromium). The sheet stays inside the viewport at all of those.
- **Tap targets**: at 390 and 375, every control in the pass shop, the buy bar and every checkout step is ≥ 44×44 (measured).
- **Failure modes** (stub api): API down, `createCheckout` rejecting, status rejecting, status staying `awaiting_payment`, no JS: each behaves as in section 3.
- **Static checks**: shop.css has no transition / animation / keyframes / hex / rgb; partials have no `<script>`, `<style>` or inline handlers; shop.js has no `console.error` / `console.warn` and no storage calls.

## 5. Judged by eye only (not measured)

Visual quality of the screenshots I opened: shop at 390 and 1440, choose at 390, 320, 760, 1024, 1440, details with errors at 390 and 1440, pay at 390, done at 390, buy bar at 390. Not opened: the 375 images, pay and done at 1440, the API-down screenshot after the last change (the message now sits at the top of the choose panel; the test checks it is shown), the no-JS page. Mobile tier cards: the `.shop__tag` label is centred by base.css's mobile label rule while the card text is left (a badge over a left-aligned card); I kept the shared rule. Not tested: a real iPhone (native date picker, on-screen keyboard pushing the sheet), VoiceOver / NVDA announcements, WebKit with Full Keyboard Access, any motion (motion.js and motion.css did not exist yet).

## 6. Open issues and requests

**To the motion lead (M)**
- End states are declared in `shop.css`; add transitions on them, nothing else is needed: `.co` `visibility` (delay the hide by the close duration, show at 0 s), `.co__backdrop` `opacity`, `.co__sheet` `transform` (< 760: `translateY(100%)` ↔ none; ≥ 760: `opacity 0` + `scale(.98)` ↔ none), `#buybar` `visibility` + `transform` (`translateY(100%)` ↔ none), `.shop__duo-track::after` knob `transform` (translateX 0 ↔ 1 rem on `[aria-checked=true]`).
- `.co__panel` is `display: none` unless `data-active="true"` (then `display: flex`), so the leaving panel cannot be animated out; an entering animation on `[data-active="true"]` works. If you need both panels present, override `display` under `html.motion-ok`.
- `price-morph`: text and `aria-label` are already the final value when `data-value` changes. Elements marked `data-bare` show digits only, all others carry the `IDR ` prefix; please morph digits and keep the other characters. The pay title price span (`#co-title .num`) is created fresh when the pay step opens.
- `.shop__lengths` and `.co__lengths` are `position: relative` for a `tab-indicator`; selected chip = `[data-selected="true"]`.
- The sheet's scroll container is `.co__body`; `.co__head` and the sticky `.co__actions` do not scroll.

**To L1 (hero, header)**: `#hero-cta` must exist (the buy bar watches it), carrying `data-open-checkout data-tier="perform" data-length="day"`; the header button and hero card use the same attributes. If the hero card price is static text it must equal 350.000 (shop.js does not touch other lanes' elements).

**To L3 (schedule)**: `#today` must exist; `shop.js` focuses `#today-title` (adds `tabindex="-1"` if missing) after "See today's classes".

**To L6 (data)**: nothing blocking. Data question for Raoul: `duo.dayPassEach` is a single 225.000 for all three tiers, so a Duo Recharge day (225.000 each) is 75.000 below its single day pass and a Duo Perform day is 125.000 below; BRAND-NOTES item 5 says only "Duo day pass 225.000 each (promo page)". `api.js` pairs with this exactly (qty 1, `duo: true`, total 2 × 225.000, `_simulatePayment`, `status.reference`).

**To the integrator**
- Load order `api.js`, then `shop.js` (both `defer`). `html.js` must be set by the head one-liner (the no-JS rule keys off it).
- `#checkout` and `#buybar` must be direct children of `<body>` (the page behind is made `inert` by iterating `body.children`); `#site-footer` must exist.
- `html[data-scroll-lock]` rule lives in `shop.css` (section 0), so any page that loads `shop.css` gets the scroll lock.
- Copy to check against the spec owner: the hidden `.shop__error` line ("Prices are unavailable right now. Ask us on WhatsApp.") and the choose-step error ("Prices are unavailable right now. Message us on WhatsApp and we will help you buy a pass.") are mine, as are the validation and error messages in section 3.
- WordPress mapping: the three partials map to `template-parts/passes.php`, `buybar.php`, `checkout.php`; prices come from the JSON or the WP price source behind `EFApi.getPasses()`, never from the template.

## Change log

- v1.0 — 2026-10-01 — first version (L2).
