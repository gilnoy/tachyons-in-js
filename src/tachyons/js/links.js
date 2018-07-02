
import tachyonsConfig from '../config';
const config = tachyonsConfig();

export default {
  link: {
    textDecoration: 'none',
    transition: 'color .15s ease-in',
    [`${config.pseudo}:link`]: {
      transition: 'color .15s ease-in'
    },
    [`${config.pseudo}:visited`]: {
      transition: 'color .15s ease-in'
    },
    [`${config.pseudo}:hover`]: {
      transition: 'color .15s ease-in'
    },
    [`${config.pseudo}:active`]: {
      transition: 'color .15s ease-in'
    },
    [`${config.pseudo}:focus`]: {
      transition: 'color .15s ease-in',
      outline: '1px dotted currentColor'
    }
  }
}
