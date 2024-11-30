import CancelButton from '@/components/ui/CancelButton';
import ConfirmButton from '@/components/ui/ConfirmButton';
import { useFormContext } from 'react-hook-form';

interface Props {
  cancelHandler: () => void;
}

const ModalFooter = function ({ cancelHandler }: Props) {
  const {
    formState: { isValid },
  } = useFormContext();
  return (
    <footer className="w-full py-[12px] px-[16px] flex flex-row items-center justify-end gap-[10px] border-t-[1px] border-recatch-split bg-recatch-fill-alter">
      <CancelButton
        type="button"
        className="px-[16px] py-[5px]"
        onClick={e => {
          e.preventDefault();
          cancelHandler();
        }}
      >
        취소
      </CancelButton>
      <ConfirmButton
        type="submit"
        className="px-[16px] py-[5px]"
        disabled={!isValid}
      >
        저장
      </ConfirmButton>
    </footer>
  );
};

export default ModalFooter;
