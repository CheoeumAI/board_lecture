import React from 'react';

/**
 * Material Design 3 Tooltip — plain or rich.
 * Wraps a child and shows the tip on hover/focus.
 */
export function Tooltip({
  text = 'Tooltip',
  rich = false,
  subhead,
  position = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);

  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '4px' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '4px' },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '4px' },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '4px' },
  }[position];

  const plain = {
    position: 'absolute',
    ...pos,
    background: 'var(--md-sys-color-inverse-surface)',
    color: 'var(--md-sys-color-inverse-on-surface)',
    padding: '4px 8px',
    borderRadius: 'var(--md-sys-shape-corner-extra-small)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    fontSize: 'var(--md-sys-typescale-body-small-size)',
    lineHeight: 'var(--md-sys-typescale-body-small-line)',
    whiteSpace: 'nowrap',
    zIndex: 50,
    pointerEvents: 'none',
  };

  const richBox = {
    position: 'absolute',
    ...pos,
    width: '240px',
    whiteSpace: 'normal',
    background: 'var(--md-sys-color-surface-container)',
    color: 'var(--md-sys-color-on-surface-variant)',
    padding: '12px 16px',
    borderRadius: 'var(--md-sys-shape-corner-medium)',
    boxShadow: 'var(--md-sys-elevation-2)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    zIndex: 50,
  };

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      {...rest}
    >
      {children}
      {show && (rich ? (
        <span style={richBox}>
          {subhead && <span className="md-typescale-title-small" style={{ display: 'block', color: 'var(--md-sys-color-on-surface)', marginBottom: '4px' }}>{subhead}</span>}
          <span className="md-typescale-body-medium">{text}</span>
        </span>
      ) : (
        <span style={plain}>{text}</span>
      ))}
    </span>
  );
}
