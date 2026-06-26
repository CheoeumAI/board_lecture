# Material 3 Design System (강의)

A complete recreation of **Material Design 3 (Material You)** — Google's open, publicly-documented design language — packaged as a design system for teaching a course (**구글 디자인 시스템 강의**). It contains the full token foundation (color, type, shape, elevation, motion), 22 reusable React components, a marketing UI kit, and lecture slide templates. Everything is Korean-first in its demo content (Roboto + Noto Sans KR).

> **Source note.** The attached Figma file `제목 없음.fig` was empty (no frames, components, tokens, or images), so nothing could be extracted from it. This system was built from the **Material Design 3 baseline specification** (seed color `#6750A4`). Material Design is openly licensed for exactly this kind of use; this project recreates the generic M3 system and ships generic demo screens — it does **not** reproduce Google-branded product UIs or logos.

---

## Content fundamentals

How copy is written across this system (specimen text, UI kit, slides):

- **Language & address.** Korean-first. The reader/learner is addressed politely with the **-습니다 / -ㅂ니다** declarative and **-요** in lighter UI; instructions use plain imperatives (저장, 취소, 다음). No casual 반말.
- **Tone.** Calm, instructive, confidence-building — it's teaching material. Short declaratives over marketing hype. Example: *"좋은 디자인 시스템은 결정을 줄이고, 일관성을 늘린다."*
- **Casing.** Korean has no case; Latin terms keep their canonical casing — **Material Design 3**, **Filled**, **Tonal**, **primary**, **on-primary**. Token/role names stay lowercase-hyphenated in prose (`surface-container-high`).
- **Numerals.** Arabic numerals with Korean counters (8주, 22개 컴포넌트, 4.9 별점). Currency as ₩149,000.
- **Emoji.** Essentially none in product/teaching copy; at most a single celebratory 🎉 in a success snackbar. Not a decorative device.
- **Iconography over emoji.** Meaning is carried by Material Symbols, never emoji.
- **Vibe.** "Quietly expert." Precise vocabulary (토큰, 역할, 톤 팔레트, 강조), generous whitespace, no exclamation-mark energy.

---

## Visual foundations

- **Color.** Generated from a single seed (`#6750A4`) into reference **tonal palettes** (tones 0–100 for primary/secondary/tertiary/neutral/neutral-variant/error), then mapped to **system color roles** (`--md-sys-color-*`). Every foreground has a paired `on-` color. Surfaces use the M3 **surface-container** tint ladder (lowest → highest) instead of pure elevation overlays. Full **light and dark** themes via `[data-theme="dark"]` / `.dark` and `prefers-color-scheme`.
- **Type.** Roboto (Latin/numeric) + Noto Sans KR (Hangul), one shared stack. The **M3 type scale**: Display / Headline / Title / Body / Label × 3 sizes each (15 roles), exposed as both tokens and `.md-typescale-*` classes. Display/Headline are weight 400 and tightly tracked; Title/Label are weight 500.
- **Shape.** A 7-step corner-radius scale: none(0) · xs(4) · s(8) · m(12) · l(16) · xl(28) · full(9999). Buttons/FABs are pill or large-radius; cards are medium(12); dialogs are extra-large(28).
- **Spacing.** 4dp base grid (`--md-sys-spacing-*`), 0–64.
- **Elevation.** Six levels (0–5) as two-layer shadow recipes (key + ambient). Used sparingly — most depth is conveyed by surface-container tint, not shadow. Cards default to level 1, FABs to level 3, dialogs to level 3.
- **Backgrounds.** Flat tonal surfaces. **No gradients, no photographic hero washes, no textures.** Color blocking (containers) does the work. Decorative oversized icons at ~12% opacity are an accepted accent on title/closing slides.
- **Borders.** 1px `outline` (interactive/strong) and `outline-variant` (dividers, card outlines). Outlined components use `outline`; dividers and outlined cards use the lighter `outline-variant`.
- **Cards.** Three variants: **elevated** (surface-container-low + shadow-1), **filled** (surface-container-highest, no shadow), **outlined** (surface + 1px outline-variant). Corner radius medium(12). No colored left-border accents.
- **Animation.** M3 motion tokens: **standard** & **emphasized** easing families (`cubic-bezier(0.2,0,0,1)` etc.) with a duration ladder (short1 50ms → long4 600ms). Transitions are short (150–200ms) and functional — state-layer fades, switch-knob travel (emphasized), indicator slides. No bounce, no infinite decorative loops.
- **States.** State-layer opacities: hover 8%, focus 12%, pressed 12%, dragged 16%; disabled = 38% content / 12% container. Hover is a subtle brightness/overlay shift, not a color swap.
- **Transparency & blur.** Reserved: scrims at 40% behind dialogs; the marketing header uses a translucent surface + 12px backdrop blur. Otherwise surfaces are opaque.
- **Imagery vibe.** This system ships no stock photography; where images would go, tonal container panels stand in. Imagery, when added, should be neutral and bright to sit on light surfaces.

---

## Iconography

- **System:** **Material Symbols (Rounded)** — Google's official M3 icon set — loaded as a variable icon **font** from Google Fonts in `tokens/fonts.css`. Use a `<span class="m3-icon">icon_name</span>` (or `material-symbols-rounded`); the glyph name is the ligature text.
- **Variable axes:** weight, optical size, grade, and **FILL** (0→1). Selected/active states swap to the filled form via `data-filled="true"` (used by `IconButton`, `Tabs`, `NavigationBar`). Default weight 400, optical size 24.
- **Sizing:** 18px inside buttons/chips, 24px standalone and in lists/app bars, 30–36px for feature/hero accents.
- **Emoji / unicode:** not used as icons (one optional 🎉 in success copy only). Keyboard-shortcut glyphs like ⌘ are fine as text in menus.
- **No hand-drawn SVG.** Always use the Material Symbols font; it's already wired into the global CSS.

---

## Index / manifest

**Root**
- `styles.css` — global entry point; `@import`s the four token files (link this one file).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front-matter for use in Claude Code.

**`tokens/`**
- `fonts.css` — Roboto, Noto Sans KR, Material Symbols `@import`s + `.m3-icon` helper.
- `colors.css` — reference tonal palettes + system color roles (light + dark).
- `typography.css` — type-scale tokens + `.md-typescale-*` classes.
- `shape-elevation-motion.css` — shape, elevation, spacing, state, motion tokens.

**`components/`** (22 components, bundled to `window.Material3DesignSystem_fd173f`)
- `actions/` — `Button`, `IconButton`, `Fab`
- `forms/` — `TextField`, `Switch`, `Checkbox`, `RadioButton`, `Slider`, `SegmentedButton`
- `selection/` — `Chip`
- `containment/` — `Card`, `Dialog`, `ListItem`, `Divider`
- `communication/` — `Badge`, `Snackbar`, `Tooltip`, `ProgressIndicator`
- `navigation/` — `Tabs`, `TopAppBar`, `NavigationBar`, `Menu`
- Each directory has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md` and one `@dsCard` demo HTML.

**`guidelines/foundations/`** — specimen cards for the Design System tab (Colors, Type, Spacing, Brand groups).

**`ui_kits/marketing/`** — interactive course landing page (`index.html` + `Sections.jsx` + `README.md`).

**`slides/`** — six 1280×720 lecture slide templates (`01-title` … `06-closing` + `README.md`).

---

## Using the system

Link the global CSS, load the component bundle, then read components off the namespace:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card } = window.Material3DesignSystem_fd173f;
</script>
```

Switch themes by setting `document.documentElement.dataset.theme = 'dark'`.
