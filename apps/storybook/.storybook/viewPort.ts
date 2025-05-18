import type { ViewportMap } from 'storybook/viewport';

export const viewPorts: ViewportMap = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '100%',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '668px',
      height: '100%',
    },
    type: 'tablet',
  },
  desktopSmall: {
    name: 'Desktop Small',
    styles: {
      width: '1024px',
      height: '100%',
    },
    type: 'desktop',
  },
  desktopMedium: {
    name: 'Desktop Medium',
    styles: {
      width: '1280px',
      height: '100%',
    },
    type: 'desktop',
  },
  desktopLarge: {
    name: 'Desktop Large',
    styles: {
      width: '1600px',
      height: '100%',
    },
    type: 'desktop',
  },
};
