'use client';

import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';
import Button from '@/components/ui/Button';
import Dim from '@/components/ui/Dim';
import { useOverlay } from '@/hooks/useOverlay';
import { useMember } from '@/stores/member-store';
import type { MemberRecord } from '@/types/type';

interface Props {
  member: MemberRecord;
  editFormOpenHandler: (target?: MemberRecord) => void;
  idx: number;
}

const MoreButton = function ({ member, editFormOpenHandler, idx }: Props) {
  const { removeMember, members, filterMap } = useMember();
  const { open, closeHandler, openHandler } = useOverlay();
  const maxRows = Math.floor(
    (document.documentElement.clientHeight - 97 - 100) / 58,
  );
  const rowsCount = members.filter(member => {
    for (const [key, values] of filterMap.entries()) {
      if (values.size > 0 && !values.has(member[key])) {
        return false;
      }
    }
    return true;
  }).length;

  return (
    <>
      <Dim isOpen={open} onClose={closeHandler} />
      <Button onClick={openHandler} />
      <ul
        className={`${borderRadiusButton} ${textBaseNormal} ${rowsCount > maxRows && idx > rowsCount - 3 ? 'bottom-[110%]' : 'top-[110%]'} inset-auto right-1/2 w-[185px] shadow-calendar-blur p-[4px] flex flex-col bg-recatch-text-light-solid absolute duration-200 ${open ? 'scale-100 opacity-100 z-[700]' : 'scale-90 opacity-0 pointer-events-none z-[-200]'}`}
      >
        <li
          className={`${textBaseNormal} w-full py-[5px] px-[12px] pb-[9px] border-b-[1px] border-b-recatch-split cursor-pointer`}
          onClick={() => {
            editFormOpenHandler(member);
            closeHandler();
          }}
        >
          수정
        </li>
        <li
          className={`${textBaseNormal} w-full py-[5px] px-[12px] pt-[9px] text-recatch-error cursor-pointer`}
          onClick={() => {
            removeMember(member);
            closeHandler();
          }}
        >
          삭제
        </li>
      </ul>
    </>
  );
};

export default MoreButton;
