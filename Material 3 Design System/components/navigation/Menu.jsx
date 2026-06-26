import React from 'react';
import { Divider } from '../containment/Divider.jsx';

/**
 * Material Design 3 Menu — surface of selectable items.
 * Render inline (as a positioned popover by the caller) when `open`.
 */
export function Menu({
  items = [],
  open = true,
  onSelect,
  style,
  ...rest
}) {
  if (!open) return null;

  return (
    <div
      role="menu"
      style={{
        minWidth: '180px',
        maxWidth: '280px',
        paddingBlock: '8px',
        background: 'var(--md-sys-color-surface-container)',
        borderRadius: 'var(--md-sys-shape-corner-extra-small)',
        boxShadow: 'var(--md-sys-elevation-2)',
        color: 'var(--md-sys-color-on-surface)',
        ...style,
      }}
      {...rest}
    >
      {items.map((item, i) => {
        if (item.divider) return <Divider key={`d${i}`} style={{ marginBlock: '8px' }} />;
        return (
          <MenuRow key={item.value || i} item={item} onSelect={onSelect} />
        );
      })}
    </div>
  );
}

function MenuRow({ item, onSelect }) {
  const [hover, setHover] = React.useState(false);
  const disabled = item.disabled;
  return (
    <button
      role="menuitem"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => !disabled && onSelect && onSelect(item.value)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        height: '48px',
        paddingInline: '12px',
        border: 'none',
        background: hover && !disabled ? 'color-mix(in srgb, var(--md-sys-color-on-surface) 8%, transparent)' : 'transparent',
        color: 'var(--md-sys-color-on-surface)',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        fontFamily: 'var(--md-sys-typescale-font-plain)',
        textAlign: 'start',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {item.icon && <span className="m3-icon" style={{ fontSize: '24px', color: 'var(--md-sys-color-on-surface-variant)' }} aria-hidden="true">{item.icon}</span>}
      <span className="md-typescale-label-large" style={{ flex: 1 }}>{item.label}</span>
      {item.trailing && <span className="md-typescale-label-large" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{item.trailing}</span>}
    </button>
  );
}
