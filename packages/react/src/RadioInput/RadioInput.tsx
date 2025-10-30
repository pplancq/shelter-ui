import { clsx } from '@/utils/clsx';
import type { ComponentProps } from 'react';

export type RadioInputProps = Omit<ComponentProps<'input'>, 'type'> & {
  isInvalid?: boolean;
};

export const RadioInput = ({ className, isInvalid, ...props }: RadioInputProps) => {
  return (
    <input type="radio" className={clsx('radio-input', isInvalid && 'radio-input--invalid', className)} {...props} />
  );
};

if (process.env.NODE_ENV !== 'production') {
  RadioInput.displayName = 'RadioInput';
}
