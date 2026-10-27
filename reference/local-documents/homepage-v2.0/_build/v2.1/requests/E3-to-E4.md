> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request E3 → E4 (motion.js / motion.css)

Version: v2.1 — 2026-10-01 · from lane E3 (shop, buy bar, checkout). Changelog: created.

E3 does not edit motion.js or motion.css. These are the points where E3 relies on, or asks for, something in E4's files.

## 1. Ask: start the checkout reference roll after the panel has landed (motion.js, `onCheckoutStep`, `det.to === 'done'`)
- Now: `later(fn, 30)` + odometer `delay: 120` → the roll starts ~150 ms after the step change, while the panel slide (260 ms), the title fade (260 ms) and E3's last progress segment (300 ms) are still running → 4 simultaneous animations on a phone.
- Change: start it at the end of the step slide, e.g. `later(fn, 30)` + `delay: cssMs(co, '--m-dur-step', 260)` (instead of `delay: 120`).
- Why: E3's success tick (`.co__tick`, shop.css) also starts at 260 ms (`--e3-delay-tick`), so the done step runs at most 3 things at once: slide + title + progress (0–260 ms), then tick + reference roll (260–~1000 ms).

## 2. FYI, keep working: `counter` together with `price-morph` on the shop card prices
- passes.html now carries `data-motion="price-morph counter"` on `.shop__price .num` (3 cards). The count-up uses motion.js `primeCounter` / `playOdo` unchanged; shop.css sets `--m-dur-count: 450ms` on those elements so 6 digits finish in 900 ms (450 + 5 × 90 stagger).
- Please keep: `morphPrice` stopping a primed (paused) counter when the element is off-screen, and `odometer()` carrying a paused counter's digits when a visible price changes. If you change the counter stagger (90 ms hard-coded in `primeCounter`), tell E3 so the 900 ms total still holds.

## 3. FYI: E3 overrides the press transition on its own buttons only (shop.css, higher specificity)
- `.shop__choose`, `.buybar__cta`, `.co__actions .btn`, `.co__mock .btn`: press-in `--m-dur-press` (100 ms), scale `--e3-press-scale` 0.965 + `translate: 0 1px`, release 220 ms, plus a 14 % ink shade (`::after`, opacity). If E4 adds a global press shadow or changes `.btn:active`, these four keep E3's version; please do not add `::after` / `::before` to `.btn` globally (E3 uses both on these buttons).

## 4. FYI: new tab-indicator group
- checkout.html: `.co__methods` (payment method chips) now has `data-motion="tab-indicator"` (same chip markup as `.co__lengths`). Nothing to change if `ensureInd` keeps handling any chip group.

## 5. FYI: attributes E3 writes on `#checkout` (presentation only, E3's own CSS reads them)
- `data-e3-snap` (present for two frames when the sheet opens: E3's tier frame and progress bar jump instead of animating), `data-e3-wait` (prices still loading), `.co__tiers[data-e3-ind]` + inline `--e3-ind-y` / `--e3-ind-h`, inline `transform-origin` on `.co__sheet` (≥ 760: the dialog grows from the tapped button). None of them is in motion.js's `ATTRS` list; please do not add them there.

## 6. Keep sticky working on phones (added 16:15, Raoul's pass-shop request)
- `.shop__lengths` is `position: sticky; top: var(--hdr-h)` below 760 inside `#passes > .container` (a flex column on phones). Please add no `overflow: hidden|auto|scroll` and no `contain: paint|strict|content` to `#passes`, `.sec`, `.container` or `main` (`overflow: clip` is fine). `.shop__controls` is `display: contents` on phones, so a reveal on it has no box there (harmless).
- E3 animates one layout property on a tap only: `.shop__inc` `grid-template-rows` 0fr ↔ 1fr (280 ms), the "What's included" rows. Measured in audit-E3.md.
