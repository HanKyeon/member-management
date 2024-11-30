import MoreIcon from '@/public/icons/MoreOutlined.svg';
import type { ButtonProps } from '@/types/ui-types';
import { buttonClasses } from '@/utils/style-utils';

const Button = function ({
  disabled = false,
  children = <MoreIcon />,
  className = '',
  variant = 'more',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={buttonClasses[variant](className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
