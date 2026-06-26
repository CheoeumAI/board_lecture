Material 3 Text Field — single-line input with a floating label.

```jsx
<TextField label="이메일" leadingIcon="mail" supportingText="회사 이메일을 입력하세요" />
<TextField variant="outlined" label="비밀번호" type="password" trailingIcon="visibility" />
<TextField label="이름" error supportingText="필수 항목입니다" />
```

Variants: `filled` (default), `outlined`. Props: `leadingIcon`, `trailingIcon`, `supportingText`, `error`, `disabled`. Controlled via `value`/`onChange` or uncontrolled via `defaultValue`.
