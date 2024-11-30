'use client';

import { useCallback, useState } from 'react';
import MemberListHeader from './header/MemberListHeader';
import { MemberRecord, type DefaultMemberRecord } from '@/types/type';
import MemberTable from './table/MemberTable';
import { setRecordsInLocalStorage } from '../utils/storage-utils';
import { MemberProvider } from '@/stores/member-store';

const Member = function () {
  return (
    <MemberProvider>
      <section className="w-full h-full flex flex-col flex-shrink-0">
        <MemberListHeader title="회원 목록" buttonText="추가" />
        <main className="w-full flex-1">
          <MemberTable />
        </main>
      </section>
    </MemberProvider>
  );
};

export default Member;
