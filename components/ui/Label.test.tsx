import { render, screen } from '@testing-library/react';

import Label from './Label';

describe('Label Component', () => {
  test('renders label with text', () => {
    render(<Label labelText="Username" />);
    const label = screen.getByText('Username');
    expect(label).toBeInTheDocument();
  });

  test('renders required asterisk when required is true', () => {
    render(<Label labelText="Username" required />);
    const asterisk = screen.getByText('*');
    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveClass('text-recatch-error');
  });

  test('does not render asterisk when required is false', () => {
    render(<Label labelText="Username" />);
    const asterisk = screen.queryByText('*');
    expect(asterisk).not.toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Label labelText="Username" className="custom-class" />);
    const label = screen.getByText('Username');
    expect(label).toHaveClass('custom-class');
  });
});
