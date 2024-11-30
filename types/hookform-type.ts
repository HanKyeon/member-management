import { DefaultDateProps } from '@/types/datepicker-types';

export interface FormCommonProps {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
}

export type FormDatePickerProps = DefaultDateProps & FormCommonProps;

export interface FormSelectProps extends FormCommonProps {
  menus?: { desc: string; value: any }[];
  onSelect?: (data: any) => void;
}
