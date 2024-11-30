'use client';

import { useEffect, useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';
import { useOverlay } from '@/hooks/useOverlay';
import CalendarIcon from '@/public/icons/Calendar.svg';
import { formatDate } from '@/utils/date-utils';

import Calendar from '../date-picker/Calendar';
import Label from '../Label';

interface Props {
  defaultValues?: Date;
  name: string;
  label: string;
  required?: boolean;
  className?: string;
}

const FormDate = function ({
  name,
  label,
  required,
  defaultValues,
  className = '',
}: Props) {
  const { control } = useFormContext();
  const { field } = useController({ control, name });
  return (
    <div className={`w-full flex flex-col items-start gap-[8px] ${className}`}>
      <Label text={label} required={required} className="block" />
      <FormDatePicker label={label} name={name} defaultValues={defaultValues} />
    </div>
  );
};

const FormDatePicker = function ({ defaultValues, name }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { open, closeHandler, toggleHandler } = useOverlay();

  const { control, setValue } = useFormContext();
  const { field } = useController({ name, control });

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
    <>
      <div
        className={`${borderRadiusButton} relative flex flex-row items-center border-[1px] border-recatch-border py-[8px] px-[12px] cursor-pointer w-full hover:border-recatch-primary ${open ? 'border-recatch-primary shadow-input-blur' : ''}`}
        onClick={toggleHandler}
        ref={containerRef}
      >
        <input
          placeholder="Select date"
          className={`${textBaseNormal} pointer-events-none placeholder-recatch-text-placeholder flex-1 w-0`}
          {...field}
        />
        <div className="flex-shrink-0">
          <CalendarIcon />
        </div>

        <Calendar
          className={`absolute top-[110%] left-0 duration-200 ${open ? 'scale-100 opacity-100 z-[1000]' : 'scale-90 opacity-0 pointer-events-none z-[-200]'}`}
          onItemClick={date => {
            setValue(name, formatDate(date));
            closeHandler();
          }}
          defaultValues={defaultValues}
        />
      </div>
    </>
  );
};

export default FormDate;
