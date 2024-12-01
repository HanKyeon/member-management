import { fireEvent, render, screen } from '@testing-library/react';

import FilterMenuIcon from './FilterMenuItem';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('FilterMenuItem Component', () => {
  const mockOnClick = jest.fn();

  test('renders with description', () => {
    render(
      <FilterMenuIcon desc="Option 1" checked={false} onClick={mockOnClick} />,
    );
    const option = screen.getByText('Option 1');
    expect(option).toBeInTheDocument();
  });

  test('shows checked state in CheckBox', () => {
    render(
      <FilterMenuIcon desc="Option 1" checked={true} onClick={mockOnClick} />,
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('calls onClick when clicked', () => {
    render(
      <FilterMenuIcon desc="Option 1" checked={false} onClick={mockOnClick} />,
    );
    const option = screen.getByText('Option 1');
    fireEvent.click(option);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
