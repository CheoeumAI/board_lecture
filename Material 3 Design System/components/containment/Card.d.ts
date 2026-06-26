import * as React from 'react';

export type CardVariant = 'elevated' | 'filled' | 'outlined';

/**
 * Material Design 3 Card — a surface that groups related content and actions.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  /** Adds hover elevation + pointer cursor. */
  interactive?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
