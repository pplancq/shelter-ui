import { CheckboxInput } from '@/CheckboxInput/CheckboxInput';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

describe('CheckboxInput', () => {
  it('should render a checkbox input element', () => {
    render(<CheckboxInput />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should apply the default checkbox class', () => {
    render(<CheckboxInput />);

    expect(screen.getByRole('checkbox')).toHaveClass('checkbox');
  });

  it('should merge custom className with checkbox class', () => {
    render(<CheckboxInput className="custom-class" />);

    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toHaveClass('checkbox custom-class');
  });

  it('should set the indeterminate state', () => {
    render(<CheckboxInput indeterminate />);

    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).not.toBeChecked();
    // eslint-disable-next-line jest-dom/prefer-checked
    expect(checkboxInput).toHaveAttribute('aria-checked', 'mixed');
  });

  it('should remove aria-checked="mixed" and become checked when clicked in indeterminate state', async () => {
    render(<CheckboxInput indeterminate />);
    const user = userEvent.setup();

    const checkboxInput = screen.getByRole('checkbox');
    await user.click(checkboxInput);

    // eslint-disable-next-line jest-dom/prefer-checked
    expect(checkboxInput).not.toHaveAttribute('aria-checked', 'mixed');
    expect(checkboxInput).toBeChecked();
  });

  it('should render as checked when checked prop is true', () => {
    render(<CheckboxInput checked />);

    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeChecked();
  });

  it('should render as unchecked when checked prop is false', () => {
    render(<CheckboxInput checked={false} />);

    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).not.toBeChecked();
  });

  it('should call onChange handler when clicked', async () => {
    const handleChange = vi.fn();
    render(<CheckboxInput onChange={handleChange} />);
    const user = userEvent.setup();

    const checkboxInput = screen.getByRole('checkbox');
    await user.click(checkboxInput);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          checked: true,
        }),
      }),
    );
  });

  it('should forward ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<CheckboxInput ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toStrictEqual('checkbox');
  });

  it('should pass through additional props to the input element', () => {
    render(<CheckboxInput data-testid="custom-checkbox" aria-label="Test checkbox" />);

    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toHaveAttribute('data-testid', 'custom-checkbox');
    expect(checkboxInput).toHaveAttribute('aria-label', 'Test checkbox');
  });

  it('should maintain indeterminate state when controlled', () => {
    const { rerender } = render(<CheckboxInput indeterminate checked={false} />);

    const checkboxInput = screen.getByRole('checkbox');

    // eslint-disable-next-line jest-dom/prefer-checked
    expect(checkboxInput).toHaveAttribute('aria-checked', 'mixed');
    expect(checkboxInput).not.toBeChecked();

    rerender(<CheckboxInput indeterminate checked={false} />);

    // eslint-disable-next-line jest-dom/prefer-checked
    expect(checkboxInput).toHaveAttribute('aria-checked', 'mixed');
  });
});
