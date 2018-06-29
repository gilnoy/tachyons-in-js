import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import glamorous from 'glamorous';
import styled from 'styled-components';
import tc, {tachyonsToCss as tcCss} from '../index';


storiesOf('Glamorous', module)
.add('with text', () => {
  const GlHref = glamorous.a({
    ...tc('flex tc pa3 bg-purple white h4 w4 mb5 f3 bg-red-m yellow-m hover-bg-green')
  });

  const StHref = styled.a`
    ${tcCss('flex tc pa3 bg-purple white h4 w4 f3 bg-red-m yellow-m hover-bg-green')}
  `;
  
  return <div>
    <GlHref>Hello Tachyons</GlHref>
    <StHref>Hello Styled Components</StHref>
  </div>;
})
  
