import path from 'node:path';
import sassTrue from 'sass-true';
import { describe, it } from 'vitest';

describe('Responsive Mixins', () => {
  const file = path.resolve(__dirname, 'responsive.spec.scss');

  sassTrue.runSass({ describe, it }, file, {
    loadPaths: [path.resolve(__dirname, '../../sass')],
  });
});
