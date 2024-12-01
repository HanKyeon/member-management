import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MemberFormModal from './MemberFormModal';

jest.mock('../path-to-svg/Close.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('MemberFormModal Component', () => {
  const mockOnSubmit = jest.fn();
  const mockCancelHandler = jest.fn();

  it('renders the modal with the correct title', () => {
    render(
      <MemberFormModal
        open={true}
        onSubmit={mockOnSubmit}
        cancelHandler={mockCancelHandler}
      />,
    );

    expect(screen.getByText('회원 추가')).toBeInTheDocument();
  });

  it('calls cancelHandler when close button is clicked', async () => {
    render(
      <MemberFormModal
        open={true}
        onSubmit={mockOnSubmit}
        cancelHandler={mockCancelHandler}
      />,
    );

    const closeButton = screen.getByRole('button', { name: /취소/i });
    await userEvent.click(closeButton);

    expect(mockCancelHandler).toHaveBeenCalled();
  });

  it('does not render the modal when open is false', () => {
    render(
      <MemberFormModal
        open={false}
        onSubmit={mockOnSubmit}
        cancelHandler={mockCancelHandler}
      />,
    );

    expect(screen.queryByText('회원 추가')).not.toBeInTheDocument();
  });
});
