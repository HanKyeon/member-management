import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalHeader from './ModalHeader';

jest.mock('../path-to-svg/Close.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('ModalHeader Component', () => {
  const mockCancelHandler = jest.fn();

  it('renders the title correctly', () => {
    render(<ModalHeader title="회원 수정" cancelHandler={mockCancelHandler} />);

    expect(screen.getByText('회원 수정')).toBeInTheDocument();
  });

  it('calls cancelHandler when the close button is clicked', async () => {
    render(<ModalHeader title="회원 수정" cancelHandler={mockCancelHandler} />);

    const closeButton = screen.getByRole('button');
    await userEvent.click(closeButton);

    expect(mockCancelHandler).toHaveBeenCalled();
  });
});
