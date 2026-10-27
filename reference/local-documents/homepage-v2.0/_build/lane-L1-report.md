> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane L1 report: header, hero, hero media

Version: v1.0 · 2026-10-01 · owner L1 (Opus 5.5) · HTML twin: `_build/preview/L1-report.html`

## 1. Files written

| File | What | Size |
|---|---|---|
| `partials/header.html` | Sticky header (SECTIONS §1): logo, desktop nav, WhatsApp icon, "Buy a pass", Menu toggle and top sheet | 4.6 KB |
| `partials/hero.html` | Hero (SECTIONS §2): board, reel window, desktop pass card, clock chip, pause control | 5.5 KB |
| `assets/css/hero.css` | Layout and surface for `.hdr*` and `.hero*`. No motion properties, no hex values. Includes the inlined LQIP (1.5 KB) and four local fallback faces | 17.7 KB (6.6 KB gzip) |
| `assets/js/hero.js` | Clock, reel start/stop, pause control, price refresh. One IIFE, deferred, never throws | 10.6 KB (3.6 KB gzip) |
| `assets/img/hero-poster-9x16.webp` | Poster and LCP image, 720×1280, frame 0 of the clip | 54,812 B |
| `assets/img/hero-poster-9x16-lqip.webp` | 72×128 placeholder (inlined in hero.css as a data URI, so it costs no request) | 1,148 B |
| `assets/img/hero-logo-mark.png` | EF mark, copied unchanged from v1.3 `logo-mark-taupe.png`, 299×177 | 2,575 B |
| `assets/video/hero-reel-9x16.mp4` | Web cut of the reel: H.264 High@3.1, 540×960, 30 fps, 13.67 s, no audio, faststart | 1,305,357 B |
| `_build/preview/L1*` | Preview page and its builder (`L1-build.py`), the menu stand-in (`L1-stub-main.js`), the QA scripts (`L1-qa.js`, `L1-qa-extra.js`, `L1-perf.js`), the media build (`L1-encode-media.py`), screenshots `L1-r1…r5-*.png` | scratch |

## 2. For the integrator

Put this tag in `<head>`, before the stylesheets:

```html
<link rel="preload" as="image" href="assets/img/hero-poster-9x16.webp" type="image/webp" fetchpriority="high">
```

- Load `hero.css` after `base.css`. Load `hero.js` with `defer`, in the CONTRACT §6 order.
- The `<head>` one-liner that sets `html.js` is required. The eyebrow variants and the hidden no-JS Menu toggle depend on it.
- **main.js menu (please build):**
  - `.hdr__toggle` click flips `aria-expanded` and sets `#hdr-menu[data-state="open|closed"]`.
  - Close the menu on Esc (focus goes back to the toggle), on any link or button tap inside the menu, and when the viewport reaches 1024 px or wider.
  - The menu is not modal, so no focus trap. `_build/preview/L1-stub-main.js` shows the behaviour; it is scratch, do not ship it.
- **MEDIA-SOURCES.md lines:**
  - `assets/video/hero-reel-9x16.mp4` (540×960, 13.67 s, 1.3 MB, no audio): web cut of the club's own Instagram reel (@elitefitbali, caption "Every great community deserves a place to call home …"), screen-recorded on iPhone by Raoul on 30.09.2026 (v1.3 MEDIA-SOURCES.md). Source frames 913–1322 (30.43–44.10 s), loop rotated to start at frame 1041. Elite Fit Bali. Client's own copyright, proposal use only.
  - `assets/img/hero-poster-9x16.webp` (720×1280) and `assets/img/hero-poster-9x16-lqip.webp` (72×128): source frame 1041 (34.70 s, pool deck courtyard) of the same reel, which is frame 0 of the web cut. Same owner and licence.
  - `assets/img/hero-logo-mark.png`: the club's EF mark, `logo-mark-taupe.png` from v1.3 (club's own PNG). Same owner and licence.
  - Inline WhatsApp glyph in `header.html`: Simple Icons path (CC0).
  - Before live use, ask the club for the original reel file. This copy comes from a screen recording of Instagram's compressed version.

## 3. Hooks, state and events

- **data-motion values used:** `header`, `sheet` (#hdr-menu), `press` (every .btn), `hero` with layers `media|board|wordmark|copy|card|cue`, `reveal-words` (#hero-title), `parallax` (.hero__media, depth 0.06), `clock` (every `[data-clock]`), `price-morph` (.hero__price).
- **The copy layer is two elements**, `.hero__eyebrow` and `.hero__copy`, so it never wraps the wordmark layer.
- **The cue chip and the pause button sit inside the media layer**, so the desktop parallax moves them with the frame.
- **State hero.js sets:**
  - `.hero__video[data-started]`: "true" from the first playing frame.
  - `.hero__video[data-playing="true|false"]`.
  - `#hero[data-video="off|ready|playing|paused"]`.
  - `.hero__pause`: `aria-pressed`, plus its `hidden` attribute.
  - The text of `[data-clock]` (with `datetime`) and `[data-hours]`.
  - `.hero__price`: text first, then `data-value`.
  - The text of `[data-price-from]`.
- **Events:** none emitted (CONTRACT §6 lists no hero event).
- **Opener attributes** (`data-open-checkout data-tier="perform" data-length="day"`) are on `#hero-cta`, the card's "Buy", `.hdr__buy` and `.hdr__menu-buy`. shop.js handles them by delegation.

## 4. Media decisions

- **Clip:**
  - Source frames 913–1322: gym floor (cable station, dumbbells, core work, box jumps), then pool deck, plunge pool, pool, sauna, sauna benches, café, terrace. The order follows "Perform. Recharge."
  - The loop is rotated to start inside the pool-deck shot (frame 1041, the sharpest frame of that shot by Laplacian variance). The loop point is therefore a continuous camera move. The one hard cut inside the file (terrace to gym floor) is a cut the reel already has.
  - Length 13.67 s, inside your 8–14 s range (the spec said 20–25 s is enough).
- **Encoder:**
  - The OpenCV writer is fixed at x264 crf 23 (2.25 MB), and its options variable is ignored. avconvert has no portrait 540×960 preset.
  - I therefore used the x264 inside the `imageio-ffmpeg` package that was already on this machine (ffmpeg 7.1, local, no network, not in CONTRACT §10's list). Settings: crf 27, preset veryslow, High profile level 3.1, yuv420p, BT.709 tags, `-movflags +faststart`, no audio. The box order is verified as ftyp, moov, free, mdat, so it starts playing before it has fully downloaded.
  - crf 26 would be 1.46 MB, crf 28 would be 1.17 MB. At 100 % crops, crf 27 shows no visible loss against the soft Instagram source.
  - No WebM variant: Playwright's Chromium and WebKit both play the MP4 (`canPlayType` "probably").
- **Poster:** the same source frame as clip frame 0, WebP q80, 54.8 KB (limit 90 KB). Mean absolute difference to the decoded clip frame 0 is 3.6/255 (judged identical by eye).
- **Rerun:** `python3 _build/preview/L1-encode-media.py 27` reproduces all three media files.

## 5. Choices and deviations (one line each)

1. **Poster frame:** pool deck courtyard (34.70 s), not v1.3's 38.0 s frame. The 38.0 s frame sits 3 frames before a cut, so it cannot start a loop, and the poster must be frame 0. The spec's alt text still describes the frame.
2. **Mobile media box:** ends 32 px under the board's top edge instead of filling the whole hero. The reel still runs behind the board's rounded corners, with room for the 6–8 px settle. The cover crop then centres on the part that is actually visible.
3. **`object-position`:** `50% 60%` instead of the spec's `50% 40%`. Checked on the poster and four clip frames: at 40 % the phone shows roof and treetops; at 60 % it shows the pool, people and benches. On desktop the 9:16 frame shows everything, so it makes no difference there.
4. **Visible reel on phones is below the spec's ≈280–320 px:**
   - 223 px at 390×844 and 204 px at 375×812. The board measures 334 px.
   - The board holds the two-line eyebrow reserve below 404 px (needed for zero CLS, see 9), H1 82, sub 50 and two 44 px buttons.
   - Hero height and the Today peek are met. Only dropping the ghost button would win back about 52 px, and the spec keeps it on screens 700 px tall or more.
5. **Header from 760 to 1023 px:** logo + "Buy a pass" + Menu. The spec defines only below 760 and from 1024, but the buy bar hides from 760, so the header button must show from 760.
6. **Tablet window:** 60 % wide and fills the rest of the hero, as a near-square cover crop at 820×1180. A true 9:16 at 60 % width would be about 790 px tall and break the 66svh hero.
7. **Desktop window:** set to the right edge of columns 8–12 (the spec fixes only vertical centring), so the card on its bottom-left corner stays clear of the type. Card width is 13.5 rem below 1280 px and 15 rem from 1280 px; it overlaps the window by 24 px.
8. **Header background:** `color-mix(in srgb, var(--surface) 86%, transparent)`, which is rgba(223,221,208,.86), instead of the literal rgba(217,214,204,.86), so no colour value sits outside tokens.css. Solid `--surface` is the fallback.
9. **Font-swap CLS:**
   - tokens.css has one fallback per family, tuned on lowercase. The hero's centred caps measure 10–17 % off it in Arial, so the swap moved centred lines sideways (P1 trace: CLS 0.013 at 390×844).
   - Fixes in hero.css:
     - Four local `@font-face` fallbacks tuned on the hero's own strings in both engines, applied to the H1, eyebrow, clock, lede, facts and nav (no font files).
     - Board children are full width, so centred text never moves its box.
     - The clock has `line-height: 0`.
     - The lede's max-width is in rem, not ch.
   - **Recommendation for the design lead:** move caps-tuned fallbacks into tokens.css for every centred heading. The same issue still moves L3's H2 and date slightly.
10. **Pause control:** `aria-pressed` (true means paused) with a constant name "Pause video". The icon swaps between pause and play. The spec's changing label combined with `aria-pressed` would be announced as "Play video, pressed".
11. **Price element:** no `aria-label`, because ARIA 1.2 prohibits it on a paragraph. The visible text is the real price. If motion.js splits the digits, it should keep a visually hidden copy.
12. **The card's "Buy" button** gets `aria-describedby` pointing to "Day pass" and "Perform · gym floor and classes". Its accessible name stays "Buy".
13. **Without JS:**
    - The Menu toggle is hidden (no dead button).
    - The eyebrow reads "Pererenan, Bali · open every day 6:00–22:00".
    - The pause control stays hidden and the poster is the hero picture.
14. **Poster vs clip, and LCP:**
    - The clip is visible from first paint, showing its poster attribute, and shares one box with the poster `<img>`.
    - Once the first frame plays, the `<img>` under it gets `visibility: hidden`, so no sub-pixel row of it can show at an edge. I saw that row at 820 px.
    - Tested: if the clip overhangs the box or appears late, Chromium reports its first frame as a new, larger LCP at about 1.97 s on P1. With the shared box it never does.

## 6. Requests to other lanes

- **M (motion):**
  - Never give `.hero__video` `opacity: 0` before `data-started`. Its first frame would then become the LCP at clip start (measured). The poster-to-footage switch is already seamless, because clip frame 0 is the poster.
  - Never start `.hero__poster` or `#hero-title` at opacity 0 (CONTRACT §12.5).
  - `#hdr-menu` closed state is `visibility: hidden` in hero.css. Pair the sheet's opacity/transform with a visibility transition.
  - My preview stub sets `data-scrolled` at scrollY > 8; motion.js owns the real one.
  - The digit roll on `[data-clock]` must keep the text node as the source of truth, because hero.js rewrites it every minute.
- **L2 (shop):** openers as listed in §3. `#hero-cta` exists for the buy-bar IntersectionObserver.
- **L3 (schedule):** on font swap, `.sched__date` and the H2 move sideways (centred boxes sized to their content). Full-width boxes or caps-tuned fallbacks fix it: about 0.0005–0.0007 CLS at P1.
- **Design lead / tokens.css:** see 5.9.

## 7. Verification (Playwright 1.63; WebKit 2365 at 390×844 and 375×812, DPR 2, touch; Chromium 1246 at 1440×900, 1024×768 and 820×1180; `?now=2026-10-01T09:30`)

**Measured:**

| Check | 390×844 WK | 375×812 WK | 1440×900 CR | 1024×768 CR | 820×1180 CR |
|---|---|---|---|---|---|
| Header height | 56 | 56 | 72 | 72 | 56 |
| Hero height / viewport | 557 / 0.660 | 536 / 0.660 | 594 / 0.660 | 507 / 0.660 | 779 / 0.660 |
| Room under hero | 231 | 220 | 234 | 189 | 345 |
| Visible reel | 223 | 204 | 298×530 | 249×443 | 452×412 |
| Today H2 top / first card top | 637 / 758 | 616 / 737 | 698 / 795 | 611 / 699 | 867 / 1020 |
| "Buy a pass" in first screen | yes | yes | yes | yes | yes |
| Taps under 44 px | 0 | 0 | 0 | 0 | 0 |
| Console errors / failed requests | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| LCP element (unthrottled) | – | – | poster img | poster img | poster img |

- **No horizontal scroll** (`scrollWidth ≤ innerWidth`) at 320, 375, 390, 760, 1024 and 1440 in all five contexts.
- **P1, Chromium 390×844** (DPR 2, CPU ×4, 1.6 Mbit/s, 150 ms RTT, 5 cold runs, L1 preview with L3's static strip):
  - LCP median **1,460 ms**, element = poster `<img>`, all 5 runs.
  - CLS median **0.0007** (max 0.0007; the residual is L3's H2/date plus the lede).
  - First view **232.1 KB**, measured as encoded bytes from navigation to `load` + 2 s, excluding video.
  - Clip on its own line: **1,274.9 KB**, starting after `load` + idle. Total with the clip: 1,507 KB.
- **Desktop P1-style trace, 1440×900:** CLS 0.0002–0.0003, LCP = poster img at about 1.47 s.
- **Clip behaviour:**
  - Plays after `load` + idle and pauses when scrolled out of view.
  - Reduced motion: `data-video="off"`, pause hidden, no video request, hero 557 px.
  - Save-data and 2g (Chromium, overridden `navigator.connection`): off, no video request.
  - No JS: hero 557 px, static eyebrow, no toggle.
- **Pause control:** a tap pauses (`aria-pressed=true`, stored in sessionStorage). After reload the clip stays paused with the button shown; the next tap plays.
- **Clock:**
  - `?now=` 05:30 and 22:15 read "opens 6:00"; 21:59 reads "open till 22:00".
  - Without `?now=`, the clock equals Bali time (UTC+8).
  - The card price and "Day passes from" are refreshed from `EFApi.getPasses()` and equal the fallback text (350.000 / 300.000).

**Judged by eye only:**
- Quality of the crf 27 clip at 100 % crops.
- Poster = clip frame 0.
- Mobile crop at 60 % vs 40 %.
- Balance of the desktop composition and clearance between the card and the type at 1024.
- The menu sheet look.
- Note: the r1–r4 screenshots predate the 60 % crop; r5 shows it.

**Not verified:**
- Real iOS Safari Low Power Mode. The code path is there: a refused autoplay leaves the poster and offers Play.
- Frame timing of the hero, which belongs to the motion lane.

## Change log

- v1.0 · 2026-10-01 · first version (L1).
