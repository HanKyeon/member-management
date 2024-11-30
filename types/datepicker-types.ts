export interface DefaultDateProps {
  defaultValues?: Date;
}

export interface WeekDaysProps {
  weekdays: string[];
}

export interface DatePickerHeaderProps {
  currentDate: Date;
  locale: string;
  handleMonth: (month: number) => () => void;
}

export interface CalendarProps extends DefaultDateProps {
  className?: string;
  locale?: string;
  onItemClick?: (date: Date) => void;
}
