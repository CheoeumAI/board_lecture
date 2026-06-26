Material 3 Progress Indicator — shows the status of an ongoing process.

```jsx
<ProgressIndicator value={64} />               {/* linear, determinate */}
<ProgressIndicator />                          {/* linear, indeterminate */}
<ProgressIndicator variant="circular" value={40} />
<ProgressIndicator variant="circular" />       {/* spinner */}
```

Props: `variant` (`linear`/`circular`), `value` (0–100; omit → indeterminate), `size`, `thickness`.
