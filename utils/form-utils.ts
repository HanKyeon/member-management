import type { MemberRecord } from '@/types/type';

export const MemberFormResolver = (data: MemberRecord) => {
  const errors: Record<string, { type?: string; message: string }> = {};
  if (!data.name) {
    errors.name = {
      type: 'required',
      message: '이름은 필수값입니다.',
    };
  }
  if (!data.joinDate) {
    errors.joinDate = {
      type: 'required',
      message: '가입일은 필수값입니다.',
    };
  }
  const values = Object.keys(errors).length === 0 ? data : {};
  return { errors, values };
};
