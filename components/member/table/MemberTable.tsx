'use client';

import { TableProps } from '../../../types/table-types';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const MemberTable = function ({ editFormOpenHandler }: TableProps) {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <TableHeader />
      <TableBody editFormOpenHandler={editFormOpenHandler} />
    </table>
  );
};

export default MemberTable;
