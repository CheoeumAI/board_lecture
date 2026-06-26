Material 3 Card — groups related content and actions on a single surface.

```jsx
<Card variant="elevated" interactive>
  <img src="/cover.jpg" style={{width:'100%'}} />
  <div style={{padding:16}}>
    <h3 className="md-typescale-title-large">제목</h3>
    <p className="md-typescale-body-medium">설명 텍스트</p>
  </div>
</Card>
```

Variants: `elevated` (default), `filled`, `outlined`. Set `interactive` for hover elevation. Provide your own inner padding.
