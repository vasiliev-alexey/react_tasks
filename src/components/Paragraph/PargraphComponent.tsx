import React from 'react';
import { DummyState, ParagraphPropType } from '../types/types';

export class ParagraphComponent extends React.Component<
  ParagraphPropType,
  DummyState
> {
  static defaultProps = {
    style: 'normal',
    name: 'paragraph',
    text: `Компонент высшего порядка (Higher-Order Component, HOC) — это один из продвинутых способов 
      для повторного использования логики. HOC не являются частью API React,
       но часто применяются из-за композиционной природы компонентов.`,
  };

  render(): React.ReactElement {
    return (
      <>
        {this.props.style === 'quote' ? (
          <blockquote data-testid={'paragraph-id'}>
            {this.props.text}
          </blockquote>
        ) : (
          <p
            style={
              this.props.style === 'bold'
                ? { fontWeight: 'bold' }
                : { fontStyle: 'normal' }
            }
          >
            {this.props.text}
          </p>
        )}{' '}
      </>
    );
  }
}
