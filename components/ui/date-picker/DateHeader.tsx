'use client';

import { textBaseStrong } from '@/components/constant/style';
import LastMonthIcon from '@/public/icons/LastMonth.svg';
import LastYearIcon from '@/public/icons/LastYear.svg';
import NextMonthIcon from '@/public/icons/NextMonth.svg';
import NextYearIcon from '@/public/icons/NextYear.svg';

import IconButton from './IconButton';

interface Props {
  currentDate: Date;
  locale: string;
  handleMonth: (month: number) => () => void;
}

const DateHeader = function ({ currentDate, locale, handleMonth }: Props) {
  return (
    <header className="flex items-center justify-between py-[9px] px-[8px] border-b-[1px] border-b-recatch-split">
      <div className="flex-shrink-0 gap-[4px] flex flex-row">
        <IconButton onClick={handleMonth(-12)}>
          <LastYearIcon />
        </IconButton>
        <IconButton onClick={handleMonth(-1)}>
          <LastMonthIcon />
        </IconButton>
      </div>
      <span className={`${textBaseStrong} font-semibold flex-1 text-center`}>
        {currentDate.toLocaleString(locale, {
          month: 'long',
          year: 'numeric',
        })}
      </span>
      <div className="flex-shrink-0 gap-[4px] flex flex-row">
        <IconButton onClick={handleMonth(1)}>
          <NextMonthIcon />
        </IconButton>
        <IconButton onClick={handleMonth(12)}>
          <NextYearIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default DateHeader;
