import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TableBodyRow from './TableBodyRow';

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

describe('TableBodyRow Component', () => {
  const mockEditFormOpenHandler = jest.fn();
  const mockCheckMember = jest.fn();

  beforeEach(() => {
    jest.mock('@/stores/member-store', () => ({
      useMember: () => ({
        checkMember: mockCheckMember,
      }),
    }));
  });

  test('renders the member data correctly', () => {
    render(
      <TableBodyRow
        member={{ name: 'Test Member', joinDate: '2024-12-01', checked: false }}
        idx={0}
        editFormOpenHandler={mockEditFormOpenHandler}
      />,
    );
    expect(screen.getByText('Test Member')).toBeInTheDocument();
  });

  test('calls checkMember when checkbox is clicked', async () => {
    render(
      <TableBodyRow
        member={{ name: 'Test Member', joinDate: '2024-12-01', checked: false }}
        idx={0}
        editFormOpenHandler={mockEditFormOpenHandler}
      />,
    );
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(mockCheckMember).toHaveBeenCalled();
  });
});
