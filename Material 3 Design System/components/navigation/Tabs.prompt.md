Material 3 Tabs — organize content across views at the same level of hierarchy.

```jsx
<Tabs
  tabs={[{value:'home',label:'홈',icon:'home'},{value:'fav',label:'즐겨찾기',icon:'star'}]}
  defaultValue="home"
  onChange={setView}
/>
```

Props: `tabs` (`{value,label,icon}`), `value`/`defaultValue`, `variant` (`primary` full-width / `secondary` text row), `onChange`.
