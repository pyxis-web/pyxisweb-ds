import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@pyxisweb/react";

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
};

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom title",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão, o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.",
      },
    },
  },
} as Meta<HeadingProps>;
