import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';

import ModalFooter from './ModalFooter';

describe('ModalFooter Component', () => {
  const mockCancelHandler = jest.fn();

  const Wrapper = ({ children }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  it('renders the buttons correctly', () => {
    render(
      <Wrapper>
        <ModalFooter cancelHandler={mockCancelHandler} />
      </Wrapper>,
    );

    expect(screen.getByRole('button', { name: /취소/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /저장/i })).toBeInTheDocument();
  });

  it('calls cancelHandler when cancel button is clicked', async () => {
    render(
      <Wrapper>
        <ModalFooter cancelHandler={mockCancelHandler} />
      </Wrapper>,
    );

    const cancelButton = screen.getByRole('button', { name: /취소/i });
    await userEvent.click(cancelButton);

    expect(mockCancelHandler).toHaveBeenCalled();
  });

  it('disables the save button if the form is invalid', () => {
    render(
      <Wrapper>
        <ModalFooter cancelHandler={mockCancelHandler} />
      </Wrapper>,
    );

    const saveButton = screen.getByRole('button', { name: /저장/i });
    expect(saveButton).toBeDisabled();
  });
});
