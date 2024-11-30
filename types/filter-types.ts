export type FilterMenus = {
  checked: boolean;
  desc: string;
  onClick: () => void;
}[];

export interface CommonFilterProps {
  menus: FilterMenus;
  className?: string;
}

export interface FilterProps extends CommonFilterProps {
  title: string;
}

export interface MenuItemProps {
  checked?: boolean;
  disabled?: boolean;
  desc?: string;
  onClick?: () => void;
}
