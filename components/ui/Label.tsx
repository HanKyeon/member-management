import { LabelProps } from '@/types/ui-types';
import { textLgNormal, textLgStrong } from '../constant/style';

const Label = function ({
  required,
  labelText,
  className = '',
  ...rest
}: LabelProps) {
  return (
    <label
      className={`${textLgStrong} text-recatch-text-tertiary ${className}`}
      {...rest}
    >
      {labelText}{' '}
      {required && (
        <span className={`${textLgNormal} text-recatch-error`}>*</span>
      )}
    </label>
  );
};

export default Label;
