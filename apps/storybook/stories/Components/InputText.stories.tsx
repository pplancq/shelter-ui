import eyeIcon from '@pplancq/shelter-ui-icon/icon/eye.svg?no-inline';
import searchIcon from '@pplancq/shelter-ui-icon/icon/search.svg?no-inline';
import timesIcon from '@pplancq/shelter-ui-icon/icon/times.svg?no-inline';
import { Icon, InputField, type InputFieldProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { JSX } from 'react';

const iconList: Record<string, JSX.Element | undefined> = {
  'search.svg': <Icon icon={searchIcon} />,
  'eye.svg': <Icon icon={eyeIcon} />,
  'times.svg': <Icon icon={timesIcon} />,
  none: undefined,
};

const meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  args: {
    layout: 'stacked',
    label: 'Label',
    textHelper: 'Helper text',
    errorMessage: '',
    value: '',
    placeholder: 'Placeholder',
    required: false,
    startAdornment: 'none',
    endAdornment: 'none',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['stacked', 'inline'],
    },
    startAdornment: {
      control: 'select',
      options: Object.keys(iconList),
    },
    endAdornment: {
      control: 'select',
      options: Object.keys(iconList),
    },
  },
  tags: ['!autodocs', '!dev'],
} satisfies Meta<InputFieldProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ placeholder, startAdornment, endAdornment, textHelper, errorMessage, value, ...args }) => (
    <InputField
      {...args}
      placeholder={placeholder === '' ? ' ' : placeholder}
      startAdornment={iconList[startAdornment as string]}
      endAdornment={iconList[endAdornment as string]}
      textHelper={textHelper !== '' ? textHelper : undefined}
      errorMessage={errorMessage !== '' ? errorMessage : undefined}
      value={value !== '' ? value : undefined}
    />
  ),
};
