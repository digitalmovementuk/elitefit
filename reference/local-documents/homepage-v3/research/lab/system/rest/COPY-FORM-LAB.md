> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# COPY FORM, measured from the Lab's live pages (generic rules only)

Version: v1.0 — 2026-10-02 · lane lab-rest · for the Fable voice lane
Changelog: 2026-10-02 created. Basis: visible text of the home page and eight inner pages (services x4, about, contact, FAQ, blog) read at 390 px (WebKit) and checked against the 1440 px build; computed font sizes, line counts and tracking read from the DOM.

This file carries FORM only: lengths, case, rhythm, punctuation, number style, typesetting. It contains none of the Lab's words and none of its register. Slots are written as [ ]. Verbatim evidence sits in `copy-samples-INTERNAL.md` (never copy, quote or paraphrase it into the site). Counts are measured; "n = ..." says how many items they rest on.

## 0. The one-paragraph summary

Everything is short and typeset hard. Labels are tiny mono capitals; headlines are huge and either capitals-with-few-words or sentence-case statements of 7 to 12 words; body is one to three plain sentences; every action is an imperative of two to five words with an arrow tile; every number is a plain integer, big, with its label above it. The rhythm is: label, statement, two-sentence support, one action. Nothing is explained twice.

## 1. Labels (eyebrows, row labels, captions, tab names, nav)

- Typeset: monospace, UPPERCASE, 12 px (row labels, buttons, nav, footer) or 14 px (section eyebrows) on a phone; line-height 1.2; tracking about -0.02em (slightly tight, not widely spaced); grey on light surfaces, grey-white on dark. The source text is stored in normal case and uppercased by CSS, so the same string works as caps in the UI and as sentence case for screen readers.
- Length: section eyebrows 2 to 6 words, most 3 to 5, never above 40 characters. Row/tag labels 1 to 3 words (n = 82 unique mono strings: 48 are one word, 21 are two or three, only 13 are four or more, and those are eyebrows, the credential line and legal text). Median 7 characters.
- Pattern bank for eyebrows: `OUR + [noun]` · `WHAT IS + [name]` · `WHAT OUR [people] SAY` · `[NAME] + TEAM` · `ABOUT US IN NUMBERS` · `[THE] + [WAY / STEP] TO + [outcome]`. Most content sections open with one (6 of 9 on the home page); hero and the oversized-caps bands do not.
- No full stop, no colon at the end, no question mark except in the fallback line of the FAQ strip. An ampersand replaces "and" inside labels and tags (`A & B`); body text keeps "and".
- Abbreviations are allowed with a full stop (`PROF.`, `FREQ.`) when the line is crowded; this is a typesetting choice, not a style rule for body.
- Three-cell row pattern (card header, process step): `[CATEGORY WORD] [ITEM NAME] ........ [ZERO-PADDED INDEX]`. Category word grey, item name dark, index grey and right-aligned. The category word repeats on every row of a list and never changes inside it.
- Credential or caption line under a person: one line, mono caps, 5 to 10 words, facts only, joined by commas, multipliers as digit + X.
- Copyright and credit lines are mono caps with a full stop only after the year.

## 2. Headlines

Four distinct headline forms; each has its own length rule.

| Form | Case | Words | Lines at 390 px | Size (390 px) | End punctuation |
|---|---|---|---|---|---|
| Hero line | UPPERCASE display | 2 to 6 (home: 4) | home: 3 lines, 1 to 2 words per line | 52 px / line-height 0.8 | none |
| Section statement | Sentence case display | 7 to 12 | 3 to 6 lines | 36 px / 1.0 | none (comma-led series allowed) |
| Oversized caps title (stats, closing wordmark, news band) | UPPERCASE display | 2 to 5 | 2 to 3 lines, one or two words per line, cropped at the edge | 82 to 180 px | none |
| Step or item title | Sentence case display | 2 to 6 | 1 to 2 lines | 36 px | none |

- Home hero and oversized caps break so that each line is a unit (`[VERB] / [ADJ + NOUN] / [NOUN]`), not by width. A long word may be split mid-word to fit the line (`PERFORM / ANCE`), only in the closing brand band.
- Section statements are one sentence, subject-first or verb-first, often a series of three parallel verb phrases separated by commas with a final "and". A pale (grey) second half is used to de-emphasise the tail of a long statement (colour change, not wording).
- Item titles are a short promise in sentence case, a noun phrase or a clipped imperative: `[Noun] before [noun]`, `Built for [you], and around [you]`, `[Outcome], [adverb]`. They never end with a full stop.
- Closing "pair" headlines on service pages join two parallel clauses with no punctuation between them in the DOM and separate them visually as two lines: `EVERY [X] IS DIFFERENT / [YOUR THING] SHOULD BE TOO.`
- Card headline (one per service card): one sentence, 14 to 22 words, 24 px, ends with a full stop; may contain a string of capitalised fragments as emphasis (`Better. Faster. More [adj].`).
- Statement paragraphs set as display type (24 px, tracking -0.04em, weight 500) run 30 to 50 words and 4 to 11 lines on a phone; these are the page's "voice moments". Max one per section.

## 3. Sentences and paragraphs (body)

- Body size is small: 14 px / 1.3 on a phone, tracking -0.01em, weight 400, with a 20 to 24 px lead where a statement is wanted (n = 190 sentences, 103 paragraphs).
- Paragraph: median 28 words (middle half 23 to 35, maximum 50), usually 2 sentences, rarely 3.
- Sentence: median 14 words, mean 15, from 2 to 38. Distribution: 6 % under 5 words, 24 % 5 to 9, 22 % 10 to 14, 20 % 15 to 19, 11 % 20 to 24, 17 % longer (maximum 38).
- Rhythm patterns, in order of frequency:
  1. Short setup + long payoff (`3 to 6 words. 15 to 25 words.`).
  2. Two or three equal clipped fragments for emphasis (`No [x], no [y].` / `[Noun] first, [noun] second, [noun] always.`). 9 `No ...` fragments in 2,900 words.
  3. Negate the lesser option, then state the real one, as two short sentences (`This is not [A]. It is [B].`).
  4. Question-free: only 2 question marks in 18,700 characters of body (the intro lines of the contact and FAQ pages), none in headlines; questions live in the FAQ strip.
  5. Triple parallelism in lists (`[verb phrase], [verb phrase], and [verb phrase]`).
- Em dash with spaces on both sides (` — `) carries the pivot or afterthought: 55 in 103 paragraphs (about one every second paragraph, a pivot at the 60 % point of the sentence). Colons 2, semicolons 1, parentheses 1 (a grey sub-note), exclamation marks 0 in the Lab's own text (one inside a customer quote).
- Address ratio: "you/your" 6.8 per 100 words, "we/our/us" 3.1 per 100 words, so about twice as much "you" as "we". Second person is the grammatical subject of benefit sentences; first person plural of method sentences.
- Apostrophes are typographic curly in most strings; a few straight ones exist (inconsistency to avoid; use curly throughout).
- Numbers inside body: almost none (14 digits in 18,700 characters). The page keeps numbers out of paragraphs and gives them their own oversized slot.

## 4. Buttons and links

- Typeset: mono, UPPERCASE, 12 px, tracking -0.02em, no underline, inside a solid rectangular tile with 32 px left/right padding and a separate square arrow tile attached to the right (8 px gap, tile height 52 px). Text colour light on the solid accent tile; on a light neutral tile the text is dark.
- Wording: imperative verb first in all 14 distinct buttons found (including the cookie and submit buttons); 2 to 5 words (median 3); 6 to 29 characters (median 17.5); no punctuation, no question, no "please", no exclamation, no "now". The object is a noun phrase naming the thing reserved or opened.
- Patterns: `[VERB] + [thing]` (booking), `[VERB] + [named item] + DETAILS` (card, with the item name inserted per card so each button is unique), `[VERB] + [possessive noun]` (aspirational, hero), `[VERB] + [the team/page]` (navigation), `VIEW + ALL/FULL + [noun]` (list overflows), `SHOW MORE + [plural noun]` (pagination), `SIGN UP` (submit, no arrow), `SEND + A + [noun]` (form submit).
- One primary action phrase is repeated verbatim 4 to 6 times on one page (header sheet, mid-page, end of process, footer, after-FAQ), unchanged each time. The hero uses a different, aspirational verb phrase so the first button is about the person's goal while later buttons are about the transaction.
- Secondary buttons (light neutral tile, dark text) sit in dark sections; text-links are sentence-case display type, 20 px, underlined, used only in the footer link groups (nav names, e-mail, phone, socials).
- Arrows are glyph arrows in their own tile (right for go, left/right pair for carousels, down-left for "this number belongs to the label above"). No chevrons, no emoji.
- Links inside body text: underlined, same colour as text, no colour change.

## 5. Numbers

- Stats: a 1 to 3 digit integer set at 180 px, letter-spacing -0.04em, with the label above it (3 to 4 words in 82 px caps, 2 to 3 lines). The label comes first, the number after. Counts that are open-ended carry a `+` set as a separate glyph after a gap (`22 +`); counts that equal a list shown right below are plain (`10` with ten abbreviations listed). A small diagonal arrow (down-left) links label to number.
- No thousands separators needed (none above 999 in the page). Money is compact and attached: `$1M+`, no space between symbol, digit, letter and plus.
- Counters: three-digit zero-padded (`001`..`004`) on service cards and process steps, set in the grey mono label row at the right end; two-digit zero-padded (`01`..`08`) on the numbered "what is included" cards, set in dark display type at the right end of the card title line, same size as the title. No `01 / 05` slash-style counters were found (the carousel uses arrows only).
- Multipliers and ranks: `4X`, `8X`, `#1` — digit first, no space; `3D` for dimensions; roman numerals only in an event edition name (`XXI`).
- Dates: short month + year, no day (`Mon YYYY`), in captions; long form with day for dated articles (`Month D, YYYY`). Time-of-day not shown anywhere.
- Phone: international with country code, plus sign, bracketed area code, hyphen in the local part: `+C (AAA) BBB-CCCC`.
- Years of experience are written `NN+ years` inside a credential line, never spelled out.
- Ranges and units: none observed; units sit in the label, not next to the digit.

## 6. Data readouts and captions

- A readout = label (mono caps, grey) above a value; the value is the largest thing in its block. There is never a sentence around a number.
- A caption on an image/card = title left, date right on one line, sentence-case display 20 px, both on a gradient scrim; no description line.
- A testimonial block = person name set large (36 px display), the quote in 24 px display with curly quotes and a trailing ellipsis if truncated, a mono caps credential line, a `VIEW FULL REVIEW`-type button. Quote length on the phone: about 25 words visible, cut with `…`.
- A list of items under a number (e.g. ten organisation abbreviations, seven programme names) is set stacked, centred, 24 px display, one per line, no bullets, no commas.
- The address block: label in mono caps (`LOCATION`), value in 20 px display, comma-separated single line wrapping to two lines.

## 7. Form and microcopy

- Field placeholder: mono caps, 2 to 3 words, `YOUR + [noun]` (`YOUR [thing] ADDRESS`); the newsletter field has no visible label (the placeholder is the label; only an aria-label carries the name; avoid in v3: keep a persistent label or aria-label).
- Contact form: a visible label above each group in sentence-case display type, 14 px, 3 to 5 words, no colon (`Select a [noun]`, `Your [noun] to us`); placeholders stay mono caps; the multi-line placeholder is a greeting addressed to the team ending with three dots (`HI [TEAM NAME]...`).
- Subject choice is a single-select chip group, not a dropdown: 9 chips, 1 to 4 words each, nouns in mono caps, `&` instead of "and", last chip `OTHER`, the first chip pre-selected (light chip on dark, others dark-grey chips).
- Submit: 2 to 3 words, imperative, no punctuation (`SIGN UP`, `SEND A [NOUN]`).
- Consent line: one sentence of 25 to 30 words in mono caps 12 px under the field, grey, with the policy name as an underlined link, ending with a full stop; it states the agreement and the consent in one breath.
- Success and error messages: not observed (no forms were submitted). Default to the same mono-caps form, one clause, no apology, no exclamation.
- Cookie bar: a mono-caps heading in the brand name pattern `[BRAND] USES COOKIES`, two lines of sentence-case body (19 words), two equal-width buttons `LEARN MORE` (grey) and `ACCEPT` (accent). No reject button exists.
- Promo modal: one two-word title, the middle word in the accent colour, a 10-word promise line in bold, a 25-word support line in grey, one button plus an arrow tile, a square close tile.

## 8. FAQ strip

- Questions: first person (`Do I ...`, `How long does ...`, `What happens ...`), sentence case, 6 to 10 words, always a real question with `?`.
- Answers: 1 to 3 sentences, 15 to 60 words, the first sentence answers directly; the length is the same as a body paragraph.
- Categories as mono caps tab/accordion group names of 1 to 2 words.
- Closing fallback: a 7-word mono-caps question line plus one button.

## 9. Page rhythm (the order the text comes in)

`[eyebrow] -> [statement headline] -> [1 to 2 short paragraphs] -> [action]`, repeated per section, with a stat or a list slot between every second section. Dark sections start with an oversized caps title instead of an eyebrow. The last block of every page is a repeated booking action then the newsletter strip then the footer.

## 10. Carry-over rules for Elite Fit (form only; the voice lane chooses all words)

1. Keep the 4 headline forms and their word counts; write every EF headline to fit 3 to 5 words (caps) or 7 to 12 words (statement).
2. Keep mono caps for labels, readouts and buttons, but with source text in normal case so screen readers get a sentence.
3. Keep imperative, 2 to 5 word, no-punctuation buttons; one repeated primary phrase; unique per-card phrases (`[VERB] + [pass name] + DETAILS`).
4. Keep numbers big, labelled above, no sentences around them; use zero-padded counters for lists.
5. Keep paragraphs to 2 sentences, 28 words on average; one pivot dash per second paragraph at most; no exclamation marks; curly apostrophes throughout.
6. Keep `you` as the subject of benefit sentences, in a place-for-people voice (the voice lane decides register; this file measures only the ratio: about two `you` to one `we`).
7. Dates: `Mon YYYY` in captions. Phone and times: write times as 24-hour `HH:MM` only if the voice guide agrees (the Lab shows no times, so this is not measured).
