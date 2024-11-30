import { textBaseStrong } from '@/components/constant/style';
import Close from '@/public/icons/Close.svg';

import type { ModalHeaderProps } from '../../../types/modal-types';

const ModalHeader = function ({
  title = '회원 추가',
  cancelHandler,
}: ModalHeaderProps) {
  return (
    <header
      className={`${textBaseStrong} w-full py-[12px] px-[16px] flex flex-row items-center gap-[10px]`}
    >
      <h1 className="flex-1">{title}</h1>
      <button className="w-[22px] h-[22px]" onClick={cancelHandler}>
        <Close />
      </button>
    </header>
  );
};

export default ModalHeader;
