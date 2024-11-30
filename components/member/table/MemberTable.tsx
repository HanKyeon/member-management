import { DefaultMemberRecord } from '@/types/type';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const MemberTable = function () {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default MemberTable;
