import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MoreButton from './MoreButton';

jest.mock('@/stores/member-store', () => ({
  useMember: () => ({
    removeMember: jest.fn(),
    members: [],
    filterMap: new Map(),
  }),
}));
jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));
jest.mock('../path-to-svg/MoreOutlined.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('MoreButton Component', () => {
  const mockEditFormOpenHandler = jest.fn();

  beforeEach(() => {});

  test('renders the edit and delete options when clicked', async () => {
    render(
      <MoreButton
        member={{ name: 'Test Member', joinDate: '2024-11-30' }}
        idx={1}
        editFormOpenHandler={mockEditFormOpenHandler}
      />,
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(screen.getByText('수정')).toBeInTheDocument();
    expect(screen.getByText('삭제')).toBeInTheDocument();
  });

  test('calls editFormOpenHandler with correct data on edit', async () => {
    render(
      <MoreButton
        member={{ name: 'Test Member', joinDate: '2024-12-01' }}
        idx={1}
        editFormOpenHandler={mockEditFormOpenHandler}
      />,
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const editButton = screen.getByText('수정');
    await userEvent.click(editButton);

    expect(mockEditFormOpenHandler).toHaveBeenCalledWith({
      name: 'Test Member',
      joinDate: '2024-12-01',
    });
  });

  test('calls removeMember on delete', async () => {
    render(
      <MoreButton
        member={{ name: 'Test Member', joinDate: '2024-12-02' }}
        idx={1}
        editFormOpenHandler={mockEditFormOpenHandler}
      />,
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    const deleteButton = screen.getByText('삭제');
    await userEvent.click(deleteButton);

    const menu = screen.getByRole('menu');

    expect(menu.classList.contains('z-[-200]')).toEqual(true);
  });
});
