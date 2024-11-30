'use client';

import { useEffect, useRef } from 'react';

import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';
import { useOverlay } from '@/hooks/useOverlay';
import CalendarIcon from '@/public/icons/Calendar.svg';
import { formatDate } from '@/utils/date-utils';

import { DefaultDateProps } from '../../../types/datepicker-types';
import Calendar from './Calendar';

const DatePicker = function ({ defaultValues }: DefaultDateProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { open, closeHandler, toggleHandler } = useOverlay();

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
      className={`${borderRadiusButton} relative flex flex-row items-center border-[1px] border-recatch-border py-[8px] px-[12px] cursor-pointer w-full hover:border-recatch-primary ${open ? 'border-recatch-primary shadow-input-blur' : ''}`}
      onClick={toggleHandler}
      ref={containerRef}
    >
      <input
        ref={inputRef}
        placeholder="Select date"
        className={`${textBaseNormal} pointer-events-none placeholder-recatch-text-placeholder flex-1 w-0`}
        defaultValue={formatDate(new Date())}
      />
      <div className="flex-shrink-0">
        <CalendarIcon />
      </div>

      <Calendar
        className={`absolute top-[110%] left-0 duration-200 ${open ? 'scale-100 opacity-100 z-[1000]' : 'scale-90 opacity-0 pointer-events-none z-[-200]'}`}
        onItemClick={date => {
          if (inputRef.current) {
            inputRef.current.value = formatDate(date);
          }
          closeHandler();
        }}
        defaultValues={defaultValues}
      />
    </div>
  );
};

export default DatePicker;
