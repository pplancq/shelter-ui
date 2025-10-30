import { Label } from '@/Label/Label';
import { RadioInput, type RadioInputProps } from '@/RadioInput/RadioInput';
import { clsx } from '@/utils/clsx';
import { type ReactNode, useId } from 'react';

export type RadioOptionProps = RadioInputProps & {
  label: ReactNode;
};

export const RadioOption = ({ id, label, className, ...radioInputProps }: RadioOptionProps) => {
  const generatedId = useId();
  const radioId = id ?? generatedId;

  return (
    <Label htmlFor={radioId} className={clsx('radio-option', className)}>
      <RadioInput id={radioId} {...radioInputProps} />
      {label}
    </Label>
  );
};

if (process.env.NODE_ENV !== 'production') {
  RadioOption.displayName = 'RadioOption';
}
