import { CheckboxField, type CheckboxFieldProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/CheckboxField',
  component: CheckboxField,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    label: 'Checkbox Label',
    name: 'checkbox',
    value: 'checkbox',
    checked: undefined,
    required: false,
    disabled: false,
    textHelper: 'Helper text',
    errorMessage: '',
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<CheckboxFieldProps>;

export default meta;

type Story = StoryObj<CheckboxFieldProps>;

export const Playground: Story = {
  tags: ['dev'],
};
