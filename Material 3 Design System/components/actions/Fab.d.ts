import * as React from 'react';

export type FabSize = 'small' | 'regular' | 'large';
export type FabColor = 'primary' | 'secondary' | 'tertiary' | 'surface';

/** Material Design 3 Floating Action Button — the screen's primary, persistent action. */
export interface FabProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  size?: FabSize;
  color?: FabColor;
  /** Material Symbols icon name. */
  icon?: string;
  /** Text label; shown only when `extended`. */
  label?: string;
  /** Render an extended (icon + label) FAB. */
  extended?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

export function Fab(props: FabProps): JSX.Element;
