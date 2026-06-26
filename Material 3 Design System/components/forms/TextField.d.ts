import * as React from 'react';

export type TextFieldVariant = 'filled' | 'outlined';

/**
 * Material Design 3 Text Field — single-line text input.
 */
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  variant?: TextFieldVariant;
  /** Floating label. */
  label?: string;
  value?: string;
  defaultValue?: string;
  /** Material Symbols leading icon name. */
  leadingIcon?: string;
  /** Material Symbols trailing icon name. */
  trailingIcon?: string;
  /** Helper text below the field. */
  supportingText?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField(props: TextFieldProps): JSX.Element;
