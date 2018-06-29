import tachyonsConfig from '../config';
const config = tachyonsConfig();

export default {
  cf: {
    [`${config.pseudo}:before`]: {
      content: '',
      display: 'table'
    },
    [`${config.pseudo}:after`]: {
      content: '',
      display: 'table',
      clear: 'both'
    }
  },
  cl: { clear: 'left' },
  cr: { clear: 'right' },
  cb: { clear: 'both' },
  cn: { clear: 'none' }
}