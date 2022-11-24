import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@pyxisweb/react";

export const Primary: StoryObj<BoxProps> = {};

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
        assumenda perspiciatis esse libero voluptas quaerat minima aliquam ut
        consequuntur, quis aut, alias quam ab optio quidem non, cumque eaque a?
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;
