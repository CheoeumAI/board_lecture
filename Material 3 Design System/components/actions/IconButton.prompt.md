Material 3 Icon Button — an icon-only action; can be a stateless trigger or a toggle (`selected`).

```jsx
<IconButton icon="settings" ariaLabel="설정" />
<IconButton variant="tonal" icon="favorite" filledIcon="favorite" selected={liked} onClick={toggle} />
```

Variants: `standard` (default), `filled`, `tonal`, `outlined`. Pass `filledIcon` to swap to a filled glyph when `selected`.
