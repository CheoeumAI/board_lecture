import * as React from 'react';

/** Material Design 3 Divider — a thin rule separating content groups. */
export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** Inset the divider 16px from the leading edge. */
  inset?: boolean;
  /** Render a vertical divider (stretches to parent height). */
  vertical?: boolean;
}

export function Divider(props: DividerProps): JSX.Element;
