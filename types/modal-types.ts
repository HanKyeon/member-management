import { MemberRecord } from '@/types/type';

export interface CommonModalFormProps {
  cancelHandler: () => void;
}

export interface ModalHeaderProps extends CommonModalFormProps {
  title?: string;
}

export interface ModalContainerProps extends CommonModalFormProps {
  open: boolean;

  onSubmit: (member: MemberRecord) => void;
  target?: MemberRecord;
}

export interface ModalFormProps extends CommonModalFormProps {
  onSubmit: (member: MemberRecord) => void;
  target?: MemberRecord;
}
