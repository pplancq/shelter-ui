import { getGridItemToken } from '@/Grid/getGridItemToken';
import { describe, expect, it } from 'vitest';

describe('getGridItemToken', () => {
  it('should return tokens for single values', () => {
    const result = getGridItemToken('start', 6);
    expect(result).toStrictEqual({ '--start': 6 });
  });

  it('should return tokens for breakpoint objects', () => {
    const result = getGridItemToken('col', { mobile: 6, tablet: 8 });
    expect(result).toStrictEqual({
      '--col': 8,
      '--col-mobile': 6,
      '--col-tablet': 8,
    });
  });

  it('should handle empty objects gracefully', () => {
    const result = getGridItemToken('col', {});
    expect(result).toStrictEqual({});
  });
});
