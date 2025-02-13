import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders SMT Kart title in Navbar', () => {
  render(
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  );
  
  const titleElement = screen.getByText(/SMT Kart/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders login button before authentication', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const loginButton = screen.getByText(/Login/i);
  expect(loginButton).toBeInTheDocument();
});
