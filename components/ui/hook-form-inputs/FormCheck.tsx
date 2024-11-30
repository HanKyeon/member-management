'use client';

import Label from '@/components/ui/Label';
import { useController, useFormContext } from 'react-hook-form';
import CheckBox from '../ChechBox';

interface Props {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const FormCheckBox = function ({
  name,
  label,
  required,
  placeholder = 'Input',
  className = '',
}: Props) {
  const { control } = useFormContext();
  const { field } = useController({ control, name });
  return (
    <div className={`w-full flex flex-col items-start gap-[8px] ${className}`}>
      <Label text={label} required={required} className="block" />
      <CheckBox placeholder={placeholder} {...field} />
    </div>
  );
};

export default FormCheckBox;
