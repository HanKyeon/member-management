'use client';

import { useMember } from '@/stores/member-store';
import { type MemberRecord } from '@/types/type';

import TableBodyRow from './TableBodyRow';

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
            idx={idx}
          />
        ))}
    </tbody>
  );
};

export default TableBody;
