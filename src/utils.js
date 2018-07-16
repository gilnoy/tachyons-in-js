
import { getTachyon } from './tachyons/tachyons';

const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;


/**
* Get string as kebabCase
* @param {string} classesStr - list of all tachyons utils seperated by space
* @param {boolean} asCss - format styles as a string
* @return {object}
*/
export const kebabCase = (str) => 
    str.replace(KEBAB_REGEX, (match) => '-' + match.toLowerCase());


export const getPropAsKabab = (prop) => {
    const kebabProp = {}; 

    Object.keys(prop).forEach(key => kebabProp[kebabCase(key)] = prop[key]);

    return kebabProp;
}

export const getProp = (tachyonName, asCss) => {
    const prop = getTachyon(tachyonName);
    
    return asCss ? getPropAsKabab(prop) : prop;
}

