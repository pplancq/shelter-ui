import { clsx } from '@/utils/clsx';
import type { LabelHTMLAttributes } from 'react';

export type LabelProps = {
  required?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ required, children, className, htmlFor, ...props }: LabelProps) => {
  return (
    <label className={clsx('label', className)} htmlFor={htmlFor} {...props}>
      {children}
      {required && <span aria-hidden>*</span>}
    </label>
  );
};
