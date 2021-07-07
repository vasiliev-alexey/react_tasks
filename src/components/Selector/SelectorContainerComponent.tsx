import React from 'react';
import {
  DummyState,
  FloatStyleType,
  HeaderLevel,
  TextStyleType,
} from '../types/types';
import { HeaderComponent } from '../Header/HeaderComponent';
import { SpaceBlockComponent } from '../SpaceBlock/SpaceBlockComponent';
import { ParagraphComponent } from '../Paragraph/PargraphComponent';
import { ImageComponent } from '../Image/ImageComponent';

export class SelectorContainerComponent extends React.Component<
  DummyState,
  DummyState
> {
  render(): React.ReactElement {
    let response;
    const displayComponents: React.ReactElement[] = [];

    do {
      response = prompt();

      if (response === '') {
        break;
      }

      console.log('resp', response);
      const params: Array<string> = response.split(':');

      const [compName, paramOne, paramTwo] = params;

      switch (compName) {
        case 'header':
          displayComponents.push(
            React.createElement(
              HeaderComponent,
              {
                level: Number(paramOne) as HeaderLevel,
                caption: paramTwo,
                key: 3,
              },
              null
            )
          );
          break;
        case 'space':
          displayComponents.push(
            React.createElement(
              SpaceBlockComponent,
              { height: Number(paramOne), key: 4 },
              null
            )
          );
          break;
        case 'paragraph':
          displayComponents.push(
            React.createElement(
              ParagraphComponent,
              { style: paramOne as TextStyleType, text: paramTwo, key: 1 },
              null
            )
          );
          break;
        case 'image':
          displayComponents.push(
            React.createElement(
              ImageComponent,
              {
                imageSource: paramOne,
                floatStyle: paramTwo as FloatStyleType,
                key: 2,
              },
              null
            )
          );
          break;
      }
    } while (response !== undefined);

    return (
      <div data-e="1" key={Date.now()}>
        {' '}
        {displayComponents}
      </div>
    );
  }
}
