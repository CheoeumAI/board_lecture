import * as React from 'react';

/** Material Design 3 List Item — a single row in a list (1–3 lines). */
export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  headline?: string;
  supportingText?: string;
  overline?: string;
  /** Material Symbols leading icon. */
  leadingIcon?: string;
  /** Leading avatar image URL (takes precedence over leadingIcon). */
  leadingAvatar?: string;
  /** Material Symbols trailing icon. */
  trailingIcon?: string;
  /** Trailing metadata text (e.g. timestamp). */
  trailingText?: string;
  /** Arbitrary trailing control (Switch, Checkbox…). */
  trailing?: React.ReactNode;
  interactive?: boolean;
}

export function ListItem(props: ListItemProps): JSX.Element;
