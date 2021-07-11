import React, { ReactElement } from 'react';
import { ColumnPropsType, DummyState } from '../types/types';

export class ColumnComponent extends React.Component<
  ColumnPropsType,
  DummyState
> {
  textData = `Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности. 
    Их можно складывать вместе и использовать несколько раз. На этой странице мы ознакомимся с самой идеей компонентов
    Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные
     (так называемые «пропсы»)   и возвращают React-элементы, описывающие, что мы хотим увидеть на экране`;

  render(): React.ReactElement {
    const comps: ReactElement[] = [];
    const colCount = this.props.columnCount ?? 1;
    for (let i = 0; i < colCount; i++) {
      comps.push(
        <div data-testid="column-test-id" key={100 + i}>
          <p>{this.textData}</p>
        </div>
      );
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {comps.map((el) => el)}
      </div>
    );
  }
}
