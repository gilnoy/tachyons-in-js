import v from './variables';
import c from './colors';
import tachyonsConfig  from '../config';

const config = tachyonsConfig();

export default {
  'nested-copy-line-height': {
    p: { lineHeight: v.lineHeightCopy },
    ul: { lineHeight: v.lineHeightCopy },
    ol: { lineHeight: v.lineHeightCopy }
  },

  'nested-headline-line-height': {
    h1: { lineHeight: v.lineHeightTitle },
    h2: { lineHeight: v.lineHeightTitle },
    h3: { lineHeight: v.lineHeightTitle },
    h4: { lineHeight: v.lineHeightTitle },
    h5: { lineHeight: v.lineHeightTitle },
    h6: { lineHeight: v.lineHeightTitle }
  },

  'nested-list-reset': {
    ul: {
      paddingLeft: 0,
      marginLeft: 0,
      listStyleType: 'none'
    },
    ol: {
      paddingLeft: 0,
      marginLeft: 0,
      listStyleType: 'none'
    }
  },

  'nested-copy-indent': {
    'p+p': {
      textIndent: '1em',
      marginTtop: 0,
      marginBottom: 0
    }
  },

  'nested-copy-separator': {
    'p+p': {
      marginTop: '1.5em'
    }
  },

  'nested-img': {
    img: {
      width: '100%',
      maxWidth: '100%',
      display: 'block'
    }
  },

  'nested-links': {
    a: {
      color: c.blue,
      transition: 'color .15s ease-in',

      [`${config.pseudo}:hover`]: {
        color: c.lightBlue,
        transition: 'color .15s ease-in'
      },

      [`${config.pseudo}:focus`]: {
        color: c.lightBlue,
        transition: 'color .15s ease-in'
      }
    }
  }
}
