import React from 'react';

/**
 * Material Design 3 List Item (one, two, or three line).
 * Supports leading icon/avatar, trailing icon/text/control.
 */
export function ListItem({
  headline = 'Headline',
  supportingText,
  overline,
  leadingIcon,
  leadingAvatar,
  trailingIcon,
  trailingText,
  trailing,
  interactive = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lines = [overline, headline, supportingText].filter(Boolean).length;
  const minHeight = lines >= 3 ? 88 : lines === 2 ? 72 : 56;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        minHeight: `${minHeight}px`,
        padding: '8px 16px',
        background: hover && interactive ? 'color-mix(in srgb, var(--md-sys-color-on-surface) 8%, var(--md-sys-color-surface))' : 'var(--md-sys-color-surface)',
        color: 'var(--md-sys-color-on-surface)',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'background-color var(--md-sys-motion-duration-short3)',
        fontFamily: 'var(--md-sys-typescale-font-plain)',
        ...style,
      }}
      {...rest}
    >
      {leadingAvatar && (
        <img src={leadingAvatar} alt="" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
      )}
      {!leadingAvatar && leadingIcon && (
        <span className="m3-icon" style={{ fontSize: '24px', color: 'var(--md-sys-color-on-surface-variant)', flexShrink: 0 }} aria-hidden="true">{leadingIcon}</span>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        {overline && <div className="md-typescale-label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{overline}</div>}
        <div className="md-typescale-body-large" style={{ color: 'var(--md-sys-color-on-surface)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{headline}</div>
        {supportingText && <div className="md-typescale-body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{supportingText}</div>}
      </div>
      {trailing}
      {trailingText && <span className="md-typescale-label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)', flexShrink: 0 }}>{trailingText}</span>}
      {trailingIcon && (
        <span className="m3-icon" style={{ fontSize: '24px', color: 'var(--md-sys-color-on-surface-variant)', flexShrink: 0 }} aria-hidden="true">{trailingIcon}</span>
      )}
    </div>
  );
}
