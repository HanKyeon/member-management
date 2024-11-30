import { heading5 } from '@/components/constant/style';

import Button from '@/components/ui/Button';
import Plus from '@/public/icons/Plus.svg';
import { AppBarProps } from '../../../types/appbar-types';

const AppBar = function ({ buttonClick, buttonText, title }: AppBarProps) {
  return (
    <nav className="w-full py-[12px] px-[14px] flex flex-row items-center flex-shrink-0">
      <h1 className={`${heading5} block flex-1`}>{title}</h1>
      <Button
        type="button"
        variant="confirm"
        className="flex-shrink-0 flex flex-row items-center gap-[10px]"
        onClick={buttonClick}
      >
        <Plus />
        {buttonText}
      </Button>
    </nav>
  );
};

export default AppBar;
