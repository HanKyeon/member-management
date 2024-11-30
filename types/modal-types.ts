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
  /**
   * 수정 시 변경 할 대상
   */
  target?: MemberRecord;
}

export interface ModalFormProps extends CommonModalFormProps {
  onSubmit: (member: MemberRecord) => void;
  /**
   * 수정 시 변경 할 대상
   */
  target?: MemberRecord;
}
