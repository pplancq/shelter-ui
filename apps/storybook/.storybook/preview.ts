import type { Preview } from '@storybook/react';
import { viewPorts } from './viewPort';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: viewPorts,
    },
    backgrounds: {
      values: [
        { name: 'Dark', value: '#202228' },
        { name: 'Light', value: '#F0F1F3' },
      ],
      default: 'Light',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'GetStarted',
          'Fondations',
          ['Breakpoint', 'Grid', 'Spacing', 'Color', 'Theme', 'Typography', 'Border', 'Shadow', 'Icon'],
          'Components',
          ['Button'],
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
