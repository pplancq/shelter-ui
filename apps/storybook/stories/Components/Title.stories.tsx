import bookmarkIcon from '@pplancq/shelter-ui-icon/icon/bookmark.svg';
import { Icon, Title, type TitleProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    level: 1,
    title: 'Title',
    subtitle: 'Subtitle',
    layout: 'inline',
    icon: true,
  },
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    layout: {
      control: 'select',
      options: ['inline', 'stacked'],
    },
  },
} satisfies Meta<TitleProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ icon, ...args }) => <Title {...args} icon={icon ? <Icon icon={bookmarkIcon} /> : undefined} />,
};
