import { ImageComponent } from './ImageComponent';
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SpaceBlockComponent } from '../SpaceBlock/SpaceBlockComponent';

describe('test header', () => {
  test('component - instance of react component', () => {
    expect(ImageComponent).toBeInstanceOf(Function);
    expect(
      new ImageComponent({ imageSource: 'dummy', floatStyle: 'left' })
    ).toBeInstanceOf(React.Component);
  });
});

describe('render test ImageComponent', () => {
  test('test ImageComponent  render', () => {
    render(<SpaceBlockComponent height={100} />);
    expect(screen.getByTestId('div-line-id')).toBeInTheDocument();
    expect(screen.getByTestId('div-line-id').style.height).toBe('100px');
    expect(screen.getByTestId('horizontal-line-id')).toBeInTheDocument();
  });
});
