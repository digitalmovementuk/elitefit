> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request C-int → E4 (motion.css / motion.js treat `video.clip` like the `img` it replaces)

Version: v2.1 — 2026-10-01 · from lane C-int (video integration) to lane E4 (owner of `assets/css/motion.css`, `assets/js/motion.js`).
Changelog: v2.1 — created (r1, from reading motion.css/motion.js v2.0 and the first render run on scratch test clips).

Context: in `#club`, `#recharge` and `#visit` each wired slot's `<img>` becomes, inside the same `figure`,
`<video class="clip" data-clip="<slot>" … data-motion="parallax" data-motion-depth="0.04">` (zones only carry parallax, as the img did).
`media.css` sizes and crops the video (mirror of the img rules, incl. the parallax overscan). What is left are three
motion rules that name `img` only.
Wired in the sources now (r1): zone-perform, zone-recharge, zone-classes (with parallax), rec-sauna, visit-entrance.
Pending clips (still `img`): rec-ice, rec-jacuzzi, rec-steam. The `:is(img, video.clip)` selectors cover both.

## 1. Tile reveal: the picture settle (scale 1.06 → 1) skips the video
File `assets/css/motion.css`, §tile (v2.0 lines ~265–270) and the reduced-motion block (~line 539).
Change `img` to `:is(img, video.clip)` in these three selectors:
```
html.motion-ok [data-m-tile="pre"] :is(img, video.clip) { scale: var(--m-tile-scale); }
html.motion-ok [data-m-tile="in"] :is(img, video.clip) { scale: 1; transition: … (unchanged) }
/* reduced motion */ html.motion-ok [data-m-tile="pre"] :is(img, video.clip) { scale: none !important; }
```
Why: without it the cover still lifts off a video tile, but the clip does not settle, so a video tile reveals
differently from the still next to it. `scale` and the parallax `translate` are separate properties, so they combine.

## 2. Recharge desktop: the inactive room's picture is dimmed to 0.55; a video is not
File `assets/css/motion.css`, §Recharge ≥ 1024 (v2.0 lines ~466–467):
```
html.motion-ok .rec__img :is(img, video.clip) { transition: opacity var(--m-dur-slow) var(--m-ease-slow); }
html.motion-ok.motion-live .rec__stage:not([data-stage-active="true"]) .rec__img :is(img, video.clip) { opacity: 0.55; }
```
Why: media.js pauses every room clip except the active one; without the dim, a paused room clip at full strength
competes with the active room on the right column.

## 3. motion.js `revealTile()`: no change wanted (advisory)
`revealTile` looks up `qs('img', el)`; with a video figure it finds none and opens the tile at once. Keep it that way:
the poster is fetched with the document (a `poster` attribute is not lazy), so it is there before the tile is
reached. If you widen the lookup to `video`, note that a video has no `complete` and fires no `load`, so the tile
would always wait for the 900 ms fallback timer.

## 5. (r2, 19:20) 4 px horizontal overflow at 320 comes from the odometer, not from the clips
WebKit 320x640: `scrollWidth` 324. Unclipped elements past the right edge: `span.m-odo__c` and `span.m-odo__s`
(left 313, right 324) inside `#recharge`. Hiding every `video.clip`, `.rec__bar`, `.m-ind`, the chips and `.rec__img`
leaves it at 324; the same page with the v2.0 stills put back is also 324. Evidence: `_qa/v2.1/C-int/r2/ovf320-index.json`,
`ovf320-unclipped.json`, `r2-stills/wk320-normal.json`. Fix belongs to the odometer overlay in motion.js / motion.css
(e.g. clip the digit strip to its number box). The 339 px `video.clip` box seen at 320 is the pre-reveal tile scale
(1.06) inside an `overflow: hidden` figure, identical to the still, and adds no scroll width.

## 4. Parallax and recovery targets: no change
`collectParallax` takes any `[data-motion~="parallax"]`, so the video is translated like the img was;
the recovery machine observes `[data-motion-layer="image"]` (the figure), unchanged. Render verification
of both is in `_qa/v2.1/C-int/` (see the lane report).
