Material 3 Switch — toggles a single item on or off, taking effect immediately.

```jsx
<Switch defaultChecked icon onChange={(on) => setWifi(on)} ariaLabel="Wi-Fi" />
```

Props: `checked`/`defaultChecked`, `icon` (check/close glyph in the knob), `disabled`, `onChange(checked)`. The knob grows from 16→24px when on.
