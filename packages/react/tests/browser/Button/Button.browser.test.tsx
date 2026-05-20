import '@pplancq/shelter-ui-css/css/shelter-ui.css';

import { Button } from '@/Button/Button';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Button', () => {
  it('should render with default props', async () => {
    const view = await render(<Button>Click me</Button>);
    const button = view.getByRole('button', { name: /click me/i });
    await expect.element(button).toHaveClass('button', 'button--primary', 'button--medium');
  });

  it('should render with a custom variant and color', async () => {
    const view = await render(
      <Button variant="reverse" color="secondary">
        Click me
      </Button>,
    );
    const button = view.getByRole('button', { name: /click me/i });
    await expect.element(button).toHaveClass('button', 'button--secondary-reverse', 'button--medium');
  });

  it('should render with a custom size', async () => {
    const view = await render(<Button size="large">Click me</Button>);
    const button = view.getByRole('button', { name: /click me/i });
    await expect.element(button).toHaveClass('button', 'button--primary', 'button--large');
  });

  it('should render as a circle button', async () => {
    const view = await render(<Button isCircle>Click me</Button>);
    const button = view.getByRole('button', { name: /click me/i });
    await expect.element(button).toHaveClass('button--circle');
  });

  it('should render with start and end icons', async () => {
    const view = await render(
      <Button startIcon={<span data-testid="start-icon" />} endIcon={<span data-testid="end-icon" />}>
        Click me
      </Button>,
    );
    const startIcon = view.getByTestId('start-icon');
    const endIcon = view.getByTestId('end-icon');
    await expect.element(startIcon).toBeInTheDocument();
    await expect.element(endIcon).toBeInTheDocument();
  });

  it('should render with a custom component', async () => {
    const view = await render(
      <Button as="a" href="/test">
        Click me
      </Button>,
    );
    const link = view.getByRole('link', { name: /click me/i });
    await expect.element(link).toHaveAttribute('href', '/test');
  });

  it('should apply additional class names', async () => {
    const view = await render(<Button className="custom-class">Click me</Button>);
    const button = view.getByRole('button', { name: /click me/i });
    await expect.element(button).toHaveClass('custom-class');
  });

  it('should have type="button" when rendered as a button', async () => {
    const view = await render(<Button>Click me</Button>);
    const button = view.getByRole('button', { name: /click me/i });
    await expect.element(button).toHaveAttribute('type', 'button');
  });

  it('should not have type="button" when rendered as a custom component', async () => {
    const view = await render(
      <Button as="a" href="/test">
        Click me
      </Button>,
    );
    const link = view.getByRole('link', { name: /click me/i });
    await expect.element(link).not.toHaveAttribute('type');
  });
});
