'use client';

import { OverlayProps } from '@/types/ui-types';
import { oberlayClasses } from '@/utils/style-utils';
import { type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

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
      className={oberlayClasses[variant](isOpen, className)}
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
