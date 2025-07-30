import { Label } from '@/Label/Label';
import { RadioInput, type RadioInputProps } from '@/RadioInput/RadioInput';
import { clsx } from '@/utils/clsx';
import { type ReactNode, useId } from 'react';

export type RadioOptionProps = RadioInputProps & {
  label: ReactNode;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
};

export const RadioOption = ({ id, label, className, labelPosition = 'left', ...radioInputProps }: RadioOptionProps) => {
  const generatedId = useId();
  const radioId = id ?? generatedId;

  return (
    <Label
      htmlFor={radioId}
      className={clsx('radio-option', labelPosition !== 'left' && `radio-option--${labelPosition}`, className)}
    >
      {label}
      <RadioInput id={radioId} {...radioInputProps} />
    </Label>
  );
};
