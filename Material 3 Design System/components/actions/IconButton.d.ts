import * as React from 'react';

export type IconButtonVariant = 'standard' | 'filled' | 'tonal' | 'outlined';

/** Material Design 3 Icon Button — a compact icon-only action, optionally a toggle. */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  variant?: IconButtonVariant;
  /** Material Symbols icon name. */
  icon?: string;
  /** Icon to show when selected (e.g. a filled variant). */
  filledIcon?: string;
  /** Toggle on-state. */
  selected?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

export function IconButton(props: IconButtonProps): JSX.Element;
