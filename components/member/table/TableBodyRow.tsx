'use client';

import { textBaseNormal } from '@/components/constant/style';
import { tableWidth } from '@/components/constant/table';
import { DEFAULT_COLS } from '@/components/constant/value';
import CheckBox from '@/components/ui/ChechBox';
import { MemberRecord } from '@/types/type';
import MoreButton from './MoreButton';
import { useMember } from '@/stores/member-store';

interface Props {
  member: MemberRecord;
  editFormOpenHandler: (target?: MemberRecord) => void;
}

const TableBodyRow = function ({ member, editFormOpenHandler }: Props) {
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
            className={`${textBaseNormal} ${tableWidth[iidx + 1]} py-[13px] px-[8px] items-center`}
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
        <MoreButton member={member} editFormOpenHandler={editFormOpenHandler} />
      </th>
    </tr>
  );
};

export default TableBodyRow;
