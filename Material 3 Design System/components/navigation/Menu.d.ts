import * as React from 'react';

export interface MenuItem {
  value?: string;
  label?: string;
  /** Material Symbols leading icon. */
  icon?: string;
  /** Trailing text (e.g. shortcut). */
  trailing?: string;
  disabled?: boolean;
  /** Render a divider instead of a row. */
  divider?: boolean;
}

/** Material Design 3 Menu — list of choices on a temporary surface. Composes Divider. */
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuItem[];
  open?: boolean;
  onSelect?: (value: string) => void;
}

export function Menu(props: MenuProps): JSX.Element | null;
