import * as React from 'react';

/** Material Design 3 Switch — toggles a single setting on/off. */
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  /** Show a check/close icon inside the knob. */
  icon?: boolean;
  onChange?: (checked: boolean) => void;
  ariaLabel?: string;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;
