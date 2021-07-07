import React from 'react';
import {
  CollapsingBlockPropsType,
  CollapsingBlockStateType,
} from '../types/types';

export class CollapsingBlockComponent extends React.Component<
  CollapsingBlockPropsType,
  CollapsingBlockStateType
> {
  state: CollapsingBlockStateType = {
    isCollapse: false,
  };

  toggleCollapse = (): void =>
    this.setState({ isCollapse: !this.state.isCollapse });

  render(): React.ReactElement {
    return (
      <>
        <p data-testid={'toggleCollapseId'}>{this.props.headerText}</p>
        <button onClick={this.toggleCollapse}>
          {this.props.isCollapse ? 'Покажи' : 'Скрой'}
        </button>
        {this.props.isCollapse && <p>{this.props.contentText}</p>}
      </>
    );
  }
}
