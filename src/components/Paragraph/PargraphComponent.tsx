import React from 'react';
import { DummyState, ParagraphPropType } from '../types/types';

export class ParagraphComponent extends React.Component<
  ParagraphPropType,
  DummyState
> {
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
