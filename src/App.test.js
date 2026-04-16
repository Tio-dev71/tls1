import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage brand name', () => {
  render(<App />);
  expect(screen.getByText(/TRADERLASO1/i)).toBeInTheDocument();
});
