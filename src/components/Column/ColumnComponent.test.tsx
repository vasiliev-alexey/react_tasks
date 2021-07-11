import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ColumnComponent } from './ColumnComponent';
import { ColumnCountType } from '../types/types';

describe('test header', () => {
  test('component - instance of react component', () => {
    expect(ColumnComponent).toBeInstanceOf(Function);
    expect(new ColumnComponent({ columnCount: 1 })).toBeInstanceOf(
      React.Component
    );
  });

  test.each([[1], [2], [3], [4], [5], [6]])(
    'render element count %i ',
    (el: ColumnCountType) => {
      render(<ColumnComponent columnCount={el} />);
      expect(screen.getAllByTestId('column-test-id')[0]).toBeInTheDocument();
      expect(screen.getAllByTestId('column-test-id').length).toEqual(el);
    }
  );
});
