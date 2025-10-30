import { clsx } from '@/utils/clsx';
import {
  type ChangeEvent,
  type ComponentProps,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

export type CheckboxInputProps = Omit<ComponentProps<'input'>, 'type'> & {
  indeterminate?: boolean;
};

export const CheckboxInput = ({
  className,
  indeterminate = false,
  checked,
  onChange = () => {},
  ref,
  ...props
}: CheckboxInputProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement);

  useLayoutEffect(() => {
    const checkboxEl = checkboxRef.current;
    if (!checkboxEl) {
      return;
    }
    checkboxEl.indeterminate = indeterminate;
  }, [indeterminate]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.getAttribute('aria-checked') === 'mixed') {
        e.target.removeAttribute('aria-checked');
      }

      onChange(e);
    },
    [onChange],
  );

  return (
    <input
      type="checkbox"
      className={clsx('checkbox', className)}
      checked={checked}
      aria-checked={indeterminate ? 'mixed' : undefined}
      ref={checkboxRef}
      onChange={handleChange}
      {...props}
    />
  );
};

if (process.env.NODE_ENV !== 'production') {
  CheckboxInput.displayName = 'CheckboxInput';
}
