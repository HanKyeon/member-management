import { DefaultDateProps } from '@/types/datepicker-types';

export interface FormCommonProps {
  /**
   * label과 합쳐 렌더링 하기 때문에 label이 필요
   */
  label: string;
  /**
   * useController에 필요한 name
   */
  name: string;
  /**
   * label에 required 여부 관리
   */
  required?: boolean;
  className?: string;
  placeholder?: string;
}

export type FormDatePickerProps = DefaultDateProps & FormCommonProps;

export interface FormSelectProps extends FormCommonProps {
  /**
   * 직업 목록. desc가 노출부, value가 실제 form에서 갖는 데이터
   */
  menus?: { desc: string; value: any }[];
  /**
   * menu item 클릭 시 실행
   */
  onSelect?: (data: any) => void;
}
