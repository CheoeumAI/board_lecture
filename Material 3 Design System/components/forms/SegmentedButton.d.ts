import * as React from 'react';

export interface Segment {
  value: string;
  label: string;
  /** Material Symbols icon shown when unselected. */
  icon?: string;
}

/** Material Design 3 Segmented Button — toggle between a small set of related options. */
export interface SegmentedButtonProps {
  segments: Segment[];
  value?: string | string[];
  defaultValue?: string | string[];
  /** Allow multiple segments selected at once. */
  multiSelect?: boolean;
  disabled?: boolean;
  onChange?: (value: string | string[]) => void;
  style?: React.CSSProperties;
}

export function SegmentedButton(props: SegmentedButtonProps): JSX.Element;
