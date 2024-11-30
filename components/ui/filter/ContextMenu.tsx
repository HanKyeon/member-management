import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';
import CheckBox from '../ChechBox';
import MenuItem from './MenuItem';

interface Props {
  menus?: {
    desc: string;
    onClick: (desc: string, idx: number) => void;
    selected?: boolean;
  }[];
  className?: string;
}

export const ContextMenu = function ({ className = '', menus }: Props) {
  return (
    <div
      className={`${borderRadiusButton} ${textBaseNormal} shadow-calendar-blur p-[8px] flex flex-col gap-[8px] w-full bg-recatch-text-light-solid ${className}`}
    >
      <MenuItem />
      <MenuItem disabled />
      <MenuItem selected />
    </div>
  );
};
