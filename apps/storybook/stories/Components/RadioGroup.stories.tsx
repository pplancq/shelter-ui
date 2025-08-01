import { RadioGroup, type RadioGroupProps, RadioOption, type RadioOptionProps } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const radioOptions: RadioOptionProps[] = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    label: 'Radio Group',
    required: false,
    name: 'radio-group',
    errorMessage: '',
    textHelper: 'Text helper',
    layout: 'stacked',
    labelPosition: 'left',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['stacked', 'inline'],
      description: 'Layout of the radio options',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Position of the label relative to the radio option',
    },
  },
} satisfies Meta<RadioGroupProps>;

export default meta;

type Story = StoryObj<RadioGroupProps>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ layout, labelPosition, errorMessage, textHelper, ...args }) => {
    return (
      <RadioGroup
        layout={layout === 'inline' ? layout : undefined}
        labelPosition={labelPosition !== 'left' ? labelPosition : undefined}
        errorMessage={errorMessage || undefined}
        textHelper={textHelper || undefined}
        {...args}
      >
        {radioOptions.map(option => (
          <RadioOption key={`${option.value}`} {...option} />
        ))}
      </RadioGroup>
    );
  },
};
