> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Change request v2.1 (Raoul, 2026-10-01), verbatim

Version: v2.1 — 2026-10-01 · source of truth for every lane. Changelog: created from the pasted prompt, no edits.

Hi Michael. Change request for the Elite Fit homepage v2.0 (homepage-v2.0/): five additions, one pass. Mobile first, fully legible on phone and desktop. Result is v2.1.

RULES
- Edit the SOURCES (partials/, assets/css/, assets/js/, build.mjs, index.template.html), then run `node build.mjs`. Never edit index.html or the dist folders by hand. Additive: nothing existing is renamed or removed.
- Before editing, archive the current v2.0 visitor files (sources and the built page, no _qa or _build) to homepage-v2.0/_versions/v2.0/. Never overwrite an archive or a QA folder. Changelog entry v2.1 (what and why). Every document you touch gets its version stamp.
- Nothing is published, pushed or sent. The public preview repo is a separate step that needs Raoul's go. No account is created, no one at the club is contacted.
- Model routing: motion design and the video layer on Opus 5.5 at maximum effort; build lanes on Sonnet 5.5 xhigh; a final visual verdict on stills AND motion recordings from Fable 5.1. Announce each switch in one line. Fan out in parallel with one lane per owner and no shared files: A, B, C-sourcing, C-encoding, C-integration, E-motion, QA.
- Machine care: run browser captures one at a time, close each browser when done, check `uptime` first and wait 30 s if the 1-minute load is above 6.

A. FLOATING WHATSAPP BUTTON (gently but noticeably pulsing)
- One link to the existing number and message (wa.me/6285195520220, "Hello Elite Fit Bali! I have a question"), new tab, rel=noopener, aria-label "Message us on WhatsApp". New partial and CSS file registered in build.mjs and the template. No JavaScript.
- 56 px circle, WhatsApp green with a dark glyph (3:1 or better), bottom-right inside the safe-area insets, below the checkout sheet in z-order.
- Pulse: one soft ring that scales out and fades (about 2.6 s loop with a rest), transform and opacity only. Stop on hover and focus. Respect the page's motion gate (html.motion-ok, reduced-motion, data-saver): otherwise show a static halo. Fade the button in about 2.4 s after load.
- Phones: the sticky buy bar already carries a WhatsApp icon, so hide the floating button while the bar is open and show it when it closes. Never overlap hero buttons, the bar or footer links.

B. REVIEW LINE: real Google badge + one-line rotating real reviews
- One slim line where a first-time visitor sees it without scrolling: directly under the hero buttons on phones and the equivalent spot on desktop. No new section.
- Left, the Google badge from real data: the official Google "G" mark as inline SVG in its original colours (never recoloured or redrawn), 20 px phone / 24 px desktop with clear space; a bold "4.7" set larger than the quote; a star row filled to 4.7 (last star partly filled, never rounded up); the review count; the whole badge links to the club's real Google reviews page (the Maps link in the footer) in a new tab. Accessible name "Rated 4.7 out of 5 on Google, 84 reviews". No wording that implies Google endorses or partners with the club.
- Right, one real review at a time, rotating about every 5 s with a short crossfade or slide (transform and opacity only). Each quote shows its own stars exactly as that review has them, the reviewer's name as published, and the label "Google review". Rotate only 5-star reviews.
- Reviews: real and verbatim, from the club's own Google reviews (the Trustindex widget on elitefitbali.com and/or the Google profile). Pick the 5 to 8 most expressive and convincing ones for a lead, chosen so the FIRST 8–10 WORDS carry the punch, because a phone shows only the start. No editing beyond trimming at the end with an ellipsis; never invent, merge or paraphrase. One row with an ellipsis, so nothing wraps or shifts the layout.
- Verify before showing: check the 4.7 and the count against research/shots/2026-09-30_google_elite-fit-bali_panel.png and the live widget. If they differ, use the verified figures and say so. Save the comparison as QA evidence. No aggregateRating in the JSON-LD. Build the badge yourself, no third-party script or CDN.
- Data in assets/data/reviews.json (author, stars, text, source, url) AND inlined as a JSON script block, so it works from file:// and over http.
- Legibility: desktop 17–18 px, phone 15–16 px minimum, weight 500+, contrast AA (4.5:1), one tap target of 44 px or more per link.
- Behaviour: pause on hover, focus and touch and when the tab is hidden; aria-live="off" with the full set available to screen readers as a list; under reduced motion or data-saver show the first review statically with a small "next" control. The first review is in the HTML: no empty state, no layout shift.

C. REAL CLUB FOOTAGE EVERYWHERE, NOT STILLS
Goal: wherever a decorative photo sits on the page, play a short silent looping clip from the club's own footage instead, matched to the theme of that place. If no matching footage exists, keep the still. The hero already uses the reel and stays as it is.
C1. Sourcing, in this priority, logging every file's origin in MEDIA-SOURCES.md:
 1. https://elitefitbali.com/perform/ : inventory every video on the page (<video> tags, Elementor background or video widgets, direct .mp4/.webm files under wp-content/uploads, any embed). Download the original files of the club's own videos. Do the same for any other club page you reach from its menu if /perform/ has few.
 2. https://www.instagram.com/elitefitbali/ : list the public reels and posts you can reach (URL, caption, date, what they show). Instagram forbids anonymous scraping, so: no login, no account, no workaround, no use of anyone's session. Use the Firecrawl CLI (second provider after Serper, which is out of credits; announce expected credits first, at most 10, the shared balance is about 94; never print the key). If the media files cannot be retrieved publicly, stop there and write INSTAGRAM-REQUESTS.md: the exact reels wanted (URL, what they show, which slot they would fill) so Raoul can ask the club for the original files. Do not contact the club yourself.
 3. The existing reel: proposal/site-preview/assets/video/hero-reel-9x16.mp4 (read-only, 720x1280, 52 s, 30 fps). Cut from this 6.4 MB original, not from the compressed copy.
C2. Slots and CANDIDATE reel windows (sampled every 2 s, so scrub ±1 s by eye for 3–5 clean seconds: no on-screen text, no promo sign, no phone UI, no fade to black). Prefer a clip from sources 1 or 2 when it fits the slot better:
 zone-perform (4:5 card, focal point centre-left on the machines) → machines and dumbbell racks (about 30–33 s)
 zone-recharge (4:5 card, focal point on the water) → pool with loungers and palms (about 38–39 s or 45–47 s)
 zone-classes (3:4 card) → outdoor turf, red hexagon boxes (about 34–36 s)
 rec-sauna → sauna timber with LED strips (about 40–42 s)
 rec-ice and rec-jacuzzi → the plunge-pool room in sand tiles (about 36–38 s; keep the still if the clip does not clearly show that room)
 rec-steam → no footage in the reel; use a clip from sources 1 or 2 if one exists, otherwise keep the still
 visit-entrance → concrete wall, black EF mark, palm (about 2–5 s, avoiding the "Buy 1 day pass get 2" sign at 0 s)
 trainer portraits → a short clip only if a real clip of that person exists in sources 1 or 2; otherwise keep the still
 any other decorative photo you find → same rule
C3. Encoding: H.264 MP4, no audio, faststart, a seamless 3–5 s loop (crossfade or ping-pong where the cut would show), sized to its slot, 300–700 KB per clip, plus a poster from the clip's first frame so nothing jumps when playback starts. Self-host only, never Vimeo (blocked on many Bali networks). A full ffmpeg is available via `pip install imageio-ffmpeg`. Files in assets/video/ named after the slot. The reel is portrait 9:16 and the cards are 4:5 or 3:4: crop to the card's ratio and set object-position per clip, as the stills do.
C4. Markup and behaviour: swap <img> for `<video muted loop playsinline preload="none" poster="...">` inside the same figure, keeping the aspect-ratio box so nothing shifts; keep the existing data-motion hooks (tile reveal, parallax) working on the <video> (check motion.js selectors). Play only while the box is in the viewport (IntersectionObserver), at most 2 clips playing at once on phones. Under reduced motion, data-saver, or when autoplay is blocked (iPhone low-power mode) show the poster with an identical layout. In the recovery sequence only the active panel's clip plays and the tone and number changes still lead the transition.
C5. Budgets: the first view still transfers 900 KB or less; all clips together stay under 6 MB and load lazily; zero layout shift.
C6. Honest limits, recorded in MEDIA-SOURCES.md: the reel is a 720x1280 screen recording with the phone UI cropped out, so wide desktop slots upscale and soften: keep clips inside their card boxes on desktop, not full-bleed. The footage is the club's own, for proposal use only, and the club's original files are needed before launch.

D. SAME PASS
- In the phone screenshot the header menu button shows a thick black ring. If it is a tap-focus ring, show it only for keyboard focus (:focus-visible) and confirm in WebKit that tapping leaves no ring.

E. MOTION DESIGN, MUCH MORE PROMINENT WHERE IT IMPROVES THE UX (owned by Opus 5.5 at maximum effort)
- The page should feel alive and guided: motion is a main design material here, not a garnish. The test for every piece of motion is a UX job: it must orient (where am I, what changed), guide (what next), confirm (it worked), explain (how two things relate), build desire for the club, or make waiting feel shorter. No UX job, no motion. Quiet by default, one clearly moving thing at a time, nothing that delays a primary action: every button works from the first frame.
- Deliver MOTION-UX-AUDIT.md with at least 20 moments across the page: moment, the UX problem it solves, the motion, trigger, duration and easing (from the existing motion tokens, extended where needed), phone version, reduced-motion version, how you will measure it. Then build it. Starting points, extend them as you see fit:
  1. First arrival: a choreographed entrance of header, headline, hero buttons and the review line, ending in a visible invitation to scroll or tap "Today's classes".
  2. Header and navigation: a header that condenses on scroll, a menu sheet that opens and closes with continuity, and an active-section indicator, so the visitor always knows where they are.
  3. Smooth anchor jumps (Buy a pass, Today's classes, section links) with the destination briefly highlighted, offset for the sticky header.
  4. The class schedule: day tabs with a sliding indicator, class rows that stagger in when the day changes, a live "now / next" marker with a quiet pulse, a countdown to the next class, and a clear change of state when a class starts or ends.
  5. The pass shop: price morph when the length changes, a visible selected state that travels between cards, a "from" price that counts to its value, the sticky buy bar sliding in and out with intent, a button press that feels physical, and a checkout sheet with a step progress bar and sliding steps.
  6. The three zones carry their own motion personality, as they do in the room: workout crisp and quick, café warm and medium, spa slow and breathing. Section transitions between zones carry that change, so scrolling down the page feels like walking through the building.
  7. The recovery sequence: temperature scale from ice bath 4–6° through jacuzzi 38–40° and steam 38–40° to sauna 80–100°, with number, tone, clip and words changing together, and a clear sense of progress along the scale.
  8. Facts that earn attention: opening hours, temperatures and prices counting or sliding into place once, when they enter the view.
  9. Cards and tiles: reveal on entering the view, a lift on hover on desktop, a press state on touch, and a focus state that moves visibly for keyboard users.
  10. Trainers and reviews: entrance, hover or tap states, and the review line from section B.
  11. Forms and the checkout concept: inline validation with a calm shake or colour change, clear success and error states, a confirmation that celebrates briefly.
  12. Perceived speed: posters that fade to clips without a jump, skeletons or soft placeholders for anything that loads late, and no empty flashes.
  13. A thin scroll progress cue that also shows the three zones, if it helps orientation without adding clutter.
  14. Desktop only: a restrained cursor response on primary buttons.
- Rules: animate transform and opacity (anything else only if measured at 60 fps); no scroll-jacking and no pinned traps; every animation is interruptible and never blocks input; durations for UI feedback 600 ms or less, atmospheric reveals 900 ms or less, never slower; reduced-motion and data-saver show the same layout and the same information with the motion removed or replaced by instant state changes; no animation library unless its licence is recorded and the file is self-hosted; at most 2 video clips and 3 simultaneous animations active on a phone at any moment.
- Budgets: added JS for A, B and E together under 8 KB gzipped, no new network request beyond the clips and posters, LCP and CLS no worse than v2.0. Measure frame time under 4x CPU throttle on a phone profile and report it; fix anything below 55 fps.
- UX proof, measured on the render: taps and seconds to "today's classes", day-pass checkout and membership checkout are the same or better than v2.0 (stopwatch run, one browser at a time); the motion adds no delay to any primary action.

DEFINITION OF DONE (measure on the render, never claim)
1. WebKit at 375 and 390 and Chromium at 1440: screenshots of the WhatsApp button, the review line in two different states, the buy-bar-open state on phones, the reduced-motion state, and every replaced slot with its clip playing (two different frames per clip), saved in a NEW _qa folder.
2. Motion recordings (short videos and filmstrips) of every moment in MOTION-UX-AUDIT.md on phone and desktop, in the same QA folder.
3. Zero console errors, no horizontal overflow from 320 up, CLS 0, first-view transfer 900 KB or less, total clip weight reported, frame-time results reported.
4. Computed font sizes and contrast ratios for the rating and the quote.
5. A table of slot → source (page, Instagram or reel) → time window → file, MOTION-UX-AUDIT.md, the list of every file touched, the changelog entry, and one line on what is real (reviews, rating, footage) versus unverified. Report in 25 lines or fewer.
