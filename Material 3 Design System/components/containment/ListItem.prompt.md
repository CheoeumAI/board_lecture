Material 3 List Item — one row of a list; height adapts to 1/2/3 lines automatically.

```jsx
<ListItem leadingIcon="folder" headline="문서" supportingText="24개 항목" trailingIcon="chevron_right" interactive />
<ListItem leadingAvatar="/u.jpg" headline="김민준" supportingText="안녕하세요!" trailingText="오후 2:30" />
<ListItem headline="알림" trailing={<Switch defaultChecked />} />
```

Props: `headline`, `supportingText`, `overline`, `leadingIcon`/`leadingAvatar`, `trailingIcon`/`trailingText`/`trailing`, `interactive`.
