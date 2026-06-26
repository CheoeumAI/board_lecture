import * as React from 'react';

export type ProgressVariant = 'linear' | 'circular';

/** Material Design 3 Progress Indicator — linear or circular; determinate or indeterminate. */
export interface ProgressIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: ProgressVariant;
  /** 0–100 for determinate; omit for indeterminate (animated). */
  value?: number;
  /** Circular diameter in px. Default 48. */
  size?: number;
  /** Stroke/track thickness in px. Default 4. */
  thickness?: number;
}

export function ProgressIndicator(props: ProgressIndicatorProps): JSX.Element;
