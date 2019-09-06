import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import  App, {handleClick, count} from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains Statistics', () => {
  // Arrange
  const { getByText } = render(<App />);
  // Act - getting the node by text
  getByText(/Statistics/i);
  // Assertion is if ^^^ is truthy
});

test('contains 2019', () => {
  // Arrange
  const { getByText } = render(<App />);
  // Act - getting the node by text
  getByText (/2019/i);
  // Assertion is if ^^^ is truthy
});
test('Click adds 1', () => {
  if (count===0)expect(handleClick(1)).toBe(1);
 
});