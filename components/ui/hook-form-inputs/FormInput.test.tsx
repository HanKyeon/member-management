import { fireEvent, render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';

import FormInput from './FormInput';

describe('FormInput', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  test('renders input with label', () => {
    render(
      <Wrapper>
        <FormInput name="testInput" label="Test Input" required />
      </Wrapper>,
    );

    const label = screen.getByText('Test Input');
    const input = screen.getByPlaceholderText('Input');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('updates value on typing', () => {
    render(
      <Wrapper>
        <FormInput name="testInput" label="Test Input" />
      </Wrapper>,
    );

    const input = screen.getByPlaceholderText('Input');
    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(input).toHaveValue('Hello');
  });
});
