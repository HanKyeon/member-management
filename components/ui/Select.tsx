'use client';

import { useOverlay } from '@/hooks/useOverlay';
import { borderRadiusButton } from '../constant/style';
import { DEFAULT_JOBS } from '../constant/value';
import { useEffect, useRef } from 'react';

import DrowdownIcon from '@/public/icons/Dropdown.svg';
import ContextMenu from './ContextMenu';

interface Props<T = any> {
  menus?: { desc: string; value: any }[];
  placeholder?: string;
  value?: T;
  onSelect?: (data: T) => void;
}

const Select = function <T = any>({
  menus = DEFAULT_JOBS,
  onSelect,
  value,
}: Props<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { open, closeHandler, toggleHandler } = useOverlay();

  const selectHandler = function (data: T) {
    onSelect?.(data);
    closeHandler();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeHandler(); // 외부 클릭 시 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeHandler]);

  return (
    <div
      ref={containerRef}
      className={`${borderRadiusButton} relative flex flex-row items-center border-[1px] border-recatch-border text-recatch-text py-[8px] px-[12px] cursor-pointer w-full ${open ? '' : 'hover:border-recatch-primary hover:text-recatch-primary'} duration-200`}
      onClick={toggleHandler}
    >
      <span className="flex-1">
        {menus.find(menu => menu.value === value)?.desc ?? ''}
      </span>
      <div className="flex-shrink-0 w-[16px] h-[16px] flex items-center justify-center">
        <DrowdownIcon />
      </div>
      <ContextMenu<T>
        menus={menus}
        open={open}
        value={value}
        onClickMenuitem={selectHandler}
      />
    </div>
  );
};

export default Select;