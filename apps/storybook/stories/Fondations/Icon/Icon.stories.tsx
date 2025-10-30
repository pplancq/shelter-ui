import frFlag from '@pplancq/shelter-ui-icon/flag/fr.svg?no-inline';
import homeIcon from '@pplancq/shelter-ui-icon/icon/home.svg?no-inline';
import reactLogo from '@pplancq/shelter-ui-icon/logo/react-original.svg?no-inline';
import { Icon, type IconProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const demoIconList: Record<string, string> = {
  'fr.svg': frFlag,
  'home.svg': homeIcon,
  'react-original.svg': reactLogo,
};

const meta = {
  title: 'Foundations/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs', 'dev'],
  args: {
    icon: 'react-original.svg',
    size: 'medium',
    isCircle: false,
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['fr.svg', 'home.svg', 'react-original.svg'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    isCircle: {
      control: 'boolean',
    },
  },
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleLayout: Story = {
  name: 'Icon',
  render: ({ icon, ...props }) => {
    return <Icon icon={demoIconList[icon]} {...props} key={icon} />;
  },
  tags: ['!dev'],
};
