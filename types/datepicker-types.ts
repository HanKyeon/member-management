export interface DefaultDateProps {
  /**
   * controlled 방식으로 Date를 관리하지 않기 때문에 optional하게 받음.
   */
  defaultValues?: Date;
}

export interface WeekDaysProps {
  /**
   * 일월화수목금토, locale에 따라 다름
   */
  weekdays: string[];
}

export interface DatePickerHeaderProps {
  /**
   * header 제목 Decenber 1st
   */
  currentDate: Date;
  /**
   * ko-KR en-US 등
   */
  locale: string;
  /**
   * 개월 단위 이동
   */
  handleMonth: (month: number) => () => void;
}

export interface CalendarProps extends DefaultDateProps {
  /**
   * class 이름
   */
  className?: string;
  /**
   * ko-KR en-US 등
   */
  locale?: string;
  /**
   * 날짜 클릭 시 실행
   */
  onItemClick?: (date: Date) => void;
}
