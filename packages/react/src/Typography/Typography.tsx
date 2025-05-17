import { clsx } from '@/utils/clsx';
import type { ExtendableComponent } from '@/utils/types';
import { type ElementType, type PropsWithChildren, useMemo } from 'react';

type SizeTitle = 1 | 2 | 3 | 4 | 5 | 6;
type SizeText = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary' | 'hint' | 'disabled';
type TypographyPropsBase<C extends ElementType> = ExtendableComponent<C> & {
  color?: Color;
};
type TypographyPropsTitle<C extends ElementType> = TypographyPropsBase<C> & {
  variant: 'display' | 'heading';
  size?: SizeTitle;
  bold?: false;
};
type TypographyPropsText<C extends ElementType> = TypographyPropsBase<C> & {
  variant?: 'text';
  size?: 'smallest' | 'smaller' | SizeText;
  bold?: true;
};
type TypographyPropsLabel<C extends ElementType> = TypographyPropsBase<C> & {
  variant: 'label';
  size?: SizeText;
  bold?: false;
};
type TypographyPropsCode<C extends ElementType> = TypographyPropsBase<C> & {
  variant: 'code';
  size?: SizeText;
  bold?: false;
};

export type TypographyProps<C extends ElementType> =
  | TypographyPropsTitle<C>
  | TypographyPropsText<C>
  | TypographyPropsLabel<C>
  | TypographyPropsCode<C>;

export const Typography = <C extends ElementType = 'p'>(props: PropsWithChildren<TypographyProps<C>>) => {
  const {
    variant = 'text',
    size = 'medium',
    color = 'primary',
    component,
    className,
    bold,
    ...typographyProps
  } = props as TypographyPropsBase<C>;

  const Component = useMemo(() => {
    const defaultComponent = {
      display: 'span',
      heading: `h${size}` as ElementType,
      text: 'p',
      label: 'span',
      code: 'code',
    } as Record<string, ElementType>;

    return component ?? defaultComponent[variant];
  }, [component, variant, size]);

  const typographyClassName = clsx(
    'typography',
    variant === 'display' && `d${size}`,
    variant === 'heading' && `h${size}`,
    variant === 'text' && `text${bold ? '-bold' : ''}-${size}`,
    variant === 'label' && `label-${size}`,
    variant === 'code' && `code-${size}`,
    className,
  );

  return (
    <Component
      className={typographyClassName}
      {...typographyProps}
      style={{
        '--typography-color': `var(--color-text-${color})`,
      }}
      role={variant === 'display' ? 'heading' : typographyProps.role}
      aria-level={['display', 'heading'].includes(variant) ? size : typographyProps['aria-level']}
    />
  );
};

Typography.displayName = 'Typography';
