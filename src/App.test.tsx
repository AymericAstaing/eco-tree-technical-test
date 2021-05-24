import React from 'react';
import { render, screen } from '@testing-library/react';
import AppManager from './AppManager';

test('renders learn react link', () => {
  render(<AppManager/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
