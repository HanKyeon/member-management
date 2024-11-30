import MoreIcon from '@/public/icons/MoreOutlined.svg';

import { borderRadiusButton, paddingSX } from '../constant/style';

import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Button = function ({
  disabled = false,
  children = <MoreIcon />,
  className = '',
  ...rest
}: Props) {
  return (
    <button
      className={`${borderRadiusButton} ${paddingSX} text-recatch-text-hover hover:bg-recatch-text-hover active:bg-recatch-text-hover disabled:bg-recatch-text-hover duration-200 ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
