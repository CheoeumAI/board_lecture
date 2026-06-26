Material 3 Top App Bar — displays the current screen title, navigation and actions. Composes `IconButton`.

```jsx
<TopAppBar title="받은편지함" navIcon="menu" onNav={openDrawer}
  actions={[{icon:'search',label:'검색'},{icon:'more_vert',label:'더보기'}]} />
<TopAppBar title="설정" variant="large" navIcon="arrow_back" />
```

Props: `title`, `variant` (`center`/`small`/`medium`/`large`), `navIcon`, `onNav`, `actions` (`{icon,label,onClick}`), `scrolled`.
