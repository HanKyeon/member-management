import { MemberRecord } from '@/types/type';

const isPersist = process.env.NEXT_PUBLIC_STORAGE === 'local-storage';

export const setRecordsInLocalStorage = function (data: MemberRecord[]) {
  if (isPersist) localStorage.setItem('records', JSON.stringify(data));
};
