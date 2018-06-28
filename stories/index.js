import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import glamorous from 'glamorous';
import tc from '../src/index';


storiesOf('Glamorous', module)
  .add('with text', () => {
    const Href = glamorous.a({
      ...tc('flex tc pa3 bg-purple white h4 w4 f3 bg-red-m yellow-m hover-bg-green')
    });
    return <Href>Hello Tachyons</Href>;
  })
  
