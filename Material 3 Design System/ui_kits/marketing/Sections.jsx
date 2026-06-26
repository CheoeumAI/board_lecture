/* Material 3 marketing UI kit — page sections.
   Composes design-system primitives from window.Material3DesignSystem_fd173f.
   Each section is attached to window for the host index.html to use. */
(function () {
  const M3 = window.Material3DesignSystem_fd173f || {};
  const { Button, IconButton, Card, Chip, TopAppBar, ListItem, Divider, TextField } = M3;

  /* ---------- Top navigation ---------- */
  function SiteHeader({ onCta }) {
    const links = ['커리큘럼', '강사 소개', '수강 후기', '요금'];
    return (
      <header style={{
        position: 'sticky', top: 0, zIndex: 10,
        display: 'flex', alignItems: 'center', gap: '24px',
        height: '64px', paddingInline: '32px',
        background: 'color-mix(in srgb, var(--md-sys-color-surface) 86%, transparent)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--md-sys-color-outline-variant)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="m3-icon" data-filled="true" style={{ fontSize: '28px', color: 'var(--md-sys-color-primary)' }}>brush</span>
          <span className="md-typescale-title-large" style={{ fontWeight: 500, color: 'var(--md-sys-color-on-surface)' }}>M3 클래스</span>
        </div>
        <nav style={{ display: 'flex', gap: '4px', marginLeft: '16px' }}>
          {links.map((l) => (
            <a key={l} href="#" style={{
              padding: '8px 12px', borderRadius: '999px', textDecoration: 'none',
              color: 'var(--md-sys-color-on-surface-variant)',
              fontFamily: 'var(--md-sys-typescale-font-plain)',
              fontSize: 'var(--md-sys-typescale-label-large-size)', fontWeight: 500,
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Button variant="text">로그인</Button>
          <Button variant="filled" icon="play_arrow" onClick={onCta}>수강 신청</Button>
        </div>
      </header>
    );
  }

  /* ---------- Hero ---------- */
  function Hero({ onCta }) {
    return (
      <section style={{
        display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center',
        padding: '72px 32px', maxWidth: '1120px', margin: '0 auto',
      }}>
        <div>
          <Chip type="assist" icon="auto_awesome" label="2026 개정판 · Material You" />
          <h1 className="md-typescale-display-medium" style={{ margin: '20px 0 0', color: 'var(--md-sys-color-on-surface)', letterSpacing: '-0.5px' }}>
            머티리얼 디자인 3,<br />처음부터 제대로
          </h1>
          <p className="md-typescale-body-large" style={{ margin: '20px 0 0', color: 'var(--md-sys-color-on-surface-variant)', maxWidth: '46ch' }}>
            토큰·색상 시스템·타이포그래피부터 실전 컴포넌트까지. 구글의 오픈 디자인 시스템을 8주 만에 내 것으로 만드는 온라인 강의입니다.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
            <Button variant="filled" icon="play_arrow" onClick={onCta}>지금 시작하기</Button>
            <Button variant="outlined" icon="event">커리큘럼 보기</Button>
          </div>
          <div style={{ display: 'flex', gap: '28px', marginTop: '40px' }}>
            <Stat value="12,400+" label="수강생" />
            <Stat value="4.9" label="평균 별점" />
            <Stat value="8주" label="완성 과정" />
          </div>
        </div>
        <HeroArt />
      </section>
    );
  }

  function Stat({ value, label }) {
    return (
      <div>
        <div className="md-typescale-headline-small" style={{ color: 'var(--md-sys-color-primary)', fontWeight: 500 }}>{value}</div>
        <div className="md-typescale-body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{label}</div>
      </div>
    );
  }

  function HeroArt() {
    return (
      <div style={{ position: 'relative', height: '380px' }}>
        <Card variant="elevated" style={{ position: 'absolute', top: '20px', left: '0', width: '230px' }}>
          <div style={{ height: '96px', background: 'var(--md-sys-color-primary-container)' }} />
          <div style={{ padding: '16px' }}>
            <div className="md-typescale-title-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>색상 시스템</div>
            <div className="md-typescale-body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)', marginTop: '4px' }}>Tonal palette & roles</div>
          </div>
        </Card>
        <Card variant="elevated" style={{ position: 'absolute', top: '120px', right: '0', width: '230px' }}>
          <div style={{ height: '96px', background: 'var(--md-sys-color-tertiary-container)' }} />
          <div style={{ padding: '16px' }}>
            <div className="md-typescale-title-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>컴포넌트 실습</div>
            <div className="md-typescale-body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)', marginTop: '4px' }}>22개 핵심 컴포넌트</div>
          </div>
        </Card>
        <div style={{ position: 'absolute', bottom: '0', left: '40px', display: 'flex', gap: '8px' }}>
          <Chip type="suggestion" label="Figma" />
          <Chip type="suggestion" label="React" />
          <Chip type="suggestion" label="CSS 토큰" />
        </div>
      </div>
    );
  }

  /* ---------- Features ---------- */
  function Features() {
    const items = [
      { icon: 'palette', title: '다이내믹 컬러', body: '시드 색상에서 톤 팔레트와 시스템 역할을 생성하는 원리를 익힙니다.' },
      { icon: 'text_fields', title: '타입 스케일', body: 'Display부터 Label까지 15단계 타이포그래피를 실무에 맞게 적용합니다.' },
      { icon: 'widgets', title: '컴포넌트 해부', body: '버튼·카드·내비게이션 등 핵심 컴포넌트의 구조와 상태를 분해합니다.' },
      { icon: 'dark_mode', title: '라이트 & 다크', body: '하나의 토큰 세트로 두 테마를 매끄럽게 전환하는 방법을 배웁니다.' },
    ];
    return (
      <section style={{ padding: '64px 32px', background: 'var(--md-sys-color-surface-container-low)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <h2 className="md-typescale-headline-medium" style={{ margin: 0, color: 'var(--md-sys-color-on-surface)', textAlign: 'center' }}>이 강의에서 배우는 것</h2>
          <p className="md-typescale-body-large" style={{ margin: '12px auto 40px', color: 'var(--md-sys-color-on-surface-variant)', textAlign: 'center', maxWidth: '52ch' }}>
            이론과 실습을 균형 있게. 매 주차 실제 화면을 만들며 디자인 시스템을 체득합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {items.map((it) => (
              <Card key={it.title} variant="filled" interactive>
                <div style={{ padding: '24px' }}>
                  <span className="m3-icon" data-filled="true" style={{ fontSize: '32px', color: 'var(--md-sys-color-primary)' }}>{it.icon}</span>
                  <div className="md-typescale-title-large" style={{ marginTop: '16px', color: 'var(--md-sys-color-on-surface)' }}>{it.title}</div>
                  <p className="md-typescale-body-medium" style={{ marginTop: '8px', color: 'var(--md-sys-color-on-surface-variant)' }}>{it.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Curriculum ---------- */
  function Curriculum() {
    const weeks = [
      { n: '01', t: '디자인 토큰 입문', d: '레퍼런스 vs 시스템 토큰, 명명 규칙' },
      { n: '02', t: '다이내믹 컬러', d: '톤 팔레트 생성과 색상 역할 매핑' },
      { n: '03', t: '타이포그래피', d: '타입 스케일과 한글 폰트 페어링' },
      { n: '04', t: 'Shape & Elevation', d: '코너 반경, 그림자, 표면 톤' },
      { n: '05', t: '핵심 컴포넌트', d: '버튼·필드·칩의 상태 설계' },
      { n: '06', t: '내비게이션 패턴', d: '앱 바, 내비게이션 바, 탭' },
    ];
    return (
      <section style={{ padding: '64px 32px', maxWidth: '880px', margin: '0 auto' }}>
        <h2 className="md-typescale-headline-medium" style={{ margin: '0 0 24px', color: 'var(--md-sys-color-on-surface)' }}>커리큘럼</h2>
        <Card variant="outlined">
          {weeks.map((w, i) => (
            <React.Fragment key={w.n}>
              <ListItem
                interactive
                leadingIcon="play_circle"
                overline={`WEEK ${w.n}`}
                headline={w.t}
                supportingText={w.d}
                trailingIcon="chevron_right"
              />
              {i < weeks.length - 1 && <Divider inset />}
            </React.Fragment>
          ))}
        </Card>
      </section>
    );
  }

  /* ---------- Pricing CTA ---------- */
  function PricingCta({ onCta }) {
    return (
      <section style={{ padding: '24px 32px 80px' }}>
        <div style={{
          maxWidth: '1120px', margin: '0 auto', borderRadius: 'var(--md-sys-shape-corner-extra-large)',
          background: 'var(--md-sys-color-primary-container)', padding: '56px 48px',
          display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px', alignItems: 'center',
        }}>
          <div>
            <h2 className="md-typescale-headline-large" style={{ margin: 0, color: 'var(--md-sys-color-on-primary-container)' }}>오늘 시작하면 평생 소장</h2>
            <p className="md-typescale-body-large" style={{ margin: '12px 0 0', color: 'var(--md-sys-color-on-primary-container)', opacity: 0.85 }}>
              8주 과정 + 모든 강의 자료 + 수료증. 30일 환불 보장.
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginTop: '24px' }}>
              <span className="md-typescale-display-small" style={{ color: 'var(--md-sys-color-on-primary-container)', fontWeight: 500 }}>₩149,000</span>
              <span className="md-typescale-title-medium" style={{ color: 'var(--md-sys-color-on-primary-container)', opacity: 0.6, textDecoration: 'line-through' }}>₩249,000</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Button variant="filled" icon="shopping_cart" onClick={onCta}>수강 신청하기</Button>
            <Button variant="text" icon="play_arrow">미리보기 강의</Button>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Footer ---------- */
  function SiteFooter() {
    return (
      <footer style={{ background: 'var(--md-sys-color-surface-container)', padding: '40px 32px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span className="m3-icon" data-filled="true" style={{ fontSize: '24px', color: 'var(--md-sys-color-primary)' }}>brush</span>
          <span className="md-typescale-title-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>M3 클래스</span>
          <span className="md-typescale-body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)', marginLeft: 'auto' }}>© 2026 Material 3 마스터클래스</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <IconButton icon="mail" ariaLabel="이메일" />
            <IconButton icon="public" ariaLabel="웹사이트" />
          </div>
        </div>
      </footer>
    );
  }

  window.MarketingSections = { SiteHeader, Hero, Features, Curriculum, PricingCta, SiteFooter };
})();
