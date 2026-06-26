import React from 'react';

/**
 * Material Design 3 Icon Button.
 * Variants: standard, filled, tonal, outlined. Optional toggle state.
 */
export function IconButton({
  variant = 'standard',
  icon = 'favorite',
  selected = false,
  disabled = false,
  filledIcon,
  ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const base = {
    width: '40px',
    height: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    cursor: disabled ? 'default' : 'pointer',
    padding: 0,
    transition: 'background-color var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    WebkitTapHighlightColor: 'transparent',
  };

  const palette = {
    standard: selected
      ? { background: 'transparent', color: 'var(--md-sys-color-primary)' }
      : { background: 'transparent', color: 'var(--md-sys-color-on-surface-variant)' },
    filled: selected
      ? { background: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)' }
      : { background: 'var(--md-sys-color-surface-container-highest)', color: 'var(--md-sys-color-primary)' },
    tonal: selected
      ? { background: 'var(--md-sys-color-secondary-container)', color: 'var(--md-sys-color-on-secondary-container)' }
      : { background: 'var(--md-sys-color-surface-container-highest)', color: 'var(--md-sys-color-on-surface-variant)' },
    outlined: selected
      ? { background: 'var(--md-sys-color-inverse-surface)', color: 'var(--md-sys-color-inverse-on-surface)', border: '1px solid var(--md-sys-color-inverse-surface)' }
      : { background: 'transparent', color: 'var(--md-sys-color-on-surface-variant)', border: '1px solid var(--md-sys-color-outline)' },
  };

  const disabledStyle = disabled
    ? {
        background: variant === 'filled' || variant === 'tonal'
          ? 'color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)'
          : 'transparent',
        color: 'color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)',
        border: variant === 'outlined'
          ? '1px solid color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)'
          : 'none',
        pointerEvents: 'none',
      }
    : {};

  const hoverStyle = !disabled && hover ? { filter: 'brightness(0.95)' } : {};
  const glyph = selected && filledIcon ? filledIcon : icon;

  return (
    <button
      aria-label={ariaLabel || glyph}
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...palette[variant], ...disabledStyle, ...hoverStyle, ...style }}
      {...rest}
    >
      <span className="m3-icon" data-filled={selected ? 'true' : 'false'} style={{ fontSize: '24px' }} aria-hidden="true">
        {glyph}
      </span>
    </button>
  );
}
