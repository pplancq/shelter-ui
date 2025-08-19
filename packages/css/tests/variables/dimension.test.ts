import path from 'node:path';
import sassTrue from 'sass-true';
import { describe, it } from 'vitest';

describe('Dimension Mixins', () => {
  const file = path.resolve(__dirname, 'dimension.spec.scss');

  sassTrue.runSass({ describe, it }, file, {
    loadPaths: [path.resolve(__dirname, '../../sass')],
  });
});
