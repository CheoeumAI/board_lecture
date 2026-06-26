Material 3 Snackbar — short, transient message about a process, with one optional action.

```jsx
<Snackbar message="사진을 삭제했습니다" actionLabel="실행취소" onAction={undo} />
<Snackbar message="네트워크에 연결할 수 없습니다" closable onClose={dismiss} />
```

Props: `message`, `actionLabel`/`onAction`, `closable`/`onClose`.
