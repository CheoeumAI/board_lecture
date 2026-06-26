import React from 'react';

/** Material Design 3 Switch — binary on/off toggle. */
export function Switch({
  checked,
  defaultChecked = false,
  disabled = false,
  icon = false,
  onChange,
  ariaLabel,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;

  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (checked === undefined) setInternal(next);
    onChange && onChange(next);
  };

  const track = {
    width: '52px',
    height: '32px',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    position: 'relative',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'background-color var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard), border-color var(--md-sys-motion-duration-short4)',
    background: on ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container-highest)',
    border: on ? '2px solid var(--md-sys-color-primary)' : '2px solid var(--md-sys-color-outline)',
    boxSizing: 'border-box',
    opacity: disabled ? 0.38 : 1,
    flexShrink: 0,
    WebkitTapHighlightColor: 'transparent',
    ...style,
  };

  const knobSize = on ? 24 : 16;
  const knob = {
    position: 'absolute',
    top: '50%',
    left: on ? `calc(100% - ${knobSize}px - 4px)` : '6px',
    width: `${knobSize}px`,
    height: `${knobSize}px`,
    borderRadius: '50%',
    transform: 'translateY(-50%)',
    background: on ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-outline)',
    transition: 'all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-emphasized)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={toggle}
      style={{ ...track, border: track.border, padding: 0 }}
      {...rest}
    >
      <span style={knob}>
        {icon && (
          <span className="m3-icon" style={{ fontSize: `${on ? 16 : 12}px`, color: on ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container-highest)' }} aria-hidden="true">
            {on ? 'check' : 'close'}
          </span>
        )}
      </span>
    </button>
  );
}
