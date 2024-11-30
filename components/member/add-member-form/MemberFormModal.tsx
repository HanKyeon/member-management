import { borderRadiusLG } from '@/components/constant/style';
import Overlay from '@/components/ui/Overlay';

import MemberForm from './MemberForm';
import ModalHeader from './ModalHeader';

import type { ModalContainerProps } from '../../../types/modal-types';

const MemberFormModal = function ({
  cancelHandler,
  open,
  onSubmit,
  target,
}: ModalContainerProps) {
  return (
    <Overlay variant="modal" isOpen={open} onClose={cancelHandler}>
      <main
        className={`${borderRadiusLG} w-[520px] bg-recatch-text-light-solid`}
      >
        <ModalHeader
          cancelHandler={cancelHandler}
          title={target ? '회원 수정' : '회원 추가'}
        />
        <MemberForm
          onSubmit={onSubmit}
          target={target}
          cancelHandler={cancelHandler}
        />
      </main>
    </Overlay>
  );
};

export default MemberFormModal;
