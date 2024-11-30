import { textBaseNormal } from '@/components/constant/style';
import { tableWidth } from '@/components/constant/table';
import { DEFAULT_COLS } from '@/components/constant/value';
import Button from '@/components/ui/Button';
import CheckBox from '@/components/ui/ChechBox';
import { useMember } from '@/stores/member-store';

const TableBody = function () {
  const { members, checkMember, checkEmailMember } = useMember();
  return (
    <tbody>
      {members.map((member, idx) => (
        <tr
          className={`text-recatch-text flex flex-row w-full border-b-[1px] border-b-recatch-split`}
          key={`${idx}`}
        >
          <th
            className={`${tableWidth[0]} px-[8px] border-r-[1px] border-recatch-split py-[13px]`}
          >
            <CheckBox
              checked={member.checked}
              onChange={() => checkMember(idx)}
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
                    onChange={() => checkEmailMember(idx)}
                  />
                ) : (
                  member?.[col.filterKey]
                )}
              </th>
            );
          })}
          <th className={`${tableWidth[7]} py-[13px] px-[8px]`}>
            <Button />
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
