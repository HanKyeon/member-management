import { textBaseNormal } from '@/components/constant/style';
import { tableWidth } from '@/components/constant/table';
import Button from '@/components/ui/Button';
import CheckBox from '@/components/ui/ChechBox';
import { useMember } from '@/stores/member-store';

const TableBody = function () {
  const { members } = useMember();
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
            <CheckBox />
          </th>
          <th
            className={`${textBaseNormal} flex felx-row text-left w-[120px] py-[13px] px-[8px] items-center`}
          >
            {member.name}
          </th>
          <th
            className={`${textBaseNormal} flex felx-row text-left flex-1 py-[13px] px-[8px] items-center`}
          >
            {member.address}
          </th>
          <th
            className={`${textBaseNormal} flex felx-row text-left flex-1 py-[13px] px-[8px] items-center`}
          >
            {member.memo}
          </th>
          <th
            className={`${textBaseNormal} flex felx-row text-left w-[200px] py-[13px] px-[8px] items-center`}
          >
            {member.joinDate}
          </th>
          <th
            className={`${textBaseNormal} flex felx-row text-left flex-1 py-[13px] px-[8px] items-center`}
          >
            {member.job}
          </th>
          <th className="flex felx-row text-left w-[150px] py-[13px] px-[8px] items-center">
            <CheckBox />
          </th>
          <th className="flex felx-row text-left w-[48px] py-[13px] px-[8px]">
            <Button />
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
