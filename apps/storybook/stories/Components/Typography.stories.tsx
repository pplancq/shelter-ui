import { Typography, type TypographyProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react';

import '@pplancq/shelter-ui-css/sass/components/typography.scss';

const meta = {
  title: 'Components/Typography',
  component: Typography,

  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs', 'dev'],
  args: {
    variant: 'text',
    sizeHeading: 1,
    sizeDisplay: 1,
    sizeText: 'medium',
    sizeLabel: 'medium',
    sizeCode: 'medium',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'heading', 'text', 'label', 'code'],
    },
    sizeHeading: {
      name: 'size',
      if: {
        arg: 'variant',
        eq: 'heading',
      },
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    sizeDisplay: {
      name: 'size',
      if: {
        arg: 'variant',
        eq: 'display',
      },
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    sizeText: {
      name: 'size',
      if: {
        arg: 'variant',
        eq: 'text',
      },
      control: 'select',
      options: ['smallest', 'smaller', 'small', 'medium', 'large'],
    },
    sizeLabel: {
      name: 'size',
      if: {
        arg: 'variant',
        eq: 'label',
      },
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    sizeCode: {
      name: 'size',
      if: {
        arg: 'variant',
        eq: 'code',
      },
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<
  TypographyProps<'p'> & {
    sizeHeading: 1 | 2 | 3 | 4 | 5 | 6;
    sizeDisplay: 1 | 2 | 3 | 4 | 5 | 6;
    sizeText: 'smallest' | 'smaller' | 'small' | 'medium' | 'large';
    sizeLabel: 'small' | 'medium' | 'large';
    sizeCode: 'small' | 'medium' | 'large';
  }
>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleLayout: Story = {
  name: 'Typography',
  render: ({ sizeHeading, sizeDisplay, sizeText, sizeLabel, sizeCode, ...args }) => {
    const size = {
      display: sizeDisplay,
      heading: sizeHeading,
      text: sizeText,
      label: sizeLabel,
      code: sizeCode,
    };
    return (
      <Typography {...args} size={size[(args.variant as keyof typeof size) ?? 'text']}>
        Lorem ipsum dolor sit amet
      </Typography>
    );
  },
};
