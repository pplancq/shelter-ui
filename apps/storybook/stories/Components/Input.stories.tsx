import eyeIcon from '@pplancq/shelter-ui-icon/icon/eye.svg?no-inline';
import searchIcon from '@pplancq/shelter-ui-icon/icon/search.svg?no-inline';
import timesIcon from '@pplancq/shelter-ui-icon/icon/times.svg?no-inline';
import { Icon, Input, type InputProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { JSX } from 'react';

const iconList: Record<string, JSX.Element | undefined> = {
  'search.svg': <Icon icon={searchIcon} />,
  'eye.svg': <Icon icon={eyeIcon} />,
  'times.svg': <Icon icon={timesIcon} />,
  none: undefined,
};

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    value: '',
    placeholder: 'Placeholder',
    error: false,
    startAdornment: undefined,
    endAdornment: undefined,
  },
  argTypes: {
    startAdornment: {
      control: 'select',
      options: Object.keys(iconList),
    },
    endAdornment: {
      control: 'select',
      options: Object.keys(iconList),
    },
  },
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ startAdornment, endAdornment, placeholder, value, ...args }) => (
    <Input
      {...args}
      placeholder={placeholder === '' ? ' ' : placeholder}
      startAdornment={iconList[startAdornment as string]}
      endAdornment={iconList[endAdornment as string]}
      value={value !== '' ? value : undefined}
    />
  ),
};
