'use client';

import { useController, useFormContext } from 'react-hook-form';

import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';

interface Props {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const FormInput = function ({
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
      <Input className="w-full" placeholder={placeholder} {...field} />
    </div>
  );
};

export default FormInput;
