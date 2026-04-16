import type { Meta, StoryObj } from '@storybook/html';
import { render as qwikRender } from '@builder.io/qwik';
import { Heading, type HeadingProps } from './heading';

const meta: Meta<HeadingProps> = {
  title: 'Content/Headings',
  parameters: {
    docs: {
      description: {
        component: '[View Figma Design](https://www.figma.com/design/8YzC8yJDF7sHWM9ou4DdNO/Website?node-id=1-4&m=dev&t=DXfABXPVy9ImwzC0-1)',
      },
    },
  },
  args: {
    level: 1,
    text: 'Some heading',
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
      control: { type: 'text' },
    },
  },
  render: (props: HeadingProps) => {
    const container = document.createElement('div');
    qwikRender(container, <Heading {...props}>{props.text}</Heading>);
    return container;
  },
};

type Story = StoryObj<HeadingProps>;

export default meta;

export const LightMode: Story = {
  args: {
    mode: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    mode: 'dark',
  },
};