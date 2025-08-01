import { HelperText } from '@/HelperText/HelperText';
import type { RadioOptionProps } from '@/RadioOption/RadioOption';
import { clsx } from '@/utils/clsx';
import { Children, cloneElement, type ComponentProps, type ReactElement, type ReactNode, useId, useMemo } from 'react';

export type RadioGroupProps = Omit<ComponentProps<'div'>, 'role' | 'children'> & {
  layout?: 'stacked' | 'inline';
  required?: boolean;
  label: ReactNode;
  textHelper?: ReactNode;
  errorMessage?: ReactNode;
  children: ReactElement<RadioOptionProps>[];
} & Pick<RadioOptionProps, 'name' | 'labelPosition'>;

export const RadioGroup = ({
  children,
  label,
  className,
  layout,
  required,
  errorMessage,
  textHelper,
  id,
  name,
  labelPosition,
  ...props
}: RadioGroupProps) => {
  const genericId = useId();
  const groupId = id ?? genericId;
  const helperTextId = `${id ?? genericId}-helper-text`;
  const legendId = `${id ?? genericId}-legend`;

  const radioOptions = useMemo(
    () =>
      Children.map(children, child =>
        cloneElement(child, {
          name,
          labelPosition,
          required,
          isInvalid: Boolean(errorMessage),
          id: `${groupId}-${child.props.value}`,
          ...child.props,
        }),
      ),
    [children, errorMessage, groupId, labelPosition, name, required],
  );

  return (
    <div
      className={clsx('radio-group', layout === 'inline' && 'radio-group--inline', className)}
      role="radiogroup"
      id={groupId}
      aria-labelledby={legendId}
      aria-required={required ? true : undefined}
      aria-invalid={errorMessage ? true : undefined}
      aria-errormessage={errorMessage ? helperTextId : undefined}
      aria-describedby={!errorMessage && textHelper ? helperTextId : undefined}
      {...props}
    >
      <div id={legendId} className="radio-group__legend">
        {label}
        {required ? <span aria-hidden>*</span> : null}
      </div>
      <div className="radio-group__options">{radioOptions}</div>
      {Boolean(errorMessage || textHelper) && (
        <HelperText id={helperTextId} error={Boolean(errorMessage)}>
          {errorMessage || textHelper}
        </HelperText>
      )}
    </div>
  );
};
