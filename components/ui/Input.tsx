import { InputProps } from '@/types/ui-types';
import { borderRadiusButton, textBaseNormal } from '../constant/style';

const Input = function ({
  className = '',
  placeholder,
  defaultValue,
  ...rest
}: InputProps) {
  return (
    <input
      className={`${borderRadiusButton} ${textBaseNormal} placeholder-recatch-text-placeholder border-[1px] border-recatch-border hover:border-recatch-primary focus:border-recatch-primary focus:shadow-input-blur text-recatch-text py-[5px] px-[12px] ${className}`}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
