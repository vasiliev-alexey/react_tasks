import React from 'react';

import { Story } from '@storybook/react';
import { SpaceBlockPropType } from '../types/types';
import { SpaceBlockComponent } from './SpaceBlockComponent';

export default {
  component: SpaceBlockComponent,
  title: 'SpaceBlock',
};
const Template: Story<SpaceBlockPropType> = (args) => (
  <SpaceBlockComponent {...args} />
);

export const spaceBlocComp100 = Template.bind({});
export const spaceBlocComp50 = Template.bind({});

spaceBlocComp100.args = {
  height: 100,
};
spaceBlocComp50.args = {
  height: 50,
};
