import { clsx } from '@/utils/clsx';
import type { PolymorphicComponent } from '@/utils/types';
import { type CSSProperties, type ElementType, type PropsWithChildren, useMemo } from 'react';

type SizeTitle = 1 | 2 | 3 | 4 | 5 | 6;
type SizeText = 'small' | 'medium' | 'large';
export type Color = 'primary' | 'secondary' | 'hint' | 'disabled';
type TypographyPropsBase = {
  color?: Color;
};
type TypographyPropsTitle = {
  variant: 'display' | 'heading';
  size?: SizeTitle;
  bold?: false;
};
type TypographyPropsText = {
  variant?: 'text';
  size?: 'smallest' | 'smaller' | SizeText;
  bold?: true;
};
type TypographyPropsLabel = {
  variant: 'label';
  size?: SizeText;
  bold?: false;
};
type TypographyPropsCode = {
  variant: 'code';
  size?: SizeText;
  bold?: false;
};

export type TypographyProps<C extends ElementType> = PolymorphicComponent<
  C,
  TypographyPropsBase & (TypographyPropsTitle | TypographyPropsText | TypographyPropsLabel | TypographyPropsCode)
>;

export const Typography = <C extends ElementType = 'p'>({
  variant = 'text',
  size = 'medium',
  color = 'primary',
  as,
  className,
  bold,
  style: userStyle,
  ...typographyProps
}: PropsWithChildren<TypographyProps<C>>) => {
  const Component = useMemo(() => {
    const defaultComponent = {
      display: 'span',
      heading: `h${size}` as ElementType,
      text: 'p',
      label: 'span',
      code: 'code',
    } as Record<string, ElementType>;

    return as ?? defaultComponent[variant];
  }, [as, variant, size]);

  const typographyClassName = clsx(
    'typography',
    variant === 'display' && `d${size}`,
    variant === 'heading' && `h${size}`,
    variant === 'text' && `text${bold ? '-bold' : ''}-${size}`,
    variant === 'label' && `label-${size}`,
    variant === 'code' && `code-${size}`,
    className,
  );

  const mergedStyle = {
    ...(userStyle as CSSProperties),
    '--typography-color': `var(--color-text-${color})`,
  } as CSSProperties;

  return (
    <Component
      className={typographyClassName}
      {...typographyProps}
      style={mergedStyle}
      role={variant === 'display' ? 'heading' : typographyProps.role}
      aria-level={['display', 'heading'].includes(variant) ? size : typographyProps['aria-level']}
    />
  );
};

if (process.env.NODE_ENV !== 'production') {
  Typography.displayName = 'Typography';
}
