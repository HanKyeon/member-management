'use client';

import type { MemberRecord } from '@/types/type';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

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
