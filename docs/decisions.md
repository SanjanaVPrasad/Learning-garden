# Product decision log

Recorded 25 November 2026 from the implemented source and project requirements. These are design rationales, not evidence of measured user benefit.

| Choice | Reason | Tradeoff / follow-up |
| --- | --- | --- |
| Compact cards with details behind an interaction | Keep the first view short and scannable | Test whether people discover the detail and edit controls |
| Months and sprints | Reduce one long task list to a manageable working period | Test placement, unscheduled tasks and month changes |
| Automatic placement by deadline, then start date | Keep dated tasks with the relevant planning period | Preserve a manual override and explain routing |
| Five coloured task states | Distinguish ready, active, blocked, later and finished work | Keep text labels; colour alone is insufficient |
| Separate resource priority, task status and progress | Express importance, activity and completion separately | Test whether the distinction is understood |
| Browser storage with JSON backup | Avoid a backend dependency for personal use | Manual recovery and no automatic cross-device sync |
| Static beginner question bank | Provide repeatable practice without an API | Limited question coverage and no arbitrary-code grading |
| Timestamp-based study timer | Continue elapsed time across refreshes | It cannot measure attention; users must correct mistakes |

For future decisions, record: date, user problem, alternatives, evidence, decision, consequences and the signal that would make us reconsider. Do not retrofit user-research claims onto a design choice.
