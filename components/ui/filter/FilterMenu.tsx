import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';

import MenuItem from './MenuItem';

interface Props {
  menus: { checked: boolean; desc: string; onClick: () => void }[];
  className?: string;
}

export const FilterMenu = function ({ className = '', menus = [] }: Props) {
  return (
    <ul
      className={`${borderRadiusButton} ${textBaseNormal} shadow-calendar-blur p-[8px] flex flex-col gap-[8px] w-full bg-recatch-text-light-solid ${className}`}
    >
      {menus.map((menu, idx) => {
        return (
          <MenuItem
            key={`context-${idx}-${menu.desc}`}
            desc={menu.desc}
            selected={menu.checked}
            onClick={menu.onClick}
          />
        );
      })}
    </ul>
  );
};
