Tachyons in JS

Tachyons for CSS in JS libraries

Examples written in React, but can be used with other libraries.

CSS In JS Libraries tested:

styled-components, Emotion, Glamor, Aphrodite, Glamorous (examples are in Demo.js file)

* Customizable Media Queries
* Media Queries for all utils
* Customizable Colors
* Supports ":hover", ":active", ":focus", ":visited" ":before", ":after" for all utils.
* ...

## Example - Styled Components

<!-- prettier-ignore -->
```JSX

import styled from 'styled-components';
import { tachyonsToCss as tc } from 'tachyons-in-js';

const Href = styled.a`
  ${tc('flex tc pa3 bg-purple white h4 w4 f3 bg-red-m yellow-m hover-bg-green')}
`;

<Href>Tachyons and Styled Components</Href>

```

## Example - Glamorous

<!-- prettier-ignore -->
```JSX
import glamorous from 'glamorous';
import tc from 'tachyons-in-css';

const Href = glamorous.a(
  ${tc('flex tc pa3 bg-purple white h4 w4 f3 bg-red-m yellow-m hover-bg-green')}
);

<Href>Tachyons and Glamorous</Href>

```

## Example - Add Skin

<!-- prettier-ignore -->
```JSX
import { addSkin } from 'tacyons-in-js';
import tc from 'tachyons-in-css';

addSkin('peach-puff', '#ffdab9');

tc('bg-peach-puff peach-puff b--peach-puff');

```

## Example - Set Config

Most Css in JS libraries are using the "&" sign before pseudo selectors and media queries. In Aphrodite you need to emit the "&" sign by modifying the config file.

<!-- prettier-ignore -->
```JSX
import tachyonsConfig  from 'tacyons-in-js/config';

tachyonsConfig({
 pseudo: '' 
});

```



IN DEVELOPMENT

