> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Motion and design: Elite Fit Bali homepage v2.0

Version: v1.0 — 2026-10-01 · owner: lane M (motion lead) · files: `assets/css/motion.css`, `assets/js/motion.js` (EFMotion 2.0.0), `_build/motion-states.json`. Change log at the bottom.

## 1. The idea in motion

The club speaks in numbers set in Syne, so the numbers are what move: the price rolls like an odometer when the visitor changes the pass length, the clock turns its minute, the Recharge temperature climbs from 4° to 100° room by room, the review count counts once. Pictures and words hold still around them, and arrive once. Each zone of the building has its own pace: the black-steel workout floor is crisp and fast, the café benches warm and medium, the sand-tiled spa slow and breathing, the concrete neutral rooms arrive and stay. Nothing loops except the green "now" dot and the hero clip. Native scroll everywhere; nothing is pinned beyond the natural height of its content.

Benchmark filmstrips viewed (ART-DIRECTION §5 asked for them first): Othership mobile (the docked buy buttons are on screen from the first frame and never animate in, so "Buy a pass" is simply there), Life Time mobile clean (the clip fades over its dark poster in roughly 0.5–1 s, which sets the reel fade to 600 ms), The Slow mobile (nothing moves at all after the first second: restraint reads as place). The art direction's ranges held; the beats were not changed.

## 2. Tokens

All tokens are CSS custom properties at `:root` in `motion.css`; per-zone values sit on `[data-zone]` and are inherited, so a section only needs its zone attribute. JS reads the same properties (no timing is duplicated in JS).

### 2.1 Durations

| Token | Value | Why, in one line |
|---|---|---|
| `--m-dur-press` | 100 ms | answers the finger and never lags behind it |
| `--m-dur-crisp` | 180 ms | workout reveals: the floor at 06:00 |
| `--m-dur-base` | 320 ms | neutral reveals: arrive and stay |
| `--m-dur-warm` | 420 ms | café reveals: lamp light on wood |
| `--m-dur-slow` | 900 ms | spa reveals: wet heat, nothing quick |
| `--m-dur-tone` | 1200 ms | the Recharge tone dissolve (inside the 800–1400 ms window) |
| `--m-dur-word` | 600 ms | hero headline rise |
| `--m-dur-settle` | 800 ms | hero board (phone) and pass card (desktop) settle, beat 2 |
| `--m-dur-reel` | 600 ms | reel fades over its poster (Life Time filmstrip) |
| `--m-dur-sheet-in` / `-out` | 340 / 240 ms | checkout sheet rises, drops faster than it rose |
| `--m-dur-dialog-in` / `-out` | 240 / 180 ms | desktop dialog fade + scale |
| `--m-dur-menu-in` / `-out` | 260 / 180 ms | header menu sheet |
| `--m-dur-step` | 260 ms | checkout step slide |
| `--m-dur-bar-in` / `-out` | 280 / 200 ms | buy bar up and down |
| `--m-dur-switch` | 220 ms | Duo knob |
| `--m-dur-morph` | 440 ms | price odometer in the café: done before the thumb reaches the next chip |
| `--m-dur-clock` | 360 ms | clock minute roll |
| `--m-dur-count` | 900 ms | reviews counter 0 → 84 |
| `--m-dur-breathe` | 2200 ms | the "now" dot, each way: the only loop |
| `--m-dur-lift` | 220 ms | card hover lift |
| `--m-dur-tile` | 700 ms | picture uncovered in its frame (neutral; zones override) |
| `--m-dur-rec-out` | 360 ms | Recharge: the old room's words and number leave first |
| `--m-dur-rec-num` + `--m-delay-rec-num` | 600 ms after 280 ms | the new number fades in while it rolls |
| `--m-dur-rec-words` + `--m-delay-rec-words` | 700 ms after 480 ms | the new words arrive once the old ones are gone (no double exposure) |
| `--m-temp-dur` per room | ice 700, jacuzzi 1300, steam 900, sauna 1100 ms | the thaw from 4° to 38° is the longest roll; 38 stays 38 |

### 2.2 Easings

| Token | Curve | Why |
|---|---|---|
| `--m-ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | neutral: decelerates into place, no bounce |
| `--m-ease-crisp` | cubic-bezier(0.2, 0.8, 0.2, 1) | workout, as ART-DIRECTION §2 measured it |
| `--m-ease-warm` | cubic-bezier(0.45, 0.05, 0.25, 1) | café: soft in and out |
| `--m-ease-slow` | cubic-bezier(0.6, 0, 0.2, 1) | spa, as ART-DIRECTION §2 |
| `--m-ease-sheet` | cubic-bezier(0.32, 0.72, 0, 1) | sheet: quick start, long settle |
| `--m-ease-in` | cubic-bezier(0.4, 0, 1, 1) | exits leave quickly |
| `--m-ease-cold` | cubic-bezier(0.55, 0, 1, 1) | the ice number lands without easing out, like cold |
| `--m-ease-breathe` | cubic-bezier(0.37, 0, 0.63, 1) | sine in-out for the breathing dot |

### 2.3 Distances and stagger

| Token | Value | Why |
|---|---|---|
| `--m-dist-xs / s / m / l` | 6 / 10 / 14 / 18 px | rise distances; zones pick one |
| `--m-dist-hero` | 12 px | headline rise (10–14 px range) |
| `--m-dist-board` | 8 px | phone board settles onto the reel (hero.css reserves a 32 px overlap for it) |
| `--m-dist-card` | 10 px | desktop pass card slides into the window corner |
| `--m-dist-step` | 20 px | checkout step slide (16–24 px range) |
| `--m-dist-menu` | 16 px | menu drop |
| `--m-dist-lift` | 5 px | card lift (4–6 px range) |
| `--m-press-scale` | 0.97 | 3 % press |
| `--m-tile-scale` | 1.06 | the picture settles inside its frame while the clip opens |
| `--m-stagger` | 60 ms | neutral stagger; zones override |

### 2.4 Zone personalities (`--m-z-*`)

| Zone | Reveal | Ease | Rise | Stagger | Words | Tile | Tab pill | Price roll |
|---|---|---|---|---|---|---|---|---|
| neutral (header, hero, club, visit) | 320 ms | out | 14 px | 60 ms | 70 ms | 700 ms | 260 ms | 400 ms, 18 ms/digit |
| workout (Today, coaches, footer, Elite card, buy bar) | 180 ms | crisp | 10 px | 40 ms | 40 ms | 460 ms | 200 ms | 320 ms, 14 ms/digit |
| cafe (passes, reviews) | 420 ms | warm | 18 px | 75 ms | 80 ms | 700 ms | 300 ms | 440 ms, 22 ms/digit |
| spa (Recharge) | 900 ms | slow | 10 px | 160 ms | 140 ms | 1100 ms | 600 ms | 900 ms, 40 ms/digit |

A stagger group hands its zone timing to its items (`--m-g-*`), so the dark Elite card nested in the café grid keeps the café rhythm of its row.

## 3. Rules kept, and how

| Rule | How |
|---|---|
| No scroll-jacking | native scroll only; every listener is passive; the only programmatic scroll is a Recharge dot click (`scrollIntoView`, smooth unless reduced motion), a visitor action |
| No pinned traps | the only sticky stage is recovery.css's left panel, inside its own grid area: zero extra scroll beyond the four pictures |
| Transform and opacity only | `translate`, `scale`, `transform`, `opacity`; individual transform properties so a lane's own `transform` is composed, never overwritten. Two measured exceptions (§9): `clip-path` on the tab pill window (runs only on a tap, never during scroll) and `box-shadow` on the pointer-only card lift. The first build also used `clip-path` for the picture reveal and the Recharge dot; both dropped frames on desktop at 4x CPU and were rebuilt with transform |
| LCP never at opacity 0 | the hero headline and poster are painted at full opacity from the first frame; the hero choreography moves `translate` only, from CSS, so nothing waits for JS |
| Zero layout shift | odometer overlay is zero-width and has a zero-height margin box; the tab pill layer is absolutely positioned; word wrapping happens only on headings that start off-screen; measured CLS 0.0000 (no-input) in every one of the 84 recorded runs (§9) |
| Reduced motion, data-saver, no JS | every hidden initial state needs `html.motion-ok` and an attribute motion.js writes only below the fold; see §8 |
| No library, one rAF loop | Web Animations API, IntersectionObserver, MutationObserver, ResizeObserver; one rAF loop for header + parallax that runs only when scrolled and stops when the tab is hidden. Start-up reads no layout: an observer classifies what is off-screen, and the priming runs in idle-time chunks |
| Never throws | every entry point is wrapped; missing elements are skipped; console stays clean (measured, §9) |
| CSS scroll-driven animations | not used: one IntersectionObserver / rAF path runs in every browser, so there is a single path to verify and no fallback that could differ |

## 4. Storyboards

Every row: trigger · duration and easing · purpose · phone (< 760) · reduced motion / data-saver. Recipes to reproduce each moment are in `_build/motion-states.json` (state ids in brackets).

### 4.1 Page load [hero-arrive, today-first-screen]

| Element | Trigger | Motion | Purpose | Phone | Reduced |
|---|---|---|---|---|---|
| Everything above the fold | first paint | nothing is hidden; the head one-liner sets `html.motion-ok` before paint | "Buy a pass" and today's classes are readable on the first frame | same | same |
| Hero headline | first paint (CSS) | rise 12 px, 600 ms, ease-out; two beats 140 ms apart if the words are wrapped in spans | arrival, without hiding the LCP | same | still |
| Blocks below the fold | start-up (motion.js) | marked `data-m="pre"` (opacity 0, rise) and revealed as they enter, once; scrolling back replays nothing | the walk through the building, one room at a time | same, crisper stagger by zone | full layout, nothing hidden |
| Today strip | schedule.js renders over the identical fallback | nothing (deliberate) | no flicker in the first screen | same | same |

### 4.2 Header [header-scrolled, header-menu-open, header-menu-close]

| Element | Trigger | Motion | Purpose | Phone | Reduced |
|---|---|---|---|---|---|
| `#site-header[data-scrolled]` | scroll > 8 px (back at ≤ 2 px) | state only; hero.css draws the hairline instantly (colour never animates) | separates header and content once content runs under it | same | same state, instant |
| `.hdr__menu` (sheet) | `data-state` open / closed (main.js) | in: drop 16 px + fade, 260 ms out-ease; out: 180 ms ease-in, visibility flips after the fade | a light sheet, not a page change | this is the phone menu | instant |

### 4.3 Hero sequence [hero-arrive, hero-reel-fade, hero-pause, hero-clock-tick, hero-parallax]

1. **Arrive (first paint → 600 ms).** The concrete board, the poster in the reel window and the coral "Buy a pass" are there on the first frame; nothing fades from black. "PERFORM. / RECHARGE." rises 12 px (600 ms, ease-out). Pure CSS, so it starts with the first paint, not when the script arrives.
2. **Settle (380 → 1220 ms).** Phone: the board eases up 8 px onto the reel (800 ms, slow ease, from 380 ms), as if set down on it. Desktop (≥ 1024): the working pass card slides up 10 px into the window's corner (800 ms, out-ease, from 420 ms). The clock turns to the current Bali minute when hero.js writes it (digit roll, 360 ms). When hero.js reports the clip playing (after load and idle), the poster on top fades out over the running reel in 600 ms; the pause control fades in with it. The `<video>` itself is visible from the first frame (showing the same poster file), so it never becomes a late LCP entry.
3. **Invite the scroll (from ~1.2 s).** No chevron. The black-steel Today strip with the date, the day chips and the first class card already shows under the hero; if a class is on, its green dot breathes. Desktop pointer only: the reel window (with its cue chip) drifts by 6 % of the scroll distance relative to the board and the card (translate, max 60 px). On touch, nothing in the hero is scroll-linked.

Phone simplification: no card, no parallax; the board settle replaces the card slide (same meaning: the slab is set down). Tablet (760–1023): only the headline rises. Reduced motion / data-saver: everything is in place at once, the poster stays (hero.js never starts the clip), the clock changes digits without rolling.

### 4.4 Today strip and now / next [today-now-breathe, today-day-switch, today-full-day-open/close, today-card-lift, hero-clock-tick]

| Element | Trigger | Motion | Purpose | Phone | Reduced |
|---|---|---|---|---|---|
| Live dot `.sched__dot` in `[data-now="true"]` | always while on screen | opacity 0.55 ↔ 1, 2200 ms each way, sine; phase kept across schedule.js's minute rebuild; paused off-screen and in a hidden tab | the only loop: "this is happening now" | same | still dot |
| Day chips (tab pill) | `data-selected` moves | the white pill travels to the chosen day, 200 ms crisp; chip labels never move | the choice is physical | same | instant |
| Cards after a day switch | `ef:schedule:render` after a tap on a chip | fade + 10 px rise, 180 ms crisp, 40 ms apart (visible cards only) | the new day arrives | same | instant |
| Full day toggle | `#sched-list[data-state="open"]` | the hidden cards appear at once (no waiting for scroll), fade + 10 px, 180 ms, 40 ms apart; close is instant | the list grows, nothing to wait for | phone-only control | instant |
| New "now" | `data-now` flips on a minute tick | status line fades up 4 px, 240 ms | the marker moved | same | instant |
| Card lift | hover | 5 px rise + card shadow, 220 ms | pointer feedback | none (no hover) | none |

### 4.5 Pass shop [passes-reveal, passes-length-week, passes-length-52, passes-duo, passes-card-lift, press-choose]

| Element | Trigger | Motion | Purpose | Phone | Reduced |
|---|---|---|---|---|---|
| Section arrival | enters viewport | H2 word by word (420 ms, 80 ms apart), controls rise 18 px, three cards 75 ms apart | café rhythm | same | in place |
| Length switch (tab pill) | `data-selected` | the ink pill travels to the chosen length, 300 ms warm ease; labels are light exactly where the pill covers them | the length is a physical choice | same (chips scroll natively) | instant |
| **Price morph** (the star) | `data-value` changes (shop.js writes text and `aria-label` first, `data-value` last) | odometer: each digit is a strip rolled with transform, 440 ms warm, right to left 22 ms apart; separators stay put; new leading digits rise in; 350.000 → 1.100.000 | the number is the brand device | same, same timing | the number simply changes |
| Duo switch | `aria-checked` | knob slides 220 ms warm; the prices roll to the Duo values | — | same | instant |
| Card lift / press | hover / pointer-down | lift 5 px + shadow 220 ms / scale 0.97 100 ms | feedback | press only | none |

### 4.6 Buy bar [buybar-open, buybar-close-footer]

`#buybar[data-state]` (shop.js): up 280 ms out-ease when `#hero-cta` has left the screen, down 200 ms ease-in while the checkout is open or the footer is in view; never bounces; visibility flips only after the slide. Phone only (hidden from 760). Reduced: appears and disappears in place.

### 4.7 Checkout sheet [checkout-open-mobile/desktop, checkout-length, checkout-tier, checkout-step-*, checkout-close]

| Moment | Trigger | Motion | Phone vs desktop | Reduced |
|---|---|---|---|---|
| Open | `#checkout[data-state="open"]` | backdrop fades (linear); the first panel rides in with the sheet, no sideways slide (motion.js clears `data-m-dir` on open) | phone: sheet rises 340 ms, sheet ease; ≥ 760: dialog fades and scales 0.98 → 1, 240 ms | instant |
| choose → details | `ef:checkout:step` {from: choose, to: details} | new panel slides in 20 px from the right + fades, 260 ms; title fades up 6 px | same | instant |
| details → pay | same | as above; "Pay IDR …" fades up | same | instant |
| back (any) | `to` earlier than `from` | panel slides in from the left | same | instant |
| pay → done | Simulate payment (MOCK) | panel slides in; the reference digits each turn one full cycle and land, 700 ms, left to right 70 ms apart | same | instant |
| Length chips, tier, prices in the sheet | `data-selected`, `data-value` | pill 260 ms; prices roll 400 ms; the chosen tier's radio dot pops (scale 0.55 → 1, 280 ms) | same | instant |
| Close | `data-state="closed"` | phone: drops 240 ms ease-in; desktop: fades and scales back 180 ms; visible until the exit ends, then hidden; focus goes back to the opener (shop.js) | — | instant |

### 4.8 The club tiles [club-reveal, club-parallax, club-tile-lift]

H2 word by word (320 ms, 70 ms apart), lede rises 14 px, three tiles 60 ms apart; inside each tile the picture is uncovered in place from the bottom edge up (a cover in the card colour scales away, 700 ms, transform only) while settling from 1.06 to 1. Desktop pointer only: each picture drifts inside its frame (depth 0.04, at most 18 px, inside the 20 px overscan zones.css reserves). Lift on hover. Phone: no parallax, tiles stack and reveal one by one as they enter. Reduced: all in place.

### 4.9 Recharge: the signature sequence [recharge-*]

Four rooms, cold to hot; the picture, the tone of the block and the number change together, nothing else.

**Desktop (≥ 1024, recovery.css "enhanced").** Two columns: the four pictures stacked on the right, scrolling natively; on the left one sticky panel cell holding four stacked panels (tone, number, words). The room is the picture that crosses a 2 % band across the middle of the screen (IntersectionObserver, no scroll handler). On a room change:

| Layer | Outgoing room | Incoming room |
|---|---|---|
| words (label + line) | fade out 360 ms ease-in | fade in 700 ms from 480 ms (no double exposure) |
| number | fade out 360 ms | fade in 600 ms from 280 ms while it rolls from the previous room's number: ice 700 ms cold ease (lands without easing out), jacuzzi 1300 ms (the thaw, longest), steam no roll (38 stays 38), sauna 1100 ms to the amber 80–100° |
| tone | holds underneath until the new tone is opaque, then drops (no sand flash) | dissolves in on top, 1200 ms slow |
| picture | rests at 55 % | comes to full, 900 ms |
| dot | the filled dot travels between the rings, 600 ms | — |

Scrolling up reverses everything (the ice number rolls back down and lands cold). `ef:recovery:stage {index, key}` is emitted on every change. **How a visitor skips it:** nothing is pinned: the panel is sticky only inside the natural height of the four pictures, so one flick carries the visitor past at native speed [recharge-skip]. The dots are real buttons (Tab, Enter / Space): a dot sets the room at once and scrolls natively (smooth) to that picture; rooms passed on the way are not flashed [recharge-desktop-dot].

**Phone and tablet (< 1024), the simpler version with the same meaning.** No sticky panel, no pinning: four blocks stacked, each in its own tone. As a block enters: its picture is uncovered from the bottom edge up (1100 ms, slow); its number fades up 10 px and rolls from the previous room's number with that room's timing (the ice number just lands, cold); its words follow 160 ms later. The tone change is the scroll itself, block to block.

**Reduced motion, data-saver, no JS:** recovery.css shows the four blocks one after another in their own tones on every width; motion.js still keeps `data-stage` and the dots in step, without animation.

### 4.10 Coaches [coaches-reveal, coaches-show-all, coaches-lift]

Workout timing, the crispest: H2 words 180 ms, 40 ms apart; cards 40 ms apart; portraits are uncovered in 460 ms. "Show all five" (phone): Martijn and Putu appear at once, staggered (fade + 10 px, 180 ms, 40 ms apart). Lift on hover (desktop). Reduced: in place.

### 4.11 Reviews counter [reviews-reveal-counter]

Quotes rise 75 ms apart. When "84 reviews on Google" enters from below the fold, the number counts once from 00 to 84: the tens roll 0 → 8, the units turn one full cycle and land on 4 (900 ms, out-ease, digits 90 ms apart). The count box never changes width (community.css reserves 2 ch). If the line is already on screen at load, it shows 84 and does not count. Reduced: 84, still.

### 4.12 Visit [visit-reveal]

The entrance photo frame rises 14 px while its picture is uncovered from the bottom edge up (700 ms); H2 words, lede, the seven fact rows (60 ms apart) and the buttons follow. Reduced: in place.

### 4.13 Footer [footer-arrive]

No motion hooks: the walk ends in stillness. On phones the buy bar slides away as the footer arrives.

### 4.14 Global

| Pattern | Trigger | Motion | Phone | Reduced |
|---|---|---|---|---|
| reveal / stagger | element enters (8 % above the bottom edge) | fade + rise by zone; items entering together are staggered in DOM order (index capped at 6) | same | none |
| reveal-words | section H2 enters | words rise 0.35 em by zone (the hero H1 is handled in CSS) | same | none |
| tile | image frame enters | a cover in the surrounding colour scales away from the bottom edge up (transform), the picture settles from 1.06; waits up to 900 ms for the image | same | none |
| press | pointer-down on `.btn` / `[data-motion~="press"]` | scale 0.97, 100 ms | same (`:active` with a passive touch listener) | none |
| lift | hover, pointer devices | 5 px + card shadow, 220 ms | none | none |
| tab indicator | `data-selected` / `aria-selected` | chips: the pill window (clip-path) travels over light label copies, zone timing; Recharge dots: a filled dot travels (transform) | same | instant |
| odometer | `data-value` change, clock text change, Recharge room, counter, reference | digit strips under a zero-width overlay of generated content | same | instant |

## 5. Hook map (SECTIONS §13 → implementation)

| Hook | Where (partials) | Implementation |
|---|---|---|
| `reveal` | lede, controls, notes, foot rows, visit media | `data-m` pre/in (CSS transition), once |
| `reveal-words` | `#hero-title` + every section H2 | hero: CSS from first paint; H2: word spans + `data-m-words` |
| `stagger` + `data-motion-item` | sched rail, shop grid, zones grid, team grid, rev grid, visit facts | batch index `--m-i`, group timing `--m-g-*` |
| `parallax` | `.hero__media` (0.06), `.zones__img img` (0.04) | rAF `translate`, desktop pointer only |
| `hero` + layers `media/board/wordmark/copy/card/cue` | `#hero` | CSS beats (§4.3); copy and cue deliberately still; cue rides the media parallax |
| `header` | `#site-header` | `data-scrolled` |
| `clock` | `.hero__clock`, `.hero__cue time` | odometer on text change |
| `price-morph` | shop tiers, checkout tiers / summary / total / pay title, buy bar, hero card, Recharge foot | odometer on `data-value` change |
| `sheet` | `#checkout`, `.hdr__menu` | CSS transitions on the lanes' end states + delayed visibility |
| `step` | `.co__panel` | keyframes keyed by `data-m-dir` |
| `buybar` | `#buybar` | CSS transitions on shop.css end states |
| `now-next` | `.sched__list` | breathing dot, now flash |
| `tab-indicator` | `.sched__days`, `.shop__lengths`, `.co__lengths`, `.rec__dots` | `.m-ind`: pill window with light label copies (chips); transform-only travelling dot (`.rec__dots`) |
| `recovery` + layers `image/tone/temp/label` | `.rec` | stage machine, dissolve, rolls (§4.9) |
| `tile` | `.zones__img`, `.team__img`, `.visit__img`, `.rec__img` | transform-only uncover (`::after` cover scales away) + picture settle |
| `lift` | `.sched__item`, `.shop__tier`, `.zones__tile`, `.team__card` | hover |
| `press` | every `.btn` and `[data-motion~="press"]` | `:active` scale |
| `counter` | `.rev__count .num` | odometer 00 → 84 with one spin |

Custom `x-<lane>-*` hooks declared in the partials' header comments: none. Unmapped hooks: none. Lane state attributes also used: `#hero[data-video]` (reel fade), `.co__tier[data-selected]`, `.shop__duo[aria-checked]`, `.team__more[aria-expanded]`, `#sched-list[data-state]`, `.sched__item[data-now]`.

## 6. What motion.js writes (presentation only)

| Attribute / node | On | Meaning |
|---|---|---|
| `html.motion-live` | `<html>` | motion.js has started (state machine up). Integrator's failsafe: drop `html.motion-ok` if this is missing a few seconds after load (lane L4 request). If the Recharge machine fails to start, motion.js itself removes `motion-ok` (static layout) and still sets `motion-live` |
| `data-scrolled` | `#site-header` | header state |
| `data-stage`, `data-stage-active`, `data-m-prev` | `.rec`, `.rec__stage` | Recharge state (also in reduced motion) |
| `data-selected`, `aria-current` | `.rec__dot` | active room dot |
| `data-m`, `data-m-words`, `data-m-word`, `data-m-tile` (+ its `::after` cover) | reveal targets | pre / in states, removed when done |
| `data-m-morph` + `span.m-odo` | numbers | odometer running (real text made transparent, not removed) |
| `data-m-ind` + `span.m-ind` | tab groups | pill layer (aria-hidden, generated-content labels) |
| `data-m-dir` | `#checkout` | step direction fwd / back |
| `data-m-offscreen`, `data-m-paused` | now-next list, `<html>` | pause the breathing dot |
| inline `--m-i`, `--m-wi`, `--m-delay`, `style.translate`, `animation-delay` | items, words, parallax layers, live dot | stagger index, word index, parallax offset, breath phase |

Word spans are added only to section H2s that start off-screen; their text is unchanged. Inserted overlays contain no text nodes, so `textContent`, `aria-label` and screen readers keep the real numbers.

## 7. JS API and events

`window.EFMotion = { version: '2.0.0', enabled, live, refresh(root), setStage(i), morph(el, fromText, toText) }`

- `refresh(root)`: re-scan late content (reveals, tab groups, parallax). Content added later is also picked up automatically by one MutationObserver.
- `setStage(i)`: set the Recharge room (0–3); emits `ef:recovery:stage`.
- `morph(el, fromText, toText?)`: roll any number element from a text to its current text.
- `enabled` (getter): motion running; `live` (getter): `html.motion-live` present.
- Listens: `ef:checkout:step` (direction, title, reference roll), `ef:schedule:render` (day-switch entrance after a chip tap); state attributes via MutationObserver (`data-value`, `data-state`, `aria-expanded`, `data-selected`, `aria-selected`, `data-now`, text of `[data-motion~="clock"]`). `ef:passselect` and `ef:schedule:nownext` need nothing extra: the attributes carry them.
- Emits: `ef:recovery:stage {index, key}`.
- `?motiondebug` logs guarded errors with `console.info` (off by default; the console stays clean).

## 8. Reduced motion, data-saver, no JS

- The head one-liner (integrator) sets `html.motion-ok` only with `prefers-reduced-motion: no-preference` and no `saveData`. motion.js re-checks both and removes the class if either is set; a change to reduced motion during the visit stops motion at once.
- Without `motion-ok`: no hidden state, no headline rise, no reel (hero.js also refuses it), no parallax, no odometer, no pill layer; chips, Duo, sheets and steps change instantly; the Recharge rooms stand one after another in their own tones; the header and the Recharge state attributes are still kept.
- No JS: every hidden state also needs a motion.js attribute, so the page is complete and static.
- Safety nets in motion.css: a `prefers-reduced-motion: reduce` block neutralises everything even if `motion-ok` were left on; print shows everything.

## 9. Performance

What animates: `translate`, `scale`, `transform` (odometer strips, pill clones), `opacity`. Promoted: only the odometer strips (`will-change: transform`, created and removed with each roll); everything else is promoted by the browser for the duration of its animation only. Parallax writes one `translate` per active element per frame from a cached position; no layout is read in the scroll path. Measured exceptions: `clip-path` on tile reveals and on the tab pill window, `box-shadow` on the pointer-only lift (numbers below).

**Method (measured).** Playwright 1.63, bundled Chromium (chromium-1246) via CDP: `Emulation.setCPUThrottlingRate 4`, no network throttle (frame timing only). Phone profile 390×844, DPR 2, touch; desktop 1440×900. Scrolls are real input (`Input.synthesizeScrollGesture`: touch on the phone, mouse wheel on desktop). Frame time = deltas between `requestAnimationFrame` callbacks; long tasks from the `longtask` observer; layout shifts from the `layout-shift` observer (all entries, and those without recent input). Three cold runs per scenario; the table shows the median run by p95; every run is in `_build/preview/M-perf-result.json` (script `_build/preview/M-perf.mjs`). Measured on the lane M preview (`_build/preview/M.html`: all real partials, all lane CSS and JS, a stub for main.js), not on the integrated page.

| Scenario | Profile | Frames | p50 | p95 | p99 | > 20 ms | > 33 ms | Long tasks | Layout shift all / no-input |
|---|---|---|---|---|---|---|---|---|---|
| Hero sequence, navigation → 3.5 s | phone | 197 | 16.7 | 16.8 | 100 * | 1.5 % * | 1.0 % * | 2 (131 ms) * | 0 / 0 |
| Hero sequence | desktop | 204 | 16.7 | 16.8 | 16.8 | 0 | 0 | 1 (59 ms) | 0 / 0 |
| Recharge, one gesture through the four rooms | phone | 514 | 16.7 | 16.8 | 16.8 | 0 | 0 | 0 | 0 / 0 |
| Recharge | desktop | 486 | 16.7 | 16.7 | 16.8 | 0 | 0 | 0 | 0 / 0 |
| Long scroll, top to bottom, ~2000 px/s | phone | 941 | 16.7 | 16.7 | 16.8 | 0 | 0 | 0 | 0 / 0 |
| Long scroll, reduced-motion control | phone | 939 | 16.7 | 16.8 | 16.8 | 0.2 % | 0 | 0 | 0 / 0 |
| Long scroll | desktop | 663 | 16.7 | 16.7 | 16.8 | 0 | 0 | 0 | 0 / 0 |
| Long scroll, reduced-motion control | desktop | 676 | 16.7 | 16.8 | 16.8 | 0 | 0 | 0 | 0 / 0 |
| Price morph: six length taps (pill + three odometers each) | phone | 241 | 16.7 | 16.8 | 16.8 | 0 | 0 | 0 | 0 / 0 |
| Price morph | desktop | 229 | 16.7 | 16.7 | 16.8 | 0.4 % (1 frame) | 0 | 0 | 0 / 0 |
| Card lift: ten hovers (box-shadow) | desktop | 404 | 16.7 | 16.8 | 16.8 | 0.2 % (1 frame) | 0 | 0 | 0 / 0 |
| Checkout: open, length, next, back, close | phone | 222 | 16.7 | 16.7 | 16.8 | 0 | 0 | 0 | 0.53 / 0 ** |
| Checkout | desktop | 220 | 16.7 | 16.8 | 16.8 | 0.5 % (1 frame, at open) | 0.5 % | 0 | 0.068 / 0 ** |

\* One of three phone hero runs had an extra 78 ms long task during load (p99 100 ms); the other two: p99 16.8 ms, 0 % over 20 ms, one 53–54 ms long task. Without motion.js the start-up long task measures 50–56 ms (same method, motion.js blocked), so that task is the page's own start-up.
\** Every shift follows a tap (`hadRecentInput`), so CLS stays 0.00. Sources: `.co__sheet` (the sheet changes height between steps; on desktop the centred dialog re-centres) and the summary price text getting wider. Identical with motion switched off (measured); not caused by the motion layer.

How to read "p95 16.8": a 60 Hz display delivers a frame every 16.67 ms and 15–38 % of frames measure 16.8 ms (vsync jitter), which is why the "> 16.7 ms" share in `M-perf-result.json` is high in every scenario, the reduced-motion controls included. Dropped frames show up as > 20 ms and > 33 ms. Against CONTRACT §8 (p95 ≤ 16.7 ms): p95 is 16.7–16.8 ms in every scenario, i.e. at the vsync interval.

**What the measurements changed (desktop, share of frames over 20 ms).** The first build dropped 7.3 % of frames in the Recharge run and 2.3–4.8 % in the long scroll, where the reduced-motion control dropped none. Switching single features off found two causes: the Recharge dot indicator (a clip-path layer inside the sticky dot row made Chromium repaint it on every scroll frame) and the clip-path picture reveal on large images (painted on the main thread). Both were rebuilt with transform (a travelling dot; a cover that scales away). After: 0 % in both runs. `will-change` on the parallax layers made no difference (measured) and was not added. Start-up: the first build lengthened the start-up long task from 51 to 73–106 ms at 4x; with layout-free priming in idle-time chunks it adds nothing (probe run: no long task left on the phone; desktop 54 ms, the baseline).

**LCP and the hero (measured, Chromium, CPU 4x, no network throttle).** One LCP entry, at first paint: phone 120–172 ms, desktop 124–136 ms. At the first probed frame the headline has opacity 1, `translate: 0px 12px` and animation `m-rise`: it is never hidden. Chromium attributes the LCP to the `<video>` element because its `poster` attribute is the same file as the `<img>` poster (`hero-poster-9x16.webp`). Before the poster fix, fading the video in from opacity 0 produced a second, late LCP entry for it; now there is one entry only.

**Animated and promoted.** Animated: `translate`, `scale`, `transform`, `opacity` everywhere; `clip-path` only on the tab pill window during a tap; `box-shadow` only on pointer hover. Promoted explicitly: the odometer strips (`will-change: transform`, only while a roll runs) and the Recharge dot. Everything else is promoted by the browser for the length of its own animation.

**Overflow (measured).** No horizontal scroll at the 14 CONTRACT §8 widths (320 → 1920 px) in WebKit and Chromium, after a full scroll and with the checkout open on the widest price: the pill layers and odometer overlays never widen anything.

**Weight (measured).** `motion.js` 47.5 KB raw / 14.0 KB gzip as authored (heavily commented); 10.6 KB gzip with comments stripped. `motion.css` 26.9 KB / 8.0 KB gzip; 3.2 KB gzip without comments. Both load deferred / non-blocking per CONTRACT §6; a comment-stripping step in build.mjs would roughly halve the CSS and cut the JS by a quarter.

**Judged by eye, not measured.** WebKit frame timing (Playwright cannot throttle WebKit's CPU). The WebKit look of every state was checked on filmstrips cut from the context videos (`_build/preview/M-state-*-r3.png`) and close-ups (`M-odo-*-r2.png`): price odometer (desktop and WebKit phone), clock roll (WebKit), Recharge number roll (desktop and WebKit), reviews counter, tab pill with light labels.

## 10. Notes for the integrator

1. Head one-liner: set `html.js`, then `html.motion-ok` only with no-preference and no saveData; add the failsafe: remove `motion-ok` if `motion-live` has not appeared about 3 s after `load`.
2. Two hero beats: wrap the words as `<span>Perform.</span><br><span>Recharge.</span>` inside `#hero-title`; motion.css then rises them 140 ms apart. Without spans the headline rises as one block (works, one beat).
3. main.js toggles the menu (`#hdr-menu[data-state]`, `.hdr__toggle[aria-expanded]`) and the coaches (`.team__more[data-state][aria-expanded]`); motion picks both up from the attributes.
4. Full-page screenshots: reveals start on entry, so for static proofs emulate reduced motion or scroll to the end first and wait 3 s (`_build/motion-states.json` conventions).
5. LCP attribution (L1): Chromium names the `<video>` as the LCP element because it carries the same poster file as the `<img>`; the time is the poster's first paint. If the proof must name the `<img>`, drop the `poster` attribute from the video (the `<img>` is underneath it anyway).
6. Checkout layout shifts (L2): the sheet changes height between steps (and the desktop dialog re-centres); all after a tap, so CLS is 0.00, but a strict "no shift at all" reading would need a fixed sheet height or a top-anchored dialog. Not a motion issue (identical with motion off, measured).
7. Load order: CONTRACT §6 order is fine; motion.js also tolerates any order (it observes attributes and late content).

## Change log

- v1.0 — 2026-10-01 — first version (lane M): tokens, storyboards for every section and micro-interaction, hook map, written attributes, API, fallbacks, measured performance.
