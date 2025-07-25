import { RadioInput } from '@/RadioInput/RadioInput';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('RadioInput', () => {
  it('should render a radio input element', () => {
    render(<RadioInput />);

    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('should apply the default radio-input class', () => {
    render(<RadioInput />);

    expect(screen.getByRole('radio')).toHaveClass('radio-input');
  });

  it('should apply the invalid class when isInvalid is true', () => {
    render(<RadioInput isInvalid />);

    expect(screen.getByRole('radio')).toHaveClass('radio-input radio-input--invalid');
  });

  it('should not apply the invalid class when isInvalid is false', () => {
    render(<RadioInput isInvalid={false} />);

    expect(screen.getByRole('radio')).not.toHaveClass('radio-input--invalid');
  });

  it('should merge custom className with radio-input class', () => {
    render(<RadioInput className="custom-class" />);

    const radioInput = screen.getByRole('radio');
    expect(radioInput).toHaveClass('radio-input custom-class');
  });

  it('should be checked when checked prop is true', () => {
    render(<RadioInput checked onChange={vi.fn()} />);

    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<RadioInput disabled />);

    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('should combine isInvalid and custom className', () => {
    render(<RadioInput isInvalid className="custom-class" />);

    const radioInput = screen.getByRole('radio');
    expect(radioInput).toHaveClass('radio-input');
    expect(radioInput).toHaveClass('radio-input--invalid');
    expect(radioInput).toHaveClass('custom-class');
  });
});
