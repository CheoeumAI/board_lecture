# Marketing UI Kit — Course Landing Page

A full-bleed marketing landing page for a fictional **"M3 클래스 — Material Design 3 마스터클래스"** online course, built entirely from this design system's component primitives. It demonstrates how the foundations (color roles, type scale, shape, elevation) and components compose into a real product surface.

## Files
- `index.html` — the runnable page. Loads React + Babel + `_ds_bundle.js` + `Sections.jsx`, then renders an interactive `App` with a light/dark theme toggle, an enrollment `Dialog`, and a confirmation `Snackbar`.
- `Sections.jsx` — page sections attached to `window.MarketingSections`: `SiteHeader`, `Hero`, `Features`, `Curriculum`, `PricingCta`, `SiteFooter`.

## Components used
TopAppBar pattern (custom sticky header), `Button`, `IconButton`, `Card`, `Chip`, `ListItem`, `Divider`, `Switch`, `Dialog`, `TextField`, `Snackbar`, Material Symbols icons.

## Interactions
- **Theme toggle** (bottom-right) flips `data-theme` between light and dark — every token re-resolves.
- **수강 신청 / 지금 시작하기** opens the enrollment dialog; confirming shows a success snackbar.

## Notes
This is a cosmetic recreation for the course, not production code. Hero artwork uses tonal color panels as placeholders — drop in real screenshots/illustration for a finished page.
