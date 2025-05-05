import { clsx } from '@/utils/clsx';
import type { ExtendableComponent } from '@/utils/types';
import { type ElementType, type PropsWithChildren } from 'react';
import { getGridItemToken } from './getGridItemToken';
import type { Breakpoint, ColSpan, ColStart } from './types';

export type GridProps<C extends ElementType> = {
  container?: boolean;
  colSpan?: ColSpan | Partial<Record<Breakpoint, ColSpan>>;
  colStart?: ColStart | Partial<Record<Breakpoint, ColStart>>;
} & ExtendableComponent<C>;

export const Grid = <C extends ElementType = 'div'>({
  component: Component = 'div',
  container,
  className,
  children,
  colSpan,
  colStart,
  style,
  ...props
}: PropsWithChildren<GridProps<C>>) => {
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

Grid.displayName = 'Grid';
