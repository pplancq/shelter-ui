import { clsx } from '@/utils/clsx';
import type { PolymorphicComponent } from '@/utils/types';
import { type ElementType, JSX, type ReactNode, useId } from 'react';

export type TitleProps<C extends ElementType = 'div'> = Omit<
  PolymorphicComponent<
    C,
    {
      icon?: ReactNode;
      level?: 1 | 2 | 3 | 4 | 5 | 6;
      title: ReactNode;
      subtitle?: ReactNode;
      layout?: 'inline' | 'stacked';
    }
  >,
  'children'
>;

export const Title = <C extends ElementType = 'div'>({
  as,
  icon,
  level = 1,
  title,
  subtitle,
  layout = 'inline',
  className,
  id,
  ...props
}: TitleProps<C>) => {
  const Component = (as || 'div') as ElementType;
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

if (process.env.NODE_ENV !== 'production') {
  Title.displayName = 'Title';
}
