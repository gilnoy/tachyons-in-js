// @flow
import colors, { getColor } from './colors';

let skins: Object = {};

export const getSkinTachyons = (colorName: string): Object => {
    const color = getColor(colorName);
    
    return {
        [colorName]: { color: color },
        [`bg-${colorName}`]: { backgroundColor: color },
        [`b--${colorName}`]: { borderColor: color }
    }
};

Object.keys(colors).forEach( colorName => {
    skins = { 
        ...skins,
        ...getSkinTachyons(colorName)    
    }
});

export default skins;