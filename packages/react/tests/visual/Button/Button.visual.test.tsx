import '@pplancq/shelter-ui-css/css/shelter-ui.css';

import { Button } from '@/Button/Button';
import { beforeAll, describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from 'vitest/browser';

type Color = 'primary' | 'secondary' | 'danger';
type Variant = 'default' | 'reverse' | 'ghost';
type Size = 'small' | 'medium' | 'large';
type State = 'default' | 'hover' | 'active' | 'focus' | 'disabled';

const COLORS: Color[] = ['primary', 'secondary', 'danger'];
const VARIANTS: Variant[] = ['default', 'reverse', 'ghost'];
const SIZES: Size[] = ['small', 'medium', 'large'];
const STATES: State[] = ['default', 'hover', 'active', 'focus', 'disabled'];

const sizeCases = COLORS.flatMap(color => VARIANTS.flatMap(variant => SIZES.map(size => ({ color, variant, size }))));
const stateCases = COLORS.flatMap(color =>
  VARIANTS.flatMap(variant => STATES.map(state => ({ color, variant, state }))),
);

describe('Button', () => {
  beforeAll(async () => {
    await document.fonts.ready;
  });

  const labelStyle = {
    display: 'block',
    fontFamily: 'monospace',
    fontSize: '11px',
    color: '#555',
    marginBottom: '4px',
  } as const;

  describe('sizes', () => {
    it.each(sizeCases)('$color $variant $size', async ({ color, variant, size }) => {
      const view = await render(
        <div
          data-testid="wrapper"
          style={{ padding: '8px', display: 'inline-flex', flexDirection: 'column', background: '#fff' }}
        >
          <code style={labelStyle}>{`<Button color="${color}" variant="${variant}" size="${size}" />`}</code>
          <Button color={color} variant={variant} size={size}>
            Label
          </Button>
        </div>,
      );
      await expect(view.getByTestId('wrapper')).toMatchScreenshot(`sizes-${color}-${variant}-${size}`);
    });
  });

  describe('states', () => {
    it.each(stateCases)('$color $variant $state', async ({ color, variant, state }) => {
      const view = await render(
        <div
          data-testid="wrapper"
          style={{ padding: '8px', display: 'inline-flex', flexDirection: 'column', background: '#fff' }}
        >
          <code style={labelStyle}>{`<Button color="${color}" variant="${variant}" state="${state}" />`}</code>
          <Button color={color} variant={variant} size="medium" disabled={state === 'disabled'}>
            Label
          </Button>
        </div>,
      );
      const button = view.getByRole('button', { name: /label/i });

      try {
        if (state === 'hover') {
          await button.hover();
        } else if (state === 'active') {
          button.element().focus();
          await userEvent.keyboard('{Space>}');
        } else if (state === 'focus') {
          await userEvent.tab();
        }

        await expect(view.getByTestId('wrapper')).toMatchScreenshot(`states-${color}-${variant}-${state}`);
      } finally {
        if (state === 'hover') await button.unhover();
        if (state === 'active') await userEvent.keyboard('{/Space}');
      }
    });
  });
});
