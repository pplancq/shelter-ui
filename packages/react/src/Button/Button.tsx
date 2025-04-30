import { clsx } from '@/utils/clsx';
import type { ExtendableComponent } from '@/utils/types';
import type { ElementType, ReactNode } from 'react';

export type ButtonProps<C extends ElementType = 'button'> = ExtendableComponent<C> & {
  variant?: 'default' | 'reverse' | 'ghost';
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isCircle?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export const Button = <C extends ElementType = 'button'>({
  component: Component = 'button',
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
  return (
    <Component
      className={clsx(
        'button',
        variant === 'default' ? `button--${color}` : `button--${color}-${variant}`,
        `button--${size}`,
        isCircle && 'button--circle',
        startIcon && !children && 'button--only-icon',
        className,
      )}
      {...props}
      {...(Component === 'button' ? { type } : {})}
    >
      {startIcon}
      {children && (
        <>
          {children}
          {endIcon}
        </>
      )}
    </Component>
  );
};
