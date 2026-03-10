import { HelperText } from '@/HelperText/HelperText';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('HelperText', () => {
  it('should render children', () => {
    render(<HelperText>Helper text</HelperText>);

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('should render with info icon by default', () => {
    render(<HelperText>Info</HelperText>);

    const icon = screen.getByRole('presentation');
    expect(icon).toBeInTheDocument();
  });

  it('should render with error icon when error is true', () => {
    render(<HelperText error>Error</HelperText>);

    const icon = screen.getByRole('presentation');
    expect(icon).toBeInTheDocument();
  });

  it('should apply the helper-text class', () => {
    render(<HelperText>Class test</HelperText>);

    const small = screen.getByText('Class test');
    expect(small).toHaveClass('helper-text');
  });

  it('should apply the helper-text--error class when error is true', () => {
    render(<HelperText error>Error class</HelperText>);

    const small = screen.getByText('Error class');
    expect(small).toHaveClass('helper-text--error');
  });

  it('should merge custom className', () => {
    render(<HelperText className="custom-class">Custom class</HelperText>);

    const small = screen.getByText('Custom class');
    expect(small).toHaveClass('custom-class');
  });
});
