import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Select from './Select';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('Select Component', () => {
  const mockMenus = [
    { value: 'dev', desc: 'Developer' },
    { value: 'po', desc: 'Product Owner' },
    { value: 'designer', desc: 'Designer' },
  ];

  const mockOnSelect = jest.fn();

  test('renders with the default value', () => {
    render(<Select menus={mockMenus} value="dev" onSelect={mockOnSelect} />);
    const allItems = screen.getAllByText('Developer');
    const selectedItem = allItems.find(item => item.tagName === 'SPAN');

    expect(selectedItem).toBeInTheDocument();
  });

  test('opens context menu when clicked', () => {
    render(<Select menus={mockMenus} value="" onSelect={mockOnSelect} />);
    const selectContainer = screen.getByRole('button');
    fireEvent.click(selectContainer);
    const allItems = screen.getAllByText('Developer');
    const contextMenuItem = allItems.find(item => item.tagName === 'LI');
    expect(contextMenuItem).toBeInTheDocument();
  });

  test('closes context menu when an item is selected', async () => {
    const mockOnSelect = jest.fn();
    render(<Select menus={mockMenus} value="" onSelect={mockOnSelect} />);

    const selectContainer = screen.getByRole('button');
    fireEvent.click(selectContainer);

    const contextMenuItem = screen.getByText('Developer');
    fireEvent.click(contextMenuItem);

    await waitFor(() => {
      const menu = screen.getByRole('menu');
      expect(menu).toHaveClass('z-[-200]');
      expect(menu).toHaveClass('opacity-0');
    });

    // 선택 핸들러 호출 확인
    expect(mockOnSelect).toHaveBeenCalledWith('dev');
  });

  test('calls onSelect with correct value when an item is clicked', () => {
    render(<Select menus={mockMenus} value="" onSelect={mockOnSelect} />);
    const selectContainer = screen.getByRole('button');
    fireEvent.click(selectContainer);

    const contextMenuItem = screen.getByText('Product Owner');
    fireEvent.click(contextMenuItem);

    expect(mockOnSelect).toHaveBeenCalledWith('po');
  });

  test('closes context menu when clicking outside', async () => {
    render(<Select menus={mockMenus} value="" onSelect={mockOnSelect} />);
    const selectContainer = screen.getByRole('button');
    fireEvent.click(selectContainer);

    fireEvent.mouseDown(document.body); // Simulate click outside

    await waitFor(() => {
      const menu = screen.getByRole('menu');
      expect(menu).toHaveClass('z-[-200]');
      expect(menu).toHaveClass('opacity-0');
    });
  });
});
