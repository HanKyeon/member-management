import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';
import CheckBox from '../ChechBox';

interface Props {
  selected?: boolean;
  disabled?: boolean;
}

const MenuItem = function ({ selected, disabled }: Props) {
  return (
    <div
      className={`${borderRadiusButton} w-full h-[32px] flex flex-row items-center py-[5px] px-[12px] gap-[8px] hover:bg-recatch-item-hover duration-200 ${selected ? 'bg-recatch-bg-active' : ''} ${disabled ? textBaseNormal + '!text-recatch-text-disabled' : ''}`}
    >
      <CheckBox disabled={disabled} />
      <div className="flex-1">ㅎㅇㅎㅇ</div>
    </div>
  );
};

export default MenuItem;
