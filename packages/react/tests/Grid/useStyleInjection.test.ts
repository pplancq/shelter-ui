import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { Breakpoint, ColSpan, ColStart } from '@/Grid/types';
import { useStyleInjection } from '@/Grid/useStyleInjection';

describe('useStyleInjection', () => {
  it('should inject styles based on colSpan and colStart', () => {
    const itemClassName = 'test-class';
    const colSpan = 6;
    const colStart = 2;

    renderHook(() => useStyleInjection(itemClassName, colSpan, colStart));

    // eslint-disable-next-line testing-library/no-node-access
    const styleElement = document.getElementById(itemClassName) as HTMLStyleElement | null;

    expect(styleElement).toBeInTheDocument();
    expect(styleElement?.innerText).toStrictEqual(`.${itemClassName} { --col: ${colSpan}; --start: ${colStart}; }`);
  });

  it('should clean up styles on unmount', () => {
    const itemClassName = 'test-class';
    const colSpan = 6;
    const colStart = 2;

    const { unmount } = renderHook(() => useStyleInjection(itemClassName, colSpan, colStart));

    unmount();

    // eslint-disable-next-line testing-library/no-node-access
    const styleElement = document.getElementById(itemClassName);

    expect(styleElement).not.toBeInTheDocument();
  });

  it('should inject styles when colSpan and colStart are objects', () => {
    const itemClassName = 'test-class';
    const colSpan: Partial<Record<Breakpoint, ColSpan>> = { mobile: 6, tablet: 8 };
    const colStart: Partial<Record<Breakpoint, ColStart>> = { mobile: 2 };

    renderHook(() => useStyleInjection(itemClassName, colSpan, colStart));

    // eslint-disable-next-line testing-library/no-node-access
    const styleElement = document.getElementById(itemClassName) as HTMLStyleElement | null;

    expect(styleElement).toBeInTheDocument();
    expect(styleElement?.innerText).toMatch(/--col-mobile: 6;/);
    expect(styleElement?.innerText).toMatch(/--col-tablet: 8;/);
    expect(styleElement?.innerText).toMatch(/--col: 8;/);
    expect(styleElement?.innerText).toMatch(/--start-mobile: 2;/);
    expect(styleElement?.innerText).toMatch(/--start: 2;/);
  });
});
