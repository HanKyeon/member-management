import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextArea from './TextArea';

describe('TextArea Component', () => {
  test('renders textarea with placeholder', () => {
    render(<TextArea placeholder="Enter your text" />);
    const textarea = screen.getByPlaceholderText('Enter your text');
    expect(textarea).toBeInTheDocument();
  });

  test('applies default value correctly', () => {
    render(<TextArea defaultValue="Default text" />);
    const textarea = screen.getByDisplayValue('Default text');
    expect(textarea).toBeInTheDocument();
  });

  test('calls onChange handler when value changes', () => {
    const handleChange = jest.fn();
    render(<TextArea onChange={handleChange} placeholder="Enter your text" />);
    const textarea = screen.getByPlaceholderText('Enter your text');

    fireEvent.change(textarea, { target: { value: 'New text' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(textarea).toHaveValue('New text');
  });

  test('applies custom className', () => {
    render(<TextArea className="custom-class" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-class');
  });

  test('focuses textarea when clicked', async () => {
    render(<TextArea placeholder="Focus me" />);
    const textarea = screen.getByPlaceholderText('Focus me');

    await userEvent.click(textarea);
    expect(textarea).toHaveFocus();
  });

  test('handles blur event', () => {
    const handleBlur = jest.fn();
    render(<TextArea onBlur={handleBlur} placeholder="Blur me" />);
    const textarea = screen.getByPlaceholderText('Blur me');

    fireEvent.blur(textarea);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
