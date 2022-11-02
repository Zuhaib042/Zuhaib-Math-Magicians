import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Homepage', () => {
  it('Check if Home page rendered properly', () => {
    render(<Home />);
    const home = screen.getByText(/welcome to our page/i);

    expect(home).toMatchSnapshot();
  });

  it('Check if Home page rendered properly', () => {
    render(<Home />);
    const home = screen.getByRole('heading', { name: /Welcome to our page/i });

    expect(home).toMatchSnapshot();
  });
});
