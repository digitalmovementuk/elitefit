> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Live log (one line per change: time | lane | file | what)
10:20:23 | facts | _build/facts | start; Firecrawl balance before = 68 credits (shared)
10:22:26 | rest | _build/pillar-anatomy.md | shared pillar anatomy v1 written (markup, .pil-* CSS block, clip helper)
10:23:58 | voice | VOICE-GUIDE-ELITEFIT.md | v3.0 created: brief verbatim, evidence (pages, reels, film captions, verified reviews), voice + 5 principles, do/don't, 10 tone lines; form section pending Lab
10:23:58 | voice | VOICE-GUIDE-ELITEFIT.html | html twin built
10:23:58 | voice | _build/ready/voice-interim.ready | interim marker written
10:26:22 | rest | assets/video/rest-clip.mp4 | Elite Rest clip: 4-shot recharge walkthrough (pool, tubs, steam, sauna) from Header-Portrait.mov 34.35-40.9 s, dissolves, seamless loop, 3.4 s, 720x900, 394 KB, silent
10:26:22 | rest | assets/img/rest-clip-poster.webp | Elite Rest poster (first frame of the clip), 44 KB webp
10:26:24 | lab-rest | research/lab/system/rest/COPY-FORM-LAB.md | copy form rules (generic) + copy-samples-INTERNAL written; ready marker set
10:27:27 | training | assets/video/training-clip.webm | clip cut: 4 shots (cable station, dumbbell racks, turf class, machine hall) from Header-Portrait.mov, slowed 0.75x, dissolves, seamless 3.5 s loop, 383 KB vp9
10:27:27 | training | assets/video/training-clip.mp4 | mp4/h264 twin, 310 KB; poster assets/img/training-clip-poster.webp 40 KB
10:27:27 | training | partials/31-training.html | Elite Training block v1: head, clip, 5 fact rows (provisional), CTA row
10:27:27 | training | assets/css/training.css | shared pil block + .trn-* parts
10:27:27 | training | assets/js/training.js | shared pil-clip + hours/coaches/class-count binding
10:27:27 | training | copy/slots/training.json | slots v1
10:28:34 | voice | VOICE-GUIDE-ELITEFIT.md | section 6 form rules added from COPY-FORM-LAB.md v1.0; hero example reset; change log
10:28:34 | voice | VOICE-GUIDE-ELITEFIT.html | html twin rebuilt
10:28:34 | voice | _build/ready/voice.ready | final marker written
10:29:00 | rest | partials/32-rest.html | Elite Rest block structure, readout row skeleton, facts list (provisional lines)
10:29:00 | rest | assets/css/rest.css | shared .pil-* block + .rest-* readout styles
10:29:00 | rest | assets/js/rest.js | pil clip helper, readout rendering from rest.json, hours from hours.json
10:29:00 | rest | copy/slots/rest.json | copy slots
10:29:00 | rest | assets/data/rest.json | four-room temperatures (from the club's Recharge FAQ), fact ids pending
10:29:31 | classes | partials/20-classes.html | Classes section markup: head, live block, 7 day tabs, panel, link to passes, JS string template
10:29:31 | classes | assets/css/classes.css | Classes styles: live readout, tabs + sliding indicator, rows + stagger, tablet and desktop layouts
10:29:31 | classes | assets/js/classes.js | Classes engine: tabs (roving tabindex), stagger on day change, now/next + ticking countdown
10:29:31 | classes | copy/slots/classes.json | Copy slots for classes (provisional text)
10:31:07 | training | assets/video/training-clip.webm | recut: calmer class shot, 0.7x, 3.34 s loop, webm 355 KB, mp4 275 KB, poster 42 KB
10:31:48 | hero | partials/h-hero.html | poster preloads (phone/desktop, fetchpriority high) + inline motion flag
10:31:48 | hero | partials/00-header.html | minimal header: EF logo, Buy a pass, menu button
10:31:48 | hero | partials/10-hero.html | hero v0: blur-treated hall footage, cropped display headline, live readouts, CTAs, review line
10:31:48 | hero | assets/css/hero.css | hero + header layout, arrival, destination highlight
10:31:48 | hero | assets/js/hero.js | readouts (WITA clock, open, next+countdown, today), review rotation, header states, clip loader, EF.highlight
10:31:48 | hero | assets/img/logo-ef.svg | club logo traced from Elite_fit_master-1-2.png (taupe) + mono variant
10:31:48 | hero | assets/img/hero-poster-m.webp | provisional poster (phone 780x1114, 17 KB) and desktop (1920x800, 43 KB)
10:34:01 | hero | assets/img/hero-poster-m.webp | poster v1: pan-blur (focus zone on the people), warm taupe grade; phone 8 KB, desktop 16 KB
10:37:14 | facts | FACTS.md | v3.0 fact sheet: 140 rows over hours, address, classes, equipment, coaches, facilities, temperatures, treatments, cafe, passes, offers, reviews; menu pending
10:37:14 | facts | assets/data/hours.json | verified hours: 06:00-22:00 daily, Recharge from 06:30 (areas), status verified
10:37:14 | facts | assets/data/coaches.json | coaches: Rey, Ain, Icha, Tinos (+Putu's grid-only); Tinos/Martijn question answered in F-COA-06
10:37:14 | facts | _build/ready/facts.ready | facts usable; menu merge pending
10:38:04 | rest | partials/32-rest.html | fact ids from FACTS.md (F-FAC-04/05, F-TRT-01/02, F-FAC-01/02/07, F-HRS-02/08); provisional lines aligned to the facts
10:38:04 | rest | assets/data/rest.json | fact ids F-TMP-01..04, unit flag (F-TMP-05)
10:38:04 | rest | assets/js/rest.js | hours from areas.recharge (Recharge opens 06:30)
10:38:39 | training | partials/31-training.html | facts filled from FACTS.md: floor (F-EQP-01/03, F-FAC-09), brands Arsenal Strength/Panatta/Prime (F-EQP-01), 36 classes (F-CLS-01/28/29), coaches Rey/Ain/Icha/Tinos (F-COA-01), hours (F-HRS-01/08); data-fact ids on every row
10:38:39 | training | copy/slots/training.json | slots v2 aligned to FACTS
10:38:39 | training | assets/js/training.js | coaches: only those on the timetable
10:39:00 | pricing | partials/40-pricing.html | Pricing section v1: skeleton, lexicon, card template
10:39:00 | pricing | partials/50-buybar.html | buy bar markup
10:39:00 | pricing | partials/51-whatsapp.html | WhatsApp fab markup + shared glyph symbol
10:39:00 | pricing | assets/js/pricing.js | renders lengths, cards, odometer, notes, partner, offers, trust from data
10:39:00 | pricing | assets/css/pricing.css | section styles (selector pill, cards, frame, odometer, trust stack)
10:39:00 | pricing | assets/css/buybar.css + assets/js/buybar.js | buy bar slide, anchor jump, highlight
10:39:00 | pricing | assets/css/whatsapp.css + assets/js/whatsapp.js | fab, ring pulse, lift above buy bar
10:39:00 | pricing | assets/data/site.json + offers.json + copy/slots/pricing.json | data and slots v1 (offers empty until F-OFR)
10:42:36 | training | _build/ready/training.ready | ready marker written; report _build/reports/training.md (+html)
10:42:59 | menu | assets/data/menu.json | menu.json: 15 items, 2 footage prices, fridge, 4 coolers, dietitian, bowl null, 11 gaps
10:42:59 | menu | MENU-SOURCING.md | provenance, credits 68 to 57, bowl showcase recommendation, one question for Raoul
10:42:59 | menu | _build/facts/menu-facts.md | F-MNU-01 to 26 for the facts lane
10:42:59 | menu | _build/facts/menu-clip-windows.md | 3 recommended cafe clip windows plus alternates and stills
10:42:59 | menu | INPUTS.md | 28 rows added: cafe photos, online evidence, menu frames
10:44:04 | facts | FACTS.md | menu facts merged (26 F-MNU rows); create-your-own-bowl not published anywhere (F-MNU-22); nutrition fact list updated
10:44:04 | facts | _build/ready/facts-final.ready | facts final marker written
10:44:04 | facts | _build/reports/facts.md | lane report written
10:44:20 | classes | partials/20-classes.html | Weekend note now follows FACTS F-CLS-03 (club wording, typo fixed); typographic apostrophes
10:44:34 | classes | assets/js/classes.js | live region switched on after first render (no announcement at page load)
10:44:49 | classes | DECISIONS.md | 9 classes decisions appended
10:49:20 | hero | assets/video/hero-loop-m.mp4 | hero loop 4 s (phone 480x686, desktop 1280x550), pan-blur treatment, crossfade loop; poster = loop frame 0
10:49:20 | hero | assets/css/hero.css | r2 composition from the Lab study: split CTA, grain, desktop headline bottom-left cut by the hero edge, header ink flip
10:56:02 | rest | _build/pillar-anatomy.md | format note: mp4 required, webm optional
10:56:28 | rest | _build/ready/rest.ready | ready marker written
10:56:28 | rest | _build/reports/rest.md | lane report (+html twin)
10:56:28 | rest | assets/css/rest.css | skeleton height equals real cell height from 640 px (CLS 0)
10:57:59 | classes | _build/reports/classes.md | lane report written (+ html twin)
10:57:59 | classes | _build/ready/classes.ready | classes ready
10:58:34 | lab-hero | research/lab/hero/ | Lab hero captured in motion on WebKit 390x844 and Chromium 1440x900: filmstrips, stills, hero-measurement.json, capture-notes.md
10:59:14 | nutrition | partials/30-nutrition.html | Elite Nutrition block: head, clip, 5 fact rows (data-fact ids), bowl card/flow mount, CTA
10:59:14 | nutrition | assets/css/nutrition.css | shared pil block verbatim + .nut-* tags, honest card, stepper, option chips, vessel, odometer, action
10:59:14 | nutrition | assets/js/nutrition.js | clip helper, fact rows from menu.json, data-driven bowl step flow (schema in header), ?demo=bowl, WhatsApp text
10:59:14 | nutrition | assets/data/menu.demo.json | placeholder bowl data for ?demo=bowl only (banner DEMO DATA)
10:59:14 | nutrition | copy/slots/nutrition.json | 43 slots (markup + JS strings)
10:59:14 | nutrition | assets/img/nutrition-bowl.webp | club smoothie bowl photo (2024), square crop, 29 KB
10:59:29 | classes | assets/css/classes.css | phone: compact head (24 px top, lead moved under the card) and compact live card (no Then line, bar on the card edge, WhatsApp safe zone) so the whole card fits the first view
10:59:29 | classes | partials/20-classes.html | lead moved out of the head so it can sit under the live card on phones
11:00:25 | hero | assets/css/hero.css | phone hero ends at 60svh incl. header (first-viewport rule): headline min(22vw,11.4svh), tighter gaps, quote fit rules by height, author inline
11:00:25 | hero | partials/10-hero.html | verified quotes in fit order (asyraf, C K on phones; + Tom J., Asmund on desktop)
11:05:35 | hero | assets/css/hero.css | phone headline min(22vw,12.6svh): keeps the edge crop on 375x667; hero 60svh measured 506/400/444 px at 390x844/375x667/360x740
11:07:02 | classes | assets/css/classes.css | phone card trimmed a further 8 px (card margin and name gap) so it also clears 375x667
11:15:15 | nutrition | assets/video/nutrition-clip.webm | clip webm 364 KB + mp4 299 KB, 576x720, 3.7 s loop, silent; poster webp
11:17:07 | pricing | partials/40-pricing.html | card button: ef:checkout {tier,length,duo} once EF.checkoutReady, wa.me link until then; label 'Choose this pass'
11:17:07 | pricing | assets/js/whatsapp.js | FAB steps aside at scroll top only when it would cover .cls__live; 48 px on short phones
11:17:07 | pricing | assets/css/pricing.css | frame x/width for desktop, equal CTA rows, will-change only during a roll
11:20:03 | lab-tokens | research/lab/system/tokens/tokens-raw.json | Lab tokens measured live: palette, type roles by width, shape, buttons and states, spacing, contrast; JSON + MD + HTML
11:20:03 | lab-tokens | research/lab/system/tokens/FONT-LICENCE-FINDING.md | KH Teka + Aeonik Mono = commercial; open match Figtree + Fragment Mono (OFL), prices read, nothing bought
11:20:03 | lab-tokens | _build/ready/lab-tokens.ready | ready marker written
11:22:27 | checkout | partials/52-checkout.html | checkout sheet markup: five steps, aside, footer bar, discard bar, lexicon
11:22:27 | checkout | assets/css/checkout.css | checkout styles: bottom sheet, dialog, two columns, options, fields, odometer
11:22:27 | checkout | assets/js/checkout.js | checkout journey: steps, validation, odometer, focus trap, wa.me handoff, no network or storage
11:22:27 | checkout | assets/data/checkout.json | journey data: club included lists, terms with FACTS ids, whatsapp template, concept methods
11:22:27 | checkout | copy/slots/checkout.json | 86 copy slots
11:23:21 | classes | assets/js/classes.js | fix: countdown minutes under 10 are zero-padded (00:07:39, was 00:7:39)
11:23:55 | classes | _build/reports/classes.md | report v3.1: phone first-view numbers, countdown pad fix
11:25:27 | hero | assets/img/hero-poster-m.webp | posters q80 (phone 12.5 KB, desktop 22.8 KB), loops crf24 (phone 78 KB, desktop 145 KB): less banding in the blur
11:26:14 | hero | research/lab/hero/HERO-STUDY.md | hero study (behaviour spec, own words) + html twin
11:26:14 | hero | MOTION-V3.md | Hero section (H1-H13) + html twin
11:26:14 | hero | research/hero-comparison/HERO-NOTES.md | side-by-side sheets, filmstrips, notes, measurements
11:28:27 | classes | _build/reports/classes.md | report: live-to-next transition check at 11:30 added
11:29:39 | lab-rest | research/lab/system/rest/LAB-REST-MEASUREMENT.md | measurement report written (header, menu, grid, imagery, booking, motion, phone limits, 5 softening options); raw JSON + 138 screens saved
11:30:00 | hero | _build/ready/hero.ready | hero ready (provisional tokens); lane report written
11:32:28 | lab-rest | research/lab/system/rest/LAB-REST-MEASUREMENT.md | final: marquee 30px/s and gallery drift added; ready marker set
11:33:17 | classes | assets/css/classes.css | phone: lead gets the 72 px WhatsApp safe zone on the right so no text runs under the button at first load
11:35:28 | classes | _build/reports/classes.md | report v3.2: lead safe zone, text-vs-button check
11:38:39 | d1 | assets/fonts/ | Hanken Grotesk 3.013 (variable) + Fragment Mono 1.011, Latin woff2, 60 KB, LICENSES.md with OFL text
11:38:39 | d1 | assets/css/tokens.css | values replaced with the measured Lab system: #171717 world, one accent #ff350d (ink #171717), warm text white, AA greys, Hanken + Fragment Mono, measured scale/tracking/weights, radius 0, measured easings; new role tokens added
11:38:39 | d1 | assets/css/base.css | reset completed, AA focus ring (2 px + gap), selection, scrollbar colour, section frame + shared section head
11:38:39 | d1 | _build/requests/d1-hero-font-preload.md | exact preload line for the hero lane; theme-color note for the orchestrator
11:38:39 | d1 | DECISIONS.md | 10 design-system decisions (fonts, warm white, accent ink, AA greys, radius, phone lead/h3, desktop floors, tracking/weight, overlay, surfaces)
11:39:04 | pricing | DECISIONS.md | 2 decisions: ef:checkout hand-off, FAB first-viewport rule
11:39:07 | d1 | _build/ready/tokens.ready | tokens ready (tokens.css, base.css, fonts)
11:42:31 | nutrition | _build/reports/nutrition.md | lane report (+html twin)
11:42:31 | nutrition | assets/css/nutrition.css | phone total left-aligned, .nut prefix on primary buttons (later shared blocks win at equal specificity), sticky clip from 900 px, grid rows fix
11:42:31 | nutrition | _build/ready/nutrition.ready | ready marker written
11:42:47 | hero | assets/js/hero.js | next-class readout: key line with countdown/weekday, value line time + class, no ellipsis (tested HYROX Conditioning, Off-Court Training, Boxercise Beginner at 390/375/360)
11:42:47 | hero | assets/css/hero.css | re-tuned to tokens v3.0 (ink, tracking, leading, control height, shade base)
11:42:47 | hero | partials/h-hero.html | display face preload (Hanken Grotesk)
11:42:47 | hero | copy/slots/hero.json | slots updated for the readout split
11:43:21 | d1 | assets/css/components.css | shared components: btn (5 variants, split, all states), chip/tag, rows (data/3-cell/link + timetable, temp, receipt extensions), card (+price), field/check/switch, tabs + seg, readout, sheet (+nav link), skeleton, divider, tick
11:46:03 | baseline | _tools/measure.mjs | measurement harness: load (transfer, CLS, LCP, TBT), overflow 320-414, fps at 4x per region, interactions at 4x, --compare
11:46:03 | baseline | _tools/MEASURE.md | harness manual (+ html twin): profiles, sections, compare rules, v3 action names
11:46:03 | baseline | _build/baseline-v2.1.json | Direction A (v2.1) baseline: webkit390, chromium390, chromium1440; 3 runs / 3 reps at 4x CPU
11:46:03 | baseline | _build/BASELINE-V2.1.md | baseline report (+ html twin): numbers v3 must meet, selectors used, caveats
11:47:04 | pricing | _build/reports/pricing.md | lane report + html twin; ready markers pricing.ready, buybar-wa.ready
11:47:11 | checkout | _build/reports/checkout-assert.cjs | assertion script: zero network, no storage, focus, tap targets, overflow, Duo total, wa.me text
11:47:11 | checkout | DECISIONS.md | 15 checkout decisions appended
11:49:02 | hero | _build/reports/hero.md | lane report + notes updated with tokens v3.0 numbers
11:52:02 | d1 | component-sheet.html | component sheet: tokens with live AA ratios, type scale in both faces, every component in every state, extensions marked, readability frame
11:54:08 | d1 | DESIGN-SYSTEM-PERFLAB.md | system document v3.0 + html twin: palette, type, font decision + licence route, space/shape, components, motion, imagery, adopted/adapted, extensions, readability, provenance
11:55:51 | classes | assets/img/coach-ain.webp | assets/img/coach-icha.webp
11:56:58 | classes | assets/css/classes.css | v3.3: round instructor avatars (card 64 px, rows 44 px), card as grid with the avatar left, phone head on one line
11:56:58 | classes | assets/js/classes.js | v3.3: instructor portraits on card and rows (lazy on rows), monogram fallback
11:56:58 | classes | partials/20-classes.html | v3.3: avatar slot on the live card
11:58:41 | checkout | copy/slots/checkout.json | duo_calc replaced by duo_each (copy dropped the price); money variables carry the currency
11:59:30 | d1 | component-sheet.html | fixes: long tags wrap (390 overflow gone), type specimens wrap, crop demo centred
11:59:30 | d1 | assets/css/components.css | timetable now-row: band bleeds 12 px with inner padding so the time is not under the bar
12:01:13 | checkout | _build/ready/checkout.ready | ready marker written
12:01:13 | checkout | _build/reports/checkout.md | lane report (+ html twin, 11 screenshots)
12:01:48 | classes | assets/css/classes.css | phone polish: 24 px top, title x0.92, card padding 16; Now/Next tag markers only from 760 (tag fits the 54 px time column)
12:08:09 | d1 | _build/reports/d1.md | lane report (+html twin)
12:08:27 | d1 | _build/ready/design-system.ready | design-system ready
12:10:29 | menu | partials/01-menu.html | menu sheet markup: five numbered links, Buy a pass, WhatsApp, visit block, three social icons, string template, early-tap queue
12:10:29 | menu | assets/css/menu.css | sheet styles: light world panel, drop-from-header choreography, header flip, desktop two columns, landscape, reduced motion
12:10:29 | menu | assets/js/menu.js | open/close on ef:menu, aria + data-open sync, focus trap, inert, scroll lock, link-then-jump, live visit block from data
12:10:29 | menu | assets/data/menu-nav.json | content model: links, primary, whatsapp source, socials (FACTS F-ADR-16)
12:10:29 | menu | copy/slots/menu.json | 24 copy slots (all filled by copy.json); social names are screen-reader text + menu.new_tab
12:10:29 | menu | assets/img/social-instagram.svg | Simple Icons 16.33.0 CC0 glyphs for instagram, facebook, tiktok (inlined too); INPUTS.md row
12:10:29 | menu | _build/menu-sheet/check-menu.mjs | anchors and content check (113 checks), QA runner and filmstrip evidence
12:10:29 | menu | DECISIONS.md | 11 menu sheet decisions appended
12:10:29 | menu | _build/reports/menu-sheet.md | lane report (+ html twin)
12:16:09 | classes | assets/css/classes.css | tablet/desktop rows: time column 11 rem and row name at --fs-h3 so class names stay on one line next to the portrait
12:17:39 | classes | DECISIONS.md | 5 decisions appended: portraits, Tinos pairing, monogram fallback, phone first view, lazy rows
12:17:39 | classes | assets/img/coach-ain.webp | assets/img/coach-icha.webp
12:21:36 | motion | assets/js/motion.js | engine v3.0: reveals (data-reveal/data-stagger), headline arrival on section titles, clip masks + parallax, readout rolls, section rules; ViewTimeline + rAF fallback
12:21:36 | motion | assets/css/motion.css | inserted layers (ghost, covers, rule, odometer) + missing press states (Duo switch, pricing links, nutrition link)
12:22:36 | classes | _build/reports/classes.md | report v3.3: portraits, Tinos flag, first-viewport numbers at 5 sizes
12:41:23 | motion | _tools/measure.mjs | GROUPS: v3 data-sec nutrition/training/rest pooled into the pillars group (were beyond-phase1); allowed by MEASURE.md
13:07:47 | motion | assets/js/motion.js | pause far scroll-linked layers, minute roll on the class countdown, stagger/roll starts in own frames, ?nomotion QA switch, comments trimmed (4.6 KB gzip)
13:07:47 | motion | assets/css/motion.css | odometer transparency only while the overlay exists (:has)
13:07:47 | motion | MOTION-V3.md | Engine, Page moments (M1-M14 + all lanes' moments), Measured v3 vs v2.1 + A/B + risks; html twin
13:07:47 | motion | _build/motion-parity.md | parity audit of 15 v2.1 behaviours (WebKit 390, Chromium 1440, both pages); html twin
13:07:47 | motion | _build/actions-v3.json | v3 interaction list for the harness (names match the baseline)
13:07:47 | motion | research/motion/ | filmstrips + mp4 (WebKit 390, Chromium 1440): section arrivals, readout rolls; parity raw runs
13:07:47 | motion | _build/requests/motion-classes-cls.md | request: classes first-render layout shift (not motion)
13:09:42 | classes | assets/css/classes.css | v3.4 CLS fix: live card lines, tab counts, day heading and (tablet) Then line reserve their final height before data loads
13:13:01 | hero | assets/js/hero.js | anchor jump: state + data-jump first, focus next frame, IO-band highlight; phone response 45.8 -> 26.7 ms at 4x (v2.1 27.8)
13:13:40 | classes | _build/reports/classes.md | report v3.4: CLS 0 evidence
13:13:40 | classes | _build/requests/motion-classes-cls.md | handled: CLS 0 in classes.css (reserved line heights); see report v3.4
13:18:57 | copy-review | copy/copy.json | review edits: 10 strings changed, pillars.title + pillars.lead added (312 keys); pre-edit state in copy/copy.before-review.json
13:18:57 | copy-review | copy/copy-facts.json | pillars.title, pillars.lead -> F-MNU-07 F-FAC-12
13:18:57 | copy-review | _tools/check-copy.mjs | new: coverage, placeholders, slot length, voice guard, internal words (exit 1 on FAIL)
13:18:57 | copy-review | _tools/check-numbers.mjs | new: Playwright text extraction (WebKit 390, Chromium 1440) + number check against the data files (exit 1 on FAIL)
13:18:57 | copy-review | _tools/build-copy-ledger.mjs | new: writes COPY-LEDGER.md from copy, facts, data and the text dumps
13:18:57 | copy-review | _build/requests/copy-review-1.md | 8 requests to other lanes (title/meta, Perform day-pass classes line, offers Elite wording, greetings, pillars slot)
13:23:19 | copy-review | COPY-LEDGER.md | ledger written + html twin (312 copy rows, 203 data rows, 424/424 visible lines reconciled)
13:23:19 | copy-review | _build/reports/copy-review.md | lane report + html twin; ready marker written
13:23:19 | copy-review | DECISIONS.md | 6 copy review decisions appended
13:23:56 | menu | assets/js/menu.js | open response: tap only flips state; focus, header ink, scroll lock, inert after first paint; data and links prepared before first tap; idle warm-up; EXIT read from CSS vars; wheel guard
13:23:56 | menu | assets/css/menu.css | sheet stays laid out (visibility), data-s open|closed + data-leaving, warm state, header bars morph back in 220 ms
13:23:56 | menu | partials/01-menu.html | no hidden attribute on the sheet (laid out while closed)
13:23:56 | menu | _build/menu-sheet/measure-menu-r2.json | harness run: open 30.9 ms vs v2.1 28.9 (was 92), close 26.4, worst frame 16.8
13:23:56 | menu | _build/reports/menu-sheet.md | report updated: section 3b open response
13:26:01 | pricing | assets/data/site.json | includesSkip for perform:day, curly apostrophe
13:26:01 | pricing | assets/data/offers.json | offers in the club's F-OFR wording, greeting comma
13:26:01 | pricing | assets/js/pricing.js | includes skip, currency in {price}/{sum}/{single}/{ten}, greeting comma in fallbacks
13:26:01 | pricing | partials/40-pricing.html | lexicon fallbacks aligned with copy.json (comma greeting, no IDR in placeholders)
13:29:49 | menu | assets/js/menu.js | link jump starts at 50 % of the exit (hash at tap, lock released, scroll starts, focus lands when inert lifts); reduced motion at the tap
13:29:49 | menu | _build/menu-sheet/measure-menu-r3.json | harness: menu-anchor-jump-far response 25.7 ms vs v2.1 28.9 (PASS), open 30.2, close 25.9
13:29:49 | menu | _build/reports/menu-sheet.md | report updated: link jump timing
13:40:57 | rest | partials/32-rest.html | pinned phone temperature box: sticky strip as first child of the section (aria-hidden, skeleton cells)
13:40:57 | rest | assets/css/rest.css | pinned box styles (phones only, sticky under header), current-room accent
13:40:57 | rest | assets/js/rest.js | pinned box rendered from rest.json; nearest-row highlight (IntersectionObserver)
13:40:57 | rest | assets/data/rest.json | room order hot to cold, short labels for the pinned box
13:40:57 | rest | _build/ready/rest-pinned.ready | ready marker written; report and DECISIONS updated
13:46:31 | visit | partials/47-visit.html | created: Visit section markup (place name, address, directions, WhatsApp, hours readout, entrance loop, four practical lines)
13:46:31 | visit | assets/css/visit.css | created: dark lab look, cropped place name, 52 px tiles, hours rows, 4:5 clip
13:46:31 | visit | assets/js/visit.js | created: data binding (site.json, hours.json), live open/closed readout, lazy poster, EF.clips loop
13:46:31 | visit | assets/video/visit-entrance.mp4 | 326 KB boomerang loop from Header-Portrait.mov 1.3-2.7 s; poster visit-entrance-poster.webp 36 KB
13:46:31 | visit | copy/slots/visit.json | created: 29 slots
13:46:48 | coaches | partials/35-coaches.html | Coaches section (anchor #coaches): head, four skeleton rows that reserve the final row height, template of own strings, data-fact ids, data-reveal hooks
13:46:48 | coaches | assets/js/coaches.js | renders one native details per coach from the timetable + coaches.json + coaches-section.json; day row = link that selects the Classes tab (#cls-tab-N) and lets the hero anchor handler jump; ef:coaches:render event; 3.0 KB gz
13:46:48 | coaches | assets/css/coaches.css | hairline rows, round portrait, oversized caps name in the section-title display type, mono count, square plus/minus tile, sunken week panel; 2.0 KB gz; desktop row from 900 px
13:46:48 | coaches | assets/data/coaches-section.json | own switches: portrait files that exist, role lines allowed to show (rey), data-fact ids per coach
13:46:48 | coaches | copy/slots/coaches.json | 7 slots: eyebrow, title, lead, count-many, count-one, go-sr, error (weekday names, Today and the weekend note are read from the classes keys)
13:49:39 | visit | DECISIONS.md | 6 decision lines
13:50:30 | coaches | _build/reports/coaches.md | lane report + html twin; ready marker written
13:51:06 | orchestrator | assets/data/coaches-section.json | roleLines emptied: Rey's 'Weight loss' role line hidden (voice guard)
13:51:41 | classes | assets/img/coach-ain.webp | assets/img/coach-icha.webp
13:51:41 | classes | assets/js/classes.js | portrait width/height attributes 192
13:52:50 | visit | _build/reports/visit.md | report + html twin; ready marker written
13:52:50 | visit | assets/css/visit.css | place name 20 vw (min 20vw,320px on desktop): 104 % of the width, cropped sliver like the hero
13:53:46 | classes | _build/reports/classes.md | report v3.5: portraits at 192 px
14:02:46 | footer | partials/53-footer.html | built the footer: logo, descriptor, 8 section links (pruned at run time), address/hours/WhatsApp from data, 3 profiles, club terms link, Back to top, big place name, template for JS strings
14:02:46 | footer | assets/css/footer.css | footer styles: dark world, hairline rows, mono small caps, 88 px bottom clearance, reserved heights for the data blocks, cqw place name, 2 columns from 760, 4 from 1200
14:02:46 | footer | assets/js/footer.js | footer module: prunes dead anchors, fills address, hours, open state, WhatsApp link from site.json and hours.json, year, 30 s state refresh while near the screen (2.2 KB gz)
14:02:46 | footer | copy/slots/footer.json | 32 copy slots (all provisional texts identical to menu.* where the words exist); copy delta needed
14:02:46 | footer | _build/reports/footer-check.mjs | static check: anchors, symbols, profile URLs vs menu-nav.json and F-ADR-16, terms URL vs FACTS, slots, voice guard, data-fact ids, no hard-coded address/hours/number, no third party
14:04:09 | footer | _build/reports/footer.md | lane report (+ html twin), ready marker written
14:04:09 | footer | _build/requests/footer-copy-delta.md | request: copy delta for 32 footer keys
14:04:09 | footer | DECISIONS.md | 8 footer decisions appended
14:04:09 | footer | assets/css/footer.css | hours reserve from tokens (CLS 0 at 1920), place name 17.2 cqw one line from 760, address block-level (no baseline shift)
14:12:56 | reviews | partials/45-reviews.html | Reviews section #reviews: head, mono rating + count readout (data-count, data-fact F-REV-01/02), five placeholder list items, one Google link (F-REV-03), hidden lexicon; no quote/number/name in the markup
14:12:56 | reviews | assets/js/reviews.js | fills rating, count, link from reviews.json and the five quotes from reviews.verified.json in place; hero rule (5 stars, not unverified) + FACTS list + reviews.json cross-check; 2.1 KB gz
14:12:56 | reviews | assets/css/reviews.css | Lab look: raised readout card, hairline stacked quotes (20 px phone, 22-30 px desktop), pinned readout from 760 px, width-matched placeholders (late data = no layout shift); 2.6 KB gz with comments
14:12:56 | reviews | assets/data/reviews.verified.json | new: five FACTS-eligible quotes verbatim (F-REV-07, -04, -12, -11, -06), generated byte for byte from _build/facts/reviews-verification.json; reviews.json untouched
14:12:56 | reviews | copy/slots/reviews.json | 11 slots (role, max, provisional, note), strings JS composes live in the hidden lexicon
14:12:56 | reviews | _build/requests/reviews-json-trimmed-quotes.md | request: C K and Marianne are cut with an ellipsis in reviews.json (hero shows C K cut); count 488 not re-read
14:13:52 | reviews | _build/reports/reviews.md | lane report + html twin
14:26:51 | hero | partials/10-hero.html | review quotes from reviews.verified.json (5 full verbatim quotes, C K out); 4-line block on phones >= 385x800
14:26:51 | hero | assets/js/hero.js | reviews(): rating/count from reviews.json, quotes checked verbatim against reviews.verified.json, no cut text
14:27:36 | motion | assets/js/motion.js | Phase 2: big words (Visit place, footer wordmark), shared echo, ranges clamp to the page end, one-list wrappers stagger, readouts win the 3-moment cap, late rows re-primed, stars pop, hours roll, coach open choreography, pinned strip readout, buy/visit actions never hidden
14:27:36 | motion | _build/actions-v3.json | coach-open / coach-close interaction added
14:30:48 | copy-review | copy/copy.json | pass 2: visit.clip_cap edited (1 of 80 new strings); pre-edit state copy/copy.before-review-2.json
14:30:49 | copy-review | _tools/check-copy.mjs | pass 2: R and single-arg lex wrappers, classes.day- prefix, reviews lexicon, ternary keys; 392/392 PASS
14:30:49 | copy-review | _tools/check-numbers.mjs | pass 2: coaches rows opened, reviews, visit, footer, pinned strip, 8-link menu, hero rotation; verbatim-quote gate; plus code + per-coach counts allowed
14:30:49 | copy-review | _tools/build-copy-ledger.mjs | pass 2: coaches, reviews, visit, footer, pinned strip rows + matchers; not-shown list updated
14:30:49 | copy-review | DECISIONS.md | 4 copy review 2 decisions appended
14:33:27 | copy-review | _build/reports/copy-review.md | pass 2 section added + html twin; COPY-LEDGER rebuilt (487/487); copy-review2.ready written
14:52:02 | motion | assets/css/motion.css | overflow fix: while the engine runs, main > .sec and the footer clip horizontally; document width = viewport at 320-1440 in WebKit and Chromium, motion on and off
14:52:02 | motion | MOTION-V3.md | Phase 2 moments M15-M26, engine rows (section clip, list wrappers)
14:52:02 | motion | _build/motion-parity.md | Phase 2 parity rows 16-20 + overflow fix note
15:12:16 | pricing | assets/css/pricing.css | reserved heights for .prc-cards and .prc-more (data-reserve), CLS 0
15:12:16 | pricing | assets/js/pricing.js | relaxReserve(): drop the reservation when the section is wholly below the viewport; trust list hidden until filled
15:12:16 | pricing | partials/40-pricing.html | data-reserve on the section, trust list hidden until filled
15:12:16 | pricing | _tools/check-pricing-reserve.mjs | new check: reserved vs final heights at 320 to 1920 px
15:13:02 | menu | partials/01-menu.html | Coaches, Reviews, Visit links added (eight links, page order, index 01-08)
15:13:02 | menu | assets/data/menu-nav.json | eight links in page order
15:13:02 | menu | copy/slots/menu.json | menu.link_coaches, menu.link_reviews, menu.link_visit slots
15:13:02 | menu | assets/css/menu.css | eight-row rhythm: row clamp(44,5.4svh,56), label 8.2vw, desktop label height-aware, step 18 ms
15:13:02 | menu | _build/menu-sheet/check-menu.mjs | page-order check, 133 checks
15:13:02 | menu | _build/menu-sheet/measure-menu-r4.json | harness at load 5: open 32.1 PASS~, close 25.8 PASS, jump 26.0 PASS
15:13:02 | menu | _build/reports/menu-sheet.md | report updated: eight links
15:28:03 | motion | assets/css/motion.css | overflow fix narrowed: only the footer clips (its second wordmark line and echo were the only layers moving in from the right); sections keep no clip so their sticky parts stay on the compositor; width = viewport at 320-1440, WebKit + Chromium
15:28:03 | motion | assets/js/motion.js | off-screen scroll-linked layers pause at 10 % margin; coach count roll 440 ms (UI feedback < 600 ms); echo with two shadow layers
15:40:53 | motion | MOTION-V3.md | Phase 2 measured table (v3 vs v2.1 at 4x, A/B), overflow finding, html twin
15:40:53 | motion | research/motion/ | Phase 2 filmstrips + mp4: coaches, reviews, visit, footer (WebKit 390, Chromium 1440), reviews roll, coach open
15:40:53 | motion | _build/reports/motion.md | Phase 2 section
16:17:50 | orchestrator | HANDOFF-FOR-CODEX.md | handoff for Codex written (+ html twin)
16:19:16 | motion | assets/js/motion.js | frame-rate gap closed: scroll-linked animations exist only within half a screen (created/cancelled by one IO; resting styles = end states), reveal waiting state is a CSS attribute (no held animations), odometer overlays built in idle before their block arrives, footer lines transformable on desktop (inline-block)
16:19:16 | motion | assets/css/motion.css | data-m-pre waiting states; covers rest open
