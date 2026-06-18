import type { Meta, StoryObj } from '@storybook/html';
import { render as qwikRender } from '@builder.io/qwik';
import { EngagementContext, type EngagementContextProps } from './engagementContext';

const meta: Meta<EngagementContextProps> = {
  title: 'Content/Engagement Context',
  args: {
    text: 'Project completed while serving as Frontend Developer at Example Company.',
  },
  argTypes: {
    text: {
      control: { type: 'text' },
    },
  },
  render: (props: EngagementContextProps) => {
    const container = document.createElement('div');
    qwikRender(container, <EngagementContext {...props} />);
    return container;
  },
};

type Story = StoryObj<EngagementContextProps>;

export default meta;

export const Default: Story = {};

export const ContractExample: Story = {
  args: {
    text: 'Project commissioned by CityLab while working as an independent contractor.',
  },
};
