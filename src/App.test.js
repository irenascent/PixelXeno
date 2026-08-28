// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PixelXeno title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PixelXeno/i);
    expect(titleElement).toBeInTheDocument();
});
