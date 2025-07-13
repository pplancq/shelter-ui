import { HelperText } from '@/HelperText/HelperText';
import { Input, type InputProps } from '@/Input/Input';
import { Label } from '@/Label/Label';
import { clsx } from '@/utils/clsx';
import { type ReactNode, useId } from 'react';

export type InputFieldProps = {
  layout?: 'stacked' | 'inline';
  required?: boolean;
  label: ReactNode;
  textHelper?: ReactNode;
  errorMessage?: ReactNode;
} & InputProps;

export const InputField = ({
  layout,
  required,
  label,
  errorMessage,
  textHelper,
  id,
  className,
  ...inputProps
}: InputFieldProps) => {
  const genericId = useId();
  const inputId = id ?? genericId;
  const helperTextId = `text-helper-${id ?? genericId}`;

  return (
    <div className={clsx('input-field', layout === 'inline' && 'input-field--inline', className)}>
      <Label required={required} htmlFor={inputId}>
        {label}
      </Label>
      <Input
        required={required}
        id={inputId}
        aria-describedby={!errorMessage || textHelper ? helperTextId : undefined}
        aria-errormessage={errorMessage ? helperTextId : undefined}
        error={Boolean(errorMessage)}
        {...inputProps}
      />
      {Boolean(errorMessage || textHelper) && (
        <HelperText id={helperTextId} error={Boolean(errorMessage)}>
          {errorMessage || textHelper}
        </HelperText>
      )}
    </div>
  );
};
