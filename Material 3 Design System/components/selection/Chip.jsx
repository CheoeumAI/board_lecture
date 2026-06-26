import React from 'react';

/**
 * Material Design 3 Chip.
 * Types: assist, filter, input, suggestion.
 * Filter chips support a selected state; input chips can show a trailing remove.
 */
export function Chip({
  type = 'assist',
  label = 'Chip',
  icon,
  avatar,
  selected = false,
  elevated = false,
  removable = false,
  disabled = false,
  onClick,
  onRemove,
  style,
  ...rest
}) {
  const showLeading = icon || avatar;
  const isSelected = (type === 'filter' || type === 'input') && selected;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    height: '32px',
    paddingInline: showLeading || isSelected ? '8px 16px' : '16px',
    borderRadius: 'var(--md-sys-shape-corner-small)',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    fontSize: 'var(--md-sys-typescale-label-large-size)',
    fontWeight: 'var(--md-sys-typescale-weight-medium)',
    letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'background-color var(--md-sys-motion-duration-short3), border-color var(--md-sys-motion-duration-short3)',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    background: isSelected
      ? 'var(--md-sys-color-secondary-container)'
      : elevated ? 'var(--md-sys-color-surface-container-low)' : 'transparent',
    color: isSelected
      ? 'var(--md-sys-color-on-secondary-container)'
      : 'var(--md-sys-color-on-surface-variant)',
    border: isSelected || elevated ? 'none' : '1px solid var(--md-sys-color-outline)',
    boxShadow: elevated ? 'var(--md-sys-elevation-1)' : 'none',
    opacity: disabled ? 0.38 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style,
  };

  return (
    <div role="button" aria-pressed={isSelected} onClick={onClick} style={base} {...rest}>
      {isSelected && type === 'filter' && (
        <span className="m3-icon" style={{ fontSize: '18px' }} aria-hidden="true">check</span>
      )}
      {!isSelected && avatar && (
        <img src={avatar} alt="" style={{ width: '24px', height: '24px', borderRadius: '50%', marginLeft: '-4px', objectFit: 'cover' }} />
      )}
      {!isSelected && !avatar && icon && (
        <span className="m3-icon" style={{ fontSize: '18px', color: type === 'assist' ? 'var(--md-sys-color-primary)' : 'inherit' }} aria-hidden="true">{icon}</span>
      )}
      <span>{label}</span>
      {removable && (
        <span
          className="m3-icon"
          onClick={(e) => { e.stopPropagation(); onRemove && onRemove(); }}
          style={{ fontSize: '18px', cursor: 'pointer', marginRight: '-4px' }}
          aria-hidden="true"
        >close</span>
      )}
    </div>
  );
}
