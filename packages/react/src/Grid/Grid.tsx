import { clsx } from '@/utils/clsx';
import type { PolymorphicComponent } from '@/utils/types';
import { type ElementType, type PropsWithChildren } from 'react';
import { getGridItemToken } from './getGridItemToken';
import type { Breakpoint, ColSpan, ColStart } from './types';

export type GridProps<C extends ElementType> = PolymorphicComponent<
  C,
  {
    container?: boolean;
    colSpan?: ColSpan | Partial<Record<Breakpoint, ColSpan>>;
    colStart?: ColStart | Partial<Record<Breakpoint, ColStart>>;
  }
>;

export const Grid = <C extends ElementType = 'div'>({
  as,
  container,
  className,
  children,
  colSpan,
  colStart,
  style,
  ...props
}: PropsWithChildren<GridProps<C>>) => {
  const Component = as || 'div';

  return (
    <Component
      className={clsx(container && 'grid', (colSpan || colStart) && 'grid-item', className)}
      style={{
        ...{
          ...getGridItemToken('col', colSpan ?? {}),
          ...getGridItemToken('start', colStart ?? {}),
        },
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Grid.displayName = 'Grid';
}
