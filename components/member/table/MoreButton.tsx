'use client';

import {
  borderRadiusButton,
  textBaseNormal,
} from '@/components/constant/style';
import Button from '@/components/ui/Button';
import Dim from '@/components/ui/Dim';
import { useOverlay } from '@/hooks/useOverlay';
import { useMember } from '@/stores/member-store';
import { MemberRecord } from '@/types/type';

interface Props {
  member: MemberRecord;
  editFormOpenHandler: (target?: MemberRecord) => void;
}

const MoreButton = function ({ member, editFormOpenHandler }: Props) {
  const { removeMember } = useMember();
  const { open, closeHandler, openHandler } = useOverlay();
  return (
    <>
      <Dim isOpen={open} onClose={closeHandler} />
      <Button onClick={openHandler} />
      <ul
        className={`${borderRadiusButton} ${textBaseNormal} w-[185px] shadow-calendar-blur p-[4px] flex flex-col bg-recatch-text-light-solid absolute top-[110%] right-1/2 duration-200 ${open ? 'scale-100 opacity-100 z-[700]' : 'scale-90 opacity-0 pointer-events-none z-[-200]'}`}
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
