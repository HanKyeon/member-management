'use client';

import { tableBorder, textBaseStrong } from '@/components/constant/style';
import FilterIcon from '@/public/icons/Filter.svg';
import { FilterMenu } from './FilterMenu';
import { memo, useEffect, useRef } from 'react';
import { useOverlay } from '@/hooks/useOverlay';

interface Props {
  title: string;
  className?: string;
  menus: { checked: boolean; desc: string; onClick: () => void }[];
}

const Filter = memo(function ({ title, className, menus }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { open, closeHandler, openHandler } = useOverlay();

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
      className={`${tableBorder} w-full h-full text-recatch-text py-[8px] ${className} relative cursor-pointer`}
      onClick={e => {
        e.preventDefault();
        openHandler();
      }}
    >
      <div className="w-full h-full flex flex-row px-[8px] items-center justify-center gap-[8px] border-r-[1px] border-r-recatch-split">
        <strong className={`${textBaseStrong} block flex-1 text-left`}>
          {title}
        </strong>
        <div className="flex-shrink-0 mr-[8px]">
          <FilterIcon />
        </div>
      </div>
      <FilterMenu
        className={`absolute top-[110%] left-0 duration-200 ${open ? 'scale-100 opacity-100 z-[700]' : 'scale-90 opacity-0 pointer-events-none z-[-200]'}`}
        menus={menus}
      />
    </div>
  );
});

Filter.displayName = 'Filter';

export default Filter;
