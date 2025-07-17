import type { Preview } from '@storybook/react-vite';
import { light } from './theme';
import { viewPorts } from './viewPort';

import '@pplancq/shelter-ui-css/css/shelter-ui.css';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    docs: {
      theme: light,
      toc: {
        title: 'On this page',
        headingSelector: 'h2, h3',
      },
    },
    viewport: {
      options: {
        ...viewPorts,
      },
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
          'Getting Started',
          'ChangeLog',
          'Foundations',
          [
            'Breakpoint',
            'Grid',
            'Spacing',
            'Color',
            'Theme',
            'Typography',
            'Border',
            'Shadow',
            'Interactive Elements',
            'Icon',
          ],
          'Components',
          ['Button'],
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
