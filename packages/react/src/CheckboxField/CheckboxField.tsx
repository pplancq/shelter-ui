import { CheckboxInput, type CheckboxInputProps } from '@/CheckboxInput/CheckboxInput';
import { HelperText } from '@/HelperText/HelperText';
import { Label } from '@/Label/Label';
import { clsx } from '@/utils/clsx';
import { type ReactNode, useId } from 'react';

export type CheckboxFieldProps = Omit<CheckboxInputProps, 'indeterminate'> & {
  label: ReactNode;
  textHelper?: ReactNode;
  errorMessage?: ReactNode;
};

export const CheckboxField = ({
  label,
  id,
  className,
  required,
  textHelper,
  errorMessage,
  ...props
}: CheckboxFieldProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const helperTextId = `text-helper-${id ?? generatedId}`;

  return (
    <div className={clsx('checkbox-field', className)}>
      <Label htmlFor={checkboxId} required={required}>
        <CheckboxInput
          id={checkboxId}
          required={required}
          aria-describedby={!errorMessage && textHelper ? helperTextId : undefined}
          aria-errormessage={errorMessage ? helperTextId : undefined}
          aria-invalid={errorMessage ? true : undefined}
          {...props}
        />
        {label}
      </Label>
      {Boolean(errorMessage || textHelper) && (
        <HelperText id={helperTextId} error={Boolean(errorMessage)}>
          {errorMessage || textHelper}
        </HelperText>
      )}
    </div>
  );
};
