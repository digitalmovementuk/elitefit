> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Pricing lane report (pricing section, buy bar, WhatsApp button)

Version: v3.0 — 2026-10-02 · lane: pricing (Sonnet 5.5, xhigh) · status: Phase 1 delivered, in the live tab at :8201

## What is there

- **Pricing section** `#pricing`, rendered from `assets/data/passes.json`, `site.json`, `offers.json`, `reviews.json`, `hours.json`; nothing price-like or fact-like sits in the markup.
  - Length selector: one row of six segments (1 DAY, 1 WEEK, 4, 12, 26, 52 WEEKS) with a sliding pill; radiogroup with arrow keys, Home and End. Sticky under the header (`top: var(--header-h)`) from the section start until the section ends.
  - Three tier cards, one column on a phone, three columns from 760 px. Real price on every card in an odometer: digits roll by transform only, right to left 20 ms apart, 420 ms each, interruptible. Selected-card frame travels from card to card (transform, plus width and height of an empty outline).
  - Duo switch (per person, "each, for two") for the lengths the club publishes a Duo price for; a pass without a published Duo price keeps its single price marked "no Duo price".
  - One primary button per card: `ef:checkout {tier, length, duo}` + `preventDefault` once `window.EF.checkoutReady === true` (CONTRACT 3b); until then a `wa.me` link with the chosen tier, length and price in the text.
  - Below: the club's own notes, class passes, partner-discount block (55 offers, 10% to 30%, five groups), the three live offers, and a four-cell trust stack (4.7 on Google with 488 reviews, hours incl. Recharge 06:30, address with map link, what every pass includes).
- **Buy bar** `#buybar` (phones under 760 px): cheapest day pass from data (Recharge day pass, IDR 300.000) and "Buy a pass". Opens when the hero's own Buy a pass button has left the screen, closes while `#pricing` is on screen. The jump itself is done by the hero lane's global anchor handler (with `window.EF.highlight`); the module keeps its own jump and highlight only as a fallback. Safe-area insets in CSS.
- **WhatsApp button** `#wa-fab`: 56 px (48 px under 760 px of height), bottom right, two-ring pulse plus a slight breathe (transform and opacity only), lifts above the buy bar through `html[data-buybar="open"]`, `wa.me` link with a neutral hello. Reduced motion or data-saver: static halo, no animation. Also shown on desktop (decision in DECISIONS.md).

## Files (all mine)

`partials/40-pricing.html`, `50-buybar.html`, `51-whatsapp.html` · `assets/css/pricing.css`, `buybar.css`, `whatsapp.css` · `assets/js/pricing.js` (also exports `loadData`, `fmt`, `waUrl`, `lex` for the other two), `buybar.js`, `whatsapp.js` · `assets/data/site.json`, `offers.json` · `copy/slots/pricing.json` (51 slots, every provisional string inside its `max`).
Size, unminified: JS 7.8 + 2.1 + 1.2 KB gzip (11.1 KB), CSS 5.7 KB gzip.

## Checked (WebKit 390x844 first, then Chromium 1440x900, through the browser lock)

- **All three tiers in one phone viewport** (390x844, day pass): sticky selector at 56 to 125, cards 133 to 303, 315 to 543, 555 to 745 (after the copy review, with the writer's longer Elite comparison sentence); the WhatsApp button starts at 772. At 52 weeks the Elite comparison line wraps and the third card ends at about 760 (not measured to the pixel).
- **Selector pinned** while scrolling the whole section (`data-pinned` set, bar top equals the header height); released at the end of the section.
- **Odometer interrupt** (week, 52 weeks, 4 weeks within 150 ms): all three strips land on the right digits. 4x CPU throttle in Chromium, length taps and card travel: 266 frames, p50 16.7 ms, p95 16.8 ms, none over 20 ms.
- **Length change** all six lengths; prices equal `passes.json`. **Duo**: day pass Elite only (225.000 each), 4 weeks (1.900.000 / 2.200.000 / 1.700.000 each), 52 weeks (16.000.000 / 22.500.000 / 13.250.000 each), off and disabled on the other lengths.
- **Keyboard**: arrows, Home, End move and select; Chromium Tab order chip, switch, pick, button, pick, button ...; the focus ring is drawn on the pill. WebKit via Playwright tabs only to elements with a tabindex (Safari's default setting), so the Tab order was verified in Chromium.
- **Reduced motion**: `motion-off`, pill and strips `0s`, no pulse, halo kept; state changes instantly.
- **Buy bar and button**: closed at the top and while `#pricing` is on screen, open in between (label "Recharge day pass", `300.000`), button 15 px above the bar. "Buy a pass" lands on the heading with the hero lane's highlight.
- **ef:checkout** with the real checkout module: the card button opens the sheet with tier, length and Duo preselected (Perform/day, Elite/4 weeks/Duo, Recharge/day with Duo on = `duo:false`), no popup, no wa.me page. Until `checkoutReady` the link stays.
- **320 px**: no horizontal overflow, name never overlaps the widest price. **1440 px**: no overflow, three columns, frame follows the card.
- Console: no errors from this lane. Other lanes' 404s seen during the runs: `assets/img/nutrition-clip-poster.webp`, `nutrition-bowl.webp` (nutrition lane, files not there yet).
- Contrast (tokens of 2026-10-02, 11:0x): body text on cards 12.9, muted 7.6, faint 5.0, dark text on the accent 4.9, glyph on WhatsApp green 9.0.

## Layout shift (CLS) fix (2026-10-02, reviews lane finding)

- **Cause found:** the cards and everything under them (notes, partner block, offers, trust stack) are filled from data after load and the section only held 3 x 186 px (phone) or 186 px (desktop) for them, so a visitor already on or below the section (an `#pricing` link, a restored scroll) saw the content under the cards jump when the data arrived: 0.046 at 1024x768 with `#pricing`; also an empty trust list that sat at the top of the block and jumped to the bottom (0.0018 at 1024, 0.0007 at 1440).
- **Fix:** `data-reserve` on the section holds the final height of `.prc-cards` and `.prc-more` until pricing.js has rendered (`pricing.css`, upper bounds of the heights measured every 10 px from 320 to 1920; phone block under the cards follows a linear bound). The empty trust list is `hidden` until filled. pricing.js drops the reservation as soon as the section is wholly below the viewport (the usual visitor never sees a surplus); a visitor who is on or past the section keeps the reserved space (largest surplus 121 px at 440 px width) and it goes when they scroll away.
- **Check tool:** `node _tools/check-pricing-reserve.mjs` compares reserved and final heights at every width (shortfall 0.0 px, largest surplus 121 px). Re-run it after copy or data changes; the reserved numbers belong to the current copy.
- **Measured** (Chromium, cold context, load + 3 s + three swipes + whole-page scroll, `?nolive`): CLS 0 at 390x844, 768x1024, 1024x768 and 1440x900, plain and with `#pricing`, `#reviews` and `#visit` anchors. Harness `_tools/measure.mjs` load: Chromium 390 CLS 0, Chromium 1440 CLS 0, WebKit 390 0 elements moved. First-viewport numbers unchanged (cards 133 to 744 on 390x844, WhatsApp button at 772); interrupt test, frame travel, no console errors.
- Not mine: an earlier `#reviews` probe at 390x844 had shown 0.94 from the reviews section itself; it did not recur.

## Copy review fixes (2026-10-02, copy-review-1)

- **Perform day pass lists no classes.** The club does not say a Perform-only day pass includes them (FACTS section 17, F-CLS-29). `site.json pricing.includesSkip` (`perform: day: Unlimited group classes`) is read by `pricing.js`; from one week up, and for Elite at every length (F-PRC-06), the line stays.
- **Offers use the club's own wording** (F-OFR-01 to 03): "Grab a day pass. Buy 1, get 1 free." and "Bring a friend, your partner, or your regular workout buddy"; the price clause now says "IDR 225.000 each for the Elite day pass" (F-PRC-06) instead of "the full Elite experience". Note: that last phrase IS the club's verbatim sentence in F-OFR-01; it was replaced only to keep Elite a name, not a boast. Duo membership and Free tour text are now verbatim too.
- **WhatsApp greetings** in data and code open "Hello Elite Fit Bali," (comma) like copy.json: offers.json (2), the lexicon fallbacks, the failure link and the button default.
- **Currency travels with the number.** copy.json writes "at {price}", "come to {sum}", "single class is {single}"; the variables now arrive as "IDR 350.000", so messages and the Elite line read correctly ("at IDR 350.000"). Card prices, behaviour and layout are unchanged.
- Curly apostrophes in the data strings (review item 6).
- Re-checked: Perform day card shows "Gym and outdoor area" only; week and up show classes; messages and offers text as above; no overflow at 390; interrupt test passes; frame equals card; no console errors.

## First-viewport rule (FAB)

The classes card spans the full width and ends 23 to 54 px above the bottom edge on short phones, so no button position clears it there. Tweak made: 48 px and 12 px margins under 760 px of height, and at the very top of the page (scroll under 8 px) the button fades out only if it would cover `.cls__live` (or any `[data-wa-clear]`), and returns with the first scroll. Measured: 390x844 visible, card ends at 752, button starts at 772; 375x667 and 360x740 hidden at the top, visible after a 40 px scroll, hidden again at the top. This departs from "always visible" in the untouched first view of short phones only.

## What the club says versus passes.json (details in FACTS section 12)

- Duo day pass 225.000 exists for the Elite experience only (F-PRC-06); passes.json lists all three tiers. The yearly Duo price is missing in passes.json (F-PRC-05). Both are handled by `site.json` (`pricing.duoDayPassTiers`, `pricing.duoEach`); request in `_build/requests/pricing-passes-json.md`.
- The club calls the last length "Yearly" (365 days); the chip says 52 weeks as the brief does (D-05).

## Open, for Raoul or the orchestrator

1. **WhatsApp number, TO CONFIRM before launch.** The page uses +62 851-9552-0220 (the club's newest sales page, same as v2.1). The main site and Google use +62 857-2022-1101 (F-ADR-09/12). One value in `site.json`.
2. The club labels Elite "BEST DEAL" and "Most Popular". No badge is shown (voice guard); a factual line "Perform + Recharge separately: IDR X" is on the Elite card instead. A badge is one line in `site.json`.
3. Partner discounts: the club prints no partner names as text (logos only), so the block shows count, range and groups, no names.
4. Day-pass credit: the note is the club's own sentence; the club does not say if it covers every day pass (F-PRC-13). Terms (paid upfront, non-refundable, F-PRC-14) are not on the cards; the checkout lane may carry them.
5. Not measured: WebKit frame timing (Playwright cannot throttle WebKit's CPU), real-device safe-area insets, the buy bar over a real iPhone home indicator.

## Change log
- v3.0 — 2026-10-02: created; updated after the ef:checkout hand-off and the first-viewport rule; copy-review fixes (Perform day-pass classes line, offers wording, greeting comma, currency in placeholders); CLS fix (reserved heights, hidden trust list).
