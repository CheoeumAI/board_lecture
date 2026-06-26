import * as React from 'react';

/** Material Design 3 Dialog — modal that interrupts for a decision or focused task. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  /** Optional Material Symbols hero icon (centers the headline). */
  icon?: string;
  headline?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}

export function Dialog(props: DialogProps): JSX.Element | null;
