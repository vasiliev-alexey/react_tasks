import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { SpaceBlockComponent } from './SpaceBlockComponent';

describe('test instance of Paragraph', () => {
  test('component - instance of react component', () => {
    expect(SpaceBlockComponent).toBeInstanceOf(Function);
    expect(new SpaceBlockComponent({ height: 10 })).toBeInstanceOf(
      React.Component
    );
  });
});

describe('render test SpaceBlockComponent', () => {
  test('test SpaceBlockComponent  render', () => {
    render(<SpaceBlockComponent height={100} />);
    expect(screen.getByTestId('div-line-id')).toBeInTheDocument();
    expect(screen.getByTestId('div-line-id').style.height).toBe('100px');
    expect(screen.getByTestId('horizontal-line-id')).toBeInTheDocument();
  });
});
