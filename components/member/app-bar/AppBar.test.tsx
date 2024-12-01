import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AppBar from './AppBar';

jest.mock('../path-to-svg/Plus.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('AppBar Component', () => {
  const mockButtonClick = jest.fn();

  test('renders the title correctly', () => {
    const title = 'My AppBar Title';
    render(
      <AppBar title={title} buttonClick={mockButtonClick} buttonText="Add" />,
    );

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the button with text and icon', () => {
    render(
      <AppBar
        title="Test Title"
        buttonClick={mockButtonClick}
        buttonText="Add"
      />,
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    const svgIcon = screen.getByTestId('svg-mock');
    expect(svgIcon).toBeInTheDocument();
  });

  test('triggers the buttonClick event when button is clicked', async () => {
    render(
      <AppBar
        title="Test Title"
        buttonClick={mockButtonClick}
        buttonText="Add"
      />,
    );

    const buttonElement = screen.getByRole('button', { name: /Add/i });

    await userEvent.click(buttonElement);
    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });
});
