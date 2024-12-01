import { fireEvent, render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import FormCheckBox from './FormCheck';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('FormCheckBox', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  test('renders checkbox with label', () => {
    render(
      <Wrapper>
        <FormCheckBox name="testCheck" label="Test Label" required />
      </Wrapper>,
    );

    const label = screen.getByText('Test Label');
    const checkbox = screen.getByRole('checkbox');

    expect(label).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });

  test('updates value when clicked', () => {
    render(
      <Wrapper>
        <FormCheckBox name="testCheck" label="Test Label" />
      </Wrapper>,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
