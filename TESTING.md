# Portfolio test plan

Tested November 5, 2026, against the local working tree using PowerShell source and filesystem checks. Scope: `index.html`, `about.html`, `projects.html`, `contact.html`, and `skills.html`.

Each Pass below applies to the stated source check only. These results do not establish rendered layout, browser interaction, screen-reader behavior, or owner verification of personal content. To repeat, open the repository in PowerShell and follow each case's steps.

| Test ID | What you are testing | Steps to run the test | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Required site pages | Run `Get-ChildItem *.html`; compare the filenames with the five pages listed above. | All five planned HTML pages exist. | Pass — all five exist. |
| T2 | Single primary heading | Open each HTML file and count opening `h1` tags. | Exactly one `h1` per page. | Pass — one per page. |
| T3 | Semantic page structure | Inspect each page for `header`, `nav`, `main`, and `footer` elements. | Every page contains all four landmarks. | Pass — all four are present on every page. |
| T4 | Navigation destinations | Inspect each page's main navigation and compare its links with the five planned pages. | Home, About, Projects, Contact, and Skills link to their relative HTML paths. | Pass — all five destinations appear on every page. |
| T5 | Current-page indicator | In each page's navigation, locate the link with `aria-current="page"` and compare its destination with the filename. | The current page's link has the indicator. | Pass — each page marks its own link. |
| T6 | Local link and asset targets | Extract every `href` and `src` starting with `./` from all HTML files; run `Test-Path -LiteralPath` on each target. | Every referenced local file exists. | Pass — all extracted targets exist. This does not test external URLs or rendered loading. |
| T7 | Shared stylesheet and script | Inspect each page's head for `./css/styles.css` and deferred `./js/main.js`. | All pages load the shared stylesheet and deferred script. | Pass — both references appear on all five pages. |
| T8 | Skip-link markup | Inspect each page for a skip link to `#main` and a main element with `id="main"` and `tabindex="-1"`. | The skip link has a matching focusable target. | Pass — matching markup exists on every page; keyboard activation remains a browser check. |
| T9 | Meaningful image alternatives | Extract all `img` elements from the HTML and inspect their `alt` attributes. | Every current project image has a nonempty description. | Pass — every image element has a nonempty alternative. Visual accuracy of descriptions still needs human review. |
| T10 | Image file size | Run `Get-ChildItem images -Recurse -File`; inspect each file's `Length`. | Every image is below 500,000 bytes. | Pass — largest file is `python-data-2.jpg`, 335,178 bytes. |
| T11 | Mobile viewport declaration | Inspect each page's viewport meta tag. | Each declares `width=device-width, initial-scale=1`. | Pass — all five declare it. This checks configuration, not responsive rendering. |
| T12 | Project entries and source downloads | Count project `article` elements and notebook download links in `projects.html`; confirm the linked files exist. | Three project articles and three local notebook downloads are present. | Pass — three articles and three valid notebook targets. This does not verify notebook execution or project provenance. |
| T13 | Project viewer fallback pages | Count `<figure class="pdf-page">` elements in `projects.html` and check for initial `hidden` attributes. | All 12 page figures are available in source without JavaScript hiding them. | Pass — 12 initially visible figures. Browser fallback usability still needs testing. |
| T14 | Navigation fallback markup | Inspect each page's `main-navigation` element for an initial `hidden` attribute. | Navigation is initially visible in source so JavaScript is not required to expose links. | Pass — no navigation element is initially hidden. |

## Browser acceptance checks still to run

These checks are pending, not Pass or Fail results. No browser audit or Lighthouse run was performed for this documentation task. Chrome DevTools/Lighthouse was not available through the source-check workflow; no score is claimed. The existing `docs/accessibility-review.md` records earlier checks and their limitations separately.

1. Open all five pages in Chrome at 320px, 390px, 820px, and 1440px widths. Confirm readable text, stacked phone cards, visible laptop navigation, and no document-wide horizontal overflow.
2. On every page, use Tab and Shift+Tab to traverse controls in both themes. Confirm visible focus, no traps, and that Enter on the skip link moves focus to main content.
3. At widths up to 760px, activate Menu with Enter and Space. Confirm `aria-expanded` follows visibility; Escape closes the menu and returns focus. Resize across 760px with focus inside navigation and on Menu.
4. Toggle Dark mode with the keyboard. Confirm the navy background changes, off-white inserts stay readable, `aria-pressed` updates, and the choice survives reload and page navigation. Repeat with storage blocked.
5. Expand each project viewer. Test Previous/Next at both ends, zoom in/out from 100% to 300%, Fit width, and the announced page/zoom status. Confirm each viewer changes independently.
6. On a phone, zoom each viewer and swipe inside it. Confirm scrolling remains inside the viewer and controls remain touch-friendly. With keyboard focus in the viewport, test arrow-key scrolling.
7. Disable JavaScript and reload all pages. Follow navigation, expand project details, read all 12 page images, open full-size links, and download all three notebooks.
8. Measure rendered text and essential control/focus contrast in both themes: at least 4.5:1 for normal text and 3:1 for large text and essential indicators.
9. Run Chrome DevTools Lighthouse Accessibility on all five pages in mobile and desktop modes, in both themes. Record page, mode, theme, date, and actual score; target at least 90. Record any blocker instead of inventing a score.

When executing these acceptance checks, add separate test cases with steps, expected behavior, and observed Pass/Fail results. Keep unexecuted checks marked pending.
