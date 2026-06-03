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

  it('should sort breakpoints in correct order: mobile < tablet < desktop-small', () => {
    // Test with incorrect declaration order
    const result = getGridItemToken('col', {
      'desktop-small': 6,
      tablet: 4,
      mobile: 2,
    });
    // The last breakpoint in order should be desktop-small (6), not mobile (2)
    expect(result).toStrictEqual({
      '--col': 6,
      '--col-mobile': 2,
      '--col-tablet': 4,
      '--col-desktop-small': 6,
    });
  });

  it('should sort breakpoints in correct order: mobile < desktop-medium', () => {
    // Test case where desktop-medium is defined but not intermediate breakpoints
    const result = getGridItemToken('col', {
      'desktop-medium': 8,
      mobile: 2,
    });
    // The last breakpoint in order should be desktop-medium (8), not mobile (2)
    expect(result).toStrictEqual({
      '--col': 8,
      '--col-mobile': 2,
      '--col-desktop-medium': 8,
    });
  });

  it('should sort breakpoints in correct order: all breakpoints defined', () => {
    const result = getGridItemToken('col', {
      'desktop-large': 12,
      'desktop-medium': 10,
      'desktop-small': 8,
      tablet: 6,
      mobile: 4,
    });
    // The last breakpoint in order should be desktop-large (12)
    expect(result).toStrictEqual({
      '--col': 12,
      '--col-mobile': 4,
      '--col-tablet': 6,
      '--col-desktop-small': 8,
      '--col-desktop-medium': 10,
      '--col-desktop-large': 12,
    });
  });

  it('should work with colStart prefix', () => {
    const result = getGridItemToken('start', {
      'desktop-small': 3,
      tablet: 2,
      mobile: 1,
    });
    expect(result).toStrictEqual({
      '--start': 3,
      '--start-mobile': 1,
      '--start-tablet': 2,
      '--start-desktop-small': 3,
    });
  });
});
