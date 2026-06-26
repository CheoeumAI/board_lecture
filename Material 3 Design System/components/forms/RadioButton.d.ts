import * as React from 'react';

/** Material Design 3 Radio Button — selects a single option from a set. */
export interface RadioButtonProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  label?: React.ReactNode;
  onChange?: (value: string | true) => void;
  style?: React.CSSProperties;
}

export function RadioButton(props: RadioButtonProps): JSX.Element;
