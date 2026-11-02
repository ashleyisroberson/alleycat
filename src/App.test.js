import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Alleycat diary homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /come in, look around/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /the diary/i })).toBeInTheDocument();
});

test('includes the shop destinations', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /redbubble/i })).toHaveAttribute('href', expect.stringContaining('redbubble.com'));
  expect(screen.getByRole('link', { name: /vinted/i })).toHaveAttribute('href', expect.stringContaining('vinted.com'));
});
