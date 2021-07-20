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

  static defaultProps = {
    name: 'collapse',
    isCollapse: false,
    headerText: 'Композиция компонентов🛩',
    contentText: `Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это позволяет 
  нам использовать одну и ту же абстракцию — компоненты — на любом уровне нашего приложения.
   Неважно, пишем ли мы кнопку, форму или целый экран: 
   все они, как правило, представляют собой компоненты в React-приложениях.`,
  };

  toggleCollapse = (): void => {
    this.setState({ isCollapse: !this.state.isCollapse });
  };

  render(): React.ReactElement {
    const isHidden = this.state.isCollapse;
    return (
      <>
        <p data-testid={'toggleCollapseId'}>{this.props.headerText}</p>
        <button onClick={this.toggleCollapse}>
          {isHidden ? 'Скрой' : 'Покажи'}
        </button>
        {isHidden && <p>{this.props.contentText}</p>}
      </>
    );
  }
}
