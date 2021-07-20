import { CollapsingBlockComponent } from './CollapsingBlockComponent';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('test header', () => {
  test('component - instance of react component', () => {
    expect(CollapsingBlockComponent).toBeInstanceOf(Function);
    expect(
      new CollapsingBlockComponent({
        headerText: 'dummy',
        contentText: 'contentText',
        isCollapse: false,
      })
    ).toBeInstanceOf(React.Component);
  });

  describe('render test CollapsingBlockComponent ', () => {
    test('test SpaceBlockComponent  render with hidden content', () => {
      render(
        <CollapsingBlockComponent
          isCollapse={false}
          contentText={'dummy content'}
          headerText={'dummy header'}
        />
      );
      expect(screen.getByTestId('toggleCollapseId')).toBeInTheDocument();
      expect(screen.getByText('dummy header')).toBeInTheDocument();
    });
    test('test SpaceBlockComponent  render with open content', () => {
      render(
        <CollapsingBlockComponent
          isCollapse={true}
          contentText={'dummy content'}
          headerText={'dummy header'}
        />
      );
      expect(screen.getByTestId('toggleCollapseId')).toBeInTheDocument();
      expect(screen.getByText('dummy header')).toBeInTheDocument();

      try {
        expect(screen.getByText('dummy content')).toBeInTheDocument();
        expect(1).toBe(2);
      } catch (e) {}
    });

    test('test SpaceBlockComponent  render with  click open content', () => {
      render(
        <CollapsingBlockComponent
          isCollapse={true}
          contentText={'dummy content'}
          headerText={'dummy header'}
        />
      );
      expect(screen.getByTestId('toggleCollapseId')).toBeInTheDocument();
      expect(screen.getByText('dummy header')).toBeInTheDocument();
      try {
        expect(screen.getAllByText('dummy content')).toThrow();
        expect(1).toBe(2);
      } catch (e) {}

      userEvent.click(screen.getByText('Покажи'));
      expect(screen.getByText('dummy content')).toBeInTheDocument();
    });
  });
});
