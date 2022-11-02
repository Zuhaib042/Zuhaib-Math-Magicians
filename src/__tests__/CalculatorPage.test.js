import { render, screen } from '@testing-library/react';
import CalculatorPage from '../pages/CalculatorPage';

it('should render the Calculator page correctly', () => {
  render(<CalculatorPage />);
  const calculatorPage = screen.getByText(/lets do some math/i);
  expect(calculatorPage).toMatchSnapshot();
});
