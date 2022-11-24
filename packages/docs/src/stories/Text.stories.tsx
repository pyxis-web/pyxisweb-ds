import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@pyxisweb/react";

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "strong text",
    as: "strong",
  },
};

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi assumenda perspiciatis esse libero voluptas quaerat minima aliquam ut consequuntur, quis aut, alias quam ab optio quidem non, cumque eaque a?",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;
