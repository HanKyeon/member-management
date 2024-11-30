'use client';

import { useOverlay } from '@/hooks/useOverlay';
import MemberListHeader from './header/MemberListHeader';
import MemberTable from './table/MemberTable';
import { MemberProvider } from '@/stores/member-store';

import MemberFormModal from './add-member-form/MemberFormModal';

const Member = function () {
  const { open, openHandler, closeHandler } = useOverlay();
  return (
    <MemberProvider>
      <MemberFormModal
        open={open}
        closeHandler={closeHandler}
        onSubmit={data => {
          console.log(data);
          // closeHandler();
        }}
      />
      <section className="w-full h-full flex flex-col flex-shrink-0">
        <MemberListHeader
          title="회원 목록"
          buttonText="추가"
          buttonClick={openHandler}
        />
        <main className="w-full flex-1">
          <MemberTable />
        </main>
      </section>
    </MemberProvider>
  );
};

export default Member;
