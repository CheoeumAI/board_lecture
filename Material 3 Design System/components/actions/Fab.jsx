import React from 'react';

/**
 * Material Design 3 Floating Action Button (FAB).
 * Sizes: small, regular, large. Extended FAB shows a text label.
 * Color: primary, secondary, tertiary, surface.
 */
export function Fab({
  size = 'regular',
  color = 'primary',
  icon = 'add',
  label,
  extended = false,
  disabled = false,
  ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const dims = {
    small:   { box: 40, radius: 'var(--md-sys-shape-corner-medium)', icon: 24 },
    regular: { box: 56, radius: 'var(--md-sys-shape-corner-large)',  icon: 24 },
    large:   { box: 96, radius: 'var(--md-sys-shape-corner-extra-large)', icon: 36 },
  }[size];

  const palette = {
    primary:   { background: 'var(--md-sys-color-primary-container)',   color: 'var(--md-sys-color-on-primary-container)' },
    secondary: { background: 'var(--md-sys-color-secondary-container)', color: 'var(--md-sys-color-on-secondary-container)' },
    tertiary:  { background: 'var(--md-sys-color-tertiary-container)',  color: 'var(--md-sys-color-on-tertiary-container)' },
    surface:   { background: 'var(--md-sys-color-surface-container-high)', color: 'var(--md-sys-color-primary)' },
  }[color];

  const isExtended = extended && label;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    border: 'none',
    cursor: disabled ? 'default' : 'pointer',
    borderRadius: dims.radius,
    boxShadow: hover ? 'var(--md-sys-elevation-4)' : 'var(--md-sys-elevation-3)',
    transition: 'box-shadow var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
    WebkitTapHighlightColor: 'transparent',
    ...(isExtended
      ? { height: '56px', paddingInline: '16px 20px', borderRadius: 'var(--md-sys-shape-corner-large)' }
      : { width: `${dims.box}px`, height: `${dims.box}px`, padding: 0 }),
    ...palette,
    ...(disabled ? { boxShadow: 'none', background: 'color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)', color: 'color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)', pointerEvents: 'none' } : {}),
  };

  return (
    <button
      aria-label={ariaLabel || label || icon}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...style }}
      {...rest}
    >
      <span className="m3-icon" style={{ fontSize: `${dims.icon}px` }} aria-hidden="true">{icon}</span>
      {isExtended && (
        <span style={{
          fontFamily: 'var(--md-sys-typescale-font-plain)',
          fontSize: 'var(--md-sys-typescale-label-large-size)',
          fontWeight: 'var(--md-sys-typescale-weight-medium)',
          letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
        }}>{label}</span>
      )}
    </button>
  );
}
