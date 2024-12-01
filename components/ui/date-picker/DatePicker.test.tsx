// DatePicker.test.tsx
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DatePicker from './DatePicker';

jest.mock('../path-to-svg/LastMonth.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));
jest.mock('../path-to-svg/LastYear.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));
jest.mock('../path-to-svg/NextMonth.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));
jest.mock('../path-to-svg/NextYear.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('DatePicker Component', () => {
  const today = new Date();
  const todayTitle = today.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  test('opens the calendar when clicked', async () => {
    render(<DatePicker defaultValues={today} />);

    const input = screen.getByPlaceholderText('Select date');

    expect(
      screen.getByTestId('calendar-section').classList.contains('z-[1000]'),
    ).toEqual(false);

    await userEvent.click(input);

    expect(
      screen.getByTestId('calendar-section').classList.contains('z-[1000]'),
    ).toEqual(true);
  });

  test('closes the calendar when clicking outside', async () => {
    render(<DatePicker defaultValues={new Date()} />);

    const input = screen.getByPlaceholderText('Select date');
    fireEvent.click(input);

    const outside = document.createElement('div');
    document.body.appendChild(outside);
    await userEvent.click(outside);

    const calendar = screen.getByTestId('calendar-section');
    expect(calendar.classList.contains('z-[1000]')).toEqual(false);

    document.body.removeChild(outside);
  });

  test('updates the input value when a date is selected', () => {
    const { getByText, getByPlaceholderText } = render(
      <DatePicker defaultValues={new Date(2024, 11, 1)} />,
    );

    const input = getByPlaceholderText('Select date');
    fireEvent.click(input);

    const dayButton = getByText('15');
    fireEvent.click(dayButton);

    expect(input).toHaveValue('2024-12-15');
  });
});
