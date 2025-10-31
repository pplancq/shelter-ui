import type { Breakpoint, ColSpan, ColStart } from './types';

const BREAKPOINT_ORDER: readonly Breakpoint[] = [
  'mobile',
  'tablet',
  'desktop-small',
  'desktop-medium',
  'desktop-large',
] as const;

export const getGridItemToken = (
  prefix: 'col' | 'start',
  data: ColSpan | ColStart | Partial<Record<Breakpoint, ColSpan | ColStart>>,
) => {
  const tokens: Record<string, ColSpan | ColStart> = {};
  if (typeof data === 'number' || typeof data === 'string') {
    tokens[`--${prefix}`] = data;
  } else {
    // Sort the breakpoints in the correct order before processing
    const sortedEntries = Object.entries(data).sort(([keyA], [keyB]) => {
      const indexA = BREAKPOINT_ORDER.indexOf(keyA as Breakpoint);
      const indexB = BREAKPOINT_ORDER.indexOf(keyB as Breakpoint);
      return indexA - indexB;
    });

    sortedEntries.forEach(([key, value]) => {
      if (value) {
        tokens[`--${prefix}`] = value;
        tokens[`--${prefix}-${key}`] = value;
      }
    });
  }

  return tokens;
};
