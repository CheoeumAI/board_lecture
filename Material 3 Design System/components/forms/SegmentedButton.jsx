import React from 'react';

/**
 * Material Design 3 Segmented Button — a single- or multi-select group
 * of connected options.
 */
export function SegmentedButton({
  segments = [],
  value,
  defaultValue,
  multiSelect = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const init = defaultValue !== undefined ? defaultValue : (multiSelect ? [] : (segments[0] && segments[0].value));
  const [internal, setInternal] = React.useState(init);
  const selected = value !== undefined ? value : internal;

  const isOn = (v) => multiSelect ? (selected || []).includes(v) : selected === v;

  const pick = (v) => {
    if (disabled) return;
    let next;
    if (multiSelect) {
      const cur = selected || [];
      next = cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v];
    } else {
      next = v;
    }
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };

  const group = {
    display: 'inline-flex',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    overflow: 'hidden',
    opacity: disabled ? 0.38 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style,
  };

  return (
    <div role="group" style={group} {...rest}>
      {segments.map((seg, i) => {
        const on = isOn(seg.value);
        return (
          <button
            key={seg.value}
            aria-pressed={on}
            onClick={() => pick(seg.value)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              height: '40px',
              paddingInline: '16px',
              border: '1px solid var(--md-sys-color-outline)',
              borderLeftWidth: i === 0 ? '1px' : '0',
              background: on ? 'var(--md-sys-color-secondary-container)' : 'transparent',
              color: on ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface)',
              fontFamily: 'var(--md-sys-typescale-font-plain)',
              fontSize: 'var(--md-sys-typescale-label-large-size)',
              fontWeight: 'var(--md-sys-typescale-weight-medium)',
              letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {on && <span className="m3-icon" style={{ fontSize: '18px' }} aria-hidden="true">check</span>}
            {!on && seg.icon && <span className="m3-icon" style={{ fontSize: '18px' }} aria-hidden="true">{seg.icon}</span>}
            {seg.label}
          </button>
        );
      })}
    </div>
  );
}
