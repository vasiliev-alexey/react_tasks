import React from 'react';

import { HeaderComponent } from './HeaderComponent';
import { Story } from '@storybook/react';
import { HeaderPropType } from '../types/types';

export default {
  component: HeaderComponent,
  title: 'Header',
};
const Template: Story<HeaderPropType> = (args) => <HeaderComponent {...args} />;

export const h1Comp = Template.bind({ level: 1, caption: '🛩' });
