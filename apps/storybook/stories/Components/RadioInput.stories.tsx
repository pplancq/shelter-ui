import { RadioInput, type RadioInputProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/RadioInput',
  component: RadioInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    checked: false,
    isInvalid: false,
    disabled: false,
  },
  argTypes: {},
} satisfies Meta<RadioInputProps>;

export default meta;

type Story = StoryObj<RadioInputProps>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ ...args }) => <RadioInput {...args} />,
};
