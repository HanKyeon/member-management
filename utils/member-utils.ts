import { MemberRecord } from '@/types/type';

/**
 * 두 멤버 비교 후 같은지 반환
 * @param {MemberRecord} member1
 * @param {MemberRecord} member2
 * @returns {boolean}
 */
export const isEqual = function (member1: MemberRecord, member2: MemberRecord) {
  const keys1 = Object.keys(member1);
  const keys2 = Object.keys(member2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(
    key => member2.hasOwnProperty(key) && member1[key] === member2[key],
  );
};
