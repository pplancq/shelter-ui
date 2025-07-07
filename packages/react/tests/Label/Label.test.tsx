import { Label } from '@/Label/Label';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Label', () => {
  it('should render children', () => {
    render(<Label>My label</Label>);

    expect(screen.getByText('My label')).toBeInTheDocument();
  });

  it('should render an asterisk when required is true', () => {
    render(<Label required>Required label</Label>);

    const asterisk = within(screen.getByText('Required label')).getByText('*');

    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveTextContent('*');
    expect(asterisk).toHaveAttribute('aria-hidden');
  });

  it('should not render an asterisk when required is false', () => {
    render(<Label required={false}>Not required label</Label>);

    expect(within(screen.getByText('Not required label')).queryByText('*')).not.toBeInTheDocument();
  });

  it('should propagate htmlFor prop', () => {
    render(<Label htmlFor="input-id">Label with htmlFor</Label>);

    expect(screen.getByText('Label with htmlFor')).toHaveAttribute('for', 'input-id');
  });

  it('should apply custom className', () => {
    render(<Label className="custom-class">Custom label</Label>);
    const label = screen.getByText('Custom label');

    expect(label).toHaveClass('label');
    expect(label).toHaveClass('custom-class');
  });
});
