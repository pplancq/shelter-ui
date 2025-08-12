import { CheckboxField } from '@/CheckboxField/CheckboxField';
import { CheckboxGroup } from '@/CheckboxGroup/CheckboxGroup';
import { renderSuspense } from '@pplancq/svg-react/tests';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

describe('CheckboxGroup', () => {
  const defaultChildren = [
    <CheckboxField key="option1" label="Option 1" value="option1" />,
    <CheckboxField key="option2" label="Option 2" value="option2" />,
    <CheckboxField key="option3" label="Option 3" value="option3" />,
  ];

  it('should render a group with proper role', () => {
    render(
      <CheckboxGroup label="Test Group" name="test">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const checkboxGroup = screen.getByRole('group', { name: 'Test Group' });

    expect(checkboxGroup).toBeInTheDocument();
  });

  it('should apply the default checkbox-group class', () => {
    render(
      <CheckboxGroup label="Test Group" name="test">
        {defaultChildren}
      </CheckboxGroup>,
    );

    expect(screen.getByRole('group', { name: 'Test Group' })).toHaveClass('checkbox-group');
  });

  it('should apply inline layout class when layout is inline', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" layout="inline">
        {defaultChildren}
      </CheckboxGroup>,
    );

    expect(screen.getByRole('group', { name: 'Test Group' })).toHaveClass('checkbox-group checkbox-group--inline');
  });

  it('should not apply inline class when layout is stacked', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" layout="stacked">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const checkboxGroup = screen.getByRole('group', { name: 'Test Group' });
    expect(checkboxGroup).toHaveClass('checkbox-group');
    expect(checkboxGroup).not.toHaveClass('checkbox-group--inline');
  });

  it('should apply stacked items layout class when itemsLayout is stacked', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" itemsLayout="stacked">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const optionsContainer = screen
      .getByRole('group', { name: 'Test Group' })
      // eslint-disable-next-line testing-library/no-node-access
      .querySelector('.checkbox-group__options');
    expect(optionsContainer).toHaveClass('checkbox-group__options--stacked');
  });

  it('should not apply stacked items class when itemsLayout is inline', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" itemsLayout="inline">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const optionsContainer = screen
      .getByRole('group', { name: 'Test Group' })
      // eslint-disable-next-line testing-library/no-node-access
      .querySelector('.checkbox-group__options');
    expect(optionsContainer).not.toHaveClass('checkbox-group__options--stacked');
  });

  it('should merge custom className with checkbox-group class', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" className="custom-class">
        {defaultChildren}
      </CheckboxGroup>,
    );

    expect(screen.getByRole('group', { name: 'Test Group' })).toHaveClass('checkbox-group custom-class');
  });

  it('should show required asterisk when required is true', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" required>
        {defaultChildren}
      </CheckboxGroup>,
    );

    const legend = screen.getByText('Test Group');

    expect(legend).toHaveTextContent('*');
    expect(within(legend).getByText('*')).toHaveAttribute('aria-hidden');
  });

  it('should not show required asterisk when required is false', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" required={false}>
        {defaultChildren}
      </CheckboxGroup>,
    );

    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('should render helper text when textHelper is provided', async () => {
    await renderSuspense(
      <CheckboxGroup label="Test Group" name="test" textHelper="This is helper text">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const checkboxes = screen.getAllByRole('checkbox');

    checkboxes.forEach(checkbox => {
      expect(checkbox).toHaveAccessibleDescription('This is helper text');
    });
  });

  it('should render error message when errorMessage is provided', async () => {
    await renderSuspense(
      <CheckboxGroup label="Test Group" name="test" errorMessage="This is an error">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const checkboxes = screen.getAllByRole('checkbox');

    checkboxes.forEach(checkbox => {
      expect(checkbox).toHaveAccessibleErrorMessage('This is an error');
    });
  });

  it('should pass name prop to all checkbox fields', () => {
    render(
      <CheckboxGroup label="Test Group" name="test-group">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      expect(checkbox).toHaveAttribute('name', 'test-group');
    });
  });

  it('should pass required prop to all checkbox fields', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" required>
        <CheckboxField label="Option 1" value="option1" />
        <CheckboxField label="Option 2" value="option2" />
      </CheckboxGroup>,
    );

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      expect(checkbox).toBeRequired();
    });
  });

  it('should set aria-invalid on all checkbox fields when errorMessage is present', async () => {
    await renderSuspense(
      <CheckboxGroup label="Test Group" name="test" errorMessage="Error">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      expect(checkbox).toBeInvalid();
    });
  });

  it('should not set aria-invalid when no errorMessage', () => {
    render(
      <CheckboxGroup label="Test Group" name="test">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      expect(checkbox).not.toBeInvalid();
    });
  });

  it('should generate unique ids for checkbox fields based on their values', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" id="group-id">
        <CheckboxField label="Option 1" value="option1" />
        <CheckboxField label="Option 2" value="option2" />
      </CheckboxGroup>,
    );

    expect(screen.getByDisplayValue('option1')).toHaveAttribute('id', 'group-id-option1');
    expect(screen.getByDisplayValue('option2')).toHaveAttribute('id', 'group-id-option2');
  });

  it('should use generated id when id prop is not provided', () => {
    render(
      <CheckboxGroup label="Test Group" name="test">
        <CheckboxField label="Option 1" value="option1" />
        <CheckboxField label="Option 2" value="option2" />
      </CheckboxGroup>,
    );

    const checkboxGroup = screen.getByRole('group');
    const groupId = checkboxGroup.getAttribute('id');
    expect(groupId).toBeTruthy();

    const checkbox = screen.getByDisplayValue('option1');
    expect(checkbox).toHaveAttribute('id', expect.stringContaining('option1'));
  });

  it('should pass through additional props to the container div', () => {
    render(
      <CheckboxGroup label="Test Group" name="test" data-testid="checkbox-group" title="Custom Title">
        {defaultChildren}
      </CheckboxGroup>,
    );

    const checkboxGroup = screen.getByRole('group');
    expect(checkboxGroup).toHaveAttribute('data-testid', 'checkbox-group');
    expect(checkboxGroup).toHaveAttribute('title', 'Custom Title');
  });

  it('should preserve individual checkbox onChange handlers', async () => {
    const mockOnChange = vi.fn();
    const user = userEvent.setup();

    render(
      <CheckboxGroup label="Test Group" name="test">
        <CheckboxField label="Option 1" value="option1" onChange={mockOnChange} />
        <CheckboxField label="Option 2" value="option2" />
      </CheckboxGroup>,
    );

    const checkbox = screen.getByDisplayValue('option1');
    await user.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledWith(expect.anything());
  });

  describe('required group validation logic', () => {
    it('should add required attribute to all checkboxes when none are checked and group is required', () => {
      render(
        <CheckboxGroup label="Test Group" name="test" required>
          <CheckboxField label="Option 1" value="option1" />
          <CheckboxField label="Option 2" value="option2" />
        </CheckboxGroup>,
      );

      const checkboxes = screen.getAllByRole('checkbox');

      checkboxes.forEach(checkbox => {
        expect(checkbox).toBeRequired();
      });
    });

    it('should remove required attribute from all checkboxes when at least one is checked', async () => {
      const user = userEvent.setup();

      render(
        <CheckboxGroup label="Test Group" name="test" required>
          <CheckboxField label="Option 1" value="option1" />
          <CheckboxField label="Option 2" value="option2" />
        </CheckboxGroup>,
      );

      const checkboxes = screen.getAllByRole('checkbox');

      await user.click(checkboxes[0]);

      checkboxes.forEach(checkbox => {
        expect(checkbox).not.toBeRequired();
      });
    });

    it('should re-add required attribute when unchecking the last checked checkbox', async () => {
      const user = userEvent.setup();

      render(
        <CheckboxGroup label="Test Group" name="test" required>
          <CheckboxField label="Option 1" value="option1" />
          <CheckboxField label="Option 2" value="option2" />
        </CheckboxGroup>,
      );

      const checkboxes = screen.getAllByRole('checkbox');

      await user.click(checkboxes[0]);
      await user.click(checkboxes[0]);

      checkboxes.forEach(checkbox => {
        expect(checkbox).toBeRequired();
      });
    });

    it('should not manage required attribute when group is not required', async () => {
      const user = userEvent.setup();

      render(
        <CheckboxGroup label="Test Group" name="test" required={false}>
          <CheckboxField label="Option 1" value="option1" />
          <CheckboxField label="Option 2" value="option2" />
        </CheckboxGroup>,
      );

      const checkboxes = screen.getAllByRole('checkbox');

      checkboxes.forEach(checkbox => {
        expect(checkbox).not.toBeRequired();
      });

      await user.click(checkboxes[0]);
      await user.click(checkboxes[0]);

      checkboxes.forEach(checkbox => {
        expect(checkbox).not.toBeRequired();
      });
    });
  });
});
