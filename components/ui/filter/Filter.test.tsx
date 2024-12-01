import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from './Filter';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('Filter Component', () => {
  const mockMenus = [
    { desc: 'Option 1', checked: false, onClick: jest.fn() },
    { desc: 'Option 2', checked: true, onClick: jest.fn() },
  ];

  test('renders with title', () => {
    render(<Filter title="Filter Title" menus={mockMenus} />);
    const title = screen.getByText('Filter Title');
    expect(title).toBeInTheDocument();
  });

  test('opens menu on click', async () => {
    render(<Filter title="Filter Title" menus={mockMenus} />);
    const container = screen.getByText('Filter Title');
    await userEvent.click(container);

    const menu = screen.getByRole('list');
    expect(menu).toBeInTheDocument();
  });

  test('closes menu when clicking outside', async () => {
    render(<Filter title="Filter Title" menus={mockMenus} />);
    const container = screen.getByText('Filter Title');
    await userEvent.click(container);
    const menu = screen.getByRole('list');
    expect(menu).toBeInTheDocument();

    await userEvent.click(document.body);
  });
});
