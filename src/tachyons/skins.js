import colors from './colors';

const colorClasses = {};

Object.keys(colors).forEach( colorName => 
    Object.assign(colorClasses, {
        [colorName]: { color: colors[colorName] },
        [`bg-${colorName}`]: { backgroundColor: colors[colorName] },
        [`b--${colorName}`]: {borderColor: colors[colorName]}
    })
);


export default {
    ...colorClasses,
    ['bg-inherit']: { backgroundColor: 'inherit' },
    ['color-inherit']: { color: 'inherit' },
    ['b--inherit']: { borderColor: 'inherit' },
}