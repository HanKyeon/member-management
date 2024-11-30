import Overlay from '@/components/ui/Overlay';
import MemberForm from './MemberForm';
import { borderRadiusLG } from '@/components/constant/style';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import { MemberRecord } from '@/types/type';

interface Props {
  open: boolean;
  closeHandler: () => void;
  onSubmit: (member: MemberRecord) => void;
}

const MemberFormModal = function ({ closeHandler, open, onSubmit }: Props) {
  return (
    <Overlay isOpen={open} onClose={closeHandler}>
      <main
        className={`${borderRadiusLG} w-[520px] bg-recatch-text-light-solid`}
      >
        <ModalHeader closeHandler={closeHandler} />
        <MemberForm onSubmit={onSubmit}>
          <ModalFooter cancelHandler={closeHandler} />
        </MemberForm>
      </main>
    </Overlay>
  );
};

export default MemberFormModal;
