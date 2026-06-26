import React from 'react';

/**
 * Material Design 3 Button.
 * Five variants — filled, tonal, elevated, outlined, text — plus an
 * optional leading/trailing icon (Material Symbols name).
 */
export function Button({
  variant = 'filled',
  icon,
  trailingIcon,
  disabled = false,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: '40px',
    paddingInline: icon ? '16px 24px' : '24px',
    border: 'none',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    fontSize: 'var(--md-sys-typescale-label-large-size)',
    lineHeight: 'var(--md-sys-typescale-label-large-line)',
    letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
    fontWeight: 'var(--md-sys-typescale-weight-medium)',
    cursor: disabled ? 'default' : 'pointer',
    position: 'relative',
    whiteSpace: 'nowrap',
    transition: 'box-shadow var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard), background-color var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
  };

  const variants = {
    filled: {
      background: 'var(--md-sys-color-primary)',
      color: 'var(--md-sys-color-on-primary)',
    },
    tonal: {
      background: 'var(--md-sys-color-secondary-container)',
      color: 'var(--md-sys-color-on-secondary-container)',
    },
    elevated: {
      background: 'var(--md-sys-color-surface-container-low)',
      color: 'var(--md-sys-color-primary)',
      boxShadow: 'var(--md-sys-elevation-1)',
    },
    outlined: {
      background: 'transparent',
      color: 'var(--md-sys-color-primary)',
      border: '1px solid var(--md-sys-color-outline)',
    },
    text: {
      background: 'transparent',
      color: 'var(--md-sys-color-primary)',
      paddingInline: icon ? '12px 16px' : '12px',
    },
  };

  const disabledStyle = disabled
    ? {
        background: variant === 'outlined' || variant === 'text'
          ? 'transparent'
          : 'color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)',
        color: 'color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)',
        boxShadow: 'none',
        border: variant === 'outlined'
          ? '1px solid color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)'
          : base.border,
        pointerEvents: 'none',
      }
    : {};

  const [hover, setHover] = React.useState(false);
  const hoverTint = !disabled && hover
    ? { filter: 'brightness(0.96)' }
    : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...disabledStyle, ...hoverTint, ...style }}
      {...rest}
    >
      {icon && (
        <span className="m3-icon" style={{ fontSize: '18px' }} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {trailingIcon && (
        <span className="m3-icon" style={{ fontSize: '18px' }} aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </button>
  );
}
