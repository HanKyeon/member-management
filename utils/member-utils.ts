import { MemberRecord } from '@/types/type';

export const isEqual = function (member1: MemberRecord, member2: MemberRecord) {
  const keys1 = Object.keys(member1);
  const keys2 = Object.keys(member2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(
    key => member2.hasOwnProperty(key) && member1[key] === member2[key],
  );
};
