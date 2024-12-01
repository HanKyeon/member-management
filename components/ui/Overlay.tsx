'use client';

import { type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import type { OverlayProps } from '@/types/ui-types';
import { overlayClasses } from '@/utils/style-utils';

const Overlay = function ({
  variant = 'dim',
  className = '',
  isOpen,
  onClose,
  dimCloseBlock,
  children,
}: PropsWithChildren<OverlayProps>) {
  if (!isOpen) return null;
  return createPortal(
    <div
      role="dialog"
      className={overlayClasses[variant](isOpen, className)}
      onClick={() => {
        if (dimCloseBlock) return;
        onClose();
      }}
    >
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>,
    document.body,
  );
};

export default Overlay;
