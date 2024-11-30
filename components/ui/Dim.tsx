'use client';

import { type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  dimCloseBlock?: boolean;
}

const Dim = function ({
  isOpen,
  onClose,
  dimCloseBlock = false,
  children,
}: PropsWithChildren<Props>) {
  if (!isOpen) return null;
  return createPortal(
    <div
      className={`w-full h-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 duration-200 animate-fadeIn ${isOpen ? 'visible z-[500]' : 'z-[-1]'}`}
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

export default Dim;
