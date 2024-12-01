// Calendar.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calendar from './Calendar';

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

describe('Calendar Component', () => {
  const mockOnItemClick = jest.fn();

  test('renders days correctly', () => {
    render(
      <Calendar
        defaultValues={new Date(2024, 11, 1)}
        onItemClick={mockOnItemClick}
        locale="en-US"
      />,
    );

    expect(screen.getAllByText('1')[0]).toBeInTheDocument();
    expect(screen.getAllByText('31')[0]).toBeInTheDocument();
  });

  test("highlights today's date", () => {
    const today = new Date();
    render(
      <Calendar
        defaultValues={today}
        onItemClick={mockOnItemClick}
        locale="en-US"
      />,
    );

    const todayButton = screen
      .getAllByText(today.getDate().toString())
      .filter(elem => elem.classList.contains('border-recatch-primary'));
    expect(todayButton.length).toBeGreaterThan(0);
  });

  test('calls onItemClick with the correct date when a day is clicked', async () => {
    render(
      <Calendar
        defaultValues={new Date(2024, 11, 1)}
        onItemClick={mockOnItemClick}
        locale="en-US"
      />,
    );

    const dayButton = screen.getByText('15');
    await userEvent.click(dayButton);

    expect(mockOnItemClick).toHaveBeenCalledWith(new Date(2024, 11, 15));
  });

  test('changes to the previous month when previous button is clicked', async () => {
    render(
      <Calendar
        defaultValues={new Date(2024, 11, 1)}
        onItemClick={mockOnItemClick}
        locale="en-US"
      />,
    );

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[1]);

    const firstDay = screen
      .getAllByText('1')
      .filter(elem => elem.classList.contains('text-recatch-text'));
    expect(firstDay.length).toBeGreaterThan(0);
  });

  test('changes to the next month when next button is clicked', async () => {
    render(
      <Calendar
        defaultValues={new Date(2024, 11, 1)}
        onItemClick={mockOnItemClick}
        locale="en-US"
      />,
    );

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[2]);

    const firstDay = screen
      .getAllByText('1')
      .filter(elem => elem.classList.contains('text-recatch-text'));
    expect(firstDay.length).toBeGreaterThan(0);
  });
});
