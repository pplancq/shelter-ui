import type { CheckboxFieldProps } from '@/CheckboxField/CheckboxField';
import { HelperText } from '@/HelperText/HelperText';
import { clsx } from '@/utils/clsx';
import {
  type ChangeEvent,
  Children,
  cloneElement,
  type ComponentProps,
  type FormEventHandler,
  type ReactElement,
  type ReactNode,
  useCallback,
  useId,
  useMemo,
  useRef,
} from 'react';

type ChildrenProps = Pick<
  CheckboxFieldProps,
  'name' | 'value' | 'required' | 'aria-invalid' | 'aria-errormessage' | 'aria-describedby' | 'id' | 'onChange'
>;

export type CheckboxGroupProps = Omit<ComponentProps<'div'>, 'role' | 'children'> & {
  label: ReactNode;
  layout?: 'stacked' | 'inline';
  itemsLayout?: 'stacked' | 'inline';
  textHelper?: ReactNode;
  errorMessage?: ReactNode;
  required?: boolean;
  children: ReactElement<ChildrenProps>[];
} & Pick<CheckboxFieldProps, 'name'>;

export const CheckboxGroup = ({
  children,
  layout,
  itemsLayout,
  label,
  textHelper,
  errorMessage,
  required,
  id,
  name,
  className,
  ...props
}: CheckboxGroupProps) => {
  const generatedId = useId();
  const groupId = id ?? generatedId;
  const helperTextId = `${groupId}-helper-text`;
  const legendId = `${groupId}-legend`;

  const cardCheckboxOptionsRef = useRef<HTMLDivElement>(null);

  const handleChange = useCallback(
    (onChange: FormEventHandler<HTMLInputElement> = () => {}) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        const cardCheckboxOptionsEl = cardCheckboxOptionsRef.current;

        if (cardCheckboxOptionsEl && required) {
          const nbCheckedElements = cardCheckboxOptionsEl.querySelectorAll("input[type='checkbox']:checked").length;

          cardCheckboxOptionsEl.querySelectorAll("input[type='checkbox']").forEach(el => {
            if (nbCheckedElements < 1 && !event.target.checked) {
              el.setAttribute('required', 'true');
            } else {
              el.removeAttribute('required');
            }
          });
        }

        onChange(event);
      },
    [required],
  );

  const checkboxFields = useMemo(
    () =>
      Children.map(children, child => {
        return cloneElement(child, {
          name,
          required,
          'aria-invalid': errorMessage ? true : undefined,
          'aria-errormessage': errorMessage ? helperTextId : undefined,
          'aria-describedby': !errorMessage && textHelper ? helperTextId : undefined,
          id: `${groupId}-${child.props.value}`,
          onChange: handleChange(child.props.onChange),
          ...child.props,
        });
      }),
    [children, errorMessage, groupId, handleChange, helperTextId, name, required, textHelper],
  );

  return (
    <div
      className={clsx('checkbox-group', layout === 'inline' && 'checkbox-group--inline', className)}
      role="group"
      id={groupId}
      aria-labelledby={legendId}
      {...props}
    >
      <div id={legendId} className="checkbox-group__legend">
        {label}
        {required ? <span aria-hidden>*</span> : null}
      </div>
      <div
        className={clsx('checkbox-group__options', itemsLayout === 'stacked' && 'checkbox-group__options--stacked')}
        ref={cardCheckboxOptionsRef}
      >
        {checkboxFields}
      </div>
      {Boolean(errorMessage || textHelper) && (
        <HelperText id={helperTextId} error={Boolean(errorMessage)}>
          {errorMessage || textHelper}
        </HelperText>
      )}
    </div>
  );
};
