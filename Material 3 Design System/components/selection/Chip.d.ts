import * as React from 'react';

export type ChipType = 'assist' | 'filter' | 'input' | 'suggestion';

/** Material Design 3 Chip — compact element for input, attributes, filters or actions. */
export interface ChipProps {
  type?: ChipType;
  label?: string;
  /** Material Symbols leading icon name. */
  icon?: string;
  /** Avatar image URL (input chips). */
  avatar?: string;
  /** Selected state (filter/input chips). */
  selected?: boolean;
  /** Elevated style instead of outlined. */
  elevated?: boolean;
  /** Show a trailing remove (×) affordance. */
  removable?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  style?: React.CSSProperties;
}

export function Chip(props: ChipProps): JSX.Element;
