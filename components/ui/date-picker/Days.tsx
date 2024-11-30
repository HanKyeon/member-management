'use client';

import { memo } from 'react';
import { WeekDaysProps } from '../../../types/datepicker-types';

// currentDay 변경에도 rerender를 방지하기 위한 memo
const Days = memo(function ({ weekdays }: WeekDaysProps) {
  return (
    <div className="grid grid-cols-7 text-center text-gray-500 font-medium px-[18px] pt-[8px]">
      {weekdays.map((day, idx) => (
        <div key={`${day}-${idx}`}>{day}</div>
      ))}
    </div>
  );
});

Days.displayName = 'Days';

export default Days;
