import type { Preview } from '@storybook/react';
import { viewPorts } from './viewPort';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: viewPorts,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Fondations', 'Components'],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
