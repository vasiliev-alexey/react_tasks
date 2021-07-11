import React from 'react';

import { Story } from '@storybook/react';
import { CollapsingBlockPropsType } from '../types/types';
import { CollapsingBlockComponent } from './CollapsingBlockComponent';

export default {
  component: CollapsingBlockComponent,
  title: 'CollapsingBlock',
};
const Template: Story<CollapsingBlockPropsType> = (args) => (
  <CollapsingBlockComponent {...args} />
);

export const collapseBlock = Template.bind({});

collapseBlock.args = {
  isCollapse: false,
  headerText: 'Композиция компонентов🛩',
  contentText: `Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это позволяет 
  нам использовать одну и ту же абстракцию — компоненты — на любом уровне нашего приложения.
   Неважно, пишем ли мы кнопку, форму или целый экран: 
   все они, как правило, представляют собой компоненты в React-приложениях.`,
};
