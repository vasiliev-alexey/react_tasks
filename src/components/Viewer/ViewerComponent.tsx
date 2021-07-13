import React, { FormEvent } from 'react';
import { DummyState } from '../types/types';

export type ViewerPropsType = {};

export class ViewerComponent extends React.Component<
  ViewerPropsType,
  DummyState
> {
  #optionChanged = (ev: FormEvent): void => {
    if (ev.target instanceof HTMLInputElement) {
      console.log(ev.target.value);
    }
  };

  render(): React.ReactElement {
    return (
      <>
        <div onChange={this.#optionChanged}>
          <p>
            <input type="radio" name="component" value="header"></input>
            <label>header</label>
          </p>
          <p>
            <input type="radio" name="component" value="image"></input>
            <label>image</label>
          </p>

          <p>
            <input type="radio" name="component" value="column"></input>
            <label>column</label>
          </p>
        </div>
      </>
    );
  }
}
