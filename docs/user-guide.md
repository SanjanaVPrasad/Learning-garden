# Learning Garden user guide

Scope: public source snapshot `0349190f60d348906fcdf08b9f8261c9f49040a8`, reviewed 25 November 2026. For hosted release 24 and its Calendar instructions, see the [full product guide](Learning_Garden_Product_Guide.pdf). Calendar and its backup fields are not available in this repository snapshot.

## Start locally

Run from the repository root with Python 3:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. Personal records belong to this browser and website origin. A local copy does not automatically load records from the private hosted site.

## A first study session

1. Open Courses or Roadmaps and choose one learning goal.
2. Open My Action Board, choose a month and sprint, and use **New task** to make a small commitment.
3. Enter a start date and deadline. Automatic placement routes by deadline first, then start date. Disable it to choose a sprint manually.
4. Open Study time, label your session and start the timer. Pause during breaks, resume when ready, then choose **Finish & save**.
5. Save a takeaway in Journal or a reusable explanation in Knowledge base.
6. Use **Export backup** and keep the JSON file private.

These are manually navigated steps; selecting a resource does not start a study session automatically.

## Courses, roadmaps and priorities

Use Add resource to capture a course, roadmap or note. Add a title, topic, description and optional external link. Read or flip a card for its details; use Edit to change its fields. Priority describes importance, status describes the current state, and progress describes completion. External course activity is not automatically imported.

Roadmaps hold checklists. **Add roadmap steps** on the board creates linked tasks. Completing a linked task updates its checklist step; revisit the resource to check the result.

## My Action Board

Select a month and sprint to keep the working list small. Create a month or sprint when needed. Tasks can hold progress, a resource link, dates, notes and a blocker.

| Status | Meaning | Colour |
| --- | --- | --- |
| Backlog / Later | Captured for another time | Lilac |
| To do | Ready to begin | Butter yellow |
| In progress | Actively being worked on | Light blue |
| Blocked | Unable to proceed; record the reason | Soft pink |
| Done | Meets your completion criteria | Light green |

Use Edit or a card's status control to update it. Use the Archived filter and recovery controls for archived tasks. Overdue indicators appear when the board is opened; they are not push notifications.

## Study timer and charts

The timer uses timestamps and can continue across refreshes, tabs and time away until paused or finished. It does not detect whether you are actually studying. Edit a session to correct forgotten running time; add missed time when you did not use the timer. Review daily totals and the 7-day or 30-day charts. Daily totals split at midnight in India time. A usual study time and daily goal record a plan, not a scheduled reminder.

## Practise / Test

Choose a topic and answer a practice question for feedback, hints and a solution. A test contains five questions and shows its score and answer review after submission. An unfinished test can be continued. The built-in bank has 36 beginner questions across six topics; it checks answers and predicted output, not arbitrary Python execution. Scores are practice feedback, not a proficiency certificate. Use the external CodingBat and Exercism links for additional exercises.

## Journal and Knowledge base

Use Journal for dated thoughts, achievements and learning entries. Use Knowledge base for explanations you expect to look up again. Select a card colour when editing a note. Editors contain plain Markdown: tables and code render in Preview or the reading view. Preserve line breaks and Python indentation. Seeing raw table characters while editing is expected.

## Back up and recover

Use Export backup after important edits and before changing browsers, devices or website addresses. On the destination, export existing records first, then use Import backup and review the merge confirmation. Matching IDs can update existing records. A running timer is exported as a paused snapshot. Clearing browser data without a backup may remove your records permanently. GitHub contains the application and starter content, not a backup of your browser records.

## Troubleshooting

| Problem | Check |
| --- | --- |
| Missing records | Browser, browser profile and website origin; each can hold separate records |
| Task in another sprint | Deadline and automatic placement setting |
| Study total too high | A timer left running; correct the session |
| Table appears unformatted | Open Preview or the entry's reading view |
| Storage unavailable | Export a backup before leaving; do not assume edits persisted |
| Calendar missing | This checkout predates the Calendar source; see the version boundary above |
