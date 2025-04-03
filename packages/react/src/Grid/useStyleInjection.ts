import { useLayoutEffect, useMemo, useRef } from 'react';
import type { Breakpoint, ColSpan, ColStart } from './types';

const generateToken = (prefix: string, data: ColSpan | ColStart | Partial<Record<Breakpoint, ColSpan | ColStart>>) => {
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

export const useStyleInjection = (
  itemClassName: string,
  colSpan?: ColSpan | Partial<Record<Breakpoint, ColSpan>>,
  colStart?: ColStart | Partial<Record<Breakpoint, ColStart>>,
) => {
  const styleRef = useRef<HTMLStyleElement>(document.createElement('style'));
  const cssRules = useMemo(() => {
    const tokens = {
      ...generateToken('col', colSpan ?? {}),
      ...generateToken('start', colStart ?? {}),
    };

    return Object.entries(tokens)
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ');
  }, [colSpan, colStart]);

  useLayoutEffect(() => {
    const styleEl = styleRef.current;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  useLayoutEffect(() => {
    styleRef.current.innerText = `.${itemClassName} { ${cssRules} }`;
    styleRef.current.id = itemClassName;
  }, [cssRules, itemClassName]);
};
