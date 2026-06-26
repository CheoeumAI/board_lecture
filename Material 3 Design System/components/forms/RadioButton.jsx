import React from 'react';

/** Material Design 3 Radio Button (optionally with a text label). */
export function RadioButton({
  checked,
  defaultChecked = false,
  disabled = false,
  name,
  value,
  label,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;

  const select = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(true);
    onChange && onChange(value !== undefined ? value : true);
  };

  const ring = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    boxSizing: 'border-box',
    border: `2px solid ${on ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'border-color var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
  };

  const dot = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'var(--md-sys-color-primary)',
    transform: on ? 'scale(1)' : 'scale(0)',
    transition: 'transform var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-emphasized)',
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
      <span style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-10px' }} onClick={select} role="radio" aria-checked={on}>
        <span style={ring}><span style={dot} /></span>
      </span>
      {label && (
        <span style={{
          fontSize: 'var(--md-sys-typescale-body-large-size)',
          lineHeight: 'var(--md-sys-typescale-body-large-line)',
          marginLeft: '-8px',
        }} onClick={select}>{label}</span>
      )}
    </label>
  );
}
