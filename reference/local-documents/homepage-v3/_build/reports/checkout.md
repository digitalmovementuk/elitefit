> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Checkout lane report: the full customer journey

Version: v3.0 — 2026-10-02 · lane: checkout (Sonnet 5.5, xhigh) · marker `_build/ready/checkout.ready`

## 1. What exists

A five-step sheet from "Choose on the pricing card" to a calm confirmation. Phones: bottom sheet at 92 dvh. From 760 px: centred dialog. From 960 px: two columns with a running summary (items, what is included, total) on the right.

| Step | What the visitor does | Notes |
|---|---|---|
| 1 Your pass | Tier, length, Duo yes/no, start date (today, tomorrow, pick a date), sees the live total | Price rolls like an odometer (digits move by transform, interruptible, 380 ms plus 16 ms per digit). Included list in the club's own words. Duo switch is disabled with a plain line where the club publishes no Duo price. |
| 2 Your details | Name, WhatsApp number (required, 7 to 15 digits), email optional, partner name for Duo | `autocomplete`, `inputmode`, `enterkeyhint` set, 16 px+ text, errors on blur and live while fixing, first bad field focused. Enter moves on. |
| 3 Review | Line items, total in IDR (dot thousands), details, included list, the club's own terms verbatim, edit links to steps 1 and 2 | No end date, no day counts (FACTS D-05). |
| 4 Payment (CONCEPT) | Picks a placeholder method, taps a pay button | Drawn illustration only, no input field, 700 ms loading state, then step 5. |
| 5 Confirmation | Reads the summary, taps Send your details on WhatsApp | Real `wa.me` link with the order text; See the message shows exactly what will be sent; Back to the page closes the sheet. |

Back works at every step (header arrow on phones, text button on desktop, progress bar for earlier steps). Nothing is lost going back (tested). Close with details typed in shows a light discard bar (Keep editing / Discard).

## 2. What is real and what is a concept

**Real:** the prices, tier names, lengths, Duo prices (same derivation as the pricing cards), the included lists and the terms (club wording, FACTS ids in `checkout.json`), the start-date logic in club time (WITA), the validation, and the WhatsApp handoff (`https://wa.me/<number>?text=...`, number from `site.json`, status TO CONFIRM). The page sends nothing: the visitor taps send in WhatsApp.

**Concept:** step 4 and the confirmation's payment wording. The four methods (Card, QRIS, E-wallet, Bank transfer) are placeholders flagged `status: concept` in `checkout.json`; the names are the ones the v2.0 design concept used. **The club's real payment set-up is unknown** (no club page names a provider or a method). The pay button carries a Concept tag, the screen a dashed Concept notice (`concept.notice` in `checkout.json`, set false to remove; text is the copy slot `checkout.concept_notice`). The confirmation never says booked or paid.

## 3. Hard rules, with evidence

- **Zero network after init, nothing stored:** `_build/reports/checkout-assert.cjs` records every request from the first open to the last close (the dev server's `/__live` reload channel is blocked) and snapshots localStorage, sessionStorage, cookies and IndexedDB before and after: 0 requests, identical snapshots. All data (passes, site, checkout, hours) is fetched once in `init()`. No `history` entry. State is memory only; inputs, message text, WhatsApp link and summaries are wiped 340 ms after close.
- **No real payment field:** step 4 holds four radio inputs and inline SVG drawings; asserted: no text, card, tel field, no form, no iframe in the panel.
- **No invented content:** no reference number, countdown, capacity claim, discount percentage or end date. Duo is shown only where the club publishes a price. Perform day pass does not claim classes (FACTS F-CLS-29). Partner discounts only from 4 weeks (F-PRC-11).
- **Focus and page lock:** `role=dialog aria-modal`, siblings of the sheet inert (the buy bar keeps its own open/closed state when released), `html{overflow:hidden; scrollbar-gutter:stable}` (page scroll position identical before and after, asserted), focus to the step heading on every step, Tab wraps at both ends, Esc closes (asks first when details are typed), focus returns to the clicked pricing button (remembered on click because Safari does not focus buttons).
- **Keyboard-safe:** `visualViewport` sets `--chk-kb` and `--chk-vvh`; the sheet sits on the keyboard, the progress row hides while it is open, a focused field scrolls to the middle on touch devices. Layout asserted with the variables set by hand; **a real on-screen keyboard was not tested** (no device).
- **Budgets:** `checkout.js` 10.1 KB gzip (limit 14), `checkout.css` 5.7 KB gzip (limit 7), loaded by main.js in idle time after `load`; the partial adds about 4.6 KB gzip to the HTML (the markup of a closed sheet, inert, no first-view paint or request).

## 4. Checks run (Playwright through the lock, final CSS)

- `checkout-assert.cjs`: WebKit 390x844, 375x667, 320x568, landscape 844x390; Chromium 1440x900 and 1024x768: **36/36, 36/36, 36/36, 34/34, 34/34, 34/34 pass.** Covers open from the real pricing button, bare event defaults, dialog attributes, inert and lock, tap targets 44 px+, no horizontal overflow with a 70-character unbroken name and a long Duo partner name, field attributes and 16 px text, inline error, Duo total (2 x 2.200.000 = 4.400.000), terms verbatim, concept notice and tag, 700 ms pay state, WhatsApp link and text, focus return, wipe, discard bar and focus trap, zero network, no storage, no console errors.
- Keyboard-only run (Chromium) in normal and reduced motion: Enter opens from the card button, Tab and Shift+Tab never leave the sheet, Enter moves between fields, errors focus the phone field, Esc asks then keeps editing, Discard closes and focus returns. Reduced motion: `html.motion-off`, no panel animation, sheet transition 0 s.
- 4x CPU throttle (Chromium, 390 and 1440): open, tier and length change (odometer), rapid length taps, all step changes, pay, close: average frame 16.3 to 17.4 ms; the only frames over 20 ms are one at open and one at the first odometer roll (33 ms), nothing else. First measurement with the system's backdrop blur at 1440 gave 18 to 19 ms averages and frames up to 50 ms (it re-blurs the playing hero clip), so the blur now runs on phones only.
- Behaviour run: empty date error, email error, back through the progress bar keeps date and details, length change after going back updates the total, three quick taps on Pay make one transition, close while paying asks and cancels, reopen starts fresh.
- Screenshots (LOOKED at): `_build/reports/checkout-shots/` (WebKit 390 steps 1 to 5, errors, discard bar, keyboard sim; Chromium 1440 steps 1, 3, 4, 5; landscape; 320 with a long name).

## 5. Files and interface

Files: `partials/52-checkout.html`, `assets/css/checkout.css`, `assets/js/checkout.js`, `assets/data/checkout.json`, `copy/slots/checkout.json` (86 slots), report, assertion script, screenshots.

- In: document event `ef:checkout` `{ tier, length, duo }` (no detail starts at step 1 with the cheapest day pass, the tier the buy bar names). Any element with `data-checkout` (+ `data-tier`, `data-length`, `data-duo`) also opens it. `window.EF.checkoutReady = true` is set only after the data has loaded; until then the pricing buttons keep their wa.me link. Handle: `window.EF.checkout.open(detail)` / `.close()`.
- Out (for the motion lane): `ef:checkout:open`, `ef:checkout:step { from, to, dir }`, `ef:checkout:close`.
- Motion moments for MOTION-V3 (owned by the motion lane, not edited): sheet rises 320 ms and drops 240 ms (dialog fades and scales 240 ms / 180 ms); step panel slides 24 px and fades in 272 ms, direction-aware, interruptible, nothing while reduced; progress bar fills by scaleX 260 ms; odometer 380 ms + 16 ms per digit; confirmation badge pops once 380 ms; spinner 700 ms. All transform and opacity, all behind `html.motion-ok`.

## 6. Open points (one line each)

1. **Payment set-up unknown:** methods are placeholders; replace or empty `concept.methods` when the club says how it takes payment.
2. **WhatsApp number TO CONFIRM** (`site.json`): the confirmation shows the number it uses.
3. **Recharge Duo:** the club prints a Recharge Duo price but also "DUO access requires Perform or Elite" (F-PRC-07). The journey follows the published price; `checkout.json duo.notOfferedFor` switches it off.
4. **Day-pass credit sentence** (F-PRC-13) is shown verbatim on day passes only; the club does not say whether it covers every day pass.
5. **No end date:** the club's T&C day counts (26 weeks = 168 days, annual = 365) contradict its labels (FACTS D-05).
6. **Legal wording** (terms and privacy acknowledgement, Indonesian data law) is deliberately not on the page: no "I agree" checkbox. For Raoul in chat.
7. **Start-date picker** runs from today to 90 days ahead: a design default, not a club rule (`checkout.json start.maxDaysAhead`).
8. **Safari default keyboard policy** skips buttons on plain Tab on every page; the sheet keeps the platform's Tab order (Option+Tab or Full Keyboard Access reaches everything).
9. **Real iPhone not tested:** on-screen keyboard and edge swipes were checked in WebKit and by variables only.
10. **Copy pass is live** (`copy/copy.json` holds all 86 checkout keys; 42 were rewritten). Two effects: (a) `checkout.duo_calc` lost its price ("Two people, this price each" under a line that shows the total for two), so it is retired and replaced by `checkout.duo_each` with `{each}` that must stay; the copy lane has not seen the new key yet and my provisional text shows until it does; (b) the briefed button text "Send your details on WhatsApp" now reads "Open in WhatsApp" (accurate: the page sends nothing). The 36/36 and 34/34 runs above were repeated with the live copy.
11. **Shared components:** `components.css` now exists (.btn, .field, .sheet, .seg ...); the `.chk-*` classes stay own-prefixed and can switch to it later (same tokens, so the look already matches). The club's terms use "Rp200k" because the sentences are quoted.

## Change log
- v3.0 — 2026-10-02: created with the first complete journey.
