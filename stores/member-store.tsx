'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { DEFAULT_DATA } from '@/components/constant/value';
import type { FilterKey, FilterValue } from '@/hooks/useFilterMap';
import { useFilterMap } from '@/hooks/useFilterMap';
import type { MemberRecord } from '@/types/type';
import { isEqual } from '@/utils/member-utils';
import { setRecordsInLocalStorage } from '@/utils/storage-utils';

import type { PropsWithChildren } from 'react';

type MemberState = {
  members: MemberRecord[];

  filterMap: Map<FilterKey, Set<FilterValue>>;

  target?: MemberRecord;
};

type MemberAction = {
  removeMember: (target: MemberRecord) => void;
  addMember: (member: MemberRecord) => void;
  checkMember: (target: MemberRecord) => void;
  toggleAllMember: () => void;
  checkEmailMember: (target: MemberRecord) => void;
  changeMemberDetail: (target: MemberRecord, value: MemberRecord) => void;

  addFilter: (key: FilterKey, value: FilterValue) => void;
  removeFilter: (key: FilterKey, value: FilterValue) => void;
  toggleFilter: (key: FilterKey, value: FilterValue) => void;

  updateTargetHandler: (data?: MemberRecord) => void;
};

type MemberStoreType = MemberState & MemberAction;

const MemberStore = createContext<Partial<MemberStoreType>>({});

export const MemberProvider = function ({ children }: PropsWithChildren) {
  const isPersist = process.env.NEXT_PUBLIC_STORAGE === 'local-storage';
  const { filterMap, addFilter, removeFilter, toggleFilter } = useFilterMap();
  const [members, setMembers] = useState<MemberRecord[]>([]);
  const [target, setTarget] = useState<MemberRecord | undefined>();

  const updateTargetHandler = function (data?: MemberRecord) {
    setTarget(data);
  };

  const addMember = function (target: MemberRecord) {
    setMembers(prev => {
      const newMembers = [...prev, target];
      setRecordsInLocalStorage(newMembers);
      return newMembers;
    });
  };

  const removeMember = function (target: MemberRecord) {
    setMembers(prev => {
      const newMembers = prev.filter((member, i) => !isEqual(target, member));
      setRecordsInLocalStorage(newMembers);
      return newMembers;
    });
  };

  // ID가 없기에 index로 변경
  const checkMember = function (target: MemberRecord) {
    setMembers(prev => {
      const newMembers = prev.map(member =>
        isEqual(target, member)
          ? { ...member, checked: !member.checked }
          : member,
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
  const checkEmailMember = function (target: MemberRecord) {
    setMembers(prev => {
      const newMembers = prev.map(member =>
        isEqual(target, member)
          ? { ...member, emailAgreement: !member.emailAgreement }
          : member,
      );
      setRecordsInLocalStorage(newMembers);
      return newMembers;
    });
  };

  const changeMemberDetail = function (
    target: MemberRecord,
    value: MemberRecord,
  ) {
    setMembers(prev => {
      const newMembers = prev.map(member =>
        isEqual(target, member) ? { ...member, ...value } : member,
      );
      setRecordsInLocalStorage(newMembers);
      return newMembers;
    });
  };

  useEffect(() => {
    setMembers(() => {
      if (typeof window !== 'undefined' && isPersist) {
        const storageRecords = localStorage.getItem('records');
        if (storageRecords) {
          return JSON.parse(storageRecords);
        }
        setRecordsInLocalStorage(DEFAULT_DATA);
      }
      return DEFAULT_DATA;
    });
  }, []);

  return (
    <MemberStore.Provider
      value={{
        members,
        filterMap,
        target,
        addMember,
        removeMember,
        checkMember,
        toggleAllMember,
        checkEmailMember,
        changeMemberDetail,
        addFilter,
        removeFilter,
        toggleFilter,
        updateTargetHandler,
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
