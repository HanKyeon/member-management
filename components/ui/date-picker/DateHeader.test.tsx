// DateHeader.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DateHeader from './DateHeader';

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

describe('DateHeader Component', () => {
  const mockHandleMonth = jest.fn(num => () => {});

  test('renders the current date', () => {
    const currentDate = new Date(2024, 11, 1);
    render(
      <DateHeader
        currentDate={currentDate}
        locale="en-US"
        handleMonth={mockHandleMonth}
      />,
    );

    expect(screen.getByText(/December 2024/)).toBeInTheDocument();
  });

  test('triggers handleMonth when navigation buttons are clicked', async () => {
    const today = new Date();
    const todayTitle = today.toLocaleString('en-US', {
      month: 'long',
      year: 'numeric',
    });

    render(
      <DateHeader
        currentDate={today}
        locale="en-US"
        handleMonth={mockHandleMonth}
      />,
    );

    expect(screen.getByText(todayTitle)).toBeInTheDocument();

    const lastYearButton = screen.getAllByRole('button')[0];
    const lastMonthButton = screen.getAllByRole('button')[1];
    const nextMonthButton = screen.getAllByRole('button')[2];
    const nextYearButton = screen.getAllByRole('button')[3];

    await userEvent.click(lastYearButton);
    expect(mockHandleMonth).toHaveBeenCalledWith(-12);
    await userEvent.click(lastMonthButton);
    expect(mockHandleMonth).toHaveBeenCalledWith(-1);
    await userEvent.click(nextMonthButton);
    expect(mockHandleMonth).toHaveBeenCalledWith(1);
    await userEvent.click(nextYearButton);
    expect(mockHandleMonth).toHaveBeenCalledWith(12);
  });
});
