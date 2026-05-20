import { Input } from '@/Input/Input';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Input', () => {
  it('should render an input element', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should apply the error class and aria-invalid when error is true', () => {
    render(<Input error />);

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = screen.getByRole('textbox').parentElement;
    expect(wrapper).toHaveClass('input--error');
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('should render startAdornment', () => {
    render(<Input startAdornment={<span data-testid="start">S</span>} />);

    expect(screen.getByTestId('start')).toBeInTheDocument();
  });

  it('should render endAdornment', () => {
    render(<Input endAdornment={<span data-testid="end">E</span>} />);

    expect(screen.getByTestId('end')).toBeInTheDocument();
  });

  it('should forward props to the input element', () => {
    render(<Input placeholder="test" data-testid="input" />);

    expect(screen.getByTestId('input')).toHaveAttribute('placeholder', 'test');
  });

  it('should merge custom className with input class', () => {
    render(<Input className="custom-class" />);

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = screen.getByRole('textbox').parentElement;
    expect(wrapper).toHaveClass('input');
    expect(wrapper).toHaveClass('custom-class');
  });
});
