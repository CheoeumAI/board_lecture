import * as React from 'react';

export interface AppBarAction {
  icon: string;
  label?: string;
  onClick?: () => void;
}

export type TopAppBarVariant = 'center' | 'small' | 'medium' | 'large';

/** Material Design 3 Top App Bar — title + navigation + actions at the top of a screen. */
export interface TopAppBarProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  variant?: TopAppBarVariant;
  /** Leading nav icon (Material Symbols). Set null to omit. */
  navIcon?: string | null;
  onNav?: () => void;
  /** Trailing action icons. */
  actions?: AppBarAction[];
  /** Apply the scrolled (tinted) container color. */
  scrolled?: boolean;
}

export function TopAppBar(props: TopAppBarProps): JSX.Element;
