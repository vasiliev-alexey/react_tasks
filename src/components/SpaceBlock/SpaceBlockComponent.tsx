import React from 'react';
import { DummyState, SpaceBlockPropType } from '../types/types';

export class SpaceBlockComponent extends React.Component<
  SpaceBlockPropType,
  DummyState
> {
  static defaultProps = {
    height: 10,
    name: 'space',
  };

  render(): React.ReactElement {
    return (
      <div
        data-testid="div-line-id"
        style={{ height: this.props.height, border: 'solid 1px' }}
      >
        <hr data-testid="horizontal-line-id"></hr>
      </div>
    );
  }
}
