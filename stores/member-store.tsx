'use client';

import { DEFAULT_DATA } from '@/components/constant/value';
import { setRecordsInLocalStorage } from '@/components/utils/storage-utils';
import { FilterKey, FilterValue, useFilterMap } from '@/hooks/useFilterMap';
import { MemberRecord } from '@/types/type';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type MemberState = {
  members: MemberRecord[];

  filterMap: Map<FilterKey, Set<FilterValue>>;
};

type MemberAction = {
  removeMember: (idx: number) => void;
  addMember: (member: MemberRecord) => void;
  checkMember: (idx: number) => void;
  toggleAllMember: () => void;
  checkEmailMember: (idx: number) => void;

  addFilter: (key: FilterKey, value: FilterValue) => void;
  removeFilter: (key: FilterKey, value: FilterValue) => void;
  toggleFilter: (key: FilterKey, value: FilterValue) => void;
};

type MemberStoreType = MemberState & MemberAction;

const MemberStore = createContext<Partial<MemberStoreType>>({});

export const MemberProvider = function ({ children }: PropsWithChildren) {
  const isPersist = process.env.NEXT_PUBLIC_STORAGE === 'local-storage';
  const [members, setMembers] = useState<MemberRecord[]>(() => {
    if (typeof window !== 'undefined' && isPersist) {
      const storageRecords = localStorage.getItem('records');
      if (storageRecords) {
        return JSON.parse(storageRecords);
      }
      setRecordsInLocalStorage(DEFAULT_DATA);
    }
    return DEFAULT_DATA;
  });
  const { filterMap, addFilter, removeFilter, toggleFilter } = useFilterMap();

  const addMember = function (member: MemberRecord) {
    setMembers(prev => {
      const newMembers = [...prev, member];
      setRecordsInLocalStorage(newMembers);
      return newMembers;
    });
  };

  const removeMember = function (idx: number) {
    setMembers(prev => {
      const newMembers = prev.filter((_, i) => i !== idx);
      setRecordsInLocalStorage(newMembers);
      return newMembers;
    });
  };

  // ID가 없기에 index로 변경
  const checkMember = function (idx: number) {
    setMembers(prev => {
      const newMembers = prev.map((member, i) =>
        idx === i ? { ...member, checked: !member.checked } : member,
      );
      setRecordsInLocalStorage(newMembers);
      return newMembers;
    });
  };

  const toggleAllMember = function () {
    const hasNotChecked = !members.find(member => !member.checked);
    setMembers(prev =>
      prev.map(member => ({
        ...member,
        checked: hasNotChecked ? false : true,
      })),
    );
  };

  // ID가 없기에 index로 변경
  const checkEmailMember = function (idx: number) {
    setMembers(prev => {
      const newMembers = prev.map((member, i) =>
        idx === i
          ? { ...member, emailAgreement: !member.emailAgreement }
          : member,
      );
      if (isPersist) {
        localStorage.setItem('records', JSON.stringify(newMembers));
      }
      return newMembers;
    });
  };

  return (
    <MemberStore.Provider
      value={{
        members,
        filterMap,
        addMember,
        removeMember,
        checkMember,
        toggleAllMember,
        checkEmailMember,
        addFilter,
        removeFilter,
        toggleFilter,
      }}
    >
      {children}
    </MemberStore.Provider>
  );
};

export const useMember: () => MemberStoreType = function () {
  const store = useContext(MemberStore);
  if (!store) {
    throw new Error(`useMember must use with <MemberProvider>.`);
  }
  return store as MemberStoreType;
};
