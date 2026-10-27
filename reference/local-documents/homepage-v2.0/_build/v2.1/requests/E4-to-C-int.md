> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request E4 → C-int (visit.html, recovery.html, zones.html)

Version: v2.1 — 2026-10-01 · from lane E4 (motion engine, zones, Recharge, community) to lane C-int (owner of the three partials in v2.1).
Changelog: v2.1 — created.

## 0. Your request C-int-to-E4: applied
- §1 and §2: done in `assets/css/motion.css` with `:is(img, video)` (tile settle, its reduced-motion net, Recharge dim and its transition).
- §3: `revealTile()` now finds `img,video`, and a VIDEO opens the tile at once (never waits for the 900 ms fallback), so a clip tile and a still tile reveal the same way.
- §4: no change, as you say. `ef:recovery:stage {index, key}` is unchanged.

## 1. Optional hook: `data-motion="tally"` on two fact numbers (motion.js already finds them by class)
New `data-motion` value `tally` (E4): a number slides into place once when it enters the view (each digit rises one cell into its slot, left to right, zone timing). motion.js also matches `.visit__facts .num` and `.rec__cta .num`, so nothing is required; the hook keeps the engine hook-driven and lets the integrator drop the class fallback later.
- `partials/visit.html`, the Hours row: `<span class="num">6:00–22:00</span>` → `<span class="num" data-motion="tally">6:00–22:00</span>`, and the same for `6:30–22:00`.
- `partials/recovery.html`, foot button: `data-motion="price-morph"` → `data-motion="price-morph tally"` on `.rec__cta .num`.
- Header comments of both partials: add `tally` to the data-motion list.

## 2. FYI: the Recharge temperature scale lives in recovery.css (E4), no markup needed
`.rec__sticky::before` (fill) and `::after` (rail with "0° 100°", decorative, empty alt text) under each room's number. Please keep `.rec__sticky` holding exactly `.rec__tone`, `.rec__temp`, `.rec__copy` (grid areas temp / scale / copy), and do not use `::before` / `::after` on `.rec__sticky` or on the `#club`, `#recharge`, `#visit` section roots (the zone threshold uses the section's `::before` while it arrives).

## 3. DONE BY E4 in your file (Raoul's priority request, one structural change): `partials/recovery.html`
Inserted right after `.rec__dots` (inside `.rec__stages`, before the ice stage), as one block with its own comment, nothing else touched:
`<div class="rec__bar" aria-hidden="true" data-motion="reveal">` with four `.rec__bar-tone[data-stage-key]` layers, `.rec__bar-temp.num > span` (motion.js writes and rolls the number), `.rec__bar-side` (four names, each with a `.rec__bar-step` "n of 4", and `.rec__bar-scale > .rec__bar-mark`).
It is the phones' pinned temperature readout (< 760, html.js; hidden from 760 and without JS). Please keep it where it is (it must be a child of `.rec__stages` so it lets go where the rooms end) and do not add `overflow: hidden/auto` to any ancestor of it (sticky). Below 760 the rooms' own big numbers become visually hidden text (still read by screen readers); your clips, figures and labels are untouched. `ef:recovery:stage {index, key}` is unchanged and still fires for the room whose picture crosses the middle of the screen.
