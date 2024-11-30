'use client';

import { useCallback } from 'react';

import { useOverlay } from '@/hooks/useOverlay';
import { MemberProvider, useMember } from '@/stores/member-store';
import type { MemberRecord } from '@/types/type';

import MemberFormModal from './add-member-form/MemberFormModal';
import AppBar from './app-bar/AppBar';
import MemberTable from './table/MemberTable';

const Member = function () {
  const { open, openHandler, closeHandler } = useOverlay();
  const { changeMemberDetail, target, updateTargetHandler, addMember } =
    useMember();

  const editFormOpenHandler = useCallback(function (target?: MemberRecord) {
    updateTargetHandler(target);
    openHandler();
  }, []);

  const submitHandler = function (data: MemberRecord) {
    target ? changeMemberDetail(target, data) : addMember(data);
    updateTargetHandler();
    closeHandler();
  };

  return (
    <>
      <MemberFormModal
        open={open}
        cancelHandler={closeHandler}
        onSubmit={submitHandler}
        target={target}
      />
      <section className="w-full h-full flex flex-col flex-shrink-0">
        <AppBar title="회원 목록" buttonText="추가" buttonClick={openHandler} />
        <main className="w-full flex-1">
          <MemberTable editFormOpenHandler={editFormOpenHandler} />
        </main>
      </section>
    </>
  );
};

const MemberContainer = function () {
  return (
    <MemberProvider>
      <Member />
    </MemberProvider>
  );
};

export default MemberContainer;
