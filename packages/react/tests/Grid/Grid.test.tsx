import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Grid } from '@/Grid/Grid';

describe('Grid component', () => {
  it('should renders without crashing', () => {
    render(<Grid container>Test Content</Grid>);

    const element = screen.getByText('Test Content');

    expect(element).toBeInTheDocument();
  });

  it('should applies the correct class names', () => {
    render(<Grid container>Test Content</Grid>);

    const element = screen.getByText('Test Content');

    expect(element).toHaveClass('grid');
  });

  it('should injects styles based on colSpan and colStart', () => {
    render(
      <Grid colSpan={6} colStart={2}>
        Test Content
      </Grid>,
    );

    const element = screen.getByText('Test Content');

    expect(element).toHaveClass(/grid-item-/);
  });

  it('should renders with custom component', () => {
    render(
      <Grid component="section" container>
        Test Content
      </Grid>,
    );

    const element = screen.getByText('Test Content');

    expect(element.tagName).toStrictEqual('SECTION');
  });
});
