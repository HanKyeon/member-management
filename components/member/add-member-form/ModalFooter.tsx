import { useFormContext } from 'react-hook-form';

import Button from '@/components/ui/Button';

import type { CommonModalFormProps } from '../../../types/modal-types';

const ModalFooter = function ({ cancelHandler }: CommonModalFormProps) {
  const {
    formState: { isValid },
  } = useFormContext();
  return (
    <footer className="w-full py-[12px] px-[16px] flex flex-row items-center justify-end gap-[10px] border-t-[1px] border-recatch-split bg-recatch-fill-alter">
      <Button
        variant="cancel"
        type="button"
        className="px-[16px] py-[5px]"
        onClick={e => {
          e.preventDefault();
          cancelHandler();
        }}
      >
        취소
      </Button>
      <Button
        variant="confirm"
        type="submit"
        className="px-[16px] py-[5px]"
        disabled={!isValid}
      >
        저장
      </Button>
    </footer>
  );
};

export default ModalFooter;
