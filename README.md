# Alexis Casique — Personal portfolio

A responsive portfolio built with plain HTML and CSS for a biomedical engineering student at NJIT, interested in prosthetics development or research. No dependencies or build step are required. Skills, projects, and public contact details remain marked as pending owner content.

## Site structure

- `index.html`: introduction, testing themes, and project spotlight.
- `about.html`: owner-provided background, education, and career interests.
- `projects.html`: future case-study space.
- `contact.html`: space for approved public contact details.
- `skills.html`: space for confirmed technical skills and proficiency levels.
- `css/styles.css`: shared styles and mobile layouts.
- `js/main.js`: responsive menu and light/dark mode controls.

## Local preview

Open `index.html` directly in a browser. Use the navigation to visit the other pages. No server or installation is needed.

## Editing and review

Edit the HTML files directly. Add only verified skills, projects, and approved public contact information. Shared interactions live in `js/main.js`; images belong in `images/`, using relative paths.

## Interactive controls

On screens up to 760px, the Menu button expands or collapses navigation. Escape closes the menu and returns focus to the button. On wider screens, navigation stays visible. Without JavaScript, navigation links remain visible and usable.

The Dark mode button toggles the theme and indicates its state with `aria-pressed`. It starts with the system preference unless a choice was saved in browser storage. If storage is unavailable, the toggle still works on the current page.

For manual checks, try Menu using Enter and Space, tab through expanded links, press Escape, and resize across 760px. Toggle dark mode on each page and reload to check persistence. Disable JavaScript and confirm that all pages remain reachable.

Before publishing, review desktop and mobile layouts, keyboard navigation, links, and personal content. Project guidance is in `AGENTS.md`.

## Content still needed

Provide technical skills with proficiency levels and approved public contact details. At least three real projects are required, with descriptions, images or screenshots, and links when available. These requirements are pending owner content; the current placeholders do not satisfy them.
