import * as React from 'react';

/** Material Design 3 Slider — selects a value from a continuous range. */
export interface SliderProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  /** Show the value label above the handle. */
  showValue?: boolean;
  onChange?: (value: number) => void;
  style?: React.CSSProperties;
}

export function Slider(props: SliderProps): JSX.Element;
