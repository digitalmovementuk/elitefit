> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Motion spec: Elite Fit Bali homepage v3

Version: v3.0 — 2026-10-02 · owners: hero lane (section "Hero"), motion lane (all other sections). Every moment lists its UX job, trigger, timing, phone version and reduced-motion version. Rules for all rows: transform and opacity only (anything else needs a 60 fps measurement noted here), interruptible, UI feedback <= 600 ms, atmospheric <= 900 ms, never delays a primary action, at most 3 simultaneous animations, native scroll (no smoothing library, no scroll-jacking), reduced motion and data-saver keep layout and information.

## Hero

Owner: hero lane (Opus 5.5). Files: `assets/css/hero.css`, `assets/js/hero.js`, `partials/h-hero.html` (inline flag `html.hero-anim` / `html.hero-still` set before first paint), `partials/00-header.html`, `partials/10-hero.html`. Reference measured in `research/lab/hero/HERO-STUDY.md`: the reference hero itself is static on load and on scroll; the motion below is v2.1's arrival plus the brief's expansion, in the reference's language (movement along the blur axis).

| # | Moment | UX job | Trigger | Timing and property | Phone | Reduced motion / data-saver |
|---|---|---|---|---|---|---|
| H1 | Headline arrival | orient: the first word lands, the place feels in motion | first paint (CSS, no JS) | each display line slides in along x from -0.32 em to 0 (`transform`), 760 ms, `--ease-out`; line 2 starts 90 ms later. Opacity stays 1 from the first frame | same (centred lines; the crop settles symmetric) | in place, no slide |
| H2 | Footage settle | arrival depth | first paint (CSS) | poster scales 1.06 -> 1 (`transform`), 900 ms, `--ease-out` | same | still |
| H3 | Readouts appear | confirm: live data has arrived | first paint + 200 ms | HUD rows fade 0 -> 1 (`opacity`), `--dur-reveal` (600 ms); values fill when hero.js has read the data (typically < 200 ms) | same | shown at once |
| H4 | Clip takes over from the poster | build desire, make the room feel alive | `load` + idle (<= 1.5 s), clip ready (`canplaythrough`) | the video under the poster's image fades 0 -> 1 (`opacity`), 900 ms linear; 4 s seamless loop; pauses when the hero leaves the screen or the tab is hidden | phone clip 480 x 686, 41 KB; counts as 1 of the 2 clips allowed on a phone (it pauses off screen) | never starts: the poster stays |
| H5 | Clock tick | live proof that the readout is real | every second on the second boundary | text change only (tabular mono, fixed grid cells, no layout shift); the next-class countdown on the key line updates in the same tick; values never cut (max 24 characters) | same | same (no animation involved) |
| H6 | Review rotation | trust, one voice at a time | every 7 s; paused on hover/focus and while the tab is hidden | outgoing quote: opacity 1 -> 0 and translateY 0 -> -6 px; incoming: opacity 0 -> 1, translateY 6 px -> 0; `--dur-reveal` (600 ms) `--ease-out`; grid stack keeps the height fixed | same | first quote only, no rotation |
| H7 | Headline drift on scroll | guide: the words part as the page moves on, keeps the crop alive | scroll position across the hero (exit 0 % -> 100 %) | line 1 `translate` 0 -> -9 vw, line 2 0 -> +9 vw, linear with scroll; CSS scroll-driven animation (`view-timeline: --hero`) where supported, else one rAF writing the same `translate` | same | none (lines stay put) |
| H8 | Footage lag | depth while leaving the hero | same timeline as H7 | media `translate` 0 -> 18 % of its height, linear with scroll | same | none |
| H9 | Header turns solid | separate header and content once content runs under it | scrollY > 8 px (back at <= 8 px) | solid layer `opacity` 0 -> 1, `--dur-ui` (450 ms); ink colour flips instantly (colour never animates) | same | same state, no fade |
| H10 | Header condenses | give the page back its height | scrollY > 48 px (reference: 40-50 px) | desktop (>= 1100 px): solid layer `scaleY` to 0.69 from the top and the bar `translateY` up by the same half, logo scale 0.78, 900 ms soft out-curve (measured on the reference: 600 ms; ours stays inside the atmospheric limit); tap targets keep 44 px | logo scale 0.86 only (the reference phone header keeps its height) | state only, no transition |
| H11 | Press feedback | confirm the tap | `:active` on Buy a pass, Today's classes, header buttons | scale 0.97, `--dur-press` (150 ms), `--ease-press` | same | same (feedback, < 150 ms) |
| H12 | Arrow nudge | point to the next step | hover on the split button | arrow `translateX` 2 px, `--dur-ui` (450 ms) | n/a (no hover) | none |
| H13 | Anchor jump + destination highlight | orient: show where the jump landed | click on any in-page link (`a[href^="#"]`), e.g. Buy a pass -> #pricing, Today's classes -> #classes | in the click: hash + `data-jump` on the destination, then native smooth scroll (`scrollIntoView`); focus moves to the target's heading in the next frame; no layout reads per frame. When the target enters the top 16 % band of the viewport (IntersectionObserver, cap 1.6 s): a 2 px accent bar sweeps the top edge (`scaleX` 0 -> 1, 45 % of 1.3 s, then fades) and a light wash pulses once (`opacity`, 1.2 s). Shared helper: `window.EF.highlight(el)` / `import { highlight } from './hero.js'` | same | instant jump; the bar and the wash show still for 1.5 s, no sweep |

Simultaneity: at load H1 (two lines), H2 and H3 overlap for about 0.7 s: 3 animated groups. H4 starts only after `load`. H7/H8 run only while scrolling (no arrival is running then in practice; if it is, H1 and H7 animate different properties, `transform` and `translate`, so they compose instead of fighting).

Measured (hero lane, 2026-10-02): see `research/hero-comparison/HERO-NOTES.md` (LCP element, CLS, first-view transfer, JS size).

## Engine (motion lane)

Owner: motion lane (Opus 5.5). Files: `assets/js/motion.js` (loads after `load` in idle time through `main.js`, `export init(ctx)`, `window.EF.motion = { roll(el), refresh() }`), `assets/css/motion.css` (only the layers the engine inserts, plus press states the lanes left out). Behaviour spec it re-creates: v2.1 `MOTION-AND-DESIGN.md` (read only, nothing copied). Parity audit: `_build/motion-parity.md`.

| Part | What it does | How |
|---|---|---|
| Vocabulary | `data-reveal` = `up` (default) / `fade` / `left` / `rise` / `mask`; `data-stagger` (or a `ul`/`ol` with `data-reveal`, or a wrapper holding one list) staggers the children; `data-count` rolls the digits of the element's own text; `data-parallax="4"` drifts an element by ±4 % of its height across the screen | the hooks sit in the lanes' partials; blocks without a hook (pillars lead, pricing head, cards, notes, trust stack) are mapped by selector inside `motion.js` (`AUTO`) |
| First-view rule | nothing that is on screen when the engine starts ever moves; time-based reveals only for blocks below the fold; scroll-linked moves also for blocks above (they are at their end state there) | one IntersectionObserver classifies every hook once from its first entry (no layout read of its own) |
| Scroll-linked | headline arrival, clip masks, parallax, section rules, big words | WAAPI on `ViewTimeline` (`cover` ranges) where it exists (Chromium 153 and WebKit 26.6 both have it). Each layer's animation exists only while its subject is within half a screen of the viewport (one IntersectionObserver creates it on the way in and cancels it on the way out); every layer's own resting style is its end state (covers open, echo and rule invisible), so a cancelled layer is always right. Without ViewTimeline the same animations are paused and one passive scroll listener sets `currentTime` in one rAF from cached, untransformed positions (no layout read while scrolling) |
| Time-based | reveals, staggers, readout rolls, bar fills | the waiting state is an attribute (`data-m-pre`, styled in motion.css), not a held animation; when the block arrives (IntersectionObserver, 8 % above the bottom edge) each item starts its own WAAPI animation in its own frame (45 ms apart) and the attribute goes in the same frame; readout overlays are built in idle time before the block arrives and only start rolling 100 ms after it; done = nothing left behind |
| Properties | `translate`, `scale`, `opacity`, `transform` (odometer strips) | individual transform properties, so a lane's own `transform` is composed, never overwritten. No `clip-path`, no filter, no layout property animated. The pan-blur echo is a static `text-shadow` that is painted once and then only moved and faded |
| Simultaneity | at most 3 moments at once | one moment = one UX job, however many layers share its trigger (as v2.1 counted). A fourth time-based reveal that starts while three run lands in place |
| Buy actions | never hidden | a block holding a buy or pricing action (`.hero__cta`, `.hdr__buy`, `.prc-cta`, `.buy__btn`, `.wa`, `[data-checkout]`, `.cls__cta`, `.pil__btn`, `.nut-ask`) only rises by `translate`; its opacity stays 1 |
| Fallbacks | reduced motion, data-saver, no JS | `ctx.motion` false: the engine never starts, nothing is inserted or hidden. Reduced motion switched on mid-visit: every animation is cancelled and every inserted layer removed at once. No JS: nothing is hidden (all hidden states are WAAPI fill states) |
| Layout | CLS 0, never wider than the screen | every inserted layer is absolutely placed, `aria-hidden`, holds no text node (generated content only); the odometer overlay sits over the real text, which keeps its box and its words for screen readers. Nothing moves past the right edge: titles and echoes arrive from the left and settle inside the gutter; the footer wordmark's second line (and its echo) is the only layer that arrives from the right, so the footer clips horizontally while the engine runs (`overflow-x: clip`). Sections themselves are not clipped, so their sticky parts stay on the compositor |
| iOS press | `:active` on touch | one passive `touchstart` listener on the document, so iOS Safari applies every lane's press state |
| Timing tokens | shared | reveal duration and easing are read from `--dur-reveal` and `--ease-out` (tokens.css); scrubbed moves use a softer `cubic-bezier(.3,.7,.4,1)` so the motion spreads over the scroll instead of jumping in the first pixels |

## Page moments (all sections below the hero)

Rows M are the motion lane's (`motion.js`, `motion.css`); rows C, N, T, R, P, B, W, S, K are the lanes' own component motion, listed here so every moment has one place. All rows: native scroll, interruptible, transform and opacity unless noted.

| # | Moment | UX job | Trigger | Timing and property | Phone | Reduced motion / data-saver | Owner / file |
|---|---|---|---|---|---|---|---|
| M1 | Section rule | orient: a new part of the club starts here | scroll: the section's top edge from the bottom of the screen to 25 % from the top (`cover 0-75 %` of the rule) | a 1 px accent rule on the section's top edge draws left to right (`scale` 0 -> 1 by the middle of the range), then fades (`opacity` 1 -> 0); soft out-curve | same | no rule | motion lane |
| M2 | Headline arrival | guide; carries the hero's oversized, edge-cropped type and pan blur into every section | scroll: the title from the bottom edge to about 70 % of the screen height (`cover 0-38 %`) | title `translate` from -dx to 0 and `scale` from up to 1.06 to 1 (origin left), dx = gutter + 0.07 em on phones (the first letter loses a sliver at the screen edge), 0.35 em (max 64 px) on wide screens; a pan-blur echo of the same words (`text-shadow` smear, aria-hidden) moves from -1.6 dx to 0 and fades 0.6 -> 0.3 -> 0; soft out-curve | same, sliver crop at the left edge | title static, no echo | motion lane (titles: pillars head, Elite Nutrition, Elite Training, Elite Rest, pricing; the Classes title is on screen at load and stays still) |
| M3 | Pillar index roll `01 / 03` | orient: which of the three parts this is | the pillar head enters | the index fades in from -16 px (600 ms) while its digits roll from 0 (680 ms after 100 ms, 40 ms per digit, the last digit turns once more and lands) | same | static | motion lane |
| M4 | Head and lead reveals | guide the eye down the section | block enters 8 % above the bottom edge | `opacity` 0 -> 1 and `translate` 16 px -> 0, 600 ms `--ease-out`, children 45 ms apart (index capped at 6) | same | in place | motion lane (pillar leads, pillars lead, pricing eyebrow from -16 px x, lede, Duo; Classes lead, tabs, panel when below the fold) |
| M5 | Fact rows stagger | explain: the list reads as a list, one row after another | the facts list enters | rows rise 16 px and fade in, 600 ms, 45 ms apart | same | in place | motion lane |
| M6 | Clip mask opens | build desire: the room opens like a door | scroll: the clip from the bottom edge until it is fully on screen (`cover 0-45 %`) | two covers in the page colour scale away from a slit (`scale` y 0.72 -> 0: the middle 28 % shows first), the card grows from 0.92 to full width (the reference's inset-to-full panel), the footage settles from 1.24 to 1.1; soft out-curve | same; the clip is fully open once it is fully visible | poster and clip in place, no covers | motion lane (three pillar clips) |
| M7 | Clip parallax | depth: the footage drifts slower than the page | scroll, whole time the clip is on screen (`cover 0-100 %`) | footage `translate` -4 % -> +4 % of its height (about ±18 px on a phone, ±26 px at 1440) inside the 5 % overscan of its 1.1 scale; linear | same (compositor, no main-thread cost) | none | motion lane |
| M8 | Temperature readout | explain: four rooms on one cold-to-hot scale | the readout enters | the block rises; the eight numbers roll from 0 to their values (680 ms after 100 ms, 40 ms per digit); each room's bar fills out from the cold end (`scale` x 0 -> 1, 680 ms after 100 ms) | same | numbers and bars static | motion lane (values from the DOM, which `rest.js` renders from `rest.json`) |
| M9 | Count roll 36 classes | explain | its fact row enters | same roll | same | static | motion lane (value from the DOM, written by `training.js` from the timetable) |
| M10 | Trust stack roll 4.7 · 488 reviews | trust at the point of buying | the notes and trust block enters | same roll on the rating and on the review count | same | static | motion lane (values from `reviews.json` via `pricing.js`) |
| M11 | Pass cards rise | guide to buy without hiding it | the cards enter | `translate` 24 px -> 0, 600 ms, 45 ms apart; opacity stays 1, the buttons are tappable the whole time | same | in place | motion lane |
| M12 | Notes, partner discounts, offers, trust | explain | block enters | M4 stagger | same | in place | motion lane |
| M13 | Bowl card, other pillar extras | build desire | block enters | M4, or M11 when it holds the Ask action | same | in place | motion lane |
| M14 | Press states the lanes left out | confirm the tap | `:active` | Duo switch track `scale` 0.92, pricing links and the nutrition WhatsApp link `scale` 0.97, `--dur-press` (150 ms) `--ease-press` | same (touch listener above) | kept (feedback under 150 ms) | motion lane (`motion.css`) |
| M15 | Headline arrival on Coaches and Reviews | guide | as M2 | as M2 | same | as M2 | motion lane (Phase 2) |
| M16 | Visit place name arrives and drifts | build desire: the place, in the hero's oversized cropped type | scroll, whole time the word is on screen (`cover 0-100 %`) | the word slides in from 0.15 em to the right and settles from a 1.04 scale by 45 % of the range, then keeps drifting left by half that while it passes; a pan-blur echo resolves into it; stays inside the word's own edge-crop (the visit lane's `overflow-x: clip`) | same | still word, no echo | motion lane |
| M17 | Footer wordmark lines meet | close the page: the hero's two lines part as you leave the top, the footer's two lines meet as you arrive at the end | scroll, the wordmark from the bottom edge to the page end (range clamped to how far the page can scroll, so it always lands) | line 1 from -0.3 em, line 2 from +0.3 em, both to 0, each with its echo; soft out-curve | same (two stacked lines on a phone, one row on desktop) | still | motion lane |
| M18 | Section rules on Coaches, Reviews, Visit | orient | as M1 | as M1 | same | none | motion lane |
| M19 | Coach rows arrive | guide: four people, one after another | the list enters | rows rise 16 px and fade, 45 ms apart (a wrapper around one list staggers the list) | same | in place | motion lane |
| M20 | A coach opens | explain: the week of that coach, then the count confirms | `toggle` to open on a coach `<details>` | the week rows (and the role or weekend note) rise 8 px and fade, 280 ms, 35 ms apart; the "11 classes a week" digits roll in (680 ms); the lane's tile turns and the top rule turns accent; closing is native and instant | same | opens at once (the lane's own animation is off too) | motion lane + coaches lane (`coaches.css`: tile `rotate`, body fade) |
| M21 | Reviews readout: 4.7 and 488 roll, stars arrive | trust: the numbers read out like an instrument | the readout enters | digits roll from 0 (680 ms, 40 ms per digit, the last one turns once more); the five stars pop in 60 ms apart (`scale` 0.4 -> 1, `opacity`); a readout wins its slot under the three-moment cap | same (the readout is sticky beside the quotes from 760 px) | final values, still | motion lane (values from `reviews.json` via `reviews.js`) |
| M22 | Quotes arrive | guide | the list enters | quotes rise 16 px and fade, 45 ms apart | same | in place | motion lane |
| M23 | Visit: address, actions, hours, facts | explain | each block enters | M4; the actions block (Get directions, Book a tour) only rises, never fades; the opening hours roll in as a readout (`06:00–22:00`) | same | in place | motion lane |
| M24 | Visit clip mask + parallax | build desire: the entrance opens | as M6 / M7 | as M6 / M7 | same | poster, in place | motion lane |
| M25 | Pinned temperature strip readout | orient: which room you are reading about | the room that becomes current (the rest lane's `is-current`) | its value rises 6 px from 30 % opacity, 320 ms; the lane's accent underline travels to it | phone only (the strip is phone only) | underline only, no tick | motion lane + rest lane (`rest.css`: underline `transform`) |
| M26 | Footer blocks and links | close | each block enters | M4; the link list staggers 45 ms; the WhatsApp button's block only rises | same | in place | motion lane |
| C1 | Day tab indicator slides | orient: which day | tap or arrow key on a day tab | `transform` 450 ms (`--dur-ui`) `--ease-out` | same | instant | classes |
| C2 | Rows arrive on a day change | confirm: the new day is here | `ef:classes:render` after a tap | each row `opacity` + 12 px rise, 280 ms, 45 ms apart (7 rows in about 0.55 s); day line fades 450 ms | same | instant | classes |
| C3 | Live dot breathes | live proof: this is happening now | while a class runs and the section is on screen | `opacity` 0.55 <-> 1, 2200 ms each way; the only loop of the section | same | still dot | classes |
| C4 | Now / next swap | orient: the marker moved | a class starts or ends | label, name and "then" line fade up 4 px, 450 ms | same | instant | classes |
| C5 | Countdown tick and progress hairline | make waiting feel shorter | every second | text change on fixed tabular cells; the hairline grows by `transform` 1 s linear | same | text changes, hairline steps | classes |
| N1 | Bowl stepper underline | orient: which step | step change | `transform` 450 ms | same | instant | nutrition |
| N2 | Chip lands in the bowl | confirm the choice | tap on an option | the chip flies from the option into the bowl, 460 ms, `transform` + `opacity`, interruptible | same | none | nutrition |
| N3 | Bowl running price | explain the cost | an option changes the total (only when the menu data has prices) | odometer, 380 ms, 20 ms per digit | same | text changes | nutrition |
| P1 | Length pill travels | the length is a physical choice | tap or arrow key on a length | `transform` 450 ms `--ease-out` | same | instant | pricing |
| P2 | Price odometer (the star) | the number is the message | length or Duo change | digit strips roll 420 ms, right to left 20 ms apart; new leading digits fade and slide 450 ms; interruptible (three taps within 150 ms land right) | same | number changes | pricing |
| P3 | Selected card frame travels | which pass is mine | tap on a card | an empty outline moves by `transform` and resizes by `width`/`height` 450 ms (measured exception below) | same | jumps | pricing |
| P4 | Duo knob | confirm | Duo switch | `transform` 450 ms | same | instant | pricing |
| P5 | Sticky length selector | keep the choice in reach | the selector reaches the header, released at the section end | `position: sticky` + `data-pinned` state, no animation | same | same | pricing |
| P6 | Press on segments, cards, card button | confirm | `:active` | number 0.94, card 0.985, button 0.97, 150 ms | same | kept | pricing |
| B1 | Buy bar slides | the next step is always in reach once the hero is gone | hero out of view; down while pricing or the checkout is on screen | up 280 ms `--ease-out`, down 200 ms `--ease-inout`, visibility flips after the slide | phone only | appears in place | pricing (buybar) |
| W1 | WhatsApp pulse | a real person is one tap away | always while visible | two rings `scale` 1 -> 1.55 and fade, 2.6 s, the second 1.3 s later; the disc breathes 1.07 at 12 % of the cycle | same | static halo | pricing (whatsapp) |
| W2 | WhatsApp lifts above the buy bar; steps aside on the first view | never covers the buy bar or the live class card | `html[data-buybar]`; `data-away` at the top | `transform` 280 ms; `opacity` 450 ms | same | in place | pricing (whatsapp) |
| S1 | Menu sheet | a light sheet, not a page change | menu button | sheet in 320 ms / out 220 ms, scrim fades with it, eight content steps 22 ms apart (260 ms, 18 px rise), bars morph to a cross | same; two columns on desktop | a 120 ms fade | menu sheet |
| K1 | Checkout sheet | the journey starts where the visitor is | `ef:checkout` | phone: sheet rises 320 ms, drops 240 ms; from 760 px: dialog fades and scales 240 / 180 ms | same | instant | checkout |
| K2 | Checkout steps | orient: forward or back | `ef:checkout:step` | panel slides 24 px and fades 272 ms, direction-aware; progress bar fills by `scale` x 260 ms | same | instant | checkout |
| K3 | Checkout total and confirmation | confirm | price change; done | odometer 380 ms + 16 ms per digit; badge pops once 380 ms; pay spinner 700 ms | same | instant | checkout |

## Measured (motion lane)

Method: the baseline lane's harness (`_tools/measure.mjs`, actions `_build/actions-v3.json`) at 4x CPU in Chromium 153, three runs or repetitions, median [min-max], against `_build/baseline-v2.1.json`. Results: `_build/measure-v3-motion.json` (v3 as built) and `_build/measure-v3-nomotion.json` (the same page with `?nomotion`, i.e. without this layer: the A/B that shows what the motion layer itself costs). Runs between 12:47 and 13:10 at a 1-minute load average of 3.5 to 6.9 (other lanes running); the first runs at load 10 to 19 were repeated and are not used.

| Metric | v2.1 | v3 with motion | v3 without the motion layer | Verdict |
|---|---|---|---|---|
| fps phone 390, Phase 1 pooled | 59.5 [59.4-59.8] | 59.7 [59.6-59.7]; rerun 59.6 | 60 [60-60] | not lower |
| fps phone: hero / classes / pillars / pricing | 60 / 58.9 / 59.8 / 58.6 | 60 / 60 / 59.4 / 60 | 60 / 60 / 60 / 60 | pillars 0.4 fps under v2.1 in both runs: inside the harness band (PASS~); 1.1 % of pillar frames over 20 ms (v2.1 0.4 %), 0 over 33 ms |
| fps desktop 1440, Phase 1 pooled | 59.6 [57.7-59.9] | 59.8 [59.8-59.9] | 60 [60-60] | not lower |
| fps desktop: hero / classes / pillars / pricing | 60 / 60 / 59.8 / 58.3 | 60 / 59.4 / 59.8 / 60 | 60 / 60 / 60 / 60 | classes 0.6 under, inside the band (PASS~) |
| p95 frame, Phase 1 (phone / desktop) | 16.8 / 16.7 ms | 16.8 / 16.8 ms | 16.7 / 16.7 ms | equal (vsync) |
| Main thread per frame while scrolling (phone / desktop) | 2.31 / 3.37 ms | 1.18-1.64 / 1.61 ms | 0.68 / 0.57 ms | lower than v2.1; the layer adds about 0.5-1 ms at 4x |
| Day switch / back, response (phone) | 33.3 / 25.2 ms | 30.6 / 29.3 ms | 30.1 / 27.5 ms | equal (back inside the band) |
| Pass length 4 wk / 52 wk / day, response (phone) | 34.1 / 26.4 / 25.5 ms | 28.5 / 27.7 / 27.1 ms | 28.5 / 28.1 / 28.4 ms | equal |
| Day switch / back, response (desktop) | 17.5 / 23.3 ms | 14.7 / 15.1 ms | 12.4 / 12.6 ms | faster |
| Pass length 4 wk / 52 wk / day, response (desktop) | 61.8 / 19.8 / 24 ms | 21.5 / 12.2 / 13.9 ms | 33.9 / 10.7 / 12.3 ms | faster |
| Buy bar open / close (phone) | 50.2 / 45.8 ms | 33.8 / 33.8 ms | not run | faster |
| Header condense / uncondense (phone) | 32.3 / 29.8 ms | 31.5 / 32 ms | not run | equal |
| Sticky selector (phone) | 32.9 ms | 32.7 ms | not run | equal |
| Anchor jump to Classes (phone / desktop) | 27.8 / 11.4 ms | 45.3 (tap to paint 27.6) / 24.5 ms | 45.8 / 26.1 ms | slower, same without the motion layer: hero lane's handler (see risks) |
| Anchor jump far (desktop) | 16.4 ms | 26.2 ms | 26.5 ms | same without the motion layer (hero lane) |
| Settle times | 274 / 500 ms | day switch 474-585 ms, pass length 535-593 ms | same | inside the 600 ms UI rule; longer than v2.1 because the tokens set 450 ms for UI moves |
| CLS (harness: load + 3 screens) | 0 | phone 0; desktop 0.00003 | same | the 0.00003 and a phone 0.00303 seen in a full-page scroll come from the Classes first render (live card 8 px taller than its skeleton, tab counts filling in), identical without the motion layer; request `_build/requests/motion-classes-cls.md` |
| First-view transfer (WebKit 390 / Chromium 390 / 1440) | 418 / 419 / 421 KB | 361 / 390 / 401 KB | | within 900 KB |
| Clips playing during the scroll (phone / desktop) | 2 / 3 | 1 / 2 | | within 2 on a phone |
| Idle fps with the WhatsApp pulse | 60 | 60 | | compositor only |
| JS gzip, whole page | 46.8 KB | 60.6 KB measured with motion.js at 5.3 KB; motion.js now 4.6 KB, so about 59.9 KB | | at the edge of the 60 KB budget; first-view JS (main + hero + timetable) 7.2 KB of 14 |
| CSS gzip, whole page | 32.3 KB | 48.8 KB (motion.css 0.8 KB) | | over the 40 KB budget, see risks |

Exceptions to transform/opacity, each measured: the pricing lane's selected-card frame resizes an empty outline by `width`/`height` (pricing lane: 0 frames over 20 ms at 4x; pricing group 60 fps on phone and desktop above); the pan-blur echo uses a static `text-shadow` that is painted once and never animated. No `clip-path` and no `filter` anywhere in the motion layer.

Where the motion layer's frame cost comes from (bisect at 4x, phone, touch swipes through the page, slow frame = over 20 ms): with the layer 6 slow frames per pass, without it 0. Switching single parts off leaves 3-4 each (scroll-linked parts off: 4; reveals and rolls off: 4; headline arrival off: 3), so the cost is spread over the moments where a group starts, one dropped frame each, never two in a row. Already applied: scroll-linked layers more than half a screen away are paused (main thread per frame 1.59 -> 1.18 ms), stagger items and rolls start in their own frames.

### Phase 2 (all sections, 15:28-15:40, load average 3.9-4.8)

Same harness and baseline; results `_build/measure-v3-phase2.json`, A/B without the layer `_build/measure-v3-phase2-nomotion.json` (15:11-15:14). Runs taken between 14:27 and 15:00 at load 7 to 40 are not used.

| Metric | v2.1 | v3 with motion | v3 without the layer | Verdict |
|---|---|---|---|---|
| fps phone, Phase 1 pooled | 59.5 | 59.2 [56.5-59.4] | 59.9 | inside the band (PASS~) |
| fps phone: hero / classes / pillars / pricing | 60 / 58.9 / 59.8 / 58.6 | 60 / 60 / 58.8 / 59.3 | 60 / 60 / 59.9 / 60 | pillars 1.0 under, inside the band; 1.8 % of pillar frames over 20 ms, 0.2 % over 33 ms |
| fps phone: Coaches, Reviews, Visit, footer pooled | 60 / 60 / 58 / 60 | 59.6 | 60 | equal |
| fps desktop, Phase 1 pooled | 59.6 | 59.2 [58.7-59.4] | 60 | inside the band |
| fps desktop: hero / classes / pillars / pricing | 60 / 60 / 59.8 / 58.3 | 59.2 / 58.9 / 59.4 / 59.4 | 60 / 60 / 60 / 60 | classes 1.1 under, inside the band |
| fps desktop: Coaches to footer pooled | 60 / 58.8 / 58.9 / 60 | 59.6 | 60 | equal |
| Main thread per frame (phone / desktop) | 2.31 / 3.37 ms | 1.80 / 2.06 ms | 1.83 / 1.19 ms | lower than v2.1 |
| Interactions phone (day switch, back, lengths 4 wk / 52 wk / day) | 33.3, 25.2, 34.1 / 26.4 / 25.5 ms | 31.4, 30.1, 29.9 / 28.4 / 29.8 ms | 28.2, 26.7, 34.7 / 27.4 / 28.6 ms | equal (inside the band) |
| Interactions phone (buy bar, header, anchor, menu open / close / far) | 50.2 / 45.8, 32.3, 27.8, 28.9 / 28.4 / 28.9 ms | 34.5 / 32.9, 32.7, 26.8, 29.9 / 26.4 / 25.4 ms | | equal or faster |
| Interactions desktop (day switch, back, lengths, anchor, anchor far) | 17.5, 23.3, 61.8 / 19.8 / 24, 11.4, 16.4 ms | 16.9, 15.5, 16.1 / 12 / 12.2, 13.9, 11.2 ms | | equal or faster |
| Coach open / close (new, phone / desktop) | none in v2.1 | 32.3 / 16.5 ms open, settle 506 ms (UI rule 600 ms) | 30.8 ms open | the layer adds about 1.5 ms |
| CLS (load + 3 screens) | 0 | 0 phone, 0 desktop | 0 | pass |
| Width at 320, 360, 375, 390, 414, 768, 1024, 1440 px (WebKit and Chromium, motion on and off) | | document = viewport at load and through a full scroll | same | pass (overflow defect fixed) |
| First view transfer (WebKit 390 / Chromium 390 / 1440) | 418 / 419 / 421 KB | 410 / 440 / 451 KB | | within 900 KB |
| JS gzip, whole page | 46.8 KB | 74.8 KB (motion.js 5.9 KB) | | within the Phase 2 budget of 80 KB |
| CSS gzip, whole page | 32.3 KB | 60.1 KB as sent, about 39.6 KB without comments (motion.css 0.9 KB) | | 40 KB holds only after the orchestrator's comment-stripping dist step |

Finding from the measurement: the first overflow fix clipped every section (`overflow-x: clip`); with it the main thread cost per frame rose to 3.0-3.3 ms and the regions with sticky parts lost frames. Clipping only the footer (the only place where a layer arrives from the right) brought it back to 1.8 / 2.1 ms with the same zero overflow.

Remaining risks: pillars on the phone (58.8 against 59.8) and Classes on desktop (58.9 against 60) sit inside the harness band but under v2.1 in every run; without the layer both are at 60, so the cost is the layer's (one dropped frame where a moment starts, spread over the moments, never two in a row). The classes lane now runs a 4 s animation after a day switch (settle 4.0 s in every run, also without the motion layer): worth a look by that lane. CSS budget depends on the dist step.

### Frame-rate gap closed (16:00, after the Phase 2 acceptance)

Target (Raoul): never lower than v2.1 at the same throttle. Before: pillars on the phone 58.8 (v2.1 59.8), Classes on desktop 58.9 (v2.1 60); without the motion layer both 60.

Diagnosis (Chromium trace of the pillars scroll at 4x, the main thread by event): with the layer the main thread did 1050-1275 ms of work against 460-737 ms without, spread over style recalculation, layerize, paint, pre-paint and commit; switching parts off showed the cost scales with the number of live animations (each scroll-linked or held animation is serviced every frame, composited or not), not with one moment. The harness also calls `document.getAnimations()` every frame, which is proportional to the same number. No dropped frame coincided with a single engine event (instrumented run).

Changes (no visible moment simplified; positions and timings identical, checked frame by frame):
1. Scroll-linked layers are created when their subject comes within half a screen of the viewport and cancelled when it leaves; each layer's resting style is its end state (covers rest open, echo and rule rest invisible), so a cancelled layer is always correct, also after an anchor jump. Live animations while scrolling: about 10 instead of about 50.
2. A reveal's waiting state is a CSS attribute (`data-m-pre`) instead of a paused animation held at frame 0; its animation exists only while it runs.
3. Readout overlays are built in idle time before their block arrives, so a roll's start costs no layout.
4. Kept from before: items start in their own frames (45 ms apart), rolls 100 ms after their block, no layout reads at a moment's start.

| Profile (3 runs each, load at start and end < 6) | hero | classes | pillars | pricing | Phase 1 pooled | Coaches to footer | main thread / frame |
|---|---|---|---|---|---|---|---|
| v2.1 phone 390 | 60 | 58.9 | 59.8 | 58.6 | 59.5 | 60 / 60 / 58 / 60 | 2.31 ms |
| v3 phone 390, before | 60 | 60 | 58.8 | 59.3 | 59.2 | 59.6 | 1.80 ms |
| v3 phone 390, after (load 4.1 -> 3.3) | 60 | 60 | 60 | 60 | 60 | 59.9 | 2.03 ms |
| v2.1 desktop 1440 | 60 | 60 | 59.8 | 58.3 | 59.6 | 60 / 58.8 / 58.9 / 60 | 3.37 ms |
| v3 desktop 1440, before | 59.2 | 58.9 | 59.4 | 59.4 | 59.2 | 59.6 | 2.06 ms |
| v3 desktop 1440, after (load 4.5 -> 4.0) | 60 | 60 | 60 | 60 | 60 | 59.6 | 2.08 ms |

Discarded: two runs in which the machine load rose to 16 and 84 during the run (other lanes); their numbers are in `_build/measure-v3-gap-discarded.json` for the record. Also re-checked after the change: CLS 0 (phone, desktop), page width = viewport at 320-1440 px in WebKit and Chromium, no console errors, reduced motion and data-saver unchanged.

Risks and flags (for the orchestrator):
- CSS budget: the page sends 48.8 KB gzip against 40 KB. Comments are about 13 KB of it (without comments about 33-35 KB). One build step that strips comments from the CSS (orchestrator's `build.mjs`, writing minified copies) brings the page under budget without cutting a feature. Biggest files: components.css 6.6, checkout.css 5.7, hero.css 5.1, pricing.css 4.3, tokens.css 4.2 (2.7 KB of it comments), classes.css 3.9, menu.css 3.7, nutrition.css 3.5 KB. The motion lane's own CSS is 0.8 KB.
- JS budget: about 59.9 of 60 KB after trimming motion.js; any further lane growth breaks it. The same comment-stripping step on JS would give about 8 KB of headroom.
- Anchor jump response (hero lane): 45 ms on the phone against 27.8 ms (the paint itself comes at 27.6 ms; the harness sees the hash a frame later); 24.5 ms against 11.4 ms on desktop. Identical with the motion layer off. The handler also reads `getBoundingClientRect()` on every frame of the glide to time the highlight; an IntersectionObserver would remove that layout read.
- Menu sheet (menu lane): the harness reads `menu-sheet-close` 326 ms and `menu-anchor-jump-far` 315 ms because the state `closed` is written after the 220 ms exit and the jump waits for it; open responds in 92 ms (v2.1 29 ms). Not a motion-layer cost; the menu lane should look at the open path.
- WebKit frame timing is not measured (Playwright cannot throttle WebKit); WebKit was checked on states, filmstrips and the resync test (paused layers land where the scroll says after a far jump, in both browsers).

Evidence for the Fable verdict (`research/motion/`): `w390-*-arrival-filmstrip.jpg` and `.mp4` (WebKit 390x844: Elite Nutrition, Elite Rest and Pricing arriving, 12 scroll positions each: rule, headline echo, clip mask, reveals), `w390-roll-*-filmstrip.jpg` (temperatures with bars, trust stack, class count rolling, frames every 60-70 ms), the same set at 1440 (`c1440-*`, Chromium), and `parity/` (the raw parity runs of both pages and their stills).

## Change log
- v3.0 — 2026-10-02: created by the hero lane with the "Hero" section; the motion lane adds the other sections.
- v3.0 — 2026-10-02 12:05: H13 anchor jump lightened (response 26.7 ms phone at 4x, v2.1 27.8).
- v3.0 — 2026-10-02 11:55: hero rows re-timed to tokens v3.0 (press 150, ui 450, reveal 600 ms); condensing at 48 px.
- v3.0 — 2026-10-02 13:15: motion lane adds "Engine", "Page moments" (M1-M14 plus every lane's moments C, N, P, B, W, S, K) and "Measured" (v3 against v2.1 at 4x, A/B without the motion layer, budgets, risks); the "Hero" section is unchanged.
- v3.0 — 2026-10-02 15:00: Phase 2 moments M15-M26 (Coaches, Reviews, Visit, footer, pinned strip) and the footer clip that keeps the page from widening (overflow defect fixed); measurements below updated.
- v3.0 — 2026-10-02 16:25: frame-rate gap closed (live animations only near the screen, attribute waiting states, idle-built readouts); measurements added.
