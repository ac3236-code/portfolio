# Portfolio project instructions

## Site and planned pages

Build a personal portfolio for Alexis Casique, a biomedical engineering student
who transferred from RVCC to NJIT and is pursuing a bachelor's degree. Alexis
is interested in a career in prosthetics development or research. Introduce the
owner, showcase verified projects, and help potential employers get in touch.

- `index.html`: Home page with an introduction, key skills, and featured projects.
- `about.html`: Background, education, and interest in prosthetics.
- `projects.html`: Project descriptions, tools used, and links to repositories
  or demos when available.
- `contact.html`: Owner-provided contact details and professional profile links.
- `skills.html`: Owner-confirmed technical skills and proficiency levels.

The Projects page must showcase at least three owner-provided projects, each
with a description, image or screenshot, and repository or demo links when
available. About must include education. Do not present placeholder content as
completed projects or verified personal information.

Project PDF exports are displayed as responsive page images with page navigation, zoom in/out, and a fit-width control for tablet and desktop readers. Keep full-size image links and a usable no-JavaScript fallback.

Use consistent navigation and a footer on every page. Do not invent experience,
credentials, project results, or contact details.

## Design

The owner approved the following design:

- Colors: Persian navy blue background (`#17245C`), off-white cards, highlighted text boxes, and buttons (`#F8F6EF`). Use off-white headings, light body text, and pale blue links on navy; use navy headings and links with slate-navy body text inside off-white inserts.
- Fonts: use `Arial, Helvetica, sans-serif` for headings and body text, with `Consolas, "Courier New", monospace` for code snippets.
- Offer a deeper navy dark theme (`#0B1538`) while retaining off-white inserts and buttons. Keep theme controls and keyboard focus visible in both themes.
- Style: clean, professional, and minimal, with generous spacing, clear headings,
  subtle borders, and lightly rounded project cards.
- Layout: responsive, mobile-first pages with a centered content area and
  readable line lengths. Stack cards on small screens.
- Accessibility: semantic HTML, descriptive image alternatives, visible keyboard
  focus, labeled form fields, and sufficient text contrast.

## Coding rules

- Use semantic HTML5 elements, including `header`, `nav`, `main`, `section`,
  and `footer`, to organize content logically. Use `article` for self-contained
  content and `aside` for supporting content when appropriate.
- Use exactly one `h1` per page. Organize section headings in a logical
  hierarchy using `h2` and `h3` as needed.
- Use plain HTML, CSS, and JavaScript only. No frameworks, component libraries,
  CSS frameworks, package dependencies, or build tools.
- Use relative file paths for local links, images, stylesheets, and scripts,
  such as `./about.html`, `./css/styles.css`, and `./js/main.js`. External
  website links may use full HTTPS URLs.
- Keep shared styles in `css/styles.css`, scripts in `js/main.js`, and images
  in `images/`.
- Keep content usable without JavaScript; add JavaScript only for interactions.
- Use an accessible mobile menu with an expanded state and Escape handling;
  keep navigation visible without JavaScript and on laptop screens.
- Keep changes focused on the task and preserve unrelated work.
- Never commit secrets or private information.
- Update `README.md` when the site structure or local preview instructions change.

## Validation

- Check local navigation, asset paths, and any JavaScript interactions.
- Check mobile and desktop layouts, keyboard navigation, and readable contrast.
- Give every image an `alt` attribute: describe meaningful content and use
  `alt=""` only for decorative images. Keep every image file under 500 KB.
- Meet WCAG AA contrast: at least 4.5:1 for normal text and 3:1 for large text
  and essential control indicators. Check both light and dark themes.
- Test Tab, Shift+Tab, Enter, Space, Escape, skip links, and visible focus.
- Run Lighthouse in Chrome DevTools, aiming for Accessibility 90 or higher.
  Record the actual score and tested page; if unavailable, report the blocker.
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
