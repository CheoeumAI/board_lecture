import * as React from 'react';

/** Material Design 3 Checkbox — selects one or more items from a set. */
export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  error?: boolean;
  /** Optional text label rendered beside the box. */
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
