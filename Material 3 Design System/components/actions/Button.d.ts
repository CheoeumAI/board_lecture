import * as React from 'react';

export type ButtonVariant = 'filled' | 'tonal' | 'elevated' | 'outlined' | 'text';

/**
 * Material Design 3 Button — the primary call-to-action control.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. Default 'filled'. */
  variant?: ButtonVariant;
  /** Leading Material Symbols icon name (e.g. 'add'). */
  icon?: string;
  /** Trailing Material Symbols icon name. */
  trailingIcon?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
