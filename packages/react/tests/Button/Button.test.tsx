import { Button } from '@/Button/Button';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Button', () => {
  it('should render with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('button button--primary button--medium');
  });

  it('should render with a custom variant and color', () => {
    render(
      <Button variant="reverse" color="secondary">
        Click me
      </Button>,
    );
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('button button--secondary-reverse button--medium');
  });

  it('should render with a custom size', () => {
    render(<Button size="large">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('button button--primary button--large');
  });

  it('should render as a circle button', () => {
    render(<Button isCircle>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('button--circle');
  });

  it('should render with start and end icons', () => {
    render(
      <Button startIcon={<span data-testid="start-icon" />} endIcon={<span data-testid="end-icon" />}>
        Click me
      </Button>,
    );
    const startIcon = screen.getByTestId('start-icon');
    const endIcon = screen.getByTestId('end-icon');
    expect(startIcon).toBeInTheDocument();
    expect(endIcon).toBeInTheDocument();
  });

  it('should render with a custom component', () => {
    render(
      <Button component="a" href="/test">
        Click me
      </Button>,
    );
    const link = screen.getByRole('link', { name: /click me/i });
    expect(link).toHaveAttribute('href', '/test');
  });

  it('should apply additional class names', () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('custom-class');
  });

  it('should have type="button" when rendered as a button', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should not have type="button" when rendered as a custom component', () => {
    render(
      <Button component="a" href="/test">
        Click me
      </Button>,
    );
    const link = screen.getByRole('link', { name: /click me/i });
    expect(link).not.toHaveAttribute('type');
  });
});
