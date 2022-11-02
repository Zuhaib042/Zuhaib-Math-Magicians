import { render, screen } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('Quote page', () => {
  it('should render properly', () => {
    render(<Quote />);

    const quotePage = screen.getByTestId('1');

    expect(quotePage).toMatchSnapshot();
  });
});
