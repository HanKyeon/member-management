import type { MemberRecord } from '@/types/type';

const isPersist = process.env.NEXT_PUBLIC_STORAGE === 'local-storage';

/**
 * 데이터를 로컬 스토리지에 저장
 * @param {MemberRecord[]} data - 로컬 스토리지에 저장할 MemberRecord[]
 */
export const setRecordsInLocalStorage = function (data: MemberRecord[]) {
  if (isPersist) localStorage.setItem('records', JSON.stringify(data));
};
