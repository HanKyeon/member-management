export interface DefaultMemberRecord {
  /**
   * 이름, required
   */
  name: string;
  /**
   * 주소, optional
   */
  address?: string;
  /**
   * 메모, optional
   */
  memo?: string;
  /**
   * 가입일, required. 호환성을 위해 ISODateString 형태로 저장.
   */
  joinDate: string;
  /**
   * 직업, optional
   */
  job?: '개발자' | 'PO' | '디자이너';
  /**
   * 이메일 수신 동의, optional
   */
  agreeToReceiveEmail?: boolean;
}

export interface MemberRecord extends DefaultMemberRecord {
  checked?: boolean;
}