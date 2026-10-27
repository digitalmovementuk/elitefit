# EliteFit operations workspace

Project implementation only: website, copy, SEO and technical integration.

## Start here

- [Internal project plan](project-management/internal-plan/index.html) — schedule, responsibilities and tasks.
- [Design prototypes](design/prototypes/README.md) — links to the available design demos.
- [Brand guidelines](brand/guidelines/EF%20Brand%20Guidelines%20V2%202026.pdf) — use the version on the cover: **Version 3, 27 October 2026**. The original filename still says V2.
- [How to add or change work](CONTRIBUTING.md) — a short guide for the team.

The production website build has not started. The prototypes are design demos and do not take real payments.

## Project timing

| Work | Timing | Starting point |
| --- | --- | --- |
| Website | Months 1–4 | Design, copy and website delivery |
| Full technical integration | Months 5–7 | Integration requirements and implementation |
| SEO | Months 5–12 | Starts after website approval |

Use the internal project plan for the detailed tasks and dependencies.

## Who does what

| Person | Responsibility |
| --- | --- |
| Raoul | Product owner |
| Betzy | Project manager and daily client contact |
| Mohammed | Frontend design and web development |
| Ryan | Copywriting and SEO management |
| Technical lead — to be assigned | Internal technical leadership |
| Patrick | General manager |
| Putu and Richard | Owners |

## Where work belongs

| Folder | What goes here |
| --- | --- |
| `brand/` | `guidelines/`, `logos/` and `fonts/` |
| `project-management/` | `internal-plan/` and recorded `decisions/` |
| `design/` | Editable `source-files/`, collected `feedback/` and `prototypes/` |
| `website/` | `wordpress/`, `frontend/` and `testing/` |
| `copy/` | Working `core-pages/` and final `approved/` copy |
| `seo/` | `research/`, `page-plan/`, `pages/` and `reporting/` |
| `technical-integration/` | `requirements/`, `system-notes/`, `development/` and `testing/` |
| `presentations/project-updates/` | Implementation updates without agency pricing |
| `assets/` | Shared `photography/` and `screenshots/` |
| `homepage-prototype/v1/` and `v2/` | Earlier homepage demos, kept for reference |

Use `design/prototypes/current/` for the latest design when it is ready to share. Preserve older versions so the team can look back at previous decisions.

## Keep the plan in sync

The plan’s source file is [plan-data.json](project-management/internal-plan/plan-data.json). Update this file first, then regenerate the plan with [_build/build_deck.py](project-management/internal-plan/_build/build_deck.py).

The build script updates HTML, Markdown and `tasks.csv`. After a plan change, open the updated HTML and use **Print / PDF** to refresh the PDF copies as well. The Gantt, monthly slides and task list all use the same source.

## Working together

Put each file in its matching folder. Mark its status as **draft**, **review** or **approved** in the filename or nearby README. Collect feedback in one place, and record decisions in `project-management/decisions/`.

Team members with write access can add, edit and upload files through [GitHub](https://github.com/digitalmovementuk/elitefit-ops). Follow the [contribution guide](CONTRIBUTING.md) for the simple steps.

This repository is public. Keep passwords, access tokens and customer records out of it. Publishing changes to the live client website needs separate approval.

## Operations only

Do not upload agency prices, fees, margins, commercial proposals, quotes or owner decks containing prices here. Keep those files in the separate private Sales workspace. A folder inside this repository cannot restrict access. EliteFit’s customer-facing pass and membership prices may appear when needed for website implementation.
