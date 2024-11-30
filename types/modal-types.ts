import type { MemberRecord } from '@/types/type';

export interface CommonModalFormProps {
  /**
   * 취소 함수
   */
  cancelHandler: () => void;
}

export interface ModalHeaderProps extends CommonModalFormProps {
  /**
   * 모달 제목
   */
  title?: string;
}

export interface ModalContainerProps extends CommonModalFormProps {
  /**
   * 모달 열렸는지 여부. css를 위해 필요.
   */
  open: boolean;
  /**
   * 제출 시 실행 할 함수
   */
  onSubmit: (member: MemberRecord) => void;
  /**
   * 회원 정보 수정 시 변경 할 대상
   */
  target?: MemberRecord;
}

export interface ModalFormProps extends CommonModalFormProps {
  /**
   * 제출 시 실행 할 함수
   */
  onSubmit: (member: MemberRecord) => void;
  /**
   * 회원 정보 수정 시 변경 할 대상
   */
  target?: MemberRecord;
}
