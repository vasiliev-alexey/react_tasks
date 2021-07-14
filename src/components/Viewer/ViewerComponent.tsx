import React, { ChangeEvent, Component, FormEvent } from 'react';
import { HeaderComponent } from '../Header/HeaderComponent';
import { ImageComponent } from '../Image/ImageComponent';

export type ViewerPropsType = {};

const customComponent = [HeaderComponent, ImageComponent];

//const comps = [HeaderComponent, ImageComponent];

type ViewerComponentType = {
  isComponentSelected: boolean;
  compProps: Record<string, string | number>;
};

export class ViewerComponent extends React.Component<
  ViewerPropsType,
  ViewerComponentType
> {
  state = {
    isComponentSelected: false,
    compProps: {} as Record<string, string | number>,
  };

  #propChanged = (ev: React.ChangeEvent): void => {
    const targetElement = ev.target as HTMLInputElement;
    console.log('changed', targetElement.value, targetElement.name);

    const oldProps: Record<string, string | number> = this.state.compProps;
    oldProps[targetElement.name] = targetElement.value;

    this.setState({ compProps: oldProps });
  };

  #renderComponent = (): void => {
    console.log('oldProps');
  };

  #optionChanged = (ev: FormEvent): void => {
    const currValue = this.state.isComponentSelected;
    if (ev.target instanceof HTMLInputElement) {
      const compName = ev.target.value;
      const compProps: Record<string, string | number> = {};

      const comp = customComponent.filter(
        (c) => c.defaultProps.name === compName
      )[0];
      console.log(compName, comp);

      if (comp) {
        Object.entries(comp.defaultProps).forEach((entry) => {
          if (entry[0] === 'name') {
          } else {
            compProps[entry[0]] = entry[1];
          }
        });
      }

      this.setState({
        isComponentSelected: true,
        compProps,
      });
    }
  };

  render(): React.ReactElement {
    const props: React.ReactElement[] = [];

    Object.keys(this.state.compProps).map((val, ind) => {
      props.push(
        <p key={ind}>
          <label>{val}</label>
          <input
            name={val}
            onChange={this.#propChanged}
            value={this.state.compProps[val]}
          ></input>
        </p>
      );
    });

    return (
      <>
        <div onChange={this.#optionChanged}>
          {['header', 'image', 'collapse', 'column', 'paragraph', 'space'].map(
            (el, ind) => {
              return (
                <p key={ind}>
                  <input
                    type="radio"
                    name="component"
                    value={el}
                    onChange={this.#optionChanged}
                  ></input>
                  <label>{el}</label>
                </p>
              );
            }
          )}
        </div>
        <hr></hr>
        <p>Component properties</p>
        {props}
        {this.state.isComponentSelected === true && (
          <button onClick={this.#renderComponent}>Click</button>
        )}
      </>
    );
  }
}
