import React from 'react';

/**
 * Material Design 3 Progress Indicator.
 * variant: 'linear' | 'circular'. Indeterminate when `value` is undefined.
 */
export function ProgressIndicator({
  variant = 'linear',
  value,
  size = 48,
  thickness = 4,
  style,
  ...rest
}) {
  const indeterminate = value === undefined || value === null;
  const id = React.useId ? React.useId() : 'mdpi';

  if (variant === 'circular') {
    const r = (size - thickness) / 2;
    const c = 2 * Math.PI * r;
    const offset = indeterminate ? c * 0.75 : c * (1 - Math.max(0, Math.min(100, value)) / 100);
    return (
      <span style={{ display: 'inline-flex', width: `${size}px`, height: `${size}px`, ...style }} role="progressbar" {...rest}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={indeterminate ? { animation: `m3-spin-${id} 1.4s linear infinite` } : undefined}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--md-sys-color-primary)" strokeWidth={thickness}
            strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
            transform={`rotate(-90 ${size/2} ${size/2})`}
            style={{ transition: indeterminate ? 'none' : 'stroke-dashoffset var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard)' }} />
        </svg>
        <style>{`@keyframes m3-spin-${id}{to{transform:rotate(360deg)}}`}</style>
      </span>
    );
  }

  // linear
  return (
    <span style={{ display: 'block', width: '100%', height: `${thickness}px`, background: 'var(--md-sys-color-secondary-container)', borderRadius: 'var(--md-sys-shape-corner-full)', overflow: 'hidden', position: 'relative', ...style }} role="progressbar" {...rest}>
      {indeterminate ? (
        <span style={{ position: 'absolute', inset: 0, background: 'var(--md-sys-color-primary)', transformOrigin: 'left', animation: `m3-linear-${id} 1.8s var(--md-sys-motion-easing-standard) infinite` }} />
      ) : (
        <span style={{ display: 'block', height: '100%', width: `${Math.max(0, Math.min(100, value))}%`, background: 'var(--md-sys-color-primary)', borderRadius: 'var(--md-sys-shape-corner-full)', transition: 'width var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard)' }} />
      )}
      <style>{`@keyframes m3-linear-${id}{0%{transform:translateX(-100%) scaleX(0.5)}50%{transform:translateX(0%) scaleX(0.5)}100%{transform:translateX(100%) scaleX(0.5)}}`}</style>
    </span>
  );
}
