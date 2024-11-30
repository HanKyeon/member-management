'use client';

import { useState } from 'react';

import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';
import {
  getDaysInMonth,
  getStartDayIndex,
  getWeekdayNames,
} from '@/utils/date-utils';

import DateHeader from './DateHeader';
import Days from './Days';

interface Props {
  className?: string;
  locale?: string;
  onItemClick?: (date: Date) => void;
  defaultValues?: Date;
}

// 내부적으로 currentDate와 selectedDate를 사용하는 이유는 재사용을 위함.
const Calendar = ({
  className = '',
  onItemClick,
  locale = 'en-US',
  defaultValues = new Date(),
}: Props) => {
  const [currentDate, setCurrentDate] = useState(defaultValues);
  const [selectedDate, setSelectedDate] = useState<Date>(defaultValues);

  const today = new Date(); // 오늘 날짜
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const weekdays = getWeekdayNames(locale); // 요일 이름
  const startDayIndex = getStartDayIndex(currentYear, currentMonth, locale); // 시작 요일 인덱스
  const currentMonthDays = getDaysInMonth(currentYear, currentMonth); // 현재 달의 모든 날짜
  const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1); // 이전 달의 모든 날짜

  // 달 날짜에 이전달과 다음달 날짜를 붙이기 ex) [30, 31, 1, 2, 3, ... , 31, 1, 2, 3, ..]
  const days = Array.from({ length: 42 }, (_, index) => {
    if (index < startDayIndex) {
      return {
        day: prevMonthDays[prevMonthDays.length - startDayIndex + index],
        current: false,
      };
    }
    if (index < startDayIndex + currentMonthDays.length) {
      return {
        day: currentMonthDays[index - startDayIndex],
        current: true,
      };
    }
    return {
      day: index - startDayIndex - currentMonthDays.length + 1,
      current: false,
    };
  });

  const handleMonth = (month: number) => () => {
    setCurrentDate(new Date(currentYear, currentMonth + month, 1));
  };

  const handleDateSelect = (day: number, isCurrent: boolean) => {
    let selectedDate: Date;
    if (isCurrent) {
      selectedDate = new Date(currentYear, currentMonth, day);
    } else if (day < 15) {
      selectedDate = new Date(currentYear, currentMonth + 1, day);
    } else {
      selectedDate = new Date(currentYear, currentMonth - 1, day);
    }
    setCurrentDate(selectedDate);
    setSelectedDate(selectedDate);
    onItemClick?.(selectedDate);
  };

  return (
    <section
      className={`${borderRadiusButton} w-[311px] shadow-calendar-blur bg-recatch-text-light-solid ${className}`}
    >
      <DateHeader
        currentDate={currentDate}
        handleMonth={handleMonth}
        locale={locale}
      />

      <Days weekdays={weekdays} />

      <main className="grid grid-cols-7 text-center py-[8px] pt-0 px-[18px]">
        {days.map(({ day, current }, index) => {
          const isToday =
            current &&
            today.getFullYear() === currentYear &&
            today.getMonth() === currentMonth &&
            today.getDate() === day;

          return (
            <button
              key={index}
              type="button"
              className={`${textBaseNormal} ${borderRadiusButton} h-[30px] w-1/7 mh-[3px] mx-[5px] cursor-pointer duration-200 border-[1px] ${current ? 'text-recatch-text' : 'text-recatch-text-disabled'} ${
                isToday
                  ? 'border-recatch-primary' // 오늘 날짜 스타일
                  : 'border-recatch-text-light-solid'
              } ${
                selectedDate &&
                selectedDate.getDate() === day &&
                current &&
                selectedDate.getMonth() === currentMonth &&
                selectedDate.getFullYear() === currentYear
                  ? 'bg-recatch-primary text-recatch-text-light-solid'
                  : ''
              } `}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                handleDateSelect(day, current);
              }}
            >
              {day}
            </button>
          );
        })}
      </main>
    </section>
  );
};

export default Calendar;
