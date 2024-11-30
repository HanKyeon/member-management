import { borderRadiusSM } from '../constant/style';

interface Props<T = any> {
  desc: string;
  value: T;
  selected?: boolean;
  onClick: (data: T) => void;
}

const ContextMenuItem = function <T = any>({
  desc,
  value,
  selected,
  onClick,
}: Props<T>) {
  return (
    <li
      className={`${borderRadiusSM} h-[32px] w-full py-[5px] px-[12px] cursor-pointer duration-200 hover:bg-recatch-item-hover text-recatch-text ${selected ? 'bg-recatch-bg-active text-recatch-primary hover:bg-recatch-bg-active' : ''} duration-200`}
      onClick={e => {
        e.stopPropagation();
        onClick(value);
      }}
    >
      {desc}
    </li>
  );
};

export default ContextMenuItem;
