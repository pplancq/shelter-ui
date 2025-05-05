import { Grid } from '@/Grid/Grid';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

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
    expect(element).not.toHaveClass(/grid-item/);
  });

  it('should injects styles based on colSpan and colStart', () => {
    render(
      <Grid colSpan={6} colStart={2}>
        Test Content
      </Grid>,
    );

    const element = screen.getByText('Test Content');

    expect(element).toHaveClass(/grid-item/);
    expect(element).toHaveStyle('--col: 6');
    expect(element).toHaveStyle('--start: 2');
  });

  it('should inject styles when colSpan and colStart are objects', () => {
    render(
      <Grid colSpan={{ mobile: 6, tablet: 8 }} colStart={{ mobile: 2 }}>
        Test Content
      </Grid>,
    );

    const element = screen.getByText('Test Content');

    expect(element).toHaveClass(/grid-item/);
    expect(element).toHaveStyle('--col-mobile: 6');
    expect(element).toHaveStyle('--col-tablet: 8');
    expect(element).toHaveStyle('--start-mobile: 2');
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
