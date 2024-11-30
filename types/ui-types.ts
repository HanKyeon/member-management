import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

export type ButtonVariant = 'more' | 'cancel' | 'confirm' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼 종류 추상화
   */
  variant?: ButtonVariant;
}

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * label과 id로 엮어줘야 seo에 좋음
   */
  labelId?: string;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface ContextMenuProps {
  /**
   * 메뉴 열린 상태. for style
   */
  open: boolean;
  /**
   * 선택된 값
   */
  value: any;
  /**
   * menu 목록. desc가 노출부 value가 제출할 데이터
   */
  menus: { desc: string; value: any }[];
  /**
   * menuitem 클릭 시 실행 될 함수
   */
  onClickMenuitem: (data: any) => void;
}

export interface MenuItemProps {
  /**
   * ui 노출부
   */
  desc: string;
  /**
   * 제출할 데이터
   */
  value: any;
  /**
   * 선택된 상태인지
   */
  selected?: boolean;
  /**
   * 메뉴 클릭 시 실행.
   */
  onClick: (data: any) => void;
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Label title
   */
  labelText?: string;
  /**
   * required 여부. red dot 차이
   */
  required?: boolean;
}

export interface OverlayProps {
  /**
   * overlay 추상화
   */
  variant?: 'dim' | 'modal';
  /**
   * overlay 렌더링 여부
   */
  isOpen: boolean;
  /**
   * overlay 닫기
   */
  onClose: () => void;
  /**
   * overlay 클릭해도 닫히지 않도록 하는 변수
   */
  dimCloseBlock?: boolean;
  className?: string;
}

export interface SelectProps {
  /**
   * select 목록. 확장성을 위해 any로 우선 선언
   */
  menus?: { desc: string; value: any }[];
  /**
   * 선택된 데이터. 확장성을 위해 any로 선언
   */
  value?: any;
  /**
   * 목록 클릭 시 실행할 함수.
   */
  onSelect?: (data: any) => void;
}
