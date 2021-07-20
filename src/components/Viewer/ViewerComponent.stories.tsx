import React from 'react';

import { ViewerPropsType, ViewerComponent } from './ViewerComponent';
import { Story } from '@storybook/react';

export default {
  component: ViewerComponent,
  title: 'Viewer',
};
const Template: Story<ViewerPropsType> = (args) => (
  <ViewerComponent {...args} />
);

export const viewerComp = Template.bind({});
