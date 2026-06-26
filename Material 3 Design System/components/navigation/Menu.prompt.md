Material 3 Menu — temporary surface of choices, anchored to a button by the caller. Composes `Divider`.

```jsx
<Menu open={open} onSelect={handle} items={[
  {value:'edit', label:'수정', icon:'edit'},
  {value:'share', label:'공유', icon:'share', trailing:'⌘S'},
  {divider:true},
  {value:'delete', label:'삭제', icon:'delete'},
]} />
```

Props: `items` (`{value,label,icon,trailing,disabled}` or `{divider:true}`), `open`, `onSelect(value)`. Position it yourself (e.g. absolute) relative to its trigger.
