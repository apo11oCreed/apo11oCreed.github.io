import { mergeConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [qwikVite()],
    });
  },
};

export default config;