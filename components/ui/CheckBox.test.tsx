import { fireEvent, render, screen } from '@testing-library/react';

import CheckBox from './CheckBox';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('CheckBox Component', () => {
  test('renders checkbox with correct label', () => {
    render(<CheckBox labelId="test-label" />);
    const label = screen.getByLabelText('');
    const input = screen.getByRole('checkbox');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-label');
  });

  test('handles onChange event when clicked', () => {
    const handleChange = jest.fn();
    render(<CheckBox labelId="test-checkbox" onChange={handleChange} />);

    const input = screen.getByRole('checkbox');
    fireEvent.click(input);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('applies disabled state correctly', () => {
    render(<CheckBox labelId="test-disabled" disabled={true} />);
    const input = screen.getByRole('checkbox');

    expect(input).toBeDisabled();
  });

  test('renders checked state correctly', () => {
    render(<CheckBox labelId="test-checked" defaultChecked />);
    const input = screen.getByRole('checkbox');

    expect(input).toBeChecked();
  });
});
