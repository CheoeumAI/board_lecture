Material 3 Navigation Bar — bottom bar for switching between 3–5 top-level destinations.

```jsx
<NavigationBar
  items={[
    {value:'home',label:'홈',icon:'home'},
    {value:'search',label:'검색',icon:'search'},
    {value:'alerts',label:'알림',icon:'notifications',badge:3},
  ]}
  defaultValue="home"
  onChange={setTab}
/>
```

Props: `items` (`{value,label,icon,badge}`), `value`/`defaultValue`, `onChange`. The active item shows a pill-shaped active indicator behind its icon.
