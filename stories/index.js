import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import glamorous from 'glamorous';
import styled from 'styled-components';
import { css } from 'emotion';
import tc, {tachyonsToCss as tcCss} from '../index';


storiesOf('Css In Js Examples', module)
.add('Glamorous', () => {
  const Href = glamorous.a({
    ...tc('flex tc pa3 bg-purple white h4 w4 mb5 f3 bg-red-m yellow-m hover-bg-green')
  });
  
  return  <Href>Hello Glamorous</Href>
    
})
.add("Styled Components",() => {
  const Href = styled.a`
    ${tcCss('flex tc pa3 bg-purple white h4 w4 mb5 f3 bg-red-m yellow-m hover-bg-green')}
  `;
  return <Href>Hello Styled Components</Href>;
})
.add("Emotion",() => {
  const className = css`
    ${tcCss('flex tc pa3 bg-purple white h4 w4 mb5 f3 bg-red-m yellow-m hover-bg-green')}
  `;

  return <div className={className}>Hello Emotion</div>;
})
