import { MemberRecord } from '@/types/type';

export interface TableProps {
  /**
   * 회원 정보 수정 폼으로 열기 함수
   */
  editFormOpenHandler: (target?: MemberRecord) => void;
}

export interface MemberProps extends TableProps {
  /**
   * 멤버 데이터
   */
  member: MemberRecord;
  /**
   * 멤버의 index도 중복 확인
   */
  idx: number;
}
