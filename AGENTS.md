# Portfolio project instructions

## Site and planned pages

Build a personal SDET (Software Development Engineer in Test) portfolio that
introduces the owner, showcases testing and automation projects, and helps
potential employers get in touch.

- `index.html`: Home page with an introduction, key skills, and featured projects.
- `about.html`: Background, learning journey, and testing interests.
- `projects.html`: Project descriptions, tools used, and links to repositories
  or demos when available.
- `contact.html`: Owner-provided contact details and professional profile links.

Use consistent navigation and a footer on every page. Do not invent experience,
credentials, project results, or contact details.

## Design

The owner approved the following design:

- Colors: off-white background (`#F8FAFC`), white cards (`#FFFFFF`), dark navy
  headings and navigation (`#0F172A`), slate body text (`#334155`), and blue
  links and primary buttons (`#1D4ED8`).
- Fonts: use `Arial, Helvetica, sans-serif` for headings and body text, with
  `Consolas, "Courier New", monospace` for code snippets.
- Style: clean, professional, and minimal, with generous spacing, clear headings,
  subtle borders, and lightly rounded project cards.
- Layout: responsive, mobile-first pages with a centered content area and
  readable line lengths. Stack cards on small screens.
- Accessibility: semantic HTML, descriptive image alternatives, visible keyboard
  focus, labeled form fields, and sufficient text contrast.

## Coding rules

- Use plain HTML, CSS, and JavaScript only. No frameworks, component libraries,
  CSS frameworks, package dependencies, or build tools.
- Use relative file paths for local links, images, stylesheets, and scripts,
  such as `./about.html`, `./css/styles.css`, and `./js/main.js`. External
  website links may use full HTTPS URLs.
- Keep shared styles in `css/styles.css`, scripts in `js/main.js`, and images
  in `images/`.
- Keep content usable without JavaScript; add JavaScript only for interactions.
- Keep changes focused on the task and preserve unrelated work.
- Never commit secrets or private information.
- Update `README.md` when the site structure or local preview instructions change.

## Validation

- Check local navigation, asset paths, and any JavaScript interactions.
- Check mobile and desktop layouts, keyboard navigation, and readable contrast.
- Use available checks; do not claim tests or browser checks ran when they did not.

## Git workflow

- After each completed task, review the diff and validate the changes.
- Stage only files relevant to that task.
- Commit after each task with a clear, descriptive message, such as
  `Add responsive navigation to portfolio pages`.
- Push the commit to the repository's configured GitHub remote and current
  branch. Set an upstream when needed; never force-push without explicit approval.
- If committing or pushing is blocked, report the blocker and do not claim success.

## Owner review

This file was drafted with Codex, and the owner explicitly approved it in the
project conversation. Personal review and edits belong to the owner; Codex
cannot perform that step on the owner's behalf.

Update this file whenever the site plan, design, or project rules change so it
continues to reflect the owner's direction.
