import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains soccer', () => {
  // Arrange
  const { getByText } = render(<App />);
  // Act - getting the node by text
  getByText(/Soccer/i);
  // Assertion is if ^^^ is truthy
});