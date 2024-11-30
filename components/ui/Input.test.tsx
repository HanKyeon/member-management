import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

describe('Input Component', () => {
  test('renders input with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  test('applies default value correctly', () => {
    render(<Input defaultValue="Default Value" />);
    const input = screen.getByDisplayValue('Default Value');
    expect(input).toBeInTheDocument();
  });

  test('calls onChange handler when value changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');

    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  test('focuses input when clicked', async () => {
    render(<Input placeholder="Enter your text" />);
    const input = screen.getByPlaceholderText('Enter your text');

    await userEvent.click(input);
    expect(input).toHaveFocus();
  });

  test('handles blur event', () => {
    const handleBlur = jest.fn();
    render(<Input onBlur={handleBlur} placeholder="Blur me" />);
    const input = screen.getByPlaceholderText('Blur me');

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
