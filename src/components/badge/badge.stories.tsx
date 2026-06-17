import type { Meta, StoryObj } from '@storybook/html';
import { render as qwikRender } from '@builder.io/qwik';
import { Badge, type BadgeProps } from './badge';

const meta: Meta<BadgeProps> = {
  title: 'Content/Badges',
  parameters: {
    docs: {
      description: {
        component: '[View Figma Design](https://www.figma.com/design/8YzC8yJDF7sHWM9ou4DdNO/Website?node-id=1-4&m=dev&t=DXfABXPVy9ImwzC0-1)',
      },
    },
  },
  args: {
    text: 'Badge',
    context: 'tech'
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    context: {
      control: { type: 'select' },
      options: ['tech', 'default'],
    },
    text: {
      control: { type: 'text' },
    },
  },
  render: (props: BadgeProps) => {
    const container = document.createElement('div');
    qwikRender(container, <Badge {...props}>{props.text}</Badge>);
    return container;
  },
};

type Story = StoryObj<BadgeProps>;

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