import { useState } from 'react';

export const useOverlay = function () {
  const [open, setOpen] = useState(false);
  const openHandler = function () {
    setOpen(true);
  };
  const closeHandler = function () {
    setOpen(false);
  };
  const toggleHandler = function () {
    setOpen(prev => !prev);
  };
  return { open, openHandler, closeHandler, toggleHandler };
};
