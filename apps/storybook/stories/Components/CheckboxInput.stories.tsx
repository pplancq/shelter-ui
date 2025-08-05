import { CheckboxInput, type CheckboxInputProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/CheckboxInput',
  component: CheckboxInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    name: 'checkbox',
    value: 'checkbox',
    checked: undefined,
    indeterminate: false,
    disabled: false,
    'aria-invalid': false,
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<CheckboxInputProps>;

export default meta;

type Story = StoryObj<CheckboxInputProps>;

export const Playground: Story = {
  tags: ['dev'],
};
