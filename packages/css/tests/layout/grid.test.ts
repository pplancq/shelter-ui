import path from 'node:path';
import sassTrue from 'sass-true';
import { describe, it } from 'vitest';

describe('Grid Mixins', () => {
  const file = path.resolve(__dirname, 'grid.spec.scss');

  sassTrue.runSass({ describe, it }, file, {
    loadPaths: [path.resolve(__dirname, '../../sass')],
  });
});
