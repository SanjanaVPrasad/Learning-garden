# Validation and research plan

## Evidence boundary

The source snapshot contains `tests/practice.test.cjs` and `tests/study-time.test.cjs`. Documentation describes their purpose without claiming they were rerun in this documentation update. Earlier release checks are not a substitute for independent user research, an accessibility audit or a security audit. Adoption and learning impact have not been measured here.

Run the included logic checks from the root with Node.js:

```sh
node tests/practice.test.cjs
node tests/study-time.test.cjs
```

## Proposed usability study

Recruit five working learners for a formative study, not a statistically representative result. Use invented notes and tasks. Ask them to:

1. Add a course and find its details.
2. Create a dated task in an appropriate month and sprint.
3. Record and finish a short study session.
4. Save and retrieve a note with a table or code example.
5. Export a backup and explain what it protects.

Record completion without help, time, errors, observed confusion and comments. Choose success criteria before the sessions. Avoid teaching the interface during a task; record any assistance required. After fixing the most repeated problem, repeat the affected task and compare observations. Obtain permission before retaining recordings; publish only anonymised findings.

## Research record template — no findings recorded yet

| Date / participant code | Task | Result / assistance | Observation | Proposed change | Retest result |
| --- | --- | --- | --- | --- | --- |
| To collect | To collect | To collect | To collect | To decide | To collect |

## Release checks to perform

- Backup round-trip and merging with matching IDs; invalid import handling.
- Timer pause/resume, refresh, midnight split and correction.
- Task routing by deadline and start date, plus manual override.
- Keyboard navigation, focus visibility, mobile layout and readable status labels.
- Clear state when storage cannot save.

Store environment, steps, expected outcome, actual outcome and unresolved gaps with each result. Report measured values only after collecting them.
