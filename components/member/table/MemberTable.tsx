'use client';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { MemberRecord } from '@/types/type';

interface Props {
  editFormOpenHandler: (target?: MemberRecord) => void;
}

const MemberTable = function ({ editFormOpenHandler }: Props) {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <TableHeader />
      <TableBody editFormOpenHandler={editFormOpenHandler} />
    </table>
  );
};

export default MemberTable;
