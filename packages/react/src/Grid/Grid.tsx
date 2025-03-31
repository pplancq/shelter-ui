import { type ElementType, type PropsWithChildren, useId } from 'react';
import { clsx } from '../utils/clsx';
import type { ExtendableComponent } from '../utils/types';
import { useStyleInjection } from './useStyleInjection';
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
  ...props
}: PropsWithChildren<GridProps<C>>) => {
  const itemId = useId().replaceAll(':', '-');
  const itemClassName = `grid-item-${itemId}`;

  useStyleInjection(itemClassName, colSpan, colStart);

  return (
    <Component className={clsx(container && 'grid', (colSpan || colStart) && itemClassName, className)} {...props}>
      {children}
    </Component>
  );
};
