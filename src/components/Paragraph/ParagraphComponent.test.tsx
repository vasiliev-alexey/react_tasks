import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ParagraphComponent } from './PargraphComponent';

describe('test instance of Paragraph', () => {
  test('component - instance of react component', () => {
    expect(ParagraphComponent).toBeInstanceOf(Function);
    expect(
      new ParagraphComponent({ text: 'dummy', style: 'bold' })
    ).toBeInstanceOf(React.Component);
  });
});

describe('render test Paragraph', () => {
  test('test bold style', () => {
    const dummyText = (Math.random() * 1000).toString(10);
    render(<ParagraphComponent text={dummyText} style={'bold'} />);
    expect(screen.getByText(dummyText)).toBeInTheDocument();
    expect(screen.getByText(dummyText).style.fontWeight).toBe('bold');
    expect(screen.getByText(dummyText)).toBeInstanceOf(HTMLParagraphElement);
  });
  test('test quote style', () => {
    const dummyText = (Math.random() * 1000).toString(10);
    render(<ParagraphComponent text={dummyText} style={'quote'} />);
    expect(screen.getByText(dummyText)).toBeInTheDocument();
    expect(screen.getByText(dummyText)).toBeInstanceOf(HTMLQuoteElement);
  });

  test('test normal style', () => {
    const dummyText = (Math.random() * 1000).toString(10);
    render(<ParagraphComponent text={dummyText} style={'normal'} />);
    expect(screen.getByText(dummyText)).toBeInTheDocument();
    expect(screen.getByText(dummyText).style.fontStyle).toBe('normal');
    expect(screen.getByText(dummyText)).toBeInstanceOf(HTMLParagraphElement);
  });
});
