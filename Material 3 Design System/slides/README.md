# Slide templates — lecture deck

Six reusable 1280×720 (16:9) slide layouts for the Material Design 3 course, all driven by the design-system tokens in `styles.css`. Open any file directly, or duplicate one and replace the copy.

| File | Type | Background role |
|---|---|---|
| `01-title.html` | Title / opener | `primary-container` |
| `02-section.html` | Section / chapter divider | `primary` |
| `03-content.html` | Content with icon points | `surface` |
| `04-comparison.html` | Two-column comparison | `surface` + container cards |
| `05-statement.html` | Big quote / statement | `inverse-surface` |
| `06-closing.html` | Recap / next steps | `tertiary-container` |

## System
- **Type:** Roboto + Noto Sans KR. Titles use the large display sizes; body uses 21–26px for projection legibility.
- **Color rhythm:** alternate tonal-container backgrounds for openers/closers and plain `surface` for content, so a deck reads with clear visual sections.
- **Icons:** Material Symbols (Rounded), filled for emphasis glyphs.
- **Footer:** content slides carry a thin `outline-variant` rule with course label + slide number.

To present as a single deck, drop these `<section>` blocks into a deck shell, or print each to PDF.
