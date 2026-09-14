import eyeIcon from "@pplancq/shelter-ui-icon/icon/eye.svg?url";
import searchIcon from "@pplancq/shelter-ui-icon/icon/search.svg?url";
import timesIcon from "@pplancq/shelter-ui-icon/icon/times.svg?url";
import { Icon, InputField, type InputFieldProps } from "@pplancq/shelter-ui-react";
import type { Meta, StoryObj } from "@storybook/react";
import type { JSX } from "react";

Icon.displayName = "Icon";
InputField.displayName = "InputField";

type InputTextStoryArgs = Omit<InputFieldProps, "startAdornment" | "endAdornment" | "value"> & {
  startAdornment?: keyof typeof iconList;
  endAdornment?: keyof typeof iconList;
  value?: string;
};

const iconList: Record<string, JSX.Element | undefined> = {
  "search.svg": <Icon icon={searchIcon} />,
  "eye.svg": <Icon icon={eyeIcon} />,
  "times.svg": <Icon icon={timesIcon} />,
  none: undefined,
};

const meta = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  args: {
    layout: "stacked",
    label: "Label",
    textHelper: "Helper text",
    errorMessage: "",
    value: "",
    placeholder: "Placeholder",
    required: false,
    startAdornment: "none",
    endAdornment: "none",
  },
  argTypes: {
    layout: {
      control: "select",
      options: ["stacked", "inline"],
    },
    startAdornment: {
      control: "select",
      options: Object.keys(iconList),
    },
    endAdornment: {
      control: "select",
      options: Object.keys(iconList),
    },
  },
  tags: ["!autodocs", "!dev"],
} satisfies Meta<InputTextStoryArgs>;

export default meta;

type Story = StoryObj<InputTextStoryArgs>;

export const Playground: Story = {
  tags: ["dev"],
  render: ({
    placeholder,
    startAdornment,
    endAdornment,
    textHelper,
    errorMessage,
    value,
    ...args
  }: InputTextStoryArgs) => (
    <InputField
      {...args}
      placeholder={placeholder === "" ? " " : placeholder}
      startAdornment={startAdornment ? iconList[startAdornment] : undefined}
      endAdornment={endAdornment ? iconList[endAdornment] : undefined}
      textHelper={textHelper !== "" ? textHelper : undefined}
      errorMessage={errorMessage !== "" ? errorMessage : undefined}
      value={value !== "" ? value : undefined}
    />
  ),
};
