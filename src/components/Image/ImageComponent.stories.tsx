import React from 'react';

import { ImageComponent } from './ImageComponent';
import { Story } from '@storybook/react';
import { ImagePropsType } from '../types/types';

export default {
  component: ImageComponent,
  title: 'Image',
};
const Template: Story<ImagePropsType> = (args) => <ImageComponent {...args} />;

export const imgComp = Template.bind({});

imgComp.args = {
  imageSource:
    'https://cdn.pixabay.com/photo/2017/07/17/13/34/abstract-2512412_960_720.jpg',
  floatStyle: 'left',
};
