import {
  CheckboxField,
  type CheckboxFieldProps,
  CheckboxGroup,
  type CheckboxGroupProps,
} from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxField.displayName = 'CheckboxField';

const checkboxOptions: CheckboxFieldProps[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const meta = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs', '!dev'],
  args: {
    label: 'Checkbox Label',
    required: false,
    name: 'checkbox',
    errorMessage: '',
    textHelper: 'Helper text',
    layout: 'stacked',
    itemsLayout: 'inline',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['stacked', 'inline'],
      description: 'Layout of the radio options',
    },
    itemsLayout: {
      control: 'select',
      options: ['stacked', 'inline'],
      description: 'Layout of the radio options',
    },
  },
} satisfies Meta<CheckboxGroupProps>;

export default meta;

type Story = StoryObj<CheckboxGroupProps>;

export const Playground: Story = {
  tags: ['dev'],
  render: ({ layout, errorMessage, textHelper, ...args }) => {
    return (
      <CheckboxGroup
        layout={layout === 'inline' ? layout : undefined}
        errorMessage={errorMessage || undefined}
        textHelper={textHelper || undefined}
        {...args}
      >
        {checkboxOptions.map(option => (
          <CheckboxField key={`${option.value}`} {...option} />
        ))}
      </CheckboxGroup>
    );
  },
};
