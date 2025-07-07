import { clsx } from '@/utils/clsx';
import { type InputHTMLAttributes, type ReactNode } from 'react';

export type InputProps = {
  error?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, error, startAdornment, endAdornment, ...props }: InputProps) => {
  return (
    <div className={clsx('input', error && 'input--error', className)}>
      {startAdornment}
      <input type="text" aria-invalid={error} placeholder=" " {...props} />
      {endAdornment}
    </div>
  );
};
