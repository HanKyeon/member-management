import Overlay from '@/components/ui/Overlay';
import MemberForm from './MemberForm';
import { borderRadiusLG } from '@/components/constant/style';
import ModalHeader from './ModalHeader';
import { MemberRecord } from '@/types/type';

interface Props {
  open: boolean;
  closeHandler: () => void;
  onSubmit: (member: MemberRecord) => void;
  member?: MemberRecord;
}

const MemberFormModal = function ({
  closeHandler,
  open,
  onSubmit,
  member,
}: Props) {
  return (
    <Overlay isOpen={open} onClose={closeHandler}>
      <main
        className={`${borderRadiusLG} w-[520px] bg-recatch-text-light-solid`}
      >
        <ModalHeader closeHandler={closeHandler} isEdit={!!member} />
        <MemberForm
          onSubmit={onSubmit}
          member={member}
          cancelHandler={closeHandler}
        />
      </main>
    </Overlay>
  );
};

export default MemberFormModal;
