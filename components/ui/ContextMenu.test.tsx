import { fireEvent, render, screen } from '@testing-library/react';

import ContextMenu, { ContextMenuItem } from './ContextMenu';

describe('ContextMenuItem Component', () => {
  test('renders menu item with correct description', () => {
    render(
      <ContextMenuItem
        desc="Menu Item 1"
        value="item1"
        onClick={jest.fn()}
        selected={false}
      />,
    );
    const menuItem = screen.getByText('Menu Item 1');
    expect(menuItem).toBeInTheDocument();
  });

  test('calls onClick handler with correct value when clicked', () => {
    const handleClick = jest.fn();
    render(
      <ContextMenuItem
        desc="Menu Item 1"
        value="item1"
        onClick={handleClick}
        selected={false}
      />,
    );
    const menuItem = screen.getByText('Menu Item 1');

    fireEvent.click(menuItem);
    expect(handleClick).toHaveBeenCalledWith('item1');
  });

  test('applies selected styles when selected', () => {
    render(
      <ContextMenuItem
        desc="Menu Item 1"
        value="item1"
        onClick={jest.fn()}
        selected={true}
      />,
    );
    const menuItem = screen.getByText('Menu Item 1');
    expect(menuItem).toHaveClass('bg-recatch-bg-active text-recatch-primary');
  });
});

describe('ContextMenu Component', () => {
  const mockMenus = [
    { desc: 'Menu Item 1', value: 'item1' },
    { desc: 'Menu Item 2', value: 'item2' },
    { desc: 'Menu Item 3', value: 'item3' },
  ];

  test('renders all menu items correctly', () => {
    render(
      <ContextMenu
        menus={mockMenus}
        value=""
        open={true}
        onClickMenuitem={jest.fn()}
      />,
    );

    mockMenus.forEach(menu => {
      expect(screen.getByText(menu.desc)).toBeInTheDocument();
    });
  });

  test('calls onClickMenuitem with correct value when a menu item is clicked', () => {
    const handleClick = jest.fn();
    render(
      <ContextMenu
        menus={mockMenus}
        value=""
        open={true}
        onClickMenuitem={handleClick}
      />,
    );

    const menuItem = screen.getByText('Menu Item 2');
    fireEvent.click(menuItem);

    expect(handleClick).toHaveBeenCalledWith('item2');
  });

  test('applies open styles when open is true', () => {
    render(
      <ContextMenu
        menus={mockMenus}
        value=""
        open={true}
        onClickMenuitem={jest.fn()}
      />,
    );

    const menu = screen.getByRole('menu');
    expect(menu).toHaveClass('scale-100 opacity-100 z-[1000]');
  });

  test('applies closed styles when open is false', () => {
    render(
      <ContextMenu
        menus={mockMenus}
        value=""
        open={false}
        onClickMenuitem={jest.fn()}
      />,
    );

    const menu = screen.getByRole('menu');
    expect(menu).toHaveClass('scale-90 opacity-0 pointer-events-none z-[-200]');
  });
});
