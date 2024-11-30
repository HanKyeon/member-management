import { ContextMenuProps, MenuItemProps } from '@/types/ui-types';
import { borderRadiusLG, borderRadiusSM } from '../constant/style';

export const ContextMenuItem = function ({
  desc,
  value,
  selected,
  onClick,
}: MenuItemProps) {
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

const ContextMenu = function ({
  menus,
  value,
  open,
  onClickMenuitem,
}: ContextMenuProps) {
  return (
    <ul
      className={`${borderRadiusLG} flex flex-col p-[4px] bg-recatch-text-light-solid shadow-calendar-blur absolute w-[198px] top-[110%] left-0 duration-200 border-recatch-border text-recatch-text ${open ? 'scale-100 opacity-100 z-[1000]' : 'scale-90 opacity-0 pointer-events-none z-[-200]'}`}
    >
      {menus.map((menu, idx) => {
        return (
          <ContextMenuItem
            key={`${menu.value}-${idx}`}
            desc={menu.desc}
            value={menu.value}
            selected={menu.value === value}
            onClick={onClickMenuitem}
          />
        );
      })}
    </ul>
  );
};

export default ContextMenu;
