import React from 'react';

/**
 * Material Design 3 Tabs (primary or secondary).
 * Controlled or uncontrolled; optional icon per tab.
 */
export function Tabs({
  tabs = [],
  value,
  defaultValue,
  variant = 'primary',
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue !== undefined ? defaultValue : (tabs[0] && tabs[0].value));
  const active = value !== undefined ? value : internal;

  const pick = (v) => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };

  return (
    <div
      role="tablist"
      style={{
        display: 'flex',
        borderBottom: '1px solid var(--md-sys-color-surface-variant)',
        background: 'var(--md-sys-color-surface)',
        ...style,
      }}
      {...rest}
    >
      {tabs.map((tab) => {
        const on = tab.value === active;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={on}
            onClick={() => pick(tab.value)}
            style={{
              flex: variant === 'primary' ? 1 : '0 0 auto',
              display: 'inline-flex',
              flexDirection: tab.icon && variant === 'primary' ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              minHeight: '48px',
              paddingInline: variant === 'secondary' ? '16px' : '16px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              position: 'relative',
              color: on ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)',
              fontFamily: 'var(--md-sys-typescale-font-plain)',
              fontSize: 'var(--md-sys-typescale-title-small-size)',
              fontWeight: 'var(--md-sys-typescale-weight-medium)',
              letterSpacing: 'var(--md-sys-typescale-title-small-tracking)',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {tab.icon && <span className="m3-icon" data-filled={on ? 'true' : 'false'} style={{ fontSize: '24px' }} aria-hidden="true">{tab.icon}</span>}
            <span>{tab.label}</span>
            {on && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: variant === 'primary' ? '50%' : 0,
                transform: variant === 'primary' ? 'translateX(-50%)' : 'none',
                width: variant === 'primary' ? '40%' : '100%',
                height: '3px',
                borderRadius: '3px 3px 0 0',
                background: 'var(--md-sys-color-primary)',
              }} />
            )}
          </button>
        );
      })}
    </div>
  );
}
