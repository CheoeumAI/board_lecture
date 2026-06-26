import * as React from 'react';

/** Material Design 3 Snackbar — brief, low-priority feedback with at most one action. */
export interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  /** Optional single action button label. */
  actionLabel?: string;
  onAction?: () => void;
  /** Show a trailing close (×) icon. */
  closable?: boolean;
  onClose?: () => void;
}

export function Snackbar(props: SnackbarProps): JSX.Element;
