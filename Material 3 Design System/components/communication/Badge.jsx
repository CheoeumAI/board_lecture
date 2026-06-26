import React from 'react';

/**
 * Material Design 3 Badge — small/large count indicator.
 * Wrap any child; the badge anchors to its top-right.
 */
export function Badge({ count, max = 999, dot = false, children, style, ...rest }) {
  const showNum = !dot && count !== undefined && count !== null;
  const display = showNum && count > max ? `${max}+` : count;

  const badge = {
    position: 'absolute',
    top: dot ? '0' : '-4px',
    insetInlineStart: dot ? 'calc(100% - 6px)' : 'calc(100% - 8px)',
    minWidth: dot ? '6px' : '16px',
    height: dot ? '6px' : '16px',
    paddingInline: dot ? 0 : '4px',
    boxSizing: 'border-box',
    borderRadius: 'var(--md-sys-shape-corner-full)',
    background: 'var(--md-sys-color-error)',
    color: 'var(--md-sys-color-on-error)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    fontSize: 'var(--md-sys-typescale-label-small-size)',
    lineHeight: '16px',
    fontWeight: 'var(--md-sys-typescale-weight-medium)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style,
  };

  if (!children) {
    return <span style={{ ...badge, position: 'static', insetInlineStart: 'auto', top: 'auto' }} {...rest}>{display}</span>;
  }

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      {children}
      <span style={badge} {...rest}>{showNum ? display : null}</span>
    </span>
  );
}
