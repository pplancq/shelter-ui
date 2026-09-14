import eyeIcon from "@pplancq/shelter-ui-icon/icon/eye.svg?url";
import searchIcon from "@pplancq/shelter-ui-icon/icon/search.svg?url";
import timesIcon from "@pplancq/shelter-ui-icon/icon/times.svg?url";
import { Icon, Input, type InputProps } from "@pplancq/shelter-ui-react";
import type { Meta, StoryObj } from "@storybook/react";
import type { JSX } from "react";

Icon.displayName = "Icon";
Input.displayName = "Input";

type InputStoryArgs = Omit<InputProps, "startAdornment" | "endAdornment" | "value"> & {
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
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs", "!dev"],
  args: {
    value: "",
    placeholder: "Placeholder",
    error: false,
    startAdornment: undefined,
    endAdornment: undefined,
  },
  argTypes: {
    startAdornment: {
      control: "select",
      options: Object.keys(iconList),
    },
    endAdornment: {
      control: "select",
      options: Object.keys(iconList),
    },
  },
} satisfies Meta<InputStoryArgs>;

export default meta;

type Story = StoryObj<InputStoryArgs>;

export const Playground: Story = {
  tags: ["dev"],
  render: ({ startAdornment, endAdornment, placeholder, value, ...args }: InputStoryArgs) => (
    <Input
      {...args}
      placeholder={placeholder === "" ? " " : placeholder}
      startAdornment={startAdornment ? iconList[startAdornment] : undefined}
      endAdornment={endAdornment ? iconList[endAdornment] : undefined}
      value={value !== "" ? value : undefined}
    />
  ),
};
