import { heading5 } from '@/components/constant/style';
import ConfirmButton from '@/components/ui/ConfirmButton';
import Plus from '@/public/icons/Plus.svg';

interface Props {
  title?: string;
  buttonText: string;
  buttonClick: () => void;
}

const MemberListHeader = function ({ buttonClick, buttonText, title }: Props) {
  return (
    <header className="w-full py-[12px] px-[14px] flex flex-row items-center flex-shrink-0">
      <h1 className={`${heading5} block flex-1`}>{title}</h1>
      <ConfirmButton
        className="flex-shrink-0 flex flex-row items-center gap-[10px]"
        onClick={buttonClick}
      >
        <Plus />
        {buttonText}
      </ConfirmButton>
    </header>
  );
};

export default MemberListHeader;
