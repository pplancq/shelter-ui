import { clsx } from '@/utils/clsx';
import { Svg } from '@pplancq/svg-react';
import type { ComponentProps } from 'react';

export type IconProps = Omit<ComponentProps<typeof Svg>, 'src'> & {
  icon: string;
  size?: 'small' | 'medium' | 'large';
  isCircle?: boolean;
};

export const Icon = ({ size = 'medium', className, icon, isCircle, ...iconProps }: IconProps) => {
  return (
    <Svg
      {...iconProps}
      className={clsx('icon', `icon--${size}`, isCircle && 'icon--circle', className)}
      src={icon}
      role={iconProps.role ?? 'presentation'}
    />
  );
};

Icon.displayName = 'Icon';
