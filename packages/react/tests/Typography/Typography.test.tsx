import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Typography } from '../../src/Typography/Typography';

describe('Typography component', () => {
  it('should render the correct tag for the "heading" variant', () => {
    render(
      <Typography variant="heading" size={2}>
        Demo Title for testing
      </Typography>,
    );
    const element = screen.getByText('Demo Title for testing');
    expect(element.tagName).toBe('H2');
    expect(element).toHaveClass('typography', 'h2');
  });

  it('should apply the correct classes for the "text" variant with bold', () => {
    render(
      <Typography variant="text" size="large" bold>
        Demo text for testing
      </Typography>,
    );
    const element = screen.getByText('Demo text for testing');
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass('typography', 'text-bold-large');
  });

  it('should add ARIA attributes for the "display" variant', () => {
    render(
      <Typography variant="display" size={1}>
        Demo display title for testing
      </Typography>,
    );
    const element = screen.getByText('Demo display title for testing');
    expect(element).toHaveAttribute('role', 'heading');
    expect(element).toHaveAttribute('aria-level', '1');
  });

  it('should allow overriding HTML props', () => {
    render(
      <Typography variant="text" size="medium" aria-label="Custom Label">
        Demo text for testing
      </Typography>,
    );
    const element = screen.getByText('Demo text for testing');
    expect(element).toHaveAttribute('aria-label', 'Custom Label');
  });

  it('should render with a custom component (e.g., Link) when the "component" prop is provided', () => {
    render(
      <Typography variant="text" size="medium" component="a" href="/test-link">
        Demo link text
      </Typography>,
    );
    const element = screen.getByText('Demo link text');
    expect(element.tagName).toBe('A');
    expect(element).toHaveAttribute('href', '/test-link');
    expect(element).toHaveClass('typography', 'text-medium');
  });
});
