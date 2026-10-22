# Accessibility review

Reviewed October 22, 2026.

## Source checks

All five pages have a skip link, one main landmark, one h1, labeled navigation, and shared CSS/JavaScript. The main skip-link target now has tabindex="-1" so it can receive focus without entering the normal Tab order. Menu and theme buttons have accessible names and explicit state attributes. No positive tabindex values are used.

No image files or img elements currently exist. Future images must have an alt attribute and remain under 500,000 bytes; project screenshots are still pending owner input.

## Contrast calculation

Calculated with WCAG relative luminance for the declared CSS palette, including normal and hover button colors. This checks declared color pairs, not a rendered-page audit.

| Theme | Text / background | Ratio |
| --- | --- | --- |
| light | ink / background | 17.06:1 |
| light | ink / surface | 17.85:1 |
| light | ink / tint | 16.03:1 |
| light | body / background | 9.90:1 |
| light | body / surface | 10.35:1 |
| light | body / tint | 9.30:1 |
| light | blue / background | 6.41:1 |
| light | blue / surface | 6.70:1 |
| light | blue / tint | 6.02:1 |
| light | button text / blue | 6.70:1 |
| light | button text / hover | 9.31:1 |
| dark | ink / background | 17.06:1 |
| dark | ink / surface | 15.22:1 |
| dark | ink / tint | 12.73:1 |
| dark | body / background | 12.02:1 |
| dark | body / surface | 10.73:1 |
| dark | body / tint | 8.97:1 |
| dark | blue / background | 9.90:1 |
| dark | blue / surface | 8.83:1 |
| dark | blue / tint | 7.39:1 |
| dark | button text / blue | 9.90:1 |
| dark | button text / hover | 12.56:1 |

All tested pairs exceed 4.5:1. The focus outline uses the link color, which exceeds 3:1 against the tested page surfaces.

## Keyboard and Lighthouse limits

The prior simulated DOM checks passed menu opening/closing, Escape focus return, breakpoint focus changes, theme switching, persistence, and storage failure handling. These do not replace real keyboard testing.

Actual Tab/Shift+Tab traversal, Enter/Space activation, visible focus, responsive layouts, and Lighthouse remain unverified in Chrome. The browser inventory was empty, and an attempt to open Chrome returned "Browser is not available: chrome". No Lighthouse score is claimed.

## Complete the browser audit

1. Open each page in Chrome and use Tab/Shift+Tab to traverse all controls. Verify the first Tab reveals Skip to content; Enter should move focus to main content.
2. At a viewport below 761px, activate Menu with Enter and Space, traverse links, and use Escape to close it and restore focus. Test resizing across 760px while focus is in the menu.
3. Toggle Dark mode with the keyboard and check visible focus and readability in both themes. Confirm navigation remains usable with JavaScript disabled.
4. Serve this folder on localhost using an available static server, open Chrome DevTools, choose Lighthouse (under More tools if needed), select Accessibility and Mobile, then Analyze page load. Repeat for Desktop and both themes on all pages. Aim for at least 90; fix reported issues and rerun. Save actual scores and reports here.
