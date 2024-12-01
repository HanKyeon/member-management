'use client';

import { useController, useFormContext } from 'react-hook-form';

import Label from '@/components/ui/Label';

import TextArea from '../TextArea';

import type { FormCommonProps } from '../../../types/hookform-type';

const FormTextArea = function ({
  name,
  label,
  required,
  placeholder = 'Input',
  className = '',
}: FormCommonProps) {
  const { control } = useFormContext();
  const { field } = useController({ control, name });
  return (
    <div className={`w-full flex flex-col items-start gap-[8px] ${className}`}>
      <Label labelText={label} required={required} className="block" />
      <TextArea className="w-full" placeholder={placeholder} {...field} />
    </div>
  );
};

export default FormTextArea;
