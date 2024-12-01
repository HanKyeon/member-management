import { fireEvent, render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import FormTextArea from './FormTextArea';

describe('FormTextArea', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  test('renders textarea with label', () => {
    render(
      <Wrapper>
        <FormTextArea name="testTextArea" label="Test TextArea" required />
      </Wrapper>,
    );

    const label = screen.getByText('Test TextArea');
    const textarea = screen.getByPlaceholderText('Input');

    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  test('updates value on typing', () => {
    render(
      <Wrapper>
        <FormTextArea name="testTextArea" label="Test TextArea" />
      </Wrapper>,
    );

    const textarea = screen.getByPlaceholderText('Input');
    fireEvent.change(textarea, { target: { value: 'Hello' } });

    expect(textarea).toHaveValue('Hello');
  });
});
