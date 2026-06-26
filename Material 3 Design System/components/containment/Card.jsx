import React from 'react';

/**
 * Material Design 3 Card container.
 * Variants: elevated, filled, outlined.
 */
export function Card({
  variant = 'elevated',
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const variants = {
    elevated: {
      background: 'var(--md-sys-color-surface-container-low)',
      boxShadow: hover && interactive ? 'var(--md-sys-elevation-2)' : 'var(--md-sys-elevation-1)',
    },
    filled: {
      background: 'var(--md-sys-color-surface-container-highest)',
      boxShadow: hover && interactive ? 'var(--md-sys-elevation-1)' : 'none',
    },
    outlined: {
      background: 'var(--md-sys-color-surface)',
      border: '1px solid var(--md-sys-color-outline-variant)',
      boxShadow: hover && interactive ? 'var(--md-sys-elevation-1)' : 'none',
    },
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--md-sys-shape-corner-medium)',
        color: 'var(--md-sys-color-on-surface)',
        overflow: 'hidden',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'box-shadow var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
