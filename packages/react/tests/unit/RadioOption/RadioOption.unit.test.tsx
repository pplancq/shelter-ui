import { RadioOption } from '@/RadioOption/RadioOption';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('RadioOption', () => {
  it('should render a radio option with label', () => {
    render(<RadioOption label="Test Option" value="test" />);

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Option')).toBeInTheDocument();
  });

  it('should apply the default radio-option class', () => {
    render(<RadioOption label="Test Option" value="test" />);

    const label = screen.getByText('Test Option');
    expect(label).toHaveClass('radio-option');
  });

  it('should merge custom className with radio-option class', () => {
    render(<RadioOption label="Test Option" value="test" className="custom-class" />);

    const label = screen.getByText('Test Option');
    expect(label).toHaveClass('radio-option custom-class');
  });

  it('should pass radio input props to RadioInput', () => {
    render(<RadioOption label="Test Option" value="test" checked onChange={vi.fn()} />);

    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('should pass isInvalid prop to RadioInput', () => {
    render(<RadioOption label="Test Option" value="test" isInvalid />);

    expect(screen.getByRole('radio')).toHaveClass('radio-input--invalid');
  });

  it('should use provided id', () => {
    render(<RadioOption label="Test Option" value="test" id="custom-id" />);

    expect(screen.getByRole('radio')).toHaveAttribute('id', 'custom-id');
  });

  it('should generate id when not provided', () => {
    render(<RadioOption label="Test Option" value="test" />);

    const radioInput = screen.getByRole('radio');
    expect(radioInput).toHaveAttribute('id');
    expect(radioInput.getAttribute('id')).toBeTruthy();
  });

  it('should associate label with radio input via htmlFor', () => {
    render(<RadioOption label="Test Option" value="test" id="test-id" />);

    const label = screen.getByText('Test Option');
    expect(label).toHaveAttribute('for', 'test-id');
  });

  it('should render with complex label content', () => {
    render(
      <RadioOption
        label={
          <span>
            Complex <strong>Label</strong>
          </span>
        }
        value="test"
      />,
    );

    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<RadioOption label="Test Option" value="test" disabled />);

    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('should have correct name attribute', () => {
    render(<RadioOption label="Test Option" value="test" name="test-group" />);

    expect(screen.getByRole('radio')).toHaveAttribute('name', 'test-group');
  });
});
