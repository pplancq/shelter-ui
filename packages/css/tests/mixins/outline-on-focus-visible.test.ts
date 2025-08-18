import path from 'node:path';
import sassTrue from 'sass-true';
import { describe, it } from 'vitest';

describe('Outline on Focus Visible Mixin', () => {
  const file = path.resolve(__dirname, 'outline-on-focus-visible.spec.scss');

  sassTrue.runSass({ describe, it }, file, {
    loadPaths: [path.resolve(__dirname, '../../sass')],
  });
});
