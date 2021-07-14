import React from 'react';
import { DummyState, ImagePropsType } from '../types/types';

export class ImageComponent extends React.Component<
  ImagePropsType,
  DummyState
> {
  static defaultProps = {
    name: 'image',
    floatStyle: 1,
    imageSource:
      'http://cvitanic.info/wp-content/uploads/2016/04/prednja-slika-1200x750.jpg',
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
