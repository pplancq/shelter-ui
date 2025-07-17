import { Button, type ButtonProps } from '@/Button/Button';
import { Icon } from '@/Icon/Icon';
import { clsx } from '@/utils/clsx';
import checkIcon from '@pplancq/shelter-ui-icon/icon/check.svg';
import exclamationOctagonIcon from '@pplancq/shelter-ui-icon/icon/exclamation-octagon.svg';
import exclamationTriangleIcon from '@pplancq/shelter-ui-icon/icon/exclamation-triangle.svg';
import infoCircleIcon from '@pplancq/shelter-ui-icon/icon/info-circle.svg';
import timesIcon from '@pplancq/shelter-ui-icon/icon/times.svg';
import { type HTMLAttributes, JSX, type ReactNode } from 'react';

export type AlertProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  variant?: 'info' | 'warning' | 'error' | 'success';
  title: ReactNode;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  onClose?: ButtonProps['onClick'];
  buttonLabel?: string;
};

const signalIcon = (variant: AlertProps['variant']) => {
  switch (variant) {
    case 'error':
      return exclamationOctagonIcon;
    case 'warning':
      return exclamationTriangleIcon;
    case 'success':
      return checkIcon;
    default:
      return infoCircleIcon;
  }
};

export const Alert = ({
  variant,
  title,
  onClose,
  buttonLabel,
  children,
  titleLevel = 4,
  className,
  ...props
}: AlertProps) => {
  const Title = `h${titleLevel}` as keyof JSX.IntrinsicElements;

  return (
    <section
      className={clsx('alert', variant !== 'info' && `alert--${variant}`, className)}
      role={['error', 'warning'].includes(variant ?? '') ? 'alert' : 'status'}
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      {...props}
    >
      <Icon icon={signalIcon(variant)} size="large" className="alert__icon" />
      <Title className="alert__title">{title}</Title>
      {Boolean(children) && <div className="alert__message">{children}</div>}
      {onClose ? (
        <Button
          variant="ghost"
          size="large"
          isCircle
          startIcon={<Icon icon={timesIcon} />}
          className="alert__close-button"
          onClick={onClose}
          aria-label={buttonLabel ?? 'Close alert'}
        />
      ) : null}
    </section>
  );
};
