'use client';

import { useMember } from '@/stores/member-store';
import TableBodyRow from './TableBodyRow';

const TableBody = function () {
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
          <TableBodyRow key={`${idx}-${member.name}`} member={member} />
        ))}
    </tbody>
  );
};

export default TableBody;
