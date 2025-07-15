import { Alert, type AlertProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    variant: 'info',
    title: 'Alert Title',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    onClose: fn(),
    hasCloseButton: true,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'warning', 'error', 'success'],
    },
    children: {
      control: 'text',
    },
    onClose: {
      table: {
        disable: true,
      },
    },
    hasCloseButton: {
      control: 'boolean',
    },
  },
} satisfies Meta<AlertProps & { hasCloseButton: boolean }>;

export default meta;

type Story = StoryObj<AlertProps & { hasCloseButton: boolean }>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ variant, onClose, hasCloseButton, children, ...args }) => (
    <Alert
      {...args}
      variant={variant !== 'info' ? variant : undefined}
      onClose={hasCloseButton ? onClose : undefined}
      // eslint-disable-next-line react/no-children-prop
      children={children !== '' ? children : undefined}
    />
  ),
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information Alert',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning Alert',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error Alert',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success Alert',
  },
};
