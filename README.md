# Alexis Casique — Personal portfolio

A responsive portfolio built with plain HTML and CSS for a biomedical engineering student at NJIT, interested in prosthetics development or research. No dependencies or build step are required. Owner-confirmed skills are listed on the Skills page. Three coursework notebooks are featured on the Projects page. Public contact details remain pending owner content.

## Site structure

- `index.html`: introduction, testing themes, and project spotlight.
- `about.html`: owner-provided background, education, and career interests.
- `projects.html`: three Python coursework entries with PDF page images, zoomable viewers, and notebook downloads.
- `contact.html`: space for approved public contact details.
- `skills.html`: space for confirmed technical skills and proficiency levels.
- `css/styles.css`: shared styles and mobile layouts.
- `js/main.js`: responsive menu and light/dark mode controls.
- `docs/accessibility-review.md`: contrast results, audit limits, and browser checklist.

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

Provide proficiency levels for Python, laboratory work, and circuits, plus approved public contact details. Project entries now document the three owner-supplied coursework notebooks. The source has not been independently executed; setup requirements and limitations are noted on the Projects page.

## Project assets

PDF page images live in images/projects/. Each project includes a responsive viewer with page navigation, 100%-300% zoom, and Fit width. Touch users can swipe the zoomed page; keyboard users can focus its scroll region and use arrow keys. Without JavaScript, all pages remain visible in the expanded viewer, and full-size image links remain available. Images are under 500 KB each. Browser print headers and footers are cropped from the PDF renders. Downloadable source notebooks live in notebooks/. Saved outputs and metadata are removed from the public copies; the original files are unchanged. API keys must be supplied through Colab secrets. No keys are included.

## Color theme

The site uses a Persian navy background (#17245C) with off-white (#F8F6EF) cards, highlighted text boxes, and buttons. Dark mode deepens the background to #0B1538. Off-white inserts use navy text and links for contrast.
