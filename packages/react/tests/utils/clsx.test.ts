import { describe, expect, it } from 'vitest';
import { clsx } from '@/utils/clsx';

describe('clsx', () => {
  it('should join valid classes', () => {
    expect(clsx('class1', 'class2')).toStrictEqual('class1 class2');
  });

  it('should ignore falsy values', () => {
    expect(clsx('class1', false, true && 'class2', undefined)).toStrictEqual('class1 class2');
  });

  it('should return an empty string if no valid classes are provided', () => {
    expect(clsx(false, undefined)).toStrictEqual('');
  });
});
