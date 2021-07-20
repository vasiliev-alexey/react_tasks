import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ViewerComponent } from './ViewerComponent';
import userEvent from '@testing-library/user-event';

describe('test instance of ViewerComponent', () => {
  test('component - instance of react component', () => {
    expect(ViewerComponent).toBeInstanceOf(Function);
    expect(
      new ViewerComponent({ text: 'dummy', style: 'bold' })
    ).toBeInstanceOf(React.Component);
  });
});

describe('render test ViewerComponent', () => {
  test.each([
    [1, 'header'],
    [2, 'image'],
    [3, 'space'],
    [4, 'paragraph'],
    [5, 'column'],
    [6, 'collapse'],
  ])('render element %i with text %s', (el, testId: string) => {
    render(<ViewerComponent {...{}} />);
    expect(screen.getByTestId(`comp-${testId}`)).toBeInTheDocument();
  });

  test('test select component option', () => {
    render(<ViewerComponent />);
    const imgCompOption = screen.getByTestId(`comp-image`);
    expect(imgCompOption).toBeInTheDocument();

    userEvent.click(imgCompOption);

    const showComp = screen.getByText('Render Component');
    expect(showComp).toBeInTheDocument();

    const srcImgInput = screen.getByTestId(
      'comp-imageSource'
    ) as HTMLInputElement;
    srcImgInput.value = '';
    userEvent.paste(srcImgInput, '11');
    userEvent.click(showComp);

    const renderedImage = screen.getByTestId('image-test-id');
    expect(renderedImage).toBeInTheDocument();

    expect(renderedImage).toBeInstanceOf(HTMLImageElement);
    const imgSrc = 'http://localhost/11';
    expect((renderedImage as HTMLImageElement).src).toEqual(imgSrc);
  });
});
