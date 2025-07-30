import { RadioOption, type RadioOptionProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/RadioOption',
  component: RadioOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    label: 'Radio Option',
    labelPosition: 'left',
    checked: false,
    isInvalid: false,
    disabled: false,
  },
  argTypes: {
    labelPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
} satisfies Meta<RadioOptionProps>;

export default meta;

type Story = StoryObj<RadioOptionProps>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ ...args }) => <RadioOption {...args} />,
};
