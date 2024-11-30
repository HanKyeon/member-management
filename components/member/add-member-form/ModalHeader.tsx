import { textBaseStrong } from '@/components/constant/style';

import Close from '@/public/icons/Close.svg';

interface Props {
  closeHandler: () => void;
  isEdit?: boolean;
}

const ModalHeader = function ({ closeHandler, isEdit }: Props) {
  return (
    <header
      className={`${textBaseStrong} w-full py-[12px] px-[16px] flex flex-row items-center gap-[10px]`}
    >
      <h1 className="flex-1">{isEdit ? '회원 수정' : '회원 추가'}</h1>
      <button className="w-[22px] h-[22px]" onClick={closeHandler}>
        <Close />
      </button>
    </header>
  );
};

export default ModalHeader;
