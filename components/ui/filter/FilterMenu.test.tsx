import { fireEvent, render, screen } from '@testing-library/react';

import { FilterMenu } from './FilterMenu';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('FilterMenu Component', () => {
  const mockMenus = [
    { desc: 'Option 1', checked: false, onClick: jest.fn() },
    { desc: 'Option 2', checked: true, onClick: jest.fn() },
  ];

  test('renders menu items', () => {
    render(<FilterMenu menus={mockMenus} />);
    const options = screen.getAllByRole('listitem');
    expect(options).toHaveLength(mockMenus.length);
  });

  test('calls onClick when item is clicked', () => {
    render(<FilterMenu menus={mockMenus} />);
    const option = screen.getByText('Option 1');
    fireEvent.click(option);

    expect(mockMenus[0].onClick).toHaveBeenCalled();
  });

  test('shows checked state correctly', () => {
    render(<FilterMenu menus={mockMenus} />);
    const option = screen.getByText('Option 2');
    expect(option).toHaveClass('bg-recatch-bg-active');
  });
});
