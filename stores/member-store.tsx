'use client';

import { DEFAULT_DATA } from '@/components/constant/value';
import { setRecordsInLocalStorage } from '@/utils/storage-utils';
import { FilterKey, FilterValue, useFilterMap } from '@/hooks/useFilterMap';
import { MemberRecord } from '@/types/type';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { isEqual } from '@/utils/member-utils';

type MemberState = {
  members: MemberRecord[];

  filterMap: Map<FilterKey, Set<FilterValue>>;
};

type MemberAction = {
  removeMember: (target: MemberRecord) => void;
  addMember: (member: MemberRecord) => void;
  checkMember: (target: MemberRecord) => void;
  toggleAllMember: () => void;
  checkEmailMember: (target: MemberRecord) => void;

  addFilter: (key: FilterKey, value: FilterValue) => void;
  removeFilter: (key: FilterKey, value: FilterValue) => void;
  toggleFilter: (key: FilterKey, value: FilterValue) => void;
};

type MemberStoreType = MemberState & MemberAction;

const MemberStore = createContext<Partial<MemberStoreType>>({});

export const MemberProvider = function ({ children }: PropsWithChildren) {
  const isPersist = process.env.NEXT_PUBLIC_STORAGE === 'local-storage';
  const [members, setMembers] = useState<MemberRecord[]>([]);
  const { filterMap, addFilter, removeFilter, toggleFilter } = useFilterMap();

  const addMember = function (target: MemberRecord) {
    setMembers(prev => {
      const newMembers = [...prev, target];
      setRecordsInLocalStorage(newMembers);
      return newMembers;
    });
  };

  const removeMember = function (target: MemberRecord) {
    setMembers(prev => {
      const newMembers = prev.filter((member, i) => isEqual(target, member));
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

  useEffect(() => {
    if (typeof window !== 'undefined' && isPersist) {
      setMembers(() => {
        const storageRecords = localStorage.getItem('records');
        if (storageRecords) {
          return JSON.parse(storageRecords);
        }
        setRecordsInLocalStorage(DEFAULT_DATA);
        return DEFAULT_DATA;
      });
    }
  }, []);

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
