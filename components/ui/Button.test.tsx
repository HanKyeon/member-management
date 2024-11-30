import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

jest.mock('../path-to-svg/Check.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="svg-mock" />,
}));

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>buttonText</Button>);
    const button = screen.getByRole('button', { name: 'buttonText' });
    expect(button).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByRole('button', { name: 'Click' });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with custom children', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click Me');
  });

  test('applies correct className based on variant', () => {
    render(<Button variant="confirm" className="custom-class" />);
    const button = screen.getByRole('button');
    console.log('###', button);
    expect(button).toHaveClass('custom-class');
  });

  test('handles disabled state', () => {
    render(<Button disabled={true}>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('fires onClick event when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not fire onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled={true}>
        Disabled
      </Button>,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders with the correct role', () => {
    render(<Button>Accessible Button</Button>);
    const button = screen.getByRole('button', { name: 'Accessible Button' });
    expect(button).toBeInTheDocument();
  });
});
