import { HeaderComponent } from './HeaderComponent';
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeaderLevel } from '../types/types';

describe('test header', () => {
  test('component - instance of react component', () => {
    expect(HeaderComponent).toBeInstanceOf(Function);
    expect(new HeaderComponent({ caption: 'dummy', level: 1 })).toBeInstanceOf(
      React.Component
    );
  });

  test.each([
    [1, Math.random() * 100],
    [2, (Math.random() * 100).toString(10)],
    [3, (Math.random() * 100).toString(10)],
    [4, (Math.random() * 100).toString(10)],
    [5, (Math.random() * 100).toString(10)],
    [6, (Math.random() * 100).toString(10)],
  ])('render element %i with text %s', (el: HeaderLevel, text: string) => {
    render(<HeaderComponent caption={text} level={el} />);
    expect(screen.getByTestId(`h${el}`)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInstanceOf(HTMLHeadingElement);
    expect(screen.getByText(text).matches(`h${el}`)).toBeTruthy();
  });
});
