'use client';

import {
  borderRadiusButton,
  paddingSM,
  textBaseNormal,
} from '../constant/style';

import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const ConfirmButton = function ({
  children,
  disabled = false,
  className,
  ...rest
}: Props) {
  return (
    <button
      className={`${borderRadiusButton} ${paddingSM} ${textBaseNormal} text-recatch-text-light-solid bg-recatch-primary border-[1px] border-recatch-primary hover:bg-recatch-primary-hover hover:border-recatch-primary-hover active:bg-recatch-primary-active active:border-recatch-primary-active disabled:text-recatch-text-disabled disabled:bg-recatch-disabled disabled:border-recatch-border duration-200 ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ConfirmButton;
