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
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi assumenda perspiciatis esse libero voluptas quaerat minima aliquam ut consequuntur, quis aut, alias quam ab optio quidem non, cumque eaque a?",
  },
} as Meta<TextProps>;
