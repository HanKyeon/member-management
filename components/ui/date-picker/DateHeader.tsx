'use client';

import { textBaseStrong } from '@/components/constant/style';
import LastMonthIcon from '@/public/icons/LastMonth.svg';
import LastYearIcon from '@/public/icons/LastYear.svg';
import NextMonthIcon from '@/public/icons/NextMonth.svg';
import NextYearIcon from '@/public/icons/NextYear.svg';

import { MouseEvent } from 'react';
import { DatePickerHeaderProps } from '../../../types/datepicker-types';
import Button from '../Button';

const DateHeader = function ({
  currentDate,
  locale,
  handleMonth,
}: DatePickerHeaderProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>, num: number) => {
    e.preventDefault();
    e.stopPropagation();
    handleMonth(num)();
  };
  return (
    <header className="flex items-center justify-between py-[9px] px-[8px] border-b-[1px] border-b-recatch-split">
      <div className="flex-shrink-0 gap-[4px] flex flex-row">
        <Button variant="icon" onClick={e => handleClick(e, -12)}>
          <LastYearIcon />
        </Button>
        <Button variant="icon" onClick={e => handleClick(e, -1)}>
          <LastMonthIcon />
        </Button>
      </div>
      <span className={`${textBaseStrong} font-semibold flex-1 text-center`}>
        {currentDate.toLocaleString(locale, {
          month: 'long',
          year: 'numeric',
        })}
      </span>
      <div className="flex-shrink-0 gap-[4px] flex flex-row">
        <Button variant="icon" onClick={e => handleClick(e, 1)}>
          <NextMonthIcon />
        </Button>
        <Button variant="icon" onClick={e => handleClick(e, 12)}>
          <NextYearIcon />
        </Button>
      </div>
    </header>
  );
};

export default DateHeader;
