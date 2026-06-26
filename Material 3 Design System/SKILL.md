---
name: material3-design
description: Use this skill to generate well-branded interfaces and assets in the Material Design 3 (Material You) style, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md (readme.md) file within this skill, and explore the other available files.

This is a recreation of **Material Design 3 (Material You)** built from the open M3 specification (seed color `#6750A4`), with Korean-first demo content (Roboto + Noto Sans KR). Key starting points:

- `styles.css` — link this one file; it `@import`s every token (color roles + tonal palettes, type scale, shape, elevation, motion) and the fonts (incl. Material Symbols Rounded icons).
- `tokens/` — the raw CSS custom properties. Use `--md-sys-color-*`, `.md-typescale-*` classes, `--md-sys-shape-corner-*`, `--md-sys-elevation-*`.
- `components/` — 22 React components (Button, Fab, TextField, Card, Dialog, Tabs, NavigationBar, …). Read each `<Name>.prompt.md` for usage; load `_ds_bundle.js` and read them off `window.Material3DesignSystem_fd173f`.
- `ui_kits/marketing/` — a full landing page composed from the components.
- `slides/` — six 1280×720 lecture slide layouts.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this system.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Conventions to honor: every foreground color has a paired `on-` color; full light + dark themes via `[data-theme="dark"]`; icons come from the Material Symbols font (never hand-drawn SVG or emoji); motion is short and functional (no bounce); depth comes mostly from surface-container tints, not heavy shadows; no gradients or textured backgrounds.
