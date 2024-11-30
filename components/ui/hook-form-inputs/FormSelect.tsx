'use client';

import { useOverlay } from '@/hooks/useOverlay';

import { useEffect, useRef } from 'react';

import DrowdownIcon from '@/public/icons/Dropdown.svg';
import { DEFAULT_JOBS } from '@/components/constant/value';
import { borderRadiusButton } from '@/components/constant/style';
import ContextMenu from '../ContextMenu';
import { useController, useFormContext } from 'react-hook-form';
import Label from '../Label';

interface Props<T = any> {
  menus?: { desc: string; value: any }[];
  onSelect?: (data: T) => void;
  name: string;
  className?: string;
  label: string;
  required?: boolean;
}

const FormSelect = function ({
  name,
  label,
  required,
  className = '',
  menus,
}: Props) {
  return (
    <div className={`w-full flex flex-col items-start gap-[8px] ${className}`}>
      <Label text={label} required={required} className="block" />
      <Select label={label} name={name} menus={menus} />
    </div>
  );
};

const Select = function <T = any>({
  menus = DEFAULT_JOBS,
  name,
  className = '',
}: Props<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { open, closeHandler, toggleHandler } = useOverlay();

  const { setValue, control } = useFormContext();
  const { field } = useController({ control, name });

  const selectHandler = function (data: T) {
    setValue(name, data);
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
        {menus.find(menu => menu.value === field.value)?.desc ?? ''}
      </span>
      <div className="flex-shrink-0 w-[16px] h-[16px] flex items-center justify-center">
        <DrowdownIcon />
      </div>
      <ContextMenu<T>
        menus={menus}
        open={open}
        value={field.value}
        onClickMenuitem={selectHandler}
      />
    </div>
  );
};

export default FormSelect;
