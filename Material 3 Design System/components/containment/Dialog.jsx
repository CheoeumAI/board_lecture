import React from 'react';
import { Button } from '../actions/Button.jsx';

/**
 * Material Design 3 Dialog (basic / hero).
 * Renders a scrim + centered container when `open`.
 */
export function Dialog({
  open = true,
  icon,
  headline = 'Headline',
  children,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--md-sys-color-scrim) 40%, transparent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
      }}
      onClick={() => (onClose || onCancel) && (onClose || onCancel)()}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(560px, calc(100% - 48px))',
          minWidth: '280px',
          background: 'var(--md-sys-color-surface-container-high)',
          color: 'var(--md-sys-color-on-surface)',
          borderRadius: 'var(--md-sys-shape-corner-extra-large)',
          boxShadow: 'var(--md-sys-elevation-3)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          ...style,
        }}
        {...rest}
      >
        {icon && (
          <span className="m3-icon" style={{ fontSize: '24px', color: 'var(--md-sys-color-secondary)', alignSelf: 'center' }} aria-hidden="true">{icon}</span>
        )}
        <h2 className="md-typescale-headline-small" style={{ margin: 0, textAlign: icon ? 'center' : 'start', color: 'var(--md-sys-color-on-surface)' }}>{headline}</h2>
        <div className="md-typescale-body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{children}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
          {cancelText && <Button variant="text" onClick={onCancel}>{cancelText}</Button>}
          {confirmText && <Button variant="text" onClick={onConfirm}>{confirmText}</Button>}
        </div>
      </div>
    </div>
  );
}
