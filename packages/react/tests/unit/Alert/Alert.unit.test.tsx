import { Alert } from '@/Alert/Alert';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

describe('Alert', () => {
  it('should render with default props', () => {
    render(<Alert title="Alert title" />);
    const alert = screen.getByRole('status');
    const title = screen.getByRole('heading', { level: 4, name: /alert title/i });

    expect(alert).toHaveClass('alert');
    expect(alert).toHaveAttribute('aria-live', 'polite');
    expect(title).toBeInTheDocument();
  });

  it.each([
    {
      variant: 'info' as const,
      expectedRole: 'status',
      expectedClass: 'alert',
      expectedAriaLive: 'polite',
      description: 'info variant by default (no modifier class)',
    },
    {
      variant: 'warning' as const,
      expectedRole: 'alert',
      expectedClass: 'alert alert--warning',
      expectedAriaLive: 'polite',
      description: 'warning variant',
    },
    {
      variant: 'error' as const,
      expectedRole: 'alert',
      expectedClass: 'alert alert--error',
      expectedAriaLive: 'assertive',
      description: 'error variant',
    },
    {
      variant: 'success' as const,
      expectedRole: 'status',
      expectedClass: 'alert alert--success',
      expectedAriaLive: 'polite',
      description: 'success variant',
    },
  ])('should render with $description', ({ variant, expectedRole, expectedClass, expectedAriaLive }) => {
    render(<Alert variant={variant} title={`${variant} alert`} />);
    const alert = screen.getByRole(expectedRole);

    expect(alert).toHaveClass(expectedClass);
    expect(alert).toHaveAttribute('aria-live', expectedAriaLive);
  });

  it('should render with custom title level', () => {
    render(<Alert title="Custom level title" titleLevel={2} />);
    const title = screen.getByRole('heading', { level: 2, name: /custom level title/i });

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('alert__title');
  });

  it('should render with message content', () => {
    render(<Alert title="Alert with message">This is the alert message content</Alert>);

    const message = screen.getByText(/this is the alert message content/i);
    expect(message).toBeInTheDocument();
  });

  it('should render close button when onClose is provided', () => {
    const onCloseMock = vi.fn();
    render(<Alert title="Closable alert" onClose={onCloseMock} />);

    const closeButton = screen.getByRole('button', { name: /close alert/i });
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveClass('alert__close-button');
  });

  it('should render close button with custom label', () => {
    const onCloseMock = vi.fn();
    render(<Alert title="Closable alert" onClose={onCloseMock} buttonLabel="Fermer" />);

    const closeButton = screen.getByRole('button', { name: /fermer/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('should not render close button when onClose is not provided', () => {
    render(<Alert title="Non-closable alert" />);

    const closeButton = screen.queryByRole('button');
    expect(closeButton).not.toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onCloseMock = vi.fn();
    render(<Alert title="Closable alert" onClose={onCloseMock} />);

    const closeButton = screen.getByRole('button', { name: /close alert/i });
    await user.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should apply additional class names', () => {
    render(<Alert title="Custom class alert" className="custom-class" />);
    const alert = screen.getByRole('status');

    expect(alert).toHaveClass('alert');
    expect(alert).toHaveClass('custom-class');
  });

  it('should forward additional props to the section element', () => {
    render(<Alert title="Alert with data" data-testid="custom-alert" id="alert-1" />);
    const alert = screen.getByTestId('custom-alert');

    expect(alert).toHaveAttribute('id', 'alert-1');
  });
});
