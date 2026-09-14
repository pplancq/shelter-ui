import { CheckboxField, type CheckboxFieldProps, CheckboxGroup } from "@pplancq/shelter-ui-react";
import type { Meta, StoryObj } from "@storybook/react";

CheckboxGroup.displayName = "CheckboxGroup";
CheckboxField.displayName = "CheckboxField";

const checkboxOptions: CheckboxFieldProps[] = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs", "!dev"],
  args: {
    children: [],
    label: "Checkbox Label",
    required: false,
    name: "checkbox",
    errorMessage: "",
    textHelper: "Helper text",
    layout: "stacked",
    itemsLayout: "inline",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    layout: {
      control: "select",
      options: ["stacked", "inline"],
      description: "Layout of the radio options",
    },
    itemsLayout: {
      control: "select",
      options: ["stacked", "inline"],
      description: "Layout of the radio options",
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  tags: ["dev"],
  args: {
    children: [],
    label: "Checkbox Label",
    required: false,
    name: "checkbox",
    errorMessage: "",
    textHelper: "Helper text",
    layout: "stacked",
    itemsLayout: "inline",
  },
  render: ({ label, name, required, layout, errorMessage, textHelper, ...args }) => {
    const storyArgs: Partial<typeof args> = { ...args };
    delete storyArgs.children;

    return (
      <CheckboxGroup
        label={label}
        name={name}
        required={required}
        layout={layout === "inline" ? layout : undefined}
        errorMessage={errorMessage || undefined}
        textHelper={textHelper || undefined}
        {...storyArgs}
      >
        {checkboxOptions.map((option) => (
          <CheckboxField key={`${option.value}`} {...option} />
        ))}
      </CheckboxGroup>
    );
  },
};
