'use client';

import { textBaseNormal } from '@/components/constant/style';
import { tableWidth } from '@/components/constant/table';
import { DEFAULT_COLS } from '@/components/constant/value';
import CheckBox from '@/components/ui/CheckBox';
import { useMember } from '@/stores/member-store';

import { MemberProps } from '../../../types/table-types';
import MoreButton from './MoreButton';

const TableBodyRow = function ({
  member,
  editFormOpenHandler,
  idx,
}: MemberProps) {
  const { checkMember, checkEmailMember } = useMember();
  return (
    <tr
      className={`text-recatch-text flex flex-row w-full border-b-[1px] border-b-recatch-split`}
    >
      <th
        className={`${tableWidth[0]} px-[8px] border-r-[1px] border-recatch-split py-[13px]`}
      >
        <CheckBox
          checked={member.checked}
          onChange={() => checkMember(member)}
        />
      </th>
      {DEFAULT_COLS.map((col, iidx) => {
        return (
          <th
            key={`${col.name}-${col.filterKey}-${iidx}`}
            className={`${textBaseNormal} ${tableWidth[iidx + 1]} py-[13px] px-[8px] items-center truncate`}
          >
            {col.filterKey === 'emailAgreement' ? (
              <CheckBox
                checked={member.emailAgreement}
                onChange={() => checkEmailMember(member)}
              />
            ) : (
              member?.[col.filterKey]
            )}
          </th>
        );
      })}
      <th className={`${tableWidth[7]} py-[13px] px-[8px] relative`}>
        <MoreButton
          member={member}
          editFormOpenHandler={editFormOpenHandler}
          idx={idx}
        />
      </th>
    </tr>
  );
};

export default TableBodyRow;
