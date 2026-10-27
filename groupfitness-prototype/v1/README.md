# Elite Fit Group Fitness page: design concept v1

| | |
| --- | --- |
| Version | v1.1 |
| Date | 28 Oct 2026 |
| Live page | https://digitalmovementuk.github.io/elitefit-ops/groupfitness-prototype/v1/ |
| Status | Design concept. Not the club's live website. The page carries `noindex, nofollow`. |

## What this is

A design concept of Elite Fit's `/groupfitness` page, with a working demo booking.

- It follows the brand handbook (Version 3, 27 Oct 2026): black pages, warm photos, terracotta only where we want a click.
- You can check the class schedule, pick a class and go through the whole booking on a phone.
- No payment is taken. No data leaves the browser. Nothing is sent to the club or to anyone else.
- Anything made up for the demo is tagged "Sample" on the page and listed below.

## How to view and test

1. Open the live page on a phone. It is built mobile first and also works on desktop.
2. Tap **Book a class**, or pick a day and a class in the schedule.
3. Choose how you join (member, Day Pass, Duo Day Pass, pack or membership), add your details, then go through the demo payment screen to the confirmation.
4. Try a full class (about one in eight shows as full) to see the waitlist.

**Deep link to one class.** Add `?class=<id>` to the address. The id is a class `id` from `assets/data/groupfitness.json`, such as `boxercise-beginner` or `hyrox-conditioning`. The booking sheet opens for the next time that class runs. Example, which opens the next Boxercise Beginner:

https://digitalmovementuk.github.io/elitefit-ops/groupfitness-prototype/v1/?class=boxercise-beginner

You can also name one session: `?class=boxercise-beginner-20261028-0800` (class id, date, start time in Bali time). That works while the session is inside the next 7 days. Otherwise the page opens the next time the class runs. Once the sheet is open, the address goes back to the clean page URL.

**See another time.** Add `?now=2026-10-28T07:30` to see the page at that Bali time.

**Reset the demo.** Bookings, the details you type, and the "First class / Been before" choice are kept in one `localStorage` key, `ef-gf-v1`, in your browser. Nothing else is stored, and nothing is sent.

- Phone, quickest: open the link in a private tab. It always starts clean.
- Desktop: open the browser console on the page, run `localStorage.removeItem('ef-gf-v1')`, then reload. Only this demo is reset. (In Chrome you can also delete the key under Application, Local storage.)
- Phone, without a private tab: clear the website data for `digitalmovementuk.github.io` in the browser settings. Other prototypes on that domain lose their saved state too.

## Changelog

| Version | Date | Change |
| --- | --- | --- |
| v1.1 | 28 Oct 2026 | Final QA fixes. |
| v1 | 27 Oct 2026 | Sculpt clip re-cut from the club's landscape master (1280 x 720, no face cut in 16:9 or 9:16 crops); page crops set per container. |
| v1 | 27 Oct 2026 | Initial concept: group classes page in the Elite Fit handbook style, with the 7-day schedule and a demo booking from class sheet to confirmation. |

## Data sources

### Real data

Taken from the club's own website, elitefitbali.com, unless stated.

| What | Source | Date |
| --- | --- | --- |
| Timetable: 33 classes a week (Mon 7, Tue 6, Wed 4, Thu 4, Fri 7, Sat 3, Sun 2) | `/class-schedule/` | 27 Oct 2026 |
| Class names, coaches, 60 minutes per class | `/class-schedule/` and the class pages `/schedule/<class>/` | 27 Oct and 1 Oct 2026 |
| Descriptions of 6 classes: HYROX Conditioning, Off-Court Training, Boxercise Beginner, Boxercise Advanced, Booty and Core, Body Sculpt | The club's class pages. Reworded in the club's voice, facts unchanged. | 1 Oct 2026 |
| Coaches: Rey, Tinos, Ain, Icha. Rey's role line ("Sports Strength & Conditioning · Weight loss · 1:1 Boxing"). | Timetable and the trainer grid on `/perform/` | 27 Oct 2026 |
| Prices: Day Pass 350K, Duo Day Pass 225K each (450K for two), Perform 4 weeks 2.2M, Elite 4 weeks 2.7M, Recharge day pass 300K | `/promo-duo/` | 27 Oct 2026 |
| Single class 300K and 10-class pass 2M ("class only, no gym floor") | `/membership/` price popup. Not re-checked on 27 Oct: check before showing to the club. | 2 Oct 2026 |
| Duo Day Pass terms, including "Decide to join after? We'll credit your day pass toward your membership." | `/promo-duo/` | 27 Oct 2026 |
| Address (Jalan Sempol No. 26, Pererenan), hours (gym and classes 06:00 to 22:00, Recharge from 06:30), Google rating 4.7 from 488 reviews, email, Instagram | The club's website and Google | Oct 2026 |
| WhatsApp number +62 857-2022-1101 | Contact section on `/membership/`, `/perform/` and `/class-schedule/`. See the open items. | 27 Oct 2026 |
| Class rules (arrive 10 minutes early, cancel in advance, class is called off if nobody has arrived 15 minutes after the start) and how booking works today (members: GymMaster app or front desk; non-members: ClassPass) | The club's terms and Perform FAQ | Oct 2026 |
| Review by Skye D.S., 5 stars | Google review shown on `/promo-duo/` | 27 Oct 2026 |
| Colours, type, voice and website parts | Brand handbook, pages 1 to 32 | Version 3, 27 Oct 2026 |

Notes on the real data:

- Thursday's first class is printed "8:00 am 8:30 am" on the club's page. The concept uses 08:30, as in the 1 Oct timetable.
- Weekend classes run on set dates at the club. The page shows the standing pattern and says so.
- Putu is on the club's trainer grid but teaches none of the timetable classes, so he is not shown.

### Sample data

Everything below is made up for the demo. The page tags these items "Sample".

| Sample item | Where it shows | What is real | Note |
| --- | --- | --- | --- |
| Spots left and capacity (14 per class) | Schedule, Next up, class sheet, spot counter | Nothing. The club publishes no capacity or spots left. | Stable numbers made in the browser from the class and the date. A demo booking lowers the count in your browser only. |
| "Full" classes | Schedule, class sheet | Nothing | About one class in eight shows as full, so the waitlist can be seen. |
| Waitlist | Full classes | Nothing. The club has no waitlist. | Joining only saves a note in your browser. |
| Calendar dates | 7-day date strip | The weekly timetable is real | Dates are made in the browser, today first. They are not real availability. |
| Class levels for HYROX Conditioning, Body Sculpt, Booty, Stretching, Mobility, Injury Prevention & Mobility, and the level lines on the Conditioning, Sculpt and Mobility & Stretch hero panels | Schedule, Next up, class chapters, class sheet, filters | Levels are real for Boxercise Beginner, Boxercise Advanced (from the name), Booty and Core and Off-Court Training (club: open to everyone) | The club publishes no level for the others. |
| Description of Booty | Class sheet, class cards | Coach and length | The club's class page has no text of its own. |
| Description of Stretching | Class sheet, class cards | Coach and length | Same. |
| Description of Mobility | Class sheet, class cards | Coach and length | Same. |
| Description of Injury Prevention & Mobility | Class sheet, class cards | Name and coach | New class on 27 Oct. The club's page was not read. |
| Length of Injury Prevention & Mobility (60 min) | Next up, class chapters, class sheet | Name, coach and start times (Mon 13:00, Wed 10:00, Thu 10:00) | The live timetable prints start times only and the class has no page yet. Every other class page says 1 hour, so 60 min is assumed. |
| The "Sample" chip | Wherever a sample level or length is shown | Not applicable | Rule: every sample level or length carries a "Sample" chip on the page. Sample descriptions, bios, spots and payment methods carry one too. |
| The four class families (Boxing, Conditioning, Sculpt, Mobility & Stretch) and the one-line feel of each | Hero panels, class chapters | The classes inside each family | Our suggestion. The club defines no families. |
| Coach bios (Rey, Tinos, Ain, Icha) | Coach sheets | Names, photos and the classes each coach teaches. Rey's role line is the club's own. | The club publishes no bios. |
| "I'm a member" sign-in | Booking, step "How are you joining?" | Nothing | Mock sign-in. No account is checked. |
| Payment methods: Card, QRIS, Pay at the front desk | Demo payment screen | The club's real tools today are GymMaster (members), ClassPass (non-members) and Moka (shop) | Labelled "Demo, no payment taken". Nothing is charged. |
| Booking confirmation and reference (`EF-DEMO-` plus four digits) | Confirmation screen | Nothing | Made in the browser. The club receives nothing. |
| WhatsApp reminder tick box | Details step | Nothing | No reminder is sent. |
| Details you type (name, phone, email, +1's name) | Details step | Nothing | Stay in this browser's `localStorage`. Never sent. |
| "What to bring": trainers and clothes you can move in | First class section, class sheet | Own water bottle, towel, showers and lockers are the club's | Concept suggestion for the shoes line. |
| Welcome lines: the "First class / Been before" notes and the 3-step first-class plan | Hero, First class section | Class rules and the 10-minute arrival | Written for the concept in the handbook voice. The club has not confirmed them. |
| Class video for Boxing, Conditioning and Mobility & Stretch | Hero panels, class chapters, class sheets | Not the club's classes | Free stock footage, tagged "Stock clip" on the page, see the credits. The club has no class footage for these. |

## Media credits

Every photo and clip in `assets/img/` and `assets/video/`.

### Free stock clips (3)

All three are used under the Pexels License (free to use, no attribution required). They are credited here anyway. Each was cropped to 3:4 portrait, trimmed and looped, 720 x 960, muted. Posters are frames of the clip.

| Files | Used for | Source | Author | Licence | Edit |
| --- | --- | --- | --- | --- | --- |
| `video/boxing.mp4`, `img/boxing-poster.webp` | Boxing | [Pexels video 34801443](https://www.pexels.com/video/intense-boxing-training-session-in-gym-34801443/) | [khezez](https://www.pexels.com/@khezez/) | [Pexels License](https://www.pexels.com/license/) | Two parts joined, slowed to 0.8x, 5 s loop |
| `video/conditioning.mp4`, `img/conditioning-poster.webp` | Conditioning | [Pexels video 6326788](https://www.pexels.com/video/fitness-trainer-in-a-class-6326788/) | [Pavel Danilyuk](https://www.pexels.com/@pavel-danilyuk/) | [Pexels License](https://www.pexels.com/license/) | One section, 6.6 s loop |
| `video/mobility.mp4`, `img/mobility-poster.webp` | Mobility & Stretch | [Pexels video 6326791](https://www.pexels.com/video/people-stretching-on-a-mat-6326791/) | [Pavel Danilyuk](https://www.pexels.com/@pavel-danilyuk/) | [Pexels License](https://www.pexels.com/license/) | One section, 7.6 s loop |

### Elite Fit's own clips (2)

Source and author: **Elite Fit, own footage**. Rights: copyright Elite Fit. Used here only for this design concept, not licensed for reuse.

| Files | Shows |
| --- | --- |
| `video/sculpt.mp4`, `img/sculpt-poster.webp` | Kettlebell deadlifts and core work on mats on the outdoor turf (the club's landscape header film, 4.84–5.60 s and 5.72–6.58 s). Re-cut on 27 Oct 2026 as 1280 x 720: every visible face sits fully in the 16:9 frame and is either fully inside or fully outside a centred 9:16 crop; no coach is in shot (the masters only show him cut at the frame edge). Two parts joined with a crossfade, slowed to 0.35x, 3.7 s loop, 0.74 MB. |
| `video/visit-entrance.mp4`, `img/visit-entrance-poster.webp` | The concrete entrance wall with the Elite Fit logo and palms |

### Elite Fit's own photos (16)

Source and author: **Elite Fit, own footage**. Rights: copyright Elite Fit. Used here only for this design concept, not licensed for reuse.

| Files | Shows |
| --- | --- |
| `img/coach-rey.webp`, `img/coach-tinos.webp`, `img/coach-ain.webp`, `img/coach-icha.webp` | Coach portraits |
| `img/avatar-rey.webp`, `img/avatar-tinos.webp`, `img/avatar-ain.webp`, `img/avatar-icha.webp` | Small face crops of the same portraits |
| `img/zone-classes.webp` | Woman on a mat with a kettlebell in the outdoor turf area |
| `img/train-together.webp` | A man and a woman in training kit talking on the gym floor |
| `img/hero-cafe.webp` | The café: timber counter, bench seating |
| `img/eat-together.webp` | Two friends laughing at lunch |
| `img/community-day.webp` | A group of women around a table |
| `img/rec-ice.webp` | The ice baths |
| `img/rec-jacuzzi.webp` | A woman resting at the jacuzzi edge |
| `img/rec-sauna.webp` | The sauna |

## Fonts and logo

**Fonts.** The page is set in Gilroy, as the handbook asks: ExtraBold for headlines, Bold for buttons, SemiBold for eyebrows, Regular for body text.

- The four WOFF2 files in `assets/fonts/` come from the Gilroy files the club hosts on its own website.
- **They are to be removed from this public repo after Patrick's review (Raoul's decision, 27 Oct 2026).** The Gilroy web licence is not confirmed yet.
- To remove them: delete `assets/fonts/`, delete the four `@font-face` rules in `assets/css/tokens.css`, and delete the two font `preload` lines in `index.html`. The page then falls back to Arial until a licensed web font is added. Deleting the files does not remove them from the git history (see the open items).

**Logo.** The logo files in `assets/logo/` are the club's own.

- `elitefit-logotype-white.svg` (header and footer) and `elitefit-logogram-black.svg` (the white card on the offer) are cut from the club's logo file by splitting its shapes. The black one only changes the fill colour. Nothing was traced or redrawn.
- `favicon.svg` is the logogram on a black tile.
- No PERFORM / RECHARGE lockup file is available yet (handbook page 13). The header shows the logotype with the word PERFORM beside it as a stand-in.

## Open items for the client

| # | Item | Why it matters |
| --- | --- | --- |
| 1 | The full handbook edition. Pages 33 onwards are missing (Imagery p. 33 to 37, Layout p. 38 onwards). Our file has 32 pages. | Photo and layout rules here follow the sample pages (p. 20 to 23), not the written rules. |
| 2 | The PERFORM lockup file (and RECHARGE) from handbook page 13 | The header uses a text stand-in. |
| 3 | The logo and font download links (handbook pages 8 and 25) | The links are not in the PDF. The logo came from the logo file in this repo, and Gilroy from the club's website. |
| 4 | The Gilroy web licence | Needed before the font files can stay in any public place. |
| 5 | Which WhatsApp number to use: +62 857-2022-1101 (membership, Perform and class schedule pages; used on this page) or +62 851-9552-0220 (promo page) | The two pages disagree. |
| 6 | Reski. He is in the handbook (page 21 coach row) but not on the club's timetable or trainer grid. | Not shown on this page until the club confirms. |
| 7 | The MOST POPULAR pill (white on terracotta, 14 px; 12 px in the pack list) has a contrast of 3.7:1. | That is below the 4.5:1 AA asks for text this small (3:1 applies only to large text). Kept as it is because it is the handbook's pattern (page 22). Confirm the club accepts it. |
| 8 | Whether the Tinos portrait shows Tinos or Martijn. The club's trainer grid lists "Martijn Taken" with a photo file named for Tinos. | The page names this coach Tinos. |
| 9 | Deleting Gilroy later. The font files stay in the git history of this public repo unless the history is rewritten. | Removing the files from the folder alone does not stop anyone fetching them from earlier commits. |

Also to confirm with the club:

- Thursday's first class: 08:00 or 08:30.
- The single class (300K) and 10-class (2M) prices, last seen on 2 Oct 2026.
- The sample items above (levels, descriptions, bios, welcome lines), before any of them goes on a live page.

## Tech notes

- Static files only: HTML, CSS, JavaScript, JSON, images and video. No backend, no build step, no accounts. Ready for GitHub Pages (project page, served from the `elitefit-ops` path), so all file paths are relative.
- Libraries: none. The script tags in `index.html` load five of our own files (`api.js`, `motion.js`, `media.js`, `booking.js`, `page.js`), all `defer`, in that order. No CDN, no third-party scripts, styles or fonts (checked 27 Oct 2026). Each script is plain ES5 in one function, so no GSAP or other animation library is used.
- Network: one same-origin `fetch` of `assets/data/groupfitness.json`. Nothing a visitor types is sent anywhere.
- Booking state is kept in `localStorage` under the key `ef-gf-v1`, inside try/catch, with an in-memory fallback when storage is blocked. The `.ics` calendar file is built in the browser.
- Dates and times are Bali time (UTC+8), whatever the device timezone.
- Video: MP4 H.264, muted, looped, `playsinline`, each with a poster image. Clips load only when near the screen. Reduced-motion and Save-Data settings show the posters instead.

### File map

| File | Purpose |
| --- | --- |
| `index.html` | The page: markup, meta tags, links to the CSS and JS |
| `og-gf-v1.jpg` | Share image for link previews, 1200 x 630, rendered from the page's own assets |
| `README.md` | This file |
| `assets/css/tokens.css` | The four brand colours (flat) plus opacity values, type scale, spacing, shape and motion values, Gilroy `@font-face` rules |
| `assets/css/gf.css` | Page layout and components, and the reveal effects at the bottom |
| `assets/css/booking.css` | Booking sheet, steps, forms, demo payment screen, confirmation and coach sheet |
| `assets/js/api.js` | Demo "API": loads the JSON, works out the 7 days in Bali time, makes the sample spots from the class and date, saves bookings in `localStorage`, creates the `EF-DEMO-` reference and the `.ics` file. Also the `?now=` clock override. |
| `assets/js/motion.js` | Enter-view reveals (rise, stagger, mask, deal), pointer tilt on coach photos, the spot counter roll. Native scroll only. Off for reduced motion and Save-Data. |
| `assets/js/media.js` | Lazy, pausable class clips: plays when 25 % visible, at most 2 at once on phones and 4 on desktop, Pause buttons |
| `assets/js/booking.js` | The sheet (bottom sheet on phones, side panel on large screens) and the booking steps: class, how you join, details, pay, confirmation, plus the coach view. Back and browser back walk one step. Opens `?class=` deep links. |
| `assets/js/page.js` | Builds and wires the page: hero panels, First class / Been before toggle, Next up, class chapters, 7-day schedule and filter drawer, coaches, prices, sticky Book bar |
| `assets/data/groupfitness.json` | All class, coach, timetable, price and club data. Sample items carry `"sample": true` or are named in `"sample_fields"`. |
| `assets/fonts/` | Four Gilroy WOFF2 files: Regular, SemiBold, Bold, ExtraBold (to be removed, see above) |
| `assets/img/` | Photos, coach portraits and avatars, and one `-poster.webp` frame for each clip |
| `assets/video/` | Five MP4 clips: boxing, conditioning, sculpt, mobility, visit-entrance |
| `assets/logo/` | `elitefit-logotype-white.svg`, `elitefit-logogram-black.svg`, `favicon.svg` |
