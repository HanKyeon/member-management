export type FilterMenus = {
  /**
   * filter checked 여부
   */
  checked: boolean;
  /**
   * filter 설명. UI에 노출되는 값
   */
  desc: string;
  /**
   * filter item 클릭 시 실행
   */
  onClick: () => void;
}[];

export interface CommonFilterProps {
  /**
   * filtering 목록
   */
  menus: FilterMenus;
  className?: string;
}

export interface FilterProps extends CommonFilterProps {
  /**
   * filter title.
   * table head와 엮여있는 기획이라 필요
   */
  title: string;
}

export interface MenuItemProps {
  /**
   * checked 여부
   */
  checked?: boolean;
  /**
   * 디자인 시스템에 필요
   */
  disabled?: boolean;
  /**
   * 노출되는 data 부분
   */
  desc?: string;
  /**
   * 클릭 시 실행 할 추상화 부분
   */
  onClick?: () => void;
}
