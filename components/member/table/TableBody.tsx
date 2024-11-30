'use client';

import { useMember } from '@/stores/member-store';
import TableBodyRow from './TableBodyRow';
import { MemberRecord } from '@/types/type';

interface Props {
  editFormOpenHandler: (target?: MemberRecord) => void;
}

const TableBody = function ({ editFormOpenHandler }: Props) {
  const { members, filterMap } = useMember();

  return (
    <tbody>
      {members
        .filter(member => {
          for (const [key, values] of filterMap.entries()) {
            if (values.size > 0 && !values.has(member[key])) {
              return false;
            }
          }
          return true;
        })
        .map((member, idx) => (
          <TableBodyRow
            key={`${idx}-${member.name}`}
            member={member}
            editFormOpenHandler={editFormOpenHandler}
          />
        ))}
    </tbody>
  );
};

export default TableBody;
