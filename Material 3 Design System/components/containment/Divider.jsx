import React from 'react';

/** Material Design 3 Divider — thin line that groups content. */
export function Divider({ inset = false, vertical = false, style, ...rest }) {
  if (vertical) {
    return (
      <div
        role="separator"
        style={{
          width: '1px',
          alignSelf: 'stretch',
          background: 'var(--md-sys-color-outline-variant)',
          ...style,
        }}
        {...rest}
      />
    );
  }
  return (
    <hr
      style={{
        border: 'none',
        height: '1px',
        margin: 0,
        marginLeft: inset ? '16px' : 0,
        background: 'var(--md-sys-color-outline-variant)',
        ...style,
      }}
      {...rest}
    />
  );
}
