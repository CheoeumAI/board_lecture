import React from 'react';

/**
 * Material Design 3 Navigation Bar (bottom nav, 3–5 destinations).
 */
export function NavigationBar({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue !== undefined ? defaultValue : (items[0] && items[0].value));
  const active = value !== undefined ? value : internal;

  const pick = (v) => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };

  return (
    <nav
      style={{
        display: 'flex',
        height: '80px',
        background: 'var(--md-sys-color-surface-container)',
        paddingBlock: '12px 16px',
        ...style,
      }}
      {...rest}
    >
      {items.map((item) => {
        const on = item.value === active;
        return (
          <button
            key={item.value}
            aria-selected={on}
            onClick={() => pick(item.value)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '32px', borderRadius: 'var(--md-sys-shape-corner-full)', background: on ? 'var(--md-sys-color-secondary-container)' : 'transparent', transition: 'background-color var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)' }}>
              <span className="m3-icon" data-filled={on ? 'true' : 'false'} style={{ fontSize: '24px', color: on ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface-variant)' }} aria-hidden="true">{item.icon}</span>
              {item.badge !== undefined && (
                <span style={{ position: 'absolute', top: '2px', left: '54%', minWidth: '16px', height: '16px', paddingInline: '4px', boxSizing: 'border-box', borderRadius: '999px', background: 'var(--md-sys-color-error)', color: 'var(--md-sys-color-on-error)', fontSize: '11px', lineHeight: '16px', fontWeight: 600, fontFamily: 'var(--md-sys-typescale-font-plain)', textAlign: 'center' }}>{item.badge || ''}</span>
              )}
            </span>
            <span className="md-typescale-label-medium" style={{ color: on ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-on-surface-variant)', fontWeight: on ? 700 : 500 }}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
