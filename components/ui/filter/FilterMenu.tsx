import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';

import { CommonFilterProps } from '../../../types/filter-types';
import FilterMenuIcon from './FilterMenuItem';

export const FilterMenu = function ({
  className = '',
  menus = [],
}: CommonFilterProps) {
  return (
    <ul
      className={`${borderRadiusButton} ${textBaseNormal} shadow-calendar-blur p-[8px] flex flex-col gap-[8px] w-full bg-recatch-text-light-solid ${className} max-h-[200px] overflow-y-auto`}
    >
      {menus.map((menu, idx) => {
        return (
          <FilterMenuIcon
            key={`context-${idx}-${menu.desc}`}
            desc={menu.desc || '없음'}
            checked={menu.checked}
            onClick={menu.onClick}
          />
        );
      })}
    </ul>
  );
};
