import * as React from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

/** Material Design 3 Tooltip — plain (label) or rich (titled, with body) on hover/focus. */
export interface TooltipProps {
  text?: string;
  /** Rich variant: wider surface with optional subhead. */
  rich?: boolean;
  subhead?: string;
  position?: TooltipPosition;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tooltip(props: TooltipProps): JSX.Element;
