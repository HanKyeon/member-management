import CancelButton from '@/components/ui/CancelButton';
import ConfirmButton from '@/components/ui/ConfirmButton';

interface Props {
  cancelHandler: () => void;
}

const ModalFooter = function ({ cancelHandler }: Props) {
  return (
    <footer className="w-full py-[12px] px-[16px] flex flex-row items-center justify-end gap-[10px] border-t-[1px] border-recatch-split bg-recatch-fill-alter">
      <CancelButton
        className="px-[16px] py-[5px]"
        onClick={e => {
          e.preventDefault();
          cancelHandler();
        }}
      >
        취소
      </CancelButton>
      <ConfirmButton className="px-[16px] py-[5px]">저장</ConfirmButton>
    </footer>
  );
};

export default ModalFooter;
