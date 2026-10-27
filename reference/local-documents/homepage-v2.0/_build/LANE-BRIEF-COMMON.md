> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane brief: common rules (Step 2)

Version: v1.0 — 2026-10-01 · owner: Michael · applies to lanes M, L1-L6.

You build one lane of the Elite Fit Bali homepage v2.0 in parallel with six others. Nobody can ask anybody anything. Work from files.

## Read first, in this order
1. `_build/CONTRACT.md` (file ownership, partial names, class namespaces, state attributes, JS/API names, budgets, journeys, tooling, ports). Binding.
2. `_build/SECTIONS.md` (the build spec by the design lead: your section(s), final English copy, class names, data-motion hooks, images). Binding for markup and copy; copy words exactly, do not rewrite them. If the spec is ambiguous, take the simplest reading that fits the contract and write the choice into your lane report.
3. `_build/CONCEPT.md` and `_build/ART-DIRECTION.md` (the idea and the mood).
4. `assets/css/tokens.css` and `assets/css/base.css` (use the tokens, do not hard-code colours or font sizes; never edit these two files).
5. Facts: `ROOT/proposal/site-preview/BRAND-NOTES.md`. Class data, images, trainers: v1.3 `ROOT/proposal/site-preview/index.html` and `assets/img/`, and `ROOT/brand/evidence-v1.0/`.

ROOT = `/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30`, OUT = `ROOT/homepage-v2.0`.

## Rules
- Write only the files your row in CONTRACT §2 gives you. Never edit another lane's file; if you need a change there, put it in your lane report under "Requests to other lanes".
- Lane CSS has no `transition`, `animation` or `@keyframes`. Motion belongs to the motion lane (`data-motion` hooks, state attributes). Lane JS never animates; it sets state attributes and emits the events in CONTRACT §6.
- Mobile first. Below 760 px: one column, centred eyebrows, labels and chips (shared classes), tap targets at least 44 px, nothing side by side. No horizontal scroll from 320 px up.
- Mark every mock with a `MOCK:` code comment. Nothing real is collected, no provider is contacted, nothing is published, committed, pushed or sent.
- Media: copy from v1.3 assets or `site-images-original/` into your own prefixed files under `assets/img/` (convert and resize; WebP via OpenCV `cv2.imwrite(..., [cv2.IMWRITE_WEBP_QUALITY, 78])` or Pillow; see CONTRACT §10), `width`/`height` on every `<img>`, first-screen media small. Record every file's source in `_build/lane-<id>-report.md` (the integrator folds it into MEDIA-SOURCES.md).
- Verify on the render: build a preview page `_build/preview/<lane>.html` (links `../../assets/...`; tokens.css, base.css, your partial pasted in, your CSS/JS, `api.js` if it exists yet), serve OUT on your own port (CONTRACT §10), and use Playwright (WebKit iPhone 390x844 and 375x812, Chromium 1440x900). Take screenshots into `_build/preview/<lane>-*.png`, LOOK at them, fix what is off. Check the console is clean and `scrollWidth <= innerWidth` at 320, 375, 390, 760, 1440. Say in the report what you measured and what you only judged by eye.
- Do not wait for another lane's files. If something you depend on (for example `api.js`) is not there yet, code to the contract and test against a throwaway stub inside `_build/preview/`.
- No libraries. No external network requests at runtime. No Firecrawl, no paid calls.
- Be exact with numbers: prices only from `assets/data/passes.json` (via `EFApi.getPasses()`), never typed into JS or HTML except as the no-JS fallback text that the spec shows.

## Report
Write `_build/lane-<id>-report.md` (what you built, hooks and events used, assets and their sources, what you verified and how, open issues, requests to other lanes). Then send me a final message of at most 12 lines: files written, hooks declared, issues for the integrator, anything unverified. Plain words.
