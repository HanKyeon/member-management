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
  const { updateMemberData, target, updateTargetHandler, addMember } =
    useMember();

  const editFormOpenHandler = useCallback(function (target?: MemberRecord) {
    updateTargetHandler(target);
    openHandler();
  }, []);

  const submitHandler = function (data: MemberRecord) {
    target ? updateMemberData(target, data) : addMember(data);
    updateTargetHandler();
    closeHandler();
  };

  return (
    <>
      {/* main component */}
      <section className="w-full h-full flex flex-col flex-shrink-0">
        <AppBar title="회원 목록" buttonText="추가" buttonClick={openHandler} />
        <MemberTable editFormOpenHandler={editFormOpenHandler} />
      </section>

      {/* modal component */}
      <MemberFormModal
        open={open}
        cancelHandler={closeHandler}
        onSubmit={submitHandler}
        target={target}
      />
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
