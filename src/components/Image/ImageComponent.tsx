import React from 'react';
import { DummyState, ImagePropsType } from '../types/types';

export class ImageComponent extends React.Component<
  ImagePropsType,
  DummyState
> {
  static defaultProps = {
    name: 'image',
    floatStyle: 1,
    imageSource: 'imageSource',
  };

  render(): React.ReactElement {
    return (
      <img
        data-testid="image-test-id"
        src={this.props.imageSource}
        style={{ float: this.props.floatStyle }}
      />
    );
  }
}
