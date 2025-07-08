import { HelperText, type HelperTextProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'HelperText',
    error: false,
  },
  tags: ['!autodocs', '!dev'],
} satisfies Meta<HelperTextProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ ...args }) => <HelperText {...args} />,
};
