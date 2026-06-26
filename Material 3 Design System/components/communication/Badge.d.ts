import * as React from 'react';

/** Material Design 3 Badge — small status/count overlay anchored to a child (e.g. an icon). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Number to display; large badge. */
  count?: number;
  /** Cap before showing "{max}+". Default 999. */
  max?: number;
  /** Render the tiny dot variant (no number). */
  dot?: boolean;
  /** Element the badge anchors to. Omit for a standalone badge. */
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
