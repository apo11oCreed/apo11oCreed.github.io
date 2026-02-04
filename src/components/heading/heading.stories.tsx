import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Heading, type HeadingProps } from "./heading";

const meta: Meta<HeadingProps> = {
  component: Heading,
};

type Story = StoryObj<HeadingProps>;

export default meta;

export const Primary: Story = {
  args: {
    level: 1,
  },
  render: (props) => <Heading {...props}>Some heading</Heading>,
};
