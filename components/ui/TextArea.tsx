import { type TextareaHTMLAttributes } from 'react';
import { borderRadiusLG, textBaseNormal } from '../constant/style';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  placeholder?: string;
  defaultValue?: string;
}

const TextArea = function ({
  className = '',
  placeholder,
  defaultValue,
  ...rest
}: Props) {
  return (
    <textarea
      className={`${borderRadiusLG} ${textBaseNormal} placeholder-recatch-text-placeholder border-[1px] border-recatch-border hover:border-recatch-primary focus:border-recatch-primary focus:shadow-input-blur text-recatch-text py-[5px] px-[12px] ${className}`}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextArea;