import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';

import { MenuItemProps } from '../../../types/filter-types';
import CheckBox from '../CheckBox';

const FilterMenuIcon = function ({
  desc,
  checked,
  disabled,
  onClick,
}: MenuItemProps) {
  return (
    <li
      className={`${borderRadiusButton} w-full h-[32px] flex flex-row items-center py-[5px] px-[12px] gap-[8px] hover:bg-recatch-item-hover duration-200 ${checked ? 'bg-recatch-bg-active' : ''} ${disabled ? textBaseNormal + '!text-recatch-text-disabled' : ''}`}
      onClick={e => {
        onClick?.();
      }}
    >
      <CheckBox disabled={disabled} checked={checked} onChange={onClick} />
      <div className="flex-1 truncate">{desc}</div>
    </li>
  );
};

export default FilterMenuIcon;
