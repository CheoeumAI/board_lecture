Material 3 Chip — compact, interactive element. Four types: `assist` (action), `filter` (toggle), `input` (entity, removable), `suggestion`.

```jsx
<Chip type="assist" icon="event" label="일정 추가" />
<Chip type="filter" label="무료배송" selected onClick={toggle} />
<Chip type="input" avatar="/u.jpg" label="김민준" removable onRemove={remove} />
```

Props: `type`, `label`, `icon`, `avatar`, `selected`, `elevated`, `removable`, `disabled`.
