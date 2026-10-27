> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Visit section report (lane: visit)

Version: v3.0 — 2026-10-02 · owner: visit lane (Sonnet 5.5) · anchor `#visit`, live at http://127.0.0.1:8201/#visit

## What is built
| File | What |
|---|---|
| `partials/47-visit.html` | section markup: eyebrow, oversized place name (the h2), lead, address, plus code, two tiles, hours readout, four practical lines, the entrance clip, a strings template for JS |
| `assets/css/visit.css` | dark lab look; 1.9 KB gz (budget 3) |
| `assets/js/visit.js` | data binding, live open/closed readout, lazy poster, clip playback; 2.95 KB gz (budget 4) |
| `copy/slots/visit.json` | 29 slots with role, max, provisional text and the fact ids each may use |
| `assets/video/visit-entrance.mp4` | 327 KB, 720x900, 2.58 s silent loop |
| `assets/img/visit-entrance-poster.webp` | 36 KB, frame 0 of the loop |

## Content (facts only)
- Place name Pererenan (F-ADR-01/03), oversized and edge-cropped (104 % of the width on phones and at 1440), hidden "Find us in" prefix for screen readers.
- Address "Jalan Sempol No. 26, Pererenan, Bali" (F-ADR-01) and plus code 946Q+89 Pererenan (F-ADR-03). The stale /memberships/ address is nowhere (F-ADR-04).
- Primary tile "Get directions": plain link to the club's own Google Maps URL (F-ADR-05, `rel="noopener noreferrer"`, new tab). No embed, no third-party request: measured 0 external hosts.
- Secondary tile "Book a tour on WhatsApp": number from `site.json` (TO CONFIRM, F-ADR-12), pre-filled with the club's own tour text (F-ADR-14). No number = tile hidden. Switch to a general message button with two slots (`visit.wa`, `visit.wa_text`).
- Hours from `hours.json` per area (Perform 06:00–22:00, Recharge 06:30–22:00, "Every day") plus a live line (Open now until 22:00 / Closed now, opens ...) using `timetable.js` `loadHours` / `openState`, club time WITA, a state dot per area, refreshed every 20 s while on screen. Nothing about hours is typed in markup or copy.
- Four practical lines: first visit (F-ADR-15, F-OFR-03), bring (F-FAC-01/02/03), wear (F-FAC-10), classes (F-CLS-30/31). Each `li` carries `data-fact`.
- Media: club footage `Header-Portrait.mov` 1.3 to 2.7 s, front wall with the EF mark, palm leaves and glass door. Checked by eye on extracted frames: 0 to 1.1 s is the roadside sign with the promo text (not used), 2.8 s on is the reception with tablet screens (not used). Cropped 7 % at the bottom to drop a scooter, played forward then backward (62 frames), loop starts at the 2.1 s frame so the poster equals frame 0. INPUTS.md rows added.

## Gaps (listed, not filled)
Parking, Wi-Fi, cafe hours, holiday hours, pool size (FACTS section 16: not published). A phone number is left out on purpose: the club's phone (+62 857-2022-1101) differs from the WhatsApp number site.json carries (+62 851-9552-0220, F-ADR-08 to F-ADR-12). Email info@elitefitbali.com (F-ADR-13) is verified but not shown. Day-pass-credited line left out (F-PRC-13, scope unclear).

## Checks (WebKit 390x844, 390x664, 320x640; Chromium 390x844, 1440x900; reduced motion)
- Screenshots looked at: phone first screen of the section (place name, lead, address, both 52 px tiles) sits inside 664 px height; desktop two columns; 320 px no overflow.
- Console: no errors or warnings. No horizontal overflow at 320, 390, 1440 (the only wide element is the scaled video during the motion mask, clipped by its figure).
- CLS 0 (Chromium layout-shift entries while scrolling down to the section and through it, 390 and 1440); the poster, tiles, status line and both hour rows have reserved heights.
- Tiles: 52 px high, 358 px wide at 390. Rows 72 px. Clip 4:5.
- Clip plays near the viewport (EF.clips count 1), pauses off screen, stays on the poster under reduced motion (verified: paused, readyState 0).
- JS gz 2.95 KB, CSS gz 1.9 KB, video 327 KB (<= 450), poster 36 KB lazy (set only within 700 px of the screen, so no first-view cost).
- `check-copy.mjs` coverage FAILs for the 29 `visit.*` keys: they have no string in `copy/copy.json` yet (the copy lane writes them); the page shows the provisional text until then. `check-numbers.mjs` not run (needs the review lane's browser extract); numbers in the section: 26, 946Q+89, 10 (minutes), hours from data.

## Open / for others
1. Copy lane: write the 29 `visit.*` strings (slots file has role, max and allowed fact ids).
2. Raoul: WhatsApp number (TO CONFIRM), and whether "Book a tour on WhatsApp" or a general message button is wanted.
3. Pricing/WhatsApp lane: the global WhatsApp disc sits over the right end of the tiles and hour rows while scrolling through this section, where the section has its own WhatsApp tile; `data-wa-clear` only covers the first view.
4. Motion lane: `headline()` skips this h2 (no direct text node, by design, the word is in a span); the clip mask and reveal hooks (`data-reveal`, `data-reveal="mask"`) work as is.
5. The loop is 2.6 s (contract says 3 to 5 s): the club's clean entrance shot is only 1.4 s long.
6. Footage caption "The entrance" is my reading of the shot (front wall with the EF mark next to the glass door); one slot to change (`visit.clip_cap`).

## Change log
- v3.0 — 2026-10-02: created.
