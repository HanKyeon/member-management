'use client';

import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';
import Calendar from './Calendar';

import CalendarIcon from '@/public/icons/Calendar.svg';
import { useRef, useState } from 'react';
import Dim from '../Dim';
import { formatDate } from '@/components/utils/date-utils';

const DatePicker = function () {
  const inputRef = useRef<HTMLInputElement>(null);
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
        className={`${borderRadiusButton} relative flex flex-row items-center border-[1px] border-recatch-border py-[8px] px-[12px] cursor-pointer w-full hover:border-recatch-primary ${open ? 'border-recatch-primary shadow-input-blur' : ''}`}
        onClick={openHandler}
      >
        <input
          ref={inputRef}
          placeholder="Select date"
          className={`${textBaseNormal} pointer-events-none placeholder-recatch-text-placeholder flex-1`}
        />
        <CalendarIcon />

        <Calendar
          className={`absolute top-[110%] left-0 duration-200 ${open ? 'scale-100 opacity-100 z-[700]' : 'scale-90 opacity-0 pointer-events-none z-[-200]'}`}
          onItemClick={date => {
            if (inputRef.current) {
              inputRef.current.value = formatDate(date);
            }
            closeHandler();
          }}
        />
      </div>
    </>
  );
};

export default DatePicker;
