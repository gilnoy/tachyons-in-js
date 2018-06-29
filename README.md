Tachyons in JS

Tachyons for CSS in JS libraries

CSS In JS Libraries tested:

glamorous, styled-components

* Customizable Media Queries
* Media Queries for all utils
* Customizable Colors
* Supports ":hover", ":active", ":focus", ":visited" ":before", ":after" for all utils.
* ...


## Example - Styled Components

<!-- prettier-ignore -->
```JSX
import React from 'react';
import styled from 'styled-components';
import {tachyonsToCss as tc} from 'tachyons-to-css';

const Href = styled.a`
  ${tc('flex tc pa3 bg-purple white h4 w4 f3 bg-red-m yellow-m hover-bg-green')}
`;

<Href>Tachyons and Styled Component</Href>

```

## Example - Glamorous

<!-- prettier-ignore -->
```JSX
import React from 'react';
import glamorous from 'glamorous';
import tc from 'tachyons-to-css';

const Href = glamorous.a(
  ${tc('flex tc pa3 bg-purple white h4 w4 f3 bg-red-m yellow-m hover-bg-green')}
);

<Href>Tachyons and Glamorous</Href>

```


IN DEVELOPMENT

