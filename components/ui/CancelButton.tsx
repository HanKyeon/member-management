'use client';

import { ButtonHTMLAttributes } from 'react';
import {
  borderRadiusButton,
  paddingSM,
  textBaseNormal,
} from '../constant/style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const CancelButton = function ({
  children,
  disabled = false,
  className,
  ...rest
}: Props) {
  return (
    <button
      className={`${borderRadiusButton} ${paddingSM} ${textBaseNormal} text-recatch-text-secondary bg-recatch-text-light-solid border-[1px] border-recatch-border hover:bg-recatch-text-hover active:bg-recatch-text-tertiary disabled:text-recatch-text-disabled disabled:bg-recatch-disabled duration-200 ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CancelButton;
