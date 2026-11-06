# Learning Garden 🌱

A tiny upskilling and learning room: a personal hub for courses, roadmaps, Python practice, study sessions and reflections.

Built with plain HTML, CSS and JavaScript. No build step or paid AI API is required.

## Features

- Motivational home page with editable quotes and pastel notes
- Searchable course and resource directory with priorities and flip cards
- Action board with monthly sprints, deadlines and progress
- Journal and Knowledge base supporting Markdown tables and code examples
- Beginner Python practice and five-question tests with review
- Study timer, daily goals, session history and progress charts
- JSON backup export and import

## Run locally

With Python 3 installed, run from the repository root:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. Use a local web server rather than opening index.html directly.

## Run checks

With Node.js installed, run from the repository root:

```sh
node tests/practice.test.cjs
node tests/study-time.test.cjs
```

## Project layout

- `dist/`: complete static website and curated starter resources
- `tests/`: practice and study timer logic checks

## Data and backups

Personal edits, journal entries, tasks, practice results and study sessions are stored in your browser's localStorage. They are not uploaded to GitHub and do not automatically sync between browsers or devices. Export backups regularly and keep them private. Changing the website origin creates a separate browser data store; export and import a backup when moving.

Starter learning plans and resource content are included in the source. Review future study summaries before committing them to this public repository. Python questions check selected answers and expected outputs; the page does not execute arbitrary Python.

## Hosting

Serve `dist/` using a static hosting provider. The existing privately hosted Sites website is separate from this repository. This upload does not change its access or configure automatic deployment or synchronization. GitHub changes require a separate publishing step to reach that website.

No credentials, private hosting configuration, browser backups, embedded tutor API or dependency folders are included.
