import alignLeftIcon from '@pplancq/shelter-ui-icon/icon/align-left.svg';
import arrowLeftIcon from '@pplancq/shelter-ui-icon/icon/arrow-left.svg';
import arrowRightIcon from '@pplancq/shelter-ui-icon/icon/arrow-right.svg';
import editIcon from '@pplancq/shelter-ui-icon/icon/edit-alt.svg';
import { Button, type ButtonProps, Icon } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { JSX } from 'react';

import '@pplancq/shelter-ui-css/sass/components/icon.scss';
import { fn } from 'storybook/test';
import '@pplancq/shelter-ui-css/sass/components/button.scss';

const iconList: Record<string, JSX.Element | undefined> = {
  'align-left.svg': <Icon icon={alignLeftIcon} />,
  'arrow-left.svg': <Icon icon={arrowLeftIcon} />,
  'arrow-right.svg': <Icon icon={arrowRightIcon} />,
  'edit-alt.svg': <Icon icon={editIcon} />,
  none: undefined,
};

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    variant: 'default',
    color: 'primary',
    size: 'medium',
    isCircle: false,
    children: 'Label',
    onClick: fn(),
  },
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'reverse', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    isCircle: {
      control: 'boolean',
    },
    startIcon: {
      control: 'select',
      options: Object.keys(iconList),
    },
    endIcon: {
      control: 'select',
      options: Object.keys(iconList),
      if: {
        arg: 'isCircle',
        eq: false,
      },
    },
    children: {
      control: 'text',
      if: {
        arg: 'isCircle',
        eq: false,
      },
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ startIcon, endIcon, ...props }) => (
    <Button {...props} startIcon={iconList[startIcon as string]} endIcon={iconList[endIcon as string]} />
  ),
};

export const IconOnly: Story = {
  args: {
    startIcon: iconList['edit-alt.svg'],
    'aria-label': 'Edit',
    children: undefined,
  },
  render: ({ startIcon, ...props }) => <Button {...props} startIcon={startIcon} />,
};

export const CircularIconOnly: Story = {
  args: {
    isCircle: true,
    startIcon: iconList['arrow-left.svg'],
    'aria-label': 'Go Back',
    children: undefined,
  },
  render: ({ startIcon, ...props }) => <Button {...props} startIcon={startIcon} />,
};
