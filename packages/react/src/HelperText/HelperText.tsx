import { Icon } from '@/Icon/Icon';
import { clsx } from '@/utils/clsx';
import exclamationCircleIcon from '@pplancq/shelter-ui-icon/icon/exclamation-circle.svg';
import infoCircleIcon from '@pplancq/shelter-ui-icon/icon/info-circle.svg';
import type { HTMLAttributes } from 'react';

export type HelperTextProps = {
  error?: boolean;
} & HTMLAttributes<HTMLElement>;

export const HelperText = ({ className, error, children, ...props }: HelperTextProps) => {
  return (
    <small
      className={clsx('helper-text', error && 'helper-text--error', className)}
      role={error ? 'alert' : undefined}
      {...props}
    >
      <Icon icon={error ? exclamationCircleIcon : infoCircleIcon} size="small" />
      {children}
    </small>
  );
};
