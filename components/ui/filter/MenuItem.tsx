import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';

import CheckBox from '../ChechBox';

interface Props {
  selected?: boolean;
  disabled?: boolean;
  desc?: string;
  onClick?: () => void;
}

const MenuItem = function ({ desc, selected, disabled, onClick }: Props) {
  return (
    <li
      className={`${borderRadiusButton} w-full h-[32px] flex flex-row items-center py-[5px] px-[12px] gap-[8px] hover:bg-recatch-item-hover duration-200 ${selected ? 'bg-recatch-bg-active' : ''} ${disabled ? textBaseNormal + '!text-recatch-text-disabled' : ''}`}
      onClick={e => {
        onClick?.();
      }}
    >
      <CheckBox disabled={disabled} checked={selected} onChange={onClick} />
      <div className="flex-1 truncate">{desc}</div>
    </li>
  );
};

export default MenuItem;
