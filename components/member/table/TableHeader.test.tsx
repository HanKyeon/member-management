import { render, screen } from '@testing-library/react';

import TableHeader from './TableHeader';

jest.mock('@/stores/member-store', () => ({
  useMember: () => ({
    members: [],
    filterMap: new Map(),
    toggleAllMember: jest.fn(),
  }),
}));

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));
jest.mock('../path-to-svg/Dropdown.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));
jest.mock('../path-to-svg/MoreOutlined.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('TableHeader Component', () => {
  test('renders the header correctly', () => {
    render(<TableHeader />);
    expect(screen.getByText('이름')).toBeInTheDocument();
    expect(screen.getByText('주소')).toBeInTheDocument();
    expect(screen.getByText('메모')).toBeInTheDocument();
    expect(screen.getByText('가입일')).toBeInTheDocument();
    expect(screen.getByText('직업')).toBeInTheDocument();
    expect(screen.getByText('이메일 수신 동의')).toBeInTheDocument();
  });

  // test('renders the header filter', async () => {
  //   render(<TableHeader />);
  //   const button = screen.getByTestId('name');
  //   expect(button).toBeInTheDocument();
  //   await userEvent.click(button);
  //   console.log('###', screen.getByRole('menu'));
  // });
});
