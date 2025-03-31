import type { ComponentProps, CSSProperties, ElementType } from 'react';

export type ExtendableComponent<C extends ElementType> = {
  component?: C;
  className?: string;
  style?: CSSProperties;
} & ComponentProps<C>;
