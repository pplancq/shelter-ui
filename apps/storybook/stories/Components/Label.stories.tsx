import { Label, type LabelProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Label',
    required: false,
  },
  tags: ['!autodocs', '!dev'],
} satisfies Meta<LabelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ ...args }) => <Label {...args} />,
};
