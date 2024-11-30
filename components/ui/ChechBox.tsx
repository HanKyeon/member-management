import { InputHTMLAttributes } from 'react';

import Check from '@/public/icons/Check.svg';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
}

const CheckBox = ({ className = '', disabled = false, ...rest }: Props) => {
  return (
    <div
      className={`flex items-center justify-center w-[16px] h-[16px] ${className}`}
    >
      <label className="relative flex items-center justify-center w-full h-full cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          disabled={disabled}
          {...rest}
        />
        <div className="w-full h-full bg-recatch-text-light-solid border-[1px] border-recatch-border rounded-[6px] peer-checked:bg-recatch-primary peer-checked:border-recatch-primary text-recatch-text-light-solid flex items-center justify-center transition-all duration-200 peer-disabled:bg-recatch-disabled peer-disabled:text-recatch-disabled peer-disabled:stroke-none">
          <Check />
        </div>
      </label>
    </div>
  );
};

export default CheckBox;
