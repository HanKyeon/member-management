import { MemberRecord } from '@/types/type';

export interface TableProps {
  editFormOpenHandler: (target?: MemberRecord) => void;
}

export interface RowProps extends TableProps {
  member: MemberRecord;
  idx: number;
}

export interface MoreButtonProps extends TableProps {
  member: MemberRecord;
  idx: number;
}
