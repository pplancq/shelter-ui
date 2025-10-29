import { Title } from '@/Title/Title';
import { renderSuspense } from '@pplancq/svg-react/tests';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Title', () => {
  it('should render with default props', async () => {
    await renderSuspense(<Title title="Title text" data-testid="test-id" />);
    const heading = screen.getByRole('heading', { level: 1, name: /title text/i });
    const titleElement = screen.getByTestId('test-id');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('title__title');
    expect(heading.tagName).toStrictEqual('H1');
    expect(titleElement).toHaveClass('title');
    expect(titleElement).not.toHaveClass('title--stacked');
  });

  it.each([
    { level: 1 as const, description: 'level 1 heading' },
    { level: 2 as const, description: 'level 2 heading' },
    { level: 3 as const, description: 'level 3 heading' },
    { level: 4 as const, description: 'level 4 heading' },
    { level: 5 as const, description: 'level 5 heading' },
    { level: 6 as const, description: 'level 6 heading' },
  ])('should render with $description', async ({ level }) => {
    await renderSuspense(<Title title={`Title ${level}`} level={level} />);
    const heading = screen.getByRole('heading', { level, name: new RegExp(`title ${level}`, 'i') });

    expect(heading.tagName).toStrictEqual(`H${level}`);
  });

  it.each([
    { layout: 'inline' as const, expectedClass: 'title', description: 'inline layout (default)' },
    { layout: 'stacked' as const, expectedClass: 'title title--stacked', description: 'stacked layout' },
  ])('should render with $description', async ({ layout, expectedClass }) => {
    await renderSuspense(<Title title="Layout test" layout={layout} data-testid="test-id" />);
    const container = screen.getByTestId('test-id');

    expect(container).toHaveClass('title');
    expect(container).toHaveClass(expectedClass);
  });

  it('should render with subtitle', async () => {
    await renderSuspense(<Title title="Main title" subtitle="Subtitle text" />);
    const subtitle = screen.getByText(/subtitle text/i);
    const heading = screen.getByRole('heading', { name: /main title/i });

    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveClass('title__subtitle');
    expect(subtitle).toHaveAttribute('aria-describedby', heading.id);
  });

  it('should not render subtitle when not provided', async () => {
    await renderSuspense(<Title title="Title only" />);
    const subtitle = screen.queryByText(/subtitle/i);

    expect(subtitle).not.toBeInTheDocument();
  });

  it('should render with icon', async () => {
    const iconElement = <svg role="presentation" />;
    await renderSuspense(<Title title="Title with icon" icon={iconElement} />);
    const icon = screen.getByRole('presentation');

    expect(icon).toBeInTheDocument();
  });

  it('should render with custom component', async () => {
    await renderSuspense(<Title title="Custom component" as="section" data-testid="test-id" />);
    const container = screen.getByTestId('test-id');

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('title');
    expect(container.tagName).toStrictEqual('SECTION');
  });

  it('should apply additional class names', async () => {
    await renderSuspense(<Title title="Custom class" className="custom-class" data-testid="test-id" />);
    const container = screen.getByTestId('test-id');

    expect(container).toHaveClass('title');
    expect(container).toHaveClass('custom-class');
  });

  it('should forward additional props to the container element', async () => {
    await renderSuspense(<Title title="Props test" data-testid="custom-title" id="title-1" />);
    const container = screen.getByTestId('custom-title');

    expect(container).toHaveAttribute('id', 'title-1');
  });

  it('should generate unique heading ID when no id is provided', async () => {
    await renderSuspense(<Title title="Auto ID test" />);
    const heading = screen.getByRole('heading', { name: /auto id test/i });

    expect(heading).toHaveAttribute('id');
  });

  it('should use custom heading ID when id is provided', async () => {
    await renderSuspense(<Title title="Custom ID test" id="custom-title" />);
    const heading = screen.getByRole('heading', { name: /custom id test/i });

    expect(heading).toHaveAttribute('id', 'custom-title-heading');
  });

  it('should render complete title with all props', async () => {
    const iconElement = <svg data-testid="complete-icon" />;
    await renderSuspense(
      <Title
        title="Complete title"
        subtitle="Complete subtitle"
        level={2}
        layout="stacked"
        icon={iconElement}
        className="complete-class"
        id="complete-id"
        data-testid="complete-id"
      />,
    );

    const container = screen.getByTestId('complete-id');
    const heading = screen.getByRole('heading', { level: 2, name: /complete title/i });
    const subtitle = screen.getByText(/complete subtitle/i);
    const icon = screen.getByTestId('complete-icon');

    expect(container).toHaveClass('title', 'title--stacked', 'complete-class');
    expect(heading).toHaveClass('title__title');
    expect(heading).toHaveAttribute('id', 'complete-id-heading');
    expect(subtitle).toHaveClass('title__subtitle');
    expect(subtitle).toHaveAttribute('aria-describedby', 'complete-id-heading');
    expect(icon).toBeInTheDocument();
  });
});
