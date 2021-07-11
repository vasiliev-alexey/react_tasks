import React from 'react';
import {
  ColumnCountType,
  DummyState,
  FloatStyleType,
  HeaderLevel,
  TextStyleType,
} from '../types/types';
import { HeaderComponent } from '../Header/HeaderComponent';
import { ParagraphComponent } from '../Paragraph/PargraphComponent';
import { ImageComponent } from '../Image/ImageComponent';
import { ColumnComponent } from '../Column/ColumnComponent';
import { CollapsingBlockComponent } from '../CollapsingBlock/CollapsingBlockComponent';
import { SpaceBlockComponent } from '../SpaceBlock/SpaceBlockComponent';

export class SelectorContainerComponent extends React.Component<
  DummyState,
  DummyState
> {
  #keyHolder = 1;

  render(): React.ReactElement {
    let response;
    const displayComponents: React.ReactElement[] = [];

    do {
      response = prompt();

      if (response === '') {
        break;
      }

      const params: Array<string> = response.split(':');

      const [compName, paramOne, paramTwo] = params;

      switch (compName) {
        case 'header':
          displayComponents.push(
            <HeaderComponent
              level={Number(paramOne) as HeaderLevel}
              caption={paramTwo}
              key={3}
            />
          );
          break;
        case 'space':
          displayComponents.push(
            <SpaceBlockComponent
              height={Number(paramOne)}
              key={this.#keyHolder++}
            />
          );
          break;
        case 'paragraph':
          displayComponents.push(
            <ParagraphComponent
              style={paramOne as TextStyleType}
              text={paramTwo}
              key={this.#keyHolder++}
            />
          );
          break;
        case 'image':
          displayComponents.push(
            <ImageComponent
              imageSource={paramOne}
              floatStyle={paramTwo as FloatStyleType}
              key={this.#keyHolder++}
            />
          );
          break;
        case 'column':
          displayComponents.push(
            <ColumnComponent
              columnCount={+paramOne as ColumnCountType}
              key={this.#keyHolder++}
            />
          );
          break;
        case 'collapse':
          displayComponents.push(
            <CollapsingBlockComponent
              headerText={paramOne}
              contentText={paramTwo}
              isCollapse={true}
              key={this.#keyHolder++}
            />
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
