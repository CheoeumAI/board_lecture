Material 3 Dialog — modal surface for a decision or short focused task. Composes `Button`. Renders within the nearest positioned ancestor (uses `position:absolute`).

```jsx
<Dialog open={open} icon="delete" headline="삭제하시겠습니까?"
  confirmText="삭제" cancelText="취소"
  onConfirm={del} onCancel={() => setOpen(false)}>
  이 작업은 되돌릴 수 없습니다.
</Dialog>
```

Props: `open`, `icon` (hero, centers headline), `headline`, `children` (body), `confirmText`/`cancelText`, `onConfirm`/`onCancel`/`onClose`.
