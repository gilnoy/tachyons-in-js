import c from './colors'

export default {
  collapse: {
    borderCollapse: 'collapse',
    borderSpacing: 0
  },
  'striped--light-silver': {
    ':nth-child(odd)': {
      backgroundColor: c.lightSilver
    }
  },
  'striped--moon-gray': {
    ':nth-child(odd)': {
      backgroundColor: c.moonGray
    }
  },
  'striped--light-gray': {
    ':nth-child(odd)': {
      backgroundColor: c.lightGray
    }
  },
  'striped--near-white': {
    ':nth-child(odd)': {
      backgroundColor: c.nearWhite
    }
  },
  'stripe-light': {
    ':nth-child(odd)': {
      backgroundColor: c.white-10
    }
  },
  'stripe-dark': {
    ':nth-child(odd)': {
      backgroundColor: c.black-10
    }
  }
}
