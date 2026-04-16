import type { Preview } from '@storybook/html';
import '../src/global.css';

const preview: Preview = {
  parameters: {
    a11y: {
      config: {},
      options: {
        checks: { 'color-contrast': { options: { noScroll: true } } },
        restoreScroll: true,
      },
    },
    options: {
      showRoots: true,
    },
    docs: {
      iframeHeight: '200px',
    },
  },
};

export default preview;