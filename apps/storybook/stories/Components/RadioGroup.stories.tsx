import { RadioGroup, RadioOption, type RadioOptionProps } from "@pplancq/shelter-ui-react";
import type { Meta, StoryObj } from "@storybook/react";

RadioGroup.displayName = "RadioGroup";
RadioOption.displayName = "RadioOption";

const radioOptions: RadioOptionProps[] = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs", "!dev"],
  args: {
    children: [],
    label: "Radio Group",
    required: false,
    name: "radio-group",
    errorMessage: "",
    textHelper: "Text helper",
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
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  tags: ["dev"],
  args: {
    children: [],
    label: "Radio Group",
    required: false,
    name: "radio-group",
    errorMessage: "",
    textHelper: "Text helper",
    layout: "stacked",
    itemsLayout: "inline",
  },
  render: ({ label, name, required, layout, itemsLayout, errorMessage, textHelper, ...args }) => {
    const storyArgs: Partial<typeof args> = { ...args };
    delete storyArgs.children;

    return (
      <RadioGroup
        label={label}
        name={name}
        required={required}
        layout={layout === "inline" ? layout : undefined}
        itemsLayout={itemsLayout === "stacked" ? itemsLayout : undefined}
        errorMessage={errorMessage || undefined}
        textHelper={textHelper || undefined}
        {...storyArgs}
      >
        {radioOptions.map((option) => (
          <RadioOption key={`${option.value}`} {...option} />
        ))}
      </RadioGroup>
    );
  },
};
