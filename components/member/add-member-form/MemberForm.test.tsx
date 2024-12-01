import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MemberForm from './MemberForm';

jest.mock('../path-to-svg/Calendar.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('MemberForm Component', () => {
  const mockOnSubmit = jest.fn();
  const mockCancelHandler = jest.fn();

  test('renders the form fields correctly', () => {
    render(
      <MemberForm onSubmit={mockOnSubmit} cancelHandler={mockCancelHandler} />,
    );

    // 폼 필드가 렌더링되었는지 확인
    expect(screen.getByTestId('이름')).toBeInTheDocument();
    expect(screen.getByTestId('주소')).toBeInTheDocument();
    expect(screen.getByTestId('메모')).toBeInTheDocument();
    expect(screen.getByTestId('가입일')).toBeInTheDocument();
    expect(screen.getByTestId('직업')).toBeInTheDocument();
    expect(screen.getByTestId('이메일 수신 동의')).toBeInTheDocument();
  });

  test('calls onSubmit when form is submitted', async () => {
    render(
      <MemberForm onSubmit={mockOnSubmit} cancelHandler={mockCancelHandler} />,
    );
    const nameInput = screen.getAllByPlaceholderText('Input')[0];
    nameInput.innerHTML = 'anything';
    const submitButton = screen.getByText('저장');

    await userEvent.click(submitButton);
    expect(mockOnSubmit).not.toHaveBeenCalled();

    await userEvent.type(nameInput, 'anything');
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  test('calls cancelHandler when cancel button is clicked', async () => {
    render(
      <MemberForm onSubmit={mockOnSubmit} cancelHandler={mockCancelHandler} />,
    );
    const cancelButton = screen.getByRole('button', { name: /취소/i });

    await userEvent.click(cancelButton);

    expect(mockCancelHandler).toHaveBeenCalled();
  });
});
