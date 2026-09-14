import frFlag from "@pplancq/shelter-ui-icon/flag/fr.svg?url";
import homeIcon from "@pplancq/shelter-ui-icon/icon/home.svg?url";
import reactLogo from "@pplancq/shelter-ui-icon/logo/react-original.svg?url";
import { Icon } from "@pplancq/shelter-ui-react";
import type { Meta, StoryObj } from "@storybook/react";

Icon.displayName = "Icon";

const demoIconList: Record<string, string> = {
  "fr.svg": frFlag,
  "home.svg": homeIcon,
  "react-original.svg": reactLogo,
};

const meta = {
  title: "Foundations/Icon",
  component: Icon,
  parameters: {
    layout: "padded",
  },
  tags: ["!autodocs", "dev"],
  args: {
    icon: demoIconList["react-original.svg"],
    size: "medium",
    isCircle: false,
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(demoIconList),
      mapping: demoIconList,
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    isCircle: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleLayout: Story = {
  name: "Icon",
  args: {
    icon: demoIconList["react-original.svg"],
    size: "medium",
    isCircle: false,
  },
  render: ({ icon, ...props }) => <Icon icon={icon ?? demoIconList["react-original.svg"]} {...props} key={icon} />,
  tags: ["!dev"],
};
