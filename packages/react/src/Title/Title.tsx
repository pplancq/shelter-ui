import { clsx } from '@/utils/clsx';
import type { ExtendableComponent } from '@/utils/types';
import { type ElementType, JSX, type ReactNode, useId } from 'react';

export type TitleProps<C extends ElementType = 'div'> = Omit<ExtendableComponent<C>, 'children'> & {
  icon?: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  title: ReactNode;
  subtitle?: ReactNode;
  layout?: 'inline' | 'stacked';
};

export const Title = <C extends ElementType>({
  component,
  icon,
  level = 1,
  title,
  subtitle,
  layout = 'inline',
  className,
  id,
  ...props
}: TitleProps<C>) => {
  const Component = (component || 'div') as keyof JSX.IntrinsicElements;
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingId = useId();

  const headingIdFinal = id ? `${id}-heading` : headingId;

  return (
    <Component className={clsx('title', layout === 'stacked' && 'title--stacked', className)} id={id} {...props}>
      {icon}
      <hgroup className="title__group">
        <HeadingTag className="title__title" id={headingIdFinal}>
          {title}
        </HeadingTag>
        {subtitle ? (
          <p className="title__subtitle" aria-describedby={headingIdFinal}>
            {subtitle}
          </p>
        ) : null}
      </hgroup>
    </Component>
  );
};
