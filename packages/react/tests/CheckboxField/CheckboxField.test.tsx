import { CheckboxField } from '@/CheckboxField/CheckboxField';
import { renderSuspense } from '@pplancq/svg-react/tests';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

describe('CheckboxField', () => {
  it('should render the label and checkbox correctly', () => {
    render(<CheckboxField label="Test Label" />);

    expect(screen.getByRole('checkbox', { name: 'Test Label' })).toBeInTheDocument();
  });

  it('should use custom id when provided', () => {
    render(<CheckboxField label="Test Label" id="custom-id" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'custom-id');
  });

  it('should display the helper text when textHelper is provided', async () => {
    await renderSuspense(<CheckboxField label="Test Label" textHelper="Helper text" />);

    expect(screen.getByRole('checkbox', { name: 'Test Label' })).toHaveAccessibleDescription('Helper text');
  });

  it('should display the error message when errorMessage is provided', async () => {
    await renderSuspense(<CheckboxField label="Test Label" errorMessage="Error message" />);

    expect(screen.getByRole('checkbox', { name: 'Test Label' })).toHaveAccessibleErrorMessage('Error message');
  });

  it('should mark the label and checkbox as required when required prop is true', () => {
    render(<CheckboxField label="Test Label" required />);

    const checkbox = screen.getByRole('checkbox');
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(checkbox).toBeRequired();
  });

  it('should render as checked when checked prop is true', () => {
    render(<CheckboxField label="Test Label" checked />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('should render as unchecked when checked prop is false', () => {
    render(<CheckboxField label="Test Label" checked={false} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('should call onChange handler when clicked', async () => {
    const handleChange = vi.fn();
    render(<CheckboxField label="Test Label" onChange={handleChange} />);
    const user = userEvent.setup();

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          checked: true,
        }),
      }),
    );
  });

  it('should forward ref to the checkbox input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<CheckboxField label="Test Label" ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toStrictEqual('checkbox');
  });

  it('should pass through additional props to the checkbox input element', () => {
    render(<CheckboxField label="Test Label" data-testid="custom-checkbox" aria-label="Test checkbox" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-testid', 'custom-checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Test checkbox');
  });
});
