import React from 'react';

/** Material Design 3 Checkbox (optionally with a text label). */
export function Checkbox({
  checked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  error = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const active = on || indeterminate;

  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (checked === undefined) setInternal(next);
    onChange && onChange(next);
  };

  const accent = error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-primary)';

  const box = {
    width: '18px',
    height: '18px',
    borderRadius: '2px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    background: active ? accent : 'transparent',
    border: active ? `2px solid ${accent}` : `2px solid ${error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)'}`,
  };

  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.38 : 1,
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    color: 'var(--md-sys-color-on-surface)',
    WebkitTapHighlightColor: 'transparent',
    ...style,
  };

  return (
    <label style={wrap} {...rest}>
      <span style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-11px' }} onClick={toggle} role="checkbox" aria-checked={indeterminate ? 'mixed' : on}>
        <span style={box}>
          {active && (
            <span className="m3-icon" style={{ fontSize: '18px', color: 'var(--md-sys-color-on-primary)' }} aria-hidden="true">
              {indeterminate ? 'remove' : 'check'}
            </span>
          )}
        </span>
      </span>
      {label && (
        <span style={{
          fontSize: 'var(--md-sys-typescale-body-large-size)',
          lineHeight: 'var(--md-sys-typescale-body-large-line)',
          marginLeft: '-8px',
        }} onClick={toggle}>{label}</span>
      )}
    </label>
  );
}
