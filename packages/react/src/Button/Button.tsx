import { clsx } from '@/utils/clsx';
import type { PolymorphicComponent } from '@/utils/types';
import type { ElementType, ReactNode } from 'react';

export type ButtonProps<C extends ElementType = 'button'> = PolymorphicComponent<
  C,
  {
    variant?: 'default' | 'reverse' | 'ghost';
    color?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    isCircle?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  }
>;

export const Button = <C extends ElementType = 'button'>({
  as,
  color = 'primary',
  size = 'medium',
  variant = 'default',
  type = 'button',
  isCircle,
  startIcon,
  endIcon,
  className,
  children,
  ...props
}: ButtonProps<C>) => {
  const Component = as || 'button';

  return (
    <Component
      className={clsx(
        'button',
        variant === 'default' ? `button--${color}` : `button--${color}-${variant}`,
        `button--${size}`,
        isCircle && 'button--circle',
        Boolean(startIcon && !children) && 'button--only-icon',
        className,
      )}
      {...props}
      {...(Component === 'button' ? { type } : {})}
    >
      {startIcon}
      {children ? (
        <>
          {children}
          {endIcon}
        </>
      ) : null}
    </Component>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}
