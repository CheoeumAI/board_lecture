import React from 'react';

/** Material Design 3 Slider — single-value continuous slider. */
export function Slider({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  showValue = false,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const val = value !== undefined ? value : internal;
  const pct = ((val - min) / (max - min)) * 100;

  const handle = (e) => {
    const next = Number(e.target.value);
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };

  const wrap = {
    position: 'relative',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '200px',
    opacity: disabled ? 0.38 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style,
  };

  return (
    <div style={wrap}>
      {/* active track */}
      <div style={{ position: 'absolute', left: 0, right: 0, height: '16px', borderRadius: 'var(--md-sys-shape-corner-full)', background: 'var(--md-sys-color-secondary-container)' }} />
      <div style={{ position: 'absolute', left: 0, width: `calc(${pct}% - 4px)`, height: '16px', borderRadius: 'var(--md-sys-shape-corner-full)', background: 'var(--md-sys-color-primary)' }} />
      {/* handle */}
      <div style={{ position: 'absolute', left: `calc(${pct}% - 2px)`, width: '4px', height: '44px', borderRadius: 'var(--md-sys-shape-corner-full)', background: 'var(--md-sys-color-primary)', transition: 'left var(--md-sys-motion-duration-short2) linear' }}>
        {showValue && (
          <span style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', background: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)', padding: '4px 8px', borderRadius: 'var(--md-sys-shape-corner-full)', fontSize: 'var(--md-sys-typescale-label-medium-size)', whiteSpace: 'nowrap' }}>{val}</span>
        )}
      </div>
      <input
        type="range"
        value={val}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={handle}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0, opacity: 0, cursor: 'pointer' }}
        {...rest}
      />
    </div>
  );
}
