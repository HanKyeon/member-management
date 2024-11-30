'use client';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

import type { TableProps } from '../../../types/table-types';

const MemberTable = function ({ editFormOpenHandler }: TableProps) {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <TableHeader />
      <TableBody editFormOpenHandler={editFormOpenHandler} />
    </table>
  );
};

export default MemberTable;
