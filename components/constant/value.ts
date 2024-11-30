import { FilterKey } from '@/hooks/useFilterMap';
import { Job, MemberRecord } from '@/types/type';

export const DEFAULT_COLS: {
  name: string;
  filterKey: FilterKey;
}[] = [
  { filterKey: 'name', name: '이름' },
  { filterKey: 'address', name: '주소' },
  { filterKey: 'memo', name: '메모' },
  { filterKey: 'joinDate', name: '가입일' },
  { filterKey: 'job', name: '직업' },
  { filterKey: 'emailAgreement', name: '이메일 수신 동의' },
];

export const DEFAULT_DATA: MemberRecord[] = [
  {
    checked: false,
    name: 'John Doe',
    address: '서울 강남구',
    memo: '외국인',
    joinDate: '2024-10-02',
    job: '개발자',
    emailAgreement: true,
  },
  {
    checked: false,
    name: 'Foo Bar',
    address: '서울 서초구',
    memo: '한국인',
    joinDate: '2024-10-01',
    job: 'PO',
    emailAgreement: false,
  },
];

export const DEFAULT_JOBS: {
  desc: string;
  value: Job;
}[] = [
  { desc: '개발자', value: '개발자' },
  { desc: 'PO', value: 'PO' },
  { desc: '디자이너', value: '디자이너' },
];
