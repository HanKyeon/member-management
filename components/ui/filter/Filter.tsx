'use client';

import { tableBorder, textBaseStrong } from '@/components/constant/style';
import FilterIcon from '@/public/icons/Filter.svg';
import { ContextMenu } from './ContextMenu';
import { useState } from 'react';
import Dim from '../Dim';

interface Props {
  title?: string;
  className?: string;
  menus?: { desc: string; checked: boolean }[];
}

const Filter = function ({ title, className, menus }: Props) {
  const [open, setOpen] = useState(false);
  const openHandler = function () {
    setOpen(true);
  };
  const closeHandler = function () {
    setOpen(false);
  };
  return (
    <>
      <Dim isOpen={open} onClose={closeHandler} />
      <div
        className={`${tableBorder} w-full h-full text-recatch-text py-[8px] ${className} relative cursor-pointer`}
        onClick={openHandler}
      >
        <div className="w-full h-full flex flex-row px-[8px] items-center justify-center gap-[8px] border-r-[1px] border-r-recatch-split">
          <strong className={`${textBaseStrong} block flex-1 text-left`}>
            {title}
          </strong>
          <button className="flex-shrink-0 mr-[8px]">
            <FilterIcon />
          </button>
        </div>
        <ContextMenu
          className={`absolute top-[110%] left-0 duration-200 ${open ? 'scale-100 opacity-100 z-[700]' : 'scale-90 opacity-0 pointer-events-none z-[-200]'}`}
        />
      </div>
    </>
  );
};

export default Filter;