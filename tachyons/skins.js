import colors from './colors';
import tachyonsConfig from '../config';

const config = tachyonsConfig();
let colorClasses = {};

Object.keys(colors).forEach( colorName => {
    const color = config.useColor ? {
        [colorName]: {
            color: colors[colorName]
        }
    } : {};

    const backgroundColor = config.useBackgroundColor ? {
        [`bg-${colorName}`]: {
            backgroundColor: colors[colorName]
        }
    } : {};

    const borderColor = config.useBorderColor ? {
        [`b--${colorName}`]: {
            borderColor: colors[colorName]
        }
    } : {};

    colorClasses = { 
        ...colorClasses,
        ...color,
        ...backgroundColor,
        ...borderColor
    }
});

export default colorClasses;