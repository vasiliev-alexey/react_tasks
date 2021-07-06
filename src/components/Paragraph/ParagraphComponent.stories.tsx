import React from 'react';

import { PargraphComponent } from './PargraphComponent.tsx';
import { Story } from '@storybook/react';
import { ParagraphPropType } from '../types/types';

export default {
  component: PargraphComponent,
  title: 'Paragraph',
};
const Template: Story<ParagraphPropType> = (args) => (
  <ParagraphComponent {...args} />
);

export const paragraphCompNormal = Template.bind({});
export const paragraphCompBold = Template.bind({});
export const paragraphCompQuote = Template.bind({});

paragraphCompNormal.args = {
  style: 'normal',
  text: 'normal + q1q🛩',
};
paragraphCompBold.args = {
  style: 'bold',
  text: 'bold + q1q🛩',
};
paragraphCompQuote.args = {
  style: 'quote',
  text: 'quote + q1q🛩',
};
