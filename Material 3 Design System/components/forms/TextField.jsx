import React from 'react';

/**
 * Material Design 3 Text Field.
 * Variants: filled, outlined. Supports label, leading/trailing icon,
 * supporting text and error state.
 */
export function TextField({
  variant = 'filled',
  label = 'Label',
  value,
  defaultValue,
  placeholder,
  leadingIcon,
  trailingIcon,
  supportingText,
  error = false,
  disabled = false,
  type = 'text',
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue || '');
  const val = value !== undefined ? value : internal;
  const hasValue = val !== undefined && val !== '';
  const floated = focused || hasValue || placeholder;

  const accent = error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-primary)';
  const labelColor = disabled
    ? 'color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)'
    : error
    ? 'var(--md-sys-color-error)'
    : focused
    ? accent
    : 'var(--md-sys-color-on-surface-variant)';

  const isOutlined = variant === 'outlined';

  const container = {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    fontFamily: 'var(--md-sys-typescale-font-plain)',
    minWidth: '210px',
    opacity: disabled ? 0.38 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style,
  };

  const field = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    height: '56px',
    paddingInline: '16px',
    background: isOutlined ? 'transparent' : 'var(--md-sys-color-surface-container-highest)',
    borderRadius: isOutlined
      ? 'var(--md-sys-shape-corner-extra-small)'
      : 'var(--md-sys-shape-corner-extra-small) var(--md-sys-shape-corner-extra-small) 0 0',
    border: isOutlined ? `${focused ? 2 : 1}px solid ${focused ? accent : (error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-outline)')}` : 'none',
    borderBottom: isOutlined ? undefined : `${focused ? 2 : 1}px solid ${focused ? accent : (error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)')}`,
    transition: 'border-color var(--md-sys-motion-duration-short3), background-color var(--md-sys-motion-duration-short3)',
  };

  const input = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: 'var(--md-sys-color-on-surface)',
    fontSize: 'var(--md-sys-typescale-body-large-size)',
    lineHeight: 'var(--md-sys-typescale-body-large-line)',
    letterSpacing: 'var(--md-sys-typescale-body-large-tracking)',
    fontFamily: 'inherit',
    paddingTop: floated ? '10px' : 0,
  };

  const labelStyle = floated
    ? {
        position: 'absolute',
        top: isOutlined ? '-8px' : '8px',
        left: isOutlined ? (leadingIcon ? '40px' : '12px') : (leadingIcon ? '48px' : '16px'),
        fontSize: 'var(--md-sys-typescale-body-small-size)',
        lineHeight: 1,
        padding: isOutlined ? '0 4px' : 0,
        background: isOutlined ? 'var(--md-sys-color-surface)' : 'transparent',
        color: labelColor,
        transition: 'all var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
        pointerEvents: 'none',
      }
    : {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: leadingIcon ? '48px' : '16px',
        fontSize: 'var(--md-sys-typescale-body-large-size)',
        color: labelColor,
        transition: 'all var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard)',
        pointerEvents: 'none',
      };

  const handle = (e) => {
    if (value === undefined) setInternal(e.target.value);
    onChange && onChange(e);
  };

  return (
    <div style={container}>
      <div style={field}>
        {leadingIcon && (
          <span className="m3-icon" style={{ fontSize: '24px', color: 'var(--md-sys-color-on-surface-variant)' }} aria-hidden="true">{leadingIcon}</span>
        )}
        <input
          type={type}
          value={val}
          placeholder={focused || !label ? placeholder : ''}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handle}
          style={input}
          {...rest}
        />
        <span style={labelStyle}>{label}</span>
        {trailingIcon && (
          <span className="m3-icon" style={{ fontSize: '24px', color: error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)' }} aria-hidden="true">{trailingIcon}</span>
        )}
      </div>
      {supportingText && (
        <span style={{
          marginTop: '4px',
          paddingInline: '16px',
          fontSize: 'var(--md-sys-typescale-body-small-size)',
          lineHeight: 'var(--md-sys-typescale-body-small-line)',
          letterSpacing: 'var(--md-sys-typescale-body-small-tracking)',
          color: error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)',
        }}>{supportingText}</span>
      )}
    </div>
  );
}
