import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Heading, type HeadingProps } from "./heading";

const meta: Meta<HeadingProps> = {
  component: Heading,
  title: "Content/Heading",
};

type Story = StoryObj<HeadingProps>;

export default meta;

export const Headings: Story = {
  args: {
    level: 1,
    text: 'Some heading',
    mode: 'light',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    mode: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    text: {
      control: { type: 'text'},
    }
  },
  render: (props: HeadingProps) => <Heading {...props}>{props.text}</Heading>,
};
