# How to add or change work

Use this guide when adding designs, copy, code or project files to the [EliteFit workspace](README.md).

## Add a file on GitHub

1. Open the [repository](https://github.com/digitalmovementuk/elitefit) and choose the matching folder from the [folder guide](README.md#where-work-belongs).
2. Choose **Add file → Upload files**, or open an existing text file and choose the pencil icon to edit it.
3. Give the file a clear name. Add **draft**, **review** or **approved** to its name, or record the status in the folder’s README. Use **approved** only after approval has been given.
4. Describe the change in a short commit message, such as “Add draft membership page copy”. A commit saves the change in the project’s history.
5. Save the change. You can work directly on `main` or use a feature branch for a separate piece of work.

Keep each commit focused on one small change. For a newer version, keep the previous version available for reference.

## Ask for feedback

Keep feedback for each item in one shared place. Design feedback belongs in `design/feedback/`; record agreed project decisions in `project-management/decisions/`. Link to the exact file or version so everyone reviews the same work.

## Change the project plan

Edit [plan-data.json](project-management/internal-plan/plan-data.json), then regenerate the plan using [_build/build_deck.py](project-management/internal-plan/_build/build_deck.py). The script updates HTML, Markdown and CSV. Use **Print / PDF** in the updated presentation to refresh the PDFs. Save the source and updated outputs together so the timeline, monthly view and task list agree.

## Before saving

Open the changed file and check that it reads correctly and its links work. This is a public repository: never upload passwords, access tokens or customer records.

Saving work to GitHub does not approve publication to the live client website. Get separate approval before publishing there.
