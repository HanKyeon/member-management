import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import FormSelect from './FormSelect';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('FormSelect', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  const mockMenus = [
    { value: 'dev', desc: 'Developer' },
    { value: 'design', desc: 'Designer' },
  ];

  test('renders select with label', () => {
    render(
      <Wrapper>
        <FormSelect name="testSelect" label="Select Job" menus={mockMenus} />
      </Wrapper>,
    );

    const label = screen.getByText('Select Job');
    const select = screen.getByRole('button');

    expect(label).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });

  test('updates value on menu item click', async () => {
    render(
      <Wrapper>
        <FormSelect name="testSelect" label="Select Job" menus={mockMenus} />
      </Wrapper>,
    );

    const select = screen.getByRole('button');
    await userEvent.click(select);

    const menuItem = screen.getByText('Developer');
    await userEvent.click(menuItem);

    expect(select).toHaveTextContent('Developer');
  });
});
