import { borderRadiusLG } from '../constant/style';
import ContextMenuItem from './ContextMenuItem';

interface Props<T = any> {
  open: boolean;
  value: any;
  menus: { desc: string; value: T }[];
  onClickMenuitem: (data: T) => void;
}

const ContextMenu = function <T = any>({
  menus,
  value,
  open,
  onClickMenuitem,
}: Props<T>) {
  return (
    <ul
      className={`${borderRadiusLG} flex flex-col p-[4px] bg-recatch-text-light-solid shadow-calendar-blur absolute w-[198px] top-[110%] left-0 duration-200 border-recatch-border text-recatch-text ${open ? 'scale-100 opacity-100 z-[1000]' : 'scale-90 opacity-0 pointer-events-none z-[-200]'}`}
    >
      {menus.map((menu, idx) => {
        return (
          <ContextMenuItem<T>
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
