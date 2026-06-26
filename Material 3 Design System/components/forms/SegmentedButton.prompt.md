Material 3 Segmented Button — connected toggle group for choosing between 2–5 related options (e.g. view modes).

```jsx
<SegmentedButton
  segments={[{value:'day',label:'일'},{value:'week',label:'주'},{value:'month',label:'월'}]}
  defaultValue="week"
  onChange={setRange}
/>
```

Props: `segments` (`{value,label,icon}`), `value`/`defaultValue`, `multiSelect`, `disabled`, `onChange`.
