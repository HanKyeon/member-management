import { textLgNormal, textLgStrong } from '../constant/style';

import type { LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  required?: boolean;
  className?: string;
}

const Label = function ({ required, text, className = '', ...rest }: Props) {
  return (
    <label
      className={`${textLgStrong} text-recatch-text-tertiary ${className}`}
      {...rest}
    >
      {text}{' '}
      {required && (
        <span className={`${textLgNormal} text-recatch-error`}>*</span>
      )}
    </label>
  );
};

export default Label;
