import { setRecordsInLocalStorage } from '@/components/utils/storage-utils';
import { MemberRecord } from '@/types/type';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type MemberState = { members: MemberRecord[] };

type MemberAction = {
  removeMember: (idx: number) => void;
  addMember: (member: MemberRecord) => void;
  checkMember: (idx: number) => void;
  checkEmailMember: (idx: number) => void;
};

type MemberStore = MemberState & MemberAction;

const MemberStore = createContext<Partial<MemberStore>>({});

const DEFAULT_DATA: MemberRecord[] = [
  {
    checked: false,
    name: 'John Doe',
    address: '서울 강남구',
    memo: '외국인',
    joinDate: '2024-10-02',
    job: '개발자',
    agreeToReceiveEmail: true,
  },
  {
    checked: false,
    name: 'Foo Bar',
    address: '서울 서초구',
    memo: '한국인',
    joinDate: '2024-10-01',
    job: 'PO',
    agreeToReceiveEmail: false,
  },
];

export const MemberProvider = function ({ children }: PropsWithChildren) {
  const isPersist = process.env.NEXT_PUBLIC_STORAGE === 'local-storage';
  const [members, setMembers] = useState<MemberRecord[]>(() => {
    if (isPersist) {
      const storageRecords = localStorage.getItem('records');
      if (storageRecords) {
        return JSON.parse(storageRecords);
      }
      setRecordsInLocalStorage(DEFAULT_DATA);
    }
    return DEFAULT_DATA;
  });

  const removeMember = function (idx: number) {
    setMembers(prev => {
      const newMembers = prev.filter((_, i) => i !== idx);
      setRecordsInLocalStorage(newMembers);
      return newMembers;
    });
  };

  const addMember = function (member: MemberRecord) {
    setMembers(prev => {
      const newMembers = [...prev, member];
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

  // ID가 없기에 index로 변경
  const checkEmailMember = function (idx: number) {
    setMembers(prev => {
      const newMembers = prev.map((member, i) =>
        idx === i
          ? { ...member, agreeToReceiveEmail: !member.agreeToReceiveEmail }
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
        addMember,
        checkEmailMember,
        checkMember,
        members,
        removeMember,
      }}
    >
      {children}
    </MemberStore.Provider>
  );
};

export const useMember: () => MemberStore = function () {
  const store = useContext(MemberStore);
  if (!store) {
    throw new Error(`useMember must use with <MemberProvider>.`);
  }
  return store as MemberStore;
};
