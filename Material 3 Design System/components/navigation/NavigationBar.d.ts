import * as React from 'react';

export interface NavItem {
  value: string;
  label: string;
  /** Material Symbols icon name. */
  icon: string;
  /** Badge content: number, '' for dot, or string. */
  badge?: number | string;
}

/**
 * Material Design 3 Navigation Bar — bottom navigation across 3–5 top destinations.
 * @startingPoint section="Navigation" subtitle="Bottom navigation bar" viewport="412x80"
 */
export interface NavigationBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  items: NavItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function NavigationBar(props: NavigationBarProps): JSX.Element;
