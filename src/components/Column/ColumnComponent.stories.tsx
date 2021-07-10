import React from 'react';

import { Story } from '@storybook/react';
import { ColumnPropsType } from '../types/types';
import { ColumnComponent } from './ColumnComponent';

export default {
  component: ColumnComponent,
  title: 'Column',
};
const Template: Story<ColumnPropsType> = (args) => (
  <ColumnComponent {...args} />
);

export const columnComp = Template.bind({});

columnComp.args = {
  columnCount: 2

};
