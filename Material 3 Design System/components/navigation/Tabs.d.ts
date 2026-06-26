import * as React from 'react';

export interface TabItem {
  value: string;
  label: string;
  /** Material Symbols icon name. */
  icon?: string;
}

export type TabsVariant = 'primary' | 'secondary';

/** Material Design 3 Tabs — switch between related views at the same hierarchy level. */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  /** primary (icon over label, centered indicator) or secondary (text row). */
  variant?: TabsVariant;
  onChange?: (value: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
