> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Pillar anatomy (shared by Elite Nutrition, Elite Training, Elite Rest)

Version: v3.0 — 2026-10-02 · written by the rest lane (first of the three pillar lanes to start); the other two lanes follow it.
Change log: 2026-10-02 v1 created. If a lane must deviate, it writes `_build/requests/<lane>-anatomy.md` and keeps going with this file.

## 1. Markup (identical skeleton; only the ids, `sec--<lane>`, the lane prefix and the content differ)
```html
<section class="sec sec--pillar sec--<lane>" id="elite-<lane>" data-sec="<lane>" aria-labelledby="elite-<lane>-h">
  <div class="wrap pil">
    <div class="pil__head" data-reveal>
      <p class="pil__num" data-copy="<lane>.num">03 / 03</p>
      <h2 class="sec__title pil__name" id="elite-<lane>-h" data-copy="<lane>.name">Elite Rest</h2>
      <p class="pil__lead" data-copy="<lane>.lead">one line</p>
    </div>
    <figure class="pil__clip" data-reveal="mask">
      <video class="pil__video" data-clip muted loop playsinline preload="none" poster="assets/img/<lane>-clip-poster.webp" aria-hidden="true" tabindex="-1">
        <source src="assets/video/<lane>-clip.webm" type="video/webm"><source src="assets/video/<lane>-clip.mp4" type="video/mp4">
      </video>
    </figure>
    <ul class="pil__facts" data-reveal>
      <li class="pil__fact" data-fact="F-..."><span class="pil__k" data-copy="<lane>.fact.<slug>.k">Label</span><span class="pil__v" data-copy="<lane>.fact.<slug>.v">Value</span></li>
    </ul>
    <div class="pil__extra" data-reveal><!-- lane-specific block, own prefix: rest = .rest-read, nutrition = bowl, training = coaches/brands. Optional. --></div>
    <p class="pil__cta"><a class="pil__btn" href="#pricing" data-copy="<lane>.cta">See passes</a></p>
  </div>
</section>
```
- Phone order: head, clip, facts, extra, cta (one column). From 900 px: head + facts left (7fr), clip right (5fr, spans both rows), extra and cta full width below.
- Anchor ids: `elite-nutrition`, `elite-training`, `elite-rest`; h2 id = `<anchor>-h`. Name = the pillar name exactly as Raoul gave it. "Elite" appears nowhere else.
- Every fact line carries `data-fact="F-..."` (FACTS.md id) for the ledger. Numbers, times, prices and temperatures are rendered from data files by JS, never typed into copy.
- Motion hooks (motion lane adds the behaviour later): `data-reveal` on head, clip, facts, extra; `data-reveal="mask"` on the clip figure; `data-count="N"` on numbers that may count up (the element's text already holds the final number).
- Clip: decorative, silent, `aria-hidden`; poster is a real webp; the `<video>` carries `data-clip`; never autoplay attribute, the lane JS plays it.
- Small CTA row: one `.pil__btn` link to `#pricing` (key `<lane>.cta`). A second link only with a real target.

## 2. Shared CSS (copy this block verbatim to the TOP of nutrition.css, training.css and rest.css; identical in all three, so the cascade cannot conflict; D1 may move it into components.css later)
```css
/* >>> pil-shared v1 · identical in nutrition.css, training.css, rest.css · source: _build/pillar-anatomy.md */
.sec--pillar { --pil-name-fs: clamp(52px, 15.5vw, 176px); --pil-row-pad: var(--s-3); background: var(--bg); border-top: var(--bw) solid var(--line); }
.pil { display: grid; gap: var(--s-5); grid-template-columns: minmax(0, 1fr); grid-template-areas: "head" "clip" "facts" "extra" "cta"; }
.pil__head { grid-area: head; display: grid; gap: var(--s-3); align-content: start; }
.pil__num { margin: 0; font: var(--fw-mono) var(--fs-label)/1 var(--font-mono); letter-spacing: var(--tr-label); text-transform: uppercase; color: var(--fg-muted); font-variant-numeric: tabular-nums; }
.pil__name { margin: 0; font-family: var(--font-display); font-weight: var(--fw-display); font-size: var(--pil-name-fs); line-height: var(--lh-tight); letter-spacing: var(--tr-display); text-wrap: balance; overflow-wrap: break-word; }
.pil__lead { margin: 0; max-width: 34ch; font-size: var(--fs-lead); line-height: var(--lh-snug); color: var(--fg-muted); }
.pil__clip { grid-area: clip; margin: 0; position: relative; aspect-ratio: 4 / 5; overflow: hidden; background: var(--bg-sunken); border-radius: var(--r-1); }
.pil__clip video, .pil__clip img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.pil__facts { grid-area: facts; margin: 0; padding: 0; list-style: none; border-top: var(--bw) solid var(--line-strong); }
.pil__fact { display: grid; gap: var(--s-1); padding: var(--pil-row-pad) 0; border-bottom: var(--bw) solid var(--line); }
.pil__k { font: var(--fw-mono) var(--fs-label)/1.3 var(--font-mono); letter-spacing: var(--tr-label); text-transform: uppercase; color: var(--fg-muted); }
.pil__v { font-size: var(--fs-body); line-height: var(--lh-body); color: var(--fg); }
.pil__extra { grid-area: extra; min-width: 0; }
.pil__cta { grid-area: cta; margin: 0; display: flex; flex-wrap: wrap; gap: var(--s-3); }
.pil__btn { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 var(--s-5); border: var(--bw) solid var(--line-strong); border-radius: var(--r-1); font: var(--fw-mono) var(--fs-small)/1 var(--font-mono); letter-spacing: var(--tr-label); text-transform: uppercase; color: var(--fg); transition: background-color var(--dur-ui) var(--ease-out), color var(--dur-ui) var(--ease-out), border-color var(--dur-ui) var(--ease-out), transform var(--dur-press) var(--ease-press); }
.pil__btn:hover { background: var(--fg); color: var(--fg-inverse); border-color: var(--fg); }
.pil__btn:active { transform: scale(.98); }
@media (min-width: 900px) {
  .pil { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); column-gap: var(--s-8); row-gap: var(--s-6); grid-template-areas: "head clip" "facts clip" "extra extra" "cta cta"; align-items: start; }
  .pil__fact { grid-template-columns: minmax(0, 12rem) minmax(0, 1fr); gap: var(--s-5); align-items: baseline; }
}
/* <<< pil-shared v1 */
```

## 3. Shared clip behaviour (copy verbatim into nutrition.js, training.js, rest.js; the first module to run defines the counter, the others reuse it; the motion lane may later replace it with the same API)
```js
/* >>> pil-clip v1 · identical in nutrition.js, training.js, rest.js · source: _build/pillar-anatomy.md */
const EFNS = (window.EF = window.EF || {});
EFNS.clips = EFNS.clips || (() => {            // request(el) -> true when el may play; release(el); max 2 on a phone, 4 elsewhere
  const on = new Set(), phone = matchMedia('(max-width: 759px)');
  return { request(el) { if (on.has(el)) return true; if (on.size >= (phone.matches ? 2 : 4)) return false; on.add(el); return true; },
           release(el) { if (on.delete(el)) document.dispatchEvent(new Event('ef-clip-free')); }, count: () => on.size };
})();
function pilClip(v, ctx) {                      // lazy, poster first, plays only near the viewport, never when reduced motion / data-saver
  if (!v || !ctx.motion || (navigator.connection && navigator.connection.saveData)) return () => {};
  let seen = false;
  const stop = () => { v.pause(); EFNS.clips.release(v); };
  const start = () => { if (document.hidden || !EFNS.clips.request(v)) return; const p = v.play(); if (p && p.catch) p.catch(() => EFNS.clips.release(v)); };
  const io = new IntersectionObserver((es) => { for (const e of es) { seen = e.isIntersecting; seen ? start() : stop(); } }, { rootMargin: '80px 0px', threshold: 0.25 });
  const retry = () => { if (seen && v.paused) start(); };
  const vis = () => (document.hidden ? (v.pause(), EFNS.clips.release(v)) : retry());
  document.addEventListener('ef-clip-free', retry); document.addEventListener('visibilitychange', vis); io.observe(v);
  return () => { io.disconnect(); document.removeEventListener('ef-clip-free', retry); document.removeEventListener('visibilitychange', vis); stop(); };
}
/* <<< pil-clip v1 */
```
Boot: `export function init(ctx) { pilClip(document.querySelector('#elite-<lane> [data-clip]'), ctx); ... }`.

## 4. Files, budgets, naming
- Clip: `assets/video/<lane>-clip.mp4` (h264, required) and optionally `.webm` (only when it is smaller at the same look; the rest lane's VP9 was larger, so it ships mp4 only), silent, 3-5 s loop, <= 450 KB each; poster `assets/img/<lane>-clip-poster.webp` (real frame, <= 60 KB at 390 px wide displayed size, 4:5). Stills `assets/img/<lane>-*.webp`, <= 60 KB.
- Copy slots in `copy/slots/<lane>.json` (CONTRACT §5); lane CSS only after the shared block, own prefix (`.nut-`, `.trn-`, `.rest-`), tokens only.
- Tap targets 44 px or more, body text 15-16 px or more, mono labels 12 px or more with AA contrast, no overflow from 320 px.

## Change log
- v3.0 — 2026-10-02: v1 created by the rest lane (clip helper simplified within minutes of creation, before the other lanes started).
- v3.0 — 2026-10-02: clip format note (mp4 required, webm optional); the CSS/JS blocks are unchanged (still v1).
