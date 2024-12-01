import { render, screen } from '@testing-library/react';

import MemberTable from './MemberTable';

jest.mock('@/stores/member-store', () => ({
  useMember: () => ({
    members: [],
    filterMap: new Map(),
    toggleAllMember: jest.fn(),
  }),
}));
jest.mock('../path-to-svg/Dropdown.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));
jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('MemberTable Component', () => {
  const mockHandler = jest.fn();
  test('renders the table correctly', () => {
    render(<MemberTable editFormOpenHandler={mockHandler} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('includes a header and body section', () => {
    render(<MemberTable editFormOpenHandler={jest.fn()} />);

    const header = screen.getByTestId('table-head');
    const body = screen.getByTestId('table-body');

    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});
