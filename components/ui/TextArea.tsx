import type { TextAreaProps } from '@/types/ui-types';

import { borderRadiusLG, textBaseNormal } from '../constant/style';

const TextArea = function ({
  className = '',
  placeholder,
  defaultValue,
  ...rest
}: TextAreaProps) {
  return (
    <textarea
      className={`${borderRadiusLG} ${textBaseNormal} placeholder-recatch-text-placeholder border-[1px] border-recatch-border hover:border-recatch-primary focus:border-recatch-primary focus:shadow-input-blur text-recatch-text py-[5px] px-[12px] resize-none ${className}`}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextArea;
