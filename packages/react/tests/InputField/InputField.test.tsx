import { InputField } from '@/InputField/InputField';
import { renderSuspense } from '@pplancq/svg-react/tests';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('InputField', () => {
  it('should render the label and input correctly', () => {
    render(<InputField label="Test Label" />);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should associate label with input using htmlFor and id', () => {
    render(<InputField label="Test Label" />);

    const label = screen.getByText('Test Label');
    const input = screen.getByRole('textbox');
    expect(label).toHaveAttribute('for', input.id);
  });

  it('should display the helper text when textHelper is provided', async () => {
    await renderSuspense(<InputField label="Test Label" textHelper="Helper text" />);

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('should display the error message when errorMessage is provided', async () => {
    await renderSuspense(<InputField label="Test Label" errorMessage="Error message" />);

    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('should apply the correct class names based on layout prop', () => {
    const { rerender } = render(<InputField label="Test Label" layout="stacked" />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Label').parentElement).toHaveClass('input-field');

    rerender(<InputField label="Test Label" layout="inline" />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Label').parentElement).toHaveClass('input-field--inline');
  });

  it('should mark the label and input as required when required prop is true', () => {
    render(<InputField label="Test Label" required />);

    const label = screen.getByText('Test Label');
    const input = screen.getByRole('textbox');

    expect(label).toHaveTextContent('*');
    expect(input).toBeRequired();
  });
});
