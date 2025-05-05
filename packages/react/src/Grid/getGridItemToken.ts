import type { Breakpoint, ColSpan, ColStart } from './types';

export const getGridItemToken = (
  prefix: 'col' | 'start',
  data: ColSpan | ColStart | Partial<Record<Breakpoint, ColSpan | ColStart>>,
) => {
  const tokens: Record<string, ColSpan | ColStart> = {};
  if (typeof data === 'number' || typeof data === 'string') {
    tokens[`--${prefix}`] = data;
  } else {
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        tokens[`--${prefix}`] = value;
        tokens[`--${prefix}-${key}`] = value;
      }
    });
  }

  return tokens;
};
