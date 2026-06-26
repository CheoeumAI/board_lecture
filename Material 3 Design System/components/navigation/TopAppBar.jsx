import React from 'react';
import { IconButton } from '../actions/IconButton.jsx';

/**
 * Material Design 3 Top App Bar.
 * variant: 'center' | 'small' | 'medium' | 'large'.
 */
export function TopAppBar({
  title = 'Title',
  variant = 'small',
  navIcon = 'menu',
  onNav,
  actions = [],
  scrolled = false,
  style,
  ...rest
}) {
  const tall = variant === 'medium' || variant === 'large';
  const height = variant === 'large' ? 152 : variant === 'medium' ? 112 : 64;
  const titleClass = variant === 'large' ? 'md-typescale-headline-medium'
    : variant === 'medium' ? 'md-typescale-headline-small'
    : 'md-typescale-title-large';

  const bg = scrolled ? 'var(--md-sys-color-surface-container)' : 'var(--md-sys-color-surface)';

  return (
    <header
      style={{
        background: bg,
        color: 'var(--md-sys-color-on-surface)',
        minHeight: `${height}px`,
        display: 'flex',
        flexDirection: tall ? 'column' : 'row',
        alignItems: tall ? 'stretch' : 'center',
        transition: 'background-color var(--md-sys-motion-duration-short3)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '64px', paddingInline: '4px 8px', flexShrink: 0 }}>
        {navIcon && <IconButton variant="standard" icon={navIcon} ariaLabel="navigation" onClick={onNav} />}
        {variant === 'center' && <div style={{ flex: 1 }} />}
        {!tall && (
          <h1 className={titleClass} style={{ margin: 0, flex: variant === 'center' ? '0 0 auto' : 1, paddingInline: variant === 'center' ? 0 : '4px', textAlign: variant === 'center' ? 'center' : 'start', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h1>
        )}
        {variant === 'center' && <div style={{ flex: 1 }} />}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0px', marginLeft: tall ? 'auto' : 0 }}>
          {actions.map((a, i) => (
            <IconButton key={i} variant="standard" icon={a.icon} ariaLabel={a.label} onClick={a.onClick} />
          ))}
        </div>
      </div>
      {tall && (
        <h1 className={titleClass} style={{ margin: 0, padding: '0 16px 20px', display: 'flex', alignItems: 'flex-end', flex: 1 }}>{title}</h1>
      )}
    </header>
  );
}
