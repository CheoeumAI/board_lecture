import React from 'react';

/** Material Design 3 Snackbar — brief message with an optional single action. */
export function Snackbar({
  message = 'Message',
  actionLabel,
  onAction,
  closable = false,
  onClose,
  style,
  ...rest
}) {
  return (
    <div
      role="status"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        minHeight: '48px',
        minWidth: '288px',
        maxWidth: '560px',
        paddingInline: '16px',
        background: 'var(--md-sys-color-inverse-surface)',
        color: 'var(--md-sys-color-inverse-on-surface)',
        borderRadius: 'var(--md-sys-shape-corner-extra-small)',
        boxShadow: 'var(--md-sys-elevation-3)',
        fontFamily: 'var(--md-sys-typescale-font-plain)',
        ...style,
      }}
      {...rest}
    >
      <span className="md-typescale-body-medium" style={{ flex: 1, paddingBlock: '8px' }}>{message}</span>
      {actionLabel && (
        <button
          onClick={onAction}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--md-sys-color-inverse-primary)',
            fontFamily: 'inherit',
            fontSize: 'var(--md-sys-typescale-label-large-size)',
            fontWeight: 'var(--md-sys-typescale-weight-medium)',
            letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
            padding: '8px',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
          }}
        >{actionLabel}</button>
      )}
      {closable && (
        <span
          className="m3-icon"
          onClick={onClose}
          style={{ fontSize: '20px', cursor: 'pointer', marginRight: '-4px' }}
          aria-hidden="true"
        >close</span>
      )}
    </div>
  );
}
