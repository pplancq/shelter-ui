import { RadioGroup } from '@/RadioGroup/RadioGroup';
import { RadioOption } from '@/RadioOption/RadioOption';
import { renderSuspense } from '@pplancq/svg-react/tests';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('RadioGroup', () => {
  const defaultChildren = [
    <RadioOption key="option1" label="Option 1" value="option1" />,
    <RadioOption key="option2" label="Option 2" value="option2" />,
    <RadioOption key="option3" label="Option 3" value="option3" />,
  ];

  it('should render a radiogroup with proper role', () => {
    render(
      <RadioGroup label="Test Group" name="test">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });

  it('should render the label as legend', () => {
    render(
      <RadioGroup label="Test Group" name="test">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByText('Test Group')).toBeInTheDocument();
    expect(screen.getByText('Test Group')).toHaveClass('radio-group__legend');
  });

  it('should apply the default radio-group class', () => {
    render(
      <RadioGroup label="Test Group" name="test">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toHaveClass('radio-group');
  });

  it('should apply inline layout class when layout is inline', () => {
    render(
      <RadioGroup label="Test Group" name="test" layout="inline">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toHaveClass('radio-group radio-group--inline');
  });

  it('should not apply inline class when layout is stacked', () => {
    render(
      <RadioGroup label="Test Group" name="test" layout="stacked">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toHaveClass('radio-group');
    expect(screen.getByRole('radiogroup')).not.toHaveClass('radio-group--inline');
  });

  it('should merge custom className with radio-group class', () => {
    render(
      <RadioGroup label="Test Group" name="test" className="custom-class">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toHaveClass('radio-group custom-class');
  });

  it('should show required asterisk when required is true', () => {
    render(
      <RadioGroup label="Test Group" name="test" required>
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden');
  });

  it('should not show required asterisk when required is false', () => {
    render(
      <RadioGroup label="Test Group" name="test" required={false}>
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('should set aria-required when required is true', () => {
    render(
      <RadioGroup label="Test Group" name="test" required>
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toBeRequired();
  });

  it('should not set aria-required when required is false', () => {
    render(
      <RadioGroup label="Test Group" name="test" required={false}>
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).not.toBeRequired();
  });

  it('should render helper text when textHelper is provided', async () => {
    await renderSuspense(
      <RadioGroup label="Test Group" name="test" textHelper="This is helper text">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('should render error message when errorMessage is provided', async () => {
    await renderSuspense(
      <RadioGroup label="Test Group" name="test" errorMessage="This is an error">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  it('should prioritize error message over helper text', async () => {
    await renderSuspense(
      <RadioGroup label="Test Group" name="test" textHelper="Helper text" errorMessage="Error message">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
  });

  it('should set aria-invalid when errorMessage is provided', async () => {
    await renderSuspense(
      <RadioGroup label="Test Group" name="test" errorMessage="Error message">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toBeInvalid();
  });

  it('should not set aria-invalid when no errorMessage', () => {
    render(
      <RadioGroup label="Test Group" name="test">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).not.toBeInvalid();
  });

  it('should pass name prop to all radio options', () => {
    render(
      <RadioGroup label="Test Group" name="test-group">
        {defaultChildren}
      </RadioGroup>,
    );

    const radios = screen.getAllByRole('radio');
    radios.forEach(radio => {
      expect(radio).toHaveAttribute('name', 'test-group');
    });
  });

  it('should pass required prop to all radio options', () => {
    render(
      <RadioGroup label="Test Group" name="test" required>
        <RadioOption label="Option 1" value="option1" />
        <RadioOption label="Option 2" value="option2" />
      </RadioGroup>,
    );

    const radios = screen.getAllByRole('radio');
    radios.forEach(radio => {
      expect(radio).toBeRequired();
    });
  });

  it('should pass isInvalid prop to all radio options when errorMessage is present', async () => {
    await renderSuspense(
      <RadioGroup label="Test Group" name="test" errorMessage="Error">
        {defaultChildren}
      </RadioGroup>,
    );

    const radios = screen.getAllByRole('radio');
    radios.forEach(radio => {
      expect(radio).toHaveClass('radio-input--invalid');
    });
  });

  it('should generate unique ids for radio options based on their values', () => {
    render(
      <RadioGroup label="Test Group" name="test" id="group-id">
        <RadioOption label="Option 1" value="option1" />
        <RadioOption label="Option 2" value="option2" />
      </RadioGroup>,
    );

    expect(screen.getByDisplayValue('option1')).toHaveAttribute('id', 'group-id-option1');
    expect(screen.getByDisplayValue('option2')).toHaveAttribute('id', 'group-id-option2');
  });

  it('should use generated id when id prop is not provided', () => {
    render(
      <RadioGroup label="Test Group" name="test">
        <RadioOption label="Option 1" value="option1" />
        <RadioOption label="Option 2" value="option2" />
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole('radiogroup');
    const radioId = radioGroup.getAttribute('id');
    expect(radioId).toBeTruthy();

    const radio = screen.getByDisplayValue('option1');
    expect(radio).toHaveAttribute('id', expect.stringContaining('option1'));
  });

  it('should set correct aria-labelledby pointing to legend', () => {
    render(
      <RadioGroup label="Test Group" name="test" id="test-group">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-labelledby', 'test-group-legend');
    expect(screen.getByText('Test Group')).toHaveAttribute('id', 'test-group-legend');
  });

  it('should set aria-describedby when helper text is present', async () => {
    await renderSuspense(
      <RadioGroup label="Test Group" name="test" id="test-group" textHelper="Helper">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toHaveAccessibleDescription('Helper');
  });

  it('should set aria-errormessage when error message is present', async () => {
    await renderSuspense(
      <RadioGroup label="Test Group" name="test" id="test-group" errorMessage="Error">
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toHaveAccessibleErrorMessage('Error');
  });

  it('should handle complex label content', () => {
    render(
      <RadioGroup
        label={
          <span>
            Complex <strong>Label</strong>
          </span>
        }
        name="test"
      >
        {defaultChildren}
      </RadioGroup>,
    );

    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('should pass through additional props to the container div', () => {
    render(
      <RadioGroup label="Test Group" name="test" data-testid="radio-group" title="Custom Title">
        {defaultChildren}
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toHaveAttribute('data-testid', 'radio-group');
    expect(radioGroup).toHaveAttribute('title', 'Custom Title');
  });
});
