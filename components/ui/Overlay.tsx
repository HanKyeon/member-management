'use client';

import { type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = function ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<Props>) {
  if (!isOpen) return null;
  return createPortal(
    <div
      className={`w-full h-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 duration-200 animate-fadeIn bg-black bg-opacity-50 ${isOpen ? 'visible z-[200]' : 'z-[-2]'}`}
      onClick={() => {
        onClose();
      }}
    >
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>,
    document.body,
  );
};

export default Overlay;
