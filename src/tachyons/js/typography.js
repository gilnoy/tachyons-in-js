

import v from './variables';

export default {
/* Measure is limited to ~66 characters */
  'measure': { maxWidth: v.measure },
  /* Measure is limited to ~80 characters */
  'measure-wide': { maxWidth: v.measureWide },
  /* Measure is limited to ~45 characters */
  'measure-narrow': { maxWidth: v.measureNarrow },
  /* Book paragraph style - paragraphs are indented with no vertical spacing. */
  'indent': { textIndent: '1em', marginTop: 0, marginBottom: 0 },
  'small-caps': { fontVariant: 'small-caps' },
  /* Combine this class with a width to truncate text (or just leave as is to truncate at width of containing element. */
  'truncate': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}
