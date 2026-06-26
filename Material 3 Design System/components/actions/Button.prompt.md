Material 3 Button — the standard call-to-action; use `filled` for the single highest-emphasis action on a screen, `tonal`/`elevated` for medium emphasis, `outlined`/`text` for low.

```jsx
<Button variant="filled" icon="add" onClick={save}>저장</Button>
<Button variant="outlined">취소</Button>
<Button variant="text">자세히</Button>
```

Variants: `filled` (default), `tonal`, `elevated`, `outlined`, `text`. Props: `icon`, `trailingIcon` (Material Symbols names), `disabled`. Height is fixed at 40px with a fully-rounded (pill) shape.
