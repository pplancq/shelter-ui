import { HelperText } from '@/HelperText/HelperText';
import { renderSuspense } from '@pplancq/svg-react/tests';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('HelperText', () => {
  it('should render children', async () => {
    await renderSuspense(<HelperText>Helper text</HelperText>);

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('should render with info icon by default', async () => {
    await renderSuspense(<HelperText>Info</HelperText>);

    const icon = screen.getByRole('presentation');
    expect(icon).toBeInTheDocument();
  });

  it('should render with error icon when error is true', async () => {
    await renderSuspense(<HelperText error>Error</HelperText>);

    const icon = screen.getByRole('presentation');
    expect(icon).toBeInTheDocument();
  });

  it('should apply the helper-text class', async () => {
    await renderSuspense(<HelperText>Class test</HelperText>);

    const small = screen.getByText('Class test');
    expect(small).toHaveClass('helper-text');
  });

  it('should apply the helper-text--error class when error is true', async () => {
    await renderSuspense(<HelperText error>Error class</HelperText>);

    const small = screen.getByText('Error class');
    expect(small).toHaveClass('helper-text--error');
  });

  it('should merge custom className', async () => {
    await renderSuspense(<HelperText className="custom-class">Custom class</HelperText>);

    const small = screen.getByText('Custom class');
    expect(small).toHaveClass('custom-class');
  });
});
