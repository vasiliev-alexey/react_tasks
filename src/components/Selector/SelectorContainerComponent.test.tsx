import React from 'react';
import '@testing-library/jest-dom';
import { SelectorContainerComponent } from './SelectorContainerComponent';
import { render, screen } from '@testing-library/react';

describe('test instance of SelectorContainerComponent', () => {
  test('component - SelectorContainerComponent of react component', () => {
    expect(SelectorContainerComponent).toBeInstanceOf(Function);
    expect(new SelectorContainerComponent(null)).toBeInstanceOf(
      React.Component
    );
  });
});

test.each([
  [1, 'header:1:hello dolly', 'h1'],
  [2, 'image:img_src:hello dolly', 'image-test-id'],
  [3, 'space:100:hello dolly', 'div-line-id'],
  [4, 'paragraph:quote:hello dolly', 'paragraph-id'],
  [5, 'column:2:hello dolly', 'column-test-id'],
  [6, 'collapse:collapse block:hello dolly', 'toggleCollapseId'],
])('render element %i with text %s', (el, text: string, testId: string) => {
  window.prompt = jest.fn().mockReturnValueOnce(text).mockReturnValueOnce('');
  render(<SelectorContainerComponent {...{}} />);
  expect(screen.getAllByTestId(testId)[0]).toBeInTheDocument();
  screen.debug();
});
