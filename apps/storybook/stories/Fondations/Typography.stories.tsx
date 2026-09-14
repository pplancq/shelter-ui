import { Typography } from "@pplancq/shelter-ui-react";
import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, ElementType, ReactNode } from "react";

Typography.displayName = "Typography";

type TypographyStoryArgs = {
  variant?: "display" | "heading" | "text" | "label" | "code";
  color?: "primary" | "secondary" | "hint" | "disabled";
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  role?: string;
  "aria-level"?: number;
  children?: ReactNode;
  sizeHeading?: 1 | 2 | 3 | 4 | 5 | 6;
  sizeDisplay?: 1 | 2 | 3 | 4 | 5 | 6;
  sizeText?: "smallest" | "smaller" | "small" | "medium" | "large";
  sizeLabel?: "small" | "medium" | "large";
  sizeCode?: "small" | "medium" | "large";
};

const meta = {
  title: "Foundations/Typography",
  component: Typography,

  parameters: {
    layout: "padded",
  },
  tags: ["!autodocs", "dev"],
  args: {
    variant: "text",
    color: "primary",
    sizeHeading: 1,
    sizeDisplay: 1,
    sizeText: "medium",
    sizeLabel: "medium",
    sizeCode: "medium",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "heading", "text", "label", "code"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "hint", "disabled"],
    },
    sizeHeading: {
      name: "size",
      if: {
        arg: "variant",
        eq: "heading",
      },
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    sizeDisplay: {
      name: "size",
      if: {
        arg: "variant",
        eq: "display",
      },
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    sizeText: {
      name: "size",
      if: {
        arg: "variant",
        eq: "text",
      },
      control: "select",
      options: ["smallest", "smaller", "small", "medium", "large"],
    },
    sizeLabel: {
      name: "size",
      if: {
        arg: "variant",
        eq: "label",
      },
      control: "select",
      options: ["small", "medium", "large"],
    },
    sizeCode: {
      name: "size",
      if: {
        arg: "variant",
        eq: "code",
      },
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<TypographyStoryArgs>;

export default meta;

type Story = StoryObj<TypographyStoryArgs>;

export const ExampleLayout: Story = {
  name: "Typography",
  render: ({ sizeHeading, sizeDisplay, sizeText, sizeLabel, sizeCode, ...args }: TypographyStoryArgs) => {
    const { variant, ...restArgs } = args;
    const resolvedVariant = variant ?? "text";

    switch (resolvedVariant) {
      case "display":
        return (
          <Typography {...restArgs} variant="display" size={sizeDisplay ?? 1}>
            Lorem ipsum dolor sit amet
          </Typography>
        );
      case "heading":
        return (
          <Typography {...restArgs} variant="heading" size={sizeHeading ?? 1}>
            Lorem ipsum dolor sit amet
          </Typography>
        );
      case "label":
        return (
          <Typography {...restArgs} variant="label" size={sizeLabel ?? "medium"}>
            Lorem ipsum dolor sit amet
          </Typography>
        );
      case "code":
        return (
          <Typography {...restArgs} variant="code" size={sizeCode ?? "medium"}>
            Lorem ipsum dolor sit amet
          </Typography>
        );
      default:
        return (
          <Typography {...restArgs} variant="text" size={sizeText ?? "medium"}>
            Lorem ipsum dolor sit amet
          </Typography>
        );
    }
  },
};
