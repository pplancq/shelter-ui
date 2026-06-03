import { Icon } from '@/Icon/Icon';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const CONTENT_TYPE = 'content-type';

const MINE_TYPE_SVG = 'image/svg+xml';

const svgData =
  '<svg width="100" height="100" fill="red" stroke="green" stroke-width="4"><circle cx="50" cy="50" r="40" aria-label="circle"/></svg>';

describe('Icon', () => {
  const fetchMock = vi.fn();
  window.fetch = fetchMock;

  beforeEach(() => {
    fetchMock.mockResolvedValueOnce({
      headers: new Headers([[CONTENT_TYPE, MINE_TYPE_SVG]]),
      text: () => Promise.resolve(svgData),
    });
  });

  it('renders correctly with required props', () => {
    render(<Icon icon="test-icon" />);

    const icon = screen.getByRole('presentation');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon icon--medium');
  });

  it('applies the correct size class', () => {
    render(<Icon icon="test-icon" size="large" />);
    const icon = screen.getByRole('presentation');
    expect(icon).toHaveClass('icon--large');
  });

  it('applies the circle class when isCircle is true', () => {
    render(<Icon icon="test-icon" isCircle />);
    const icon = screen.getByRole('presentation');
    expect(icon).toHaveClass('icon--circle');
  });

  it('applies additional classes passed via className', () => {
    render(<Icon icon="test-icon" className="custom-class" />);
    const icon = screen.getByRole('presentation');
    expect(icon).toHaveClass('icon');
    expect(icon).toHaveClass('custom-class');
  });

  it('passes additional props to the Svg component', () => {
    render(<Icon icon="test-icon" aria-label="icon-label" />);
    const icon = screen.getByRole('presentation');
    expect(icon).toHaveAttribute('aria-label', 'icon-label');
  });
});
