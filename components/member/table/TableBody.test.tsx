import { render, screen } from '@testing-library/react';
import TableBody from './TableBody';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));
jest.mock('../path-to-svg/Dropdown.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));
jest.mock('../path-to-svg/MoreOutlined.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

jest.mock('@/stores/member-store', () => ({
  useMember: () => ({
    members: [],
    filterMap: new Map(),
  }),
}));

describe('TableBody Component', () => {
  const mockEditFormOpenHandler = jest.fn();

  test('renders no rows when there are no members', () => {
    render(
      <table>
        <TableBody editFormOpenHandler={mockEditFormOpenHandler} />
      </table>,
    );

    expect(screen.queryAllByRole('row')).toHaveLength(0);
  });

  // test('renders rows for each member', () => {
  //   const mockuseMember = jest.mock('@/stores/member-store', () => ({
  //     useMember: () => ({
  //       members: [
  //         { name: 'John Doe', job: 'Developer', checked: false },
  //         { name: 'Jane Doe', job: 'Designer', checked: true },
  //       ],
  //       filterMap: new Map(),
  //     }),
  //   }));

  //   render(
  //     <table>
  //       <TableBody editFormOpenHandler={mockEditFormOpenHandler} />
  //     </table>,
  //   );

  //   expect(screen.getByText('John Doe')).toBeInTheDocument();
  //   expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  //   expect(screen.getAllByRole('row')).toHaveLength(2);
  // });
});
