import { fireEvent, render, screen } from '@testing-library/react';

import Overlay from './Overlay';

describe('Overlay Component', () => {
  test('renders when isOpen is true', () => {
    render(<Overlay isOpen={true} variant="dim" onClose={jest.fn()} />);
    const overlay = screen.getByRole('dialog', { hidden: true });
    expect(overlay).toBeInTheDocument();
  });

  test('does not render when isOpen is false', () => {
    render(<Overlay isOpen={false} variant="dim" onClose={jest.fn()} />);
    const overlay = screen.queryByRole('dialog');
    expect(overlay).not.toBeInTheDocument();
  });

  test('calls onClose when clicking outside', () => {
    const handleClose = jest.fn();
    render(
      <Overlay isOpen={true} variant="dim" onClose={handleClose}>
        <div>Content</div>
      </Overlay>,
    );

    const overlay = screen.getByRole('dialog', { hidden: true });
    fireEvent.click(overlay);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when clicking inside the content', () => {
    const handleClose = jest.fn();
    render(
      <Overlay isOpen={true} variant="dim" onClose={handleClose}>
        <div>Content</div>
      </Overlay>,
    );

    const content = screen.getByText('Content');
    fireEvent.click(content);

    expect(handleClose).not.toHaveBeenCalled();
  });
});
