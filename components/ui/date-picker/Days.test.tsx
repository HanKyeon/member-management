// Days.test.tsx
import { render } from '@testing-library/react';
import Days from './Days';

jest.mock('../path-to-svg/*.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('Days Component', () => {
  test('renders weekday names correctly', () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const { getByText } = render(<Days weekdays={weekdays} />);

    weekdays.forEach(day => {
      expect(getByText(day)).toBeInTheDocument();
    });
  });

  test('does not re-render unnecessarily', () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const { rerender } = render(<Days weekdays={weekdays} />);

    const newWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    rerender(<Days weekdays={newWeekdays} />);
  });
});
