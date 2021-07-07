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

// describe('test render list components', () => {
//
//     const params: string[] = [
//         "header:1:hello dolly"
//     ];
//
//
//     beforeEach(() => {
//
//         // for (let i = 0; i < params.length; i++) {
//         //     window.prompt = jest.fn().mockReturnValueOnce(params[i]);
//         // }
//
//         window.prompt = jest.fn().mockReturnValueOnce('')
//     })
//
//     test('render - SelectorContainerComponent of react component', () => {
//
//         render(<SelectorContainerComponent {...{}} />);
//         screen.debug();
//     });
// });
test.each([
  [1, 'header:1:hello dolly'],
  [2, 'image:img_src:hello dolly'],
])('render element %i with text %s', (el, text: string) => {
  window.prompt = jest.fn().mockReturnValueOnce(text).mockReturnValueOnce('');
  render(<SelectorContainerComponent {...{}} />);

  screen.debug();
});
