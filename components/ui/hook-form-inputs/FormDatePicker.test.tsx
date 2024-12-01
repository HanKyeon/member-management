import { fireEvent, render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import FormDate from './FormDatePicker';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('FormDatePicker', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  test('renders date picker with label', () => {
    render(
      <Wrapper>
        <FormDate name="testDate" label="Select Date" required />
      </Wrapper>,
    );

    const label = screen.getByText('Select Date');
    const input = screen.getByPlaceholderText('Select date');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('updates value on date selection', () => {
    render(
      <Wrapper>
        <FormDate name="testDate" label="Select Date" />
      </Wrapper>,
    );

    const input = screen.getByPlaceholderText('Select date');
    fireEvent.click(input);

    const date = screen.getByText('15'); // Select a specific date
    fireEvent.click(date);

    expect(input).toHaveValue('2024-12-15'); // Example formatted value
  });
});
