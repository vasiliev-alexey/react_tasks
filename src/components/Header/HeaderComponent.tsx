import React from 'react';
import { DummyState, HeaderPropType } from '../types/types';

export class HeaderComponent extends React.Component<
  HeaderPropType,
  DummyState
> {
  static defaultProps = {
    name: 'header',
    level: 1,
    caption: 'caption',
  };

  render(): React.ReactElement {
    return React.createElement(
      `h${this.props.level}`,
      {
        'data-testid': `h${this.props.level}`,
      },
      this.props.caption
    );
  }
}

//HeaderComponent.defaultProps = {};
