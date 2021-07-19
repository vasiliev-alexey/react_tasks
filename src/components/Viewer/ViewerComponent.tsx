import React, { FormEvent } from 'react';
import { HeaderComponent } from '../Header/HeaderComponent';
import { ImageComponent } from '../Image/ImageComponent';
import { withOverrideProps } from '../types/withOverrideProps';
import { ColumnComponent } from '../Column/ColumnComponent';
import { ParagraphComponent } from '../Paragraph/PargraphComponent';
import { SpaceBlockComponent } from '../SpaceBlock/SpaceBlockComponent';
import { CollapsingBlockComponent } from '../CollapsingBlock/CollapsingBlockComponent';

export type ViewerPropsType = {};

const customComponent = [
  HeaderComponent,
  ImageComponent,
  ColumnComponent,
  ParagraphComponent,
  SpaceBlockComponent,
  CollapsingBlockComponent,
];

type ViewerComponentStateType = {
  isComponentSelected: boolean;
  compProps: Record<string, string | number>;
  compName: string | undefined;
  shouldRenderComponent: boolean;
};

export class ViewerComponent extends React.Component<
  ViewerPropsType,
  ViewerComponentStateType
> {
  state: ViewerComponentStateType = {
    isComponentSelected: false,
    compProps: {},
    compName: undefined,
    shouldRenderComponent: false,
  };

  #propChanged = (ev: React.ChangeEvent): void => {
    const targetElement = ev.target as HTMLInputElement;

    const oldProps: Record<string, string | number> = this.state.compProps;
    oldProps[targetElement.name] = targetElement.value;

    this.setState({ compProps: oldProps, shouldRenderComponent: false });
  };

  #renderComponent = (): void => {
    this.setState({ shouldRenderComponent: true });
  };

  #optionChanged = (ev: FormEvent): void => {
    if (ev.target instanceof HTMLInputElement) {
      const compName = ev.target.value;
      const compProps: Record<string, string | number> = {};

      const comp = customComponent.filter(
        (c) => c.defaultProps.name === compName
      )[0];

      if (comp) {
        Object.entries(comp.defaultProps).forEach(([key, val]) => {
          if (key === 'name') {
          } else {
            compProps[key] = val;
          }
        });
      }

      this.setState({
        isComponentSelected: true,
        compProps,
        shouldRenderComponent: false,
        compName: compName,
      });
    }
  };

  render(): React.ReactElement {
    const props: React.ReactElement[] = [];

    const compName = customComponent.filter(
      (c) => c.defaultProps.name === this.state.compName
    )[0];
    let EnhancementComponent: React.ComponentClass;
    if (compName) {
      EnhancementComponent = withOverrideProps(compName, {
        ...this.state.compProps,
      });
    }

    Object.keys(this.state.compProps).map((val, ind) => {
      props.push(
        <p key={ind}>
          <label>{val}</label>
          <input
            data-testid={`comp-${val}`}
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
                    data-testid={`comp-${el}`}
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
          <button onClick={this.#renderComponent}>Render Component</button>
        )}
        <hr></hr>
        {this.state.shouldRenderComponent && EnhancementComponent && (
          <EnhancementComponent />
        )}
      </>
    );
  }
}
