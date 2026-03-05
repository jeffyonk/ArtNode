// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ArtNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ArtNode/i);
    expect(titleElement).toBeInTheDocument();
});
