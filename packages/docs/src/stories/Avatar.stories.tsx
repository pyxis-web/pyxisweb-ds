import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@pyxisweb/react";

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/ismaelguimaraes.png",
    alt: "Ismael Guimarães",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;
