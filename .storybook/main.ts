import path from 'path';
import { StorybookConfig } from 'storybook-framework-qwik';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: 'storybook-framework-qwik',
  },
  docs: {
    autodocs: true,
  },
  core: {
    renderer: 'storybook-framework-qwik',
    builder: '@storybook/builder-vite',
  },
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  viteFinal: async (config: any) => {
  config.resolve = config.resolve ?? {};
  config.resolve.alias = {
  ...(config.resolve.alias ?? {}),
  'storybook/actions': path.resolve('./node_modules/@storybook/addon-actions/dist/index.js'),
  'storybook/internal/docs-tools': path.resolve('./node_modules/storybook/core/docs-tools/index.js'),
  'storybook/internal/preview-api': path.resolve('./node_modules/storybook/core/preview-api/index.js'),
  'storybook/internal/preview-errors': path.resolve('./node_modules/storybook/core/preview-errors.js'),
  'storybook/internal/core-events': path.resolve('./node_modules/storybook/core/core-events/index.js'),
  'storybook/internal/channels': path.resolve('./node_modules/storybook/core/channels/index.js'),
};
  config.optimizeDeps = config.optimizeDeps ?? {};
  config.optimizeDeps.exclude = [
    ...(config.optimizeDeps.exclude ?? []),
    'storybook-framework-qwik',
  ];
  config.optimizeDeps.include = [
    ...(config.optimizeDeps.include ?? []),
    'storybook/internal/preview-api',
    'storybook/internal/preview-errors',
    'storybook/internal/core-events',
    'storybook/internal/channels',
    '@storybook/addon-actions',
  ];
  return config;
},
};

export default config;