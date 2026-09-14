import alignLeftIcon from "@pplancq/shelter-ui-icon/icon/align-left.svg?url";
import arrowLeftIcon from "@pplancq/shelter-ui-icon/icon/arrow-left.svg?url";
import arrowRightIcon from "@pplancq/shelter-ui-icon/icon/arrow-right.svg?url";
import editIcon from "@pplancq/shelter-ui-icon/icon/edit-alt.svg?url";
import { Button, type ButtonProps, Icon } from "@pplancq/shelter-ui-react";
import type { Meta, StoryObj } from "@storybook/react";
import type { JSX } from "react";
import { fn } from "storybook/test";

Button.displayName = "Button";
Icon.displayName = "Icon";

type ButtonStoryArgs = Omit<ButtonProps, "startIcon" | "endIcon"> & {
  startIcon?: keyof typeof iconList;
  endIcon?: keyof typeof iconList;
};

const iconList: Record<string, JSX.Element | undefined> = {
  "align-left.svg": <Icon icon={alignLeftIcon} />,
  "arrow-left.svg": <Icon icon={arrowLeftIcon} />,
  "arrow-right.svg": <Icon icon={arrowRightIcon} />,
  "edit-alt.svg": <Icon icon={editIcon} />,
  none: undefined,
};

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  tags: ["!autodocs", "!dev"],
  args: {
    variant: "default",
    color: "primary",
    size: "medium",
    isCircle: false,
    children: "Label",
    onClick: fn(),
  },
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: "select",
      options: ["default", "reverse", "ghost"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    isCircle: {
      control: "boolean",
    },
    startIcon: {
      control: "select",
      options: Object.keys(iconList),
    },
    endIcon: {
      control: "select",
      options: Object.keys(iconList),
      if: {
        arg: "isCircle",
        eq: false,
      },
    },
    children: {
      control: "text",
      if: {
        arg: "isCircle",
        eq: false,
      },
    },
  },
} satisfies Meta<ButtonStoryArgs>;

export default meta;

type Story = StoryObj<ButtonStoryArgs>;

export const Playground: Story = {
  tags: ["dev"],
  render: ({ startIcon, endIcon, ...props }: ButtonStoryArgs) => (
    <Button
      {...props}
      startIcon={startIcon ? iconList[startIcon] : undefined}
      endIcon={endIcon ? iconList[endIcon] : undefined}
    />
  ),
};

export const IconOnly: Story = {
  args: {
    startIcon: "edit-alt.svg",
    "aria-label": "Edit",
    children: undefined,
  },
  render: ({ startIcon, ...props }: ButtonStoryArgs) => (
    <Button {...props} startIcon={startIcon ? iconList[startIcon] : undefined} />
  ),
};

export const CircularIconOnly: Story = {
  args: {
    isCircle: true,
    startIcon: "arrow-left.svg",
    "aria-label": "Go Back",
    children: undefined,
  },
  render: ({ startIcon, ...props }: ButtonStoryArgs) => (
    <Button {...props} startIcon={startIcon ? iconList[startIcon] : undefined} />
  ),
};
