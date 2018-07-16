import { getProp, getPropAsKabab } from './utils';
import { addTachyon } from './tachyons/tachyons';
import { getMediaQuery, getMediaQueries } from './tachyons/mediaQueries';
import { getSkinTachyons } from './tachyons/skins';
import { addColor } from './tachyons/colors';
import tachyonsConfig from './config';

/**
* find media query pattern
*/
const mdRegex = () => {
    const md = Object.keys(getMediaQueries()).map( name => `-${name}`);
    return `^(.*?)(${md.join("|")})$`;
};
/**
* find pseudo pattern
*/
const pseudoRegEx = '^(hover-|active-|focus-|visited-|before-|after-)(.*)';
/**
* parse classes string and search for pseudo and media query patters, for example: pa3:hover, pa3-sm
* TODO: support both media query and psuedo
* @param {string} className
* @return {array} [className, psuedo | mediaQuery]
*/
const matchClassName = (className) => {
    const config = tachyonsConfig();
    const md = new RegExp(mdRegex(),'gm').exec(className);
    const pseudo = new RegExp(pseudoRegEx,'gm').exec(className);

    if(pseudo) {
        return [pseudo[2], `${config.pseudo}:${pseudo[1].replace('-','')}`];
    }
    else if(md) {
        return [md[1], getMediaQuery(md[2].replace("-",""))];
    } 
    else {
        return [];
    }
}
/**
* Add new skin for Tachyons that contains background, border and color
* @param {string} colorName
* @param {string} color
*/
export const addSkin = (colorName, color) => {
    addColor(colorName, color);
    const skinProps = getSkinTachyons(colorName, color);
    addTachyon(skinProps);
}
/**
* Get tachyons styles utils as a string
* @param {string} classesStr - list of all tachyons utils seperated by space
* @return {string}
*/
export const tachyonsToCss = (classesStr) => {
    const cssAsObj = getTachyons(classesStr, true);

    const css = JSON.stringify(cssAsObj)
        .replace(/,/g,";")
        .replace(/^{|"|}$/g,"")
        .replace(/\):/g,")")
        .replace(/:hover:/,":hover")
        .replace(/:active:/,":active")
        .replace(/:focus:/,":focus")
        .replace(/:visited:/,":visited")
        .replace(/:before:/,'before')
        .replace(/:after:/,'after');

    return `${css};`;
}

/**
* Get tachyons styles utils as an object
* @param {string} classesStr - list of all tachyons utils seperated by space
* @param {boolean} asCss - format styles as a string
* @return {object}
*/

const getTachyons = (classesStr, asCss) => {
    const classesArr = classesStr.split(" ");

    return classesArr.reduce((prevProps, className) => {
        className = className.trim();
        const match = matchClassName(className);
        
        if(match.length) {
            const [tachyonName, selector] = match;
            const prop = getProp(tachyonName, asCss);
            
            if(prop && selector) {
                prevProps = {...prevProps, [selector]: {...(prevProps[selector] || {}), ...prop}};
            } else {
                console.warn(`media query '${prop}' does not exists in tachyons`);
            }
        } else {
            const prop = getProp(className, asCss);
            if(prop) {
                prevProps = {...prevProps, ...prop};
            } else {
                console.warn(`class '${className}' does not exists in tachyons`);
            }
        }
        
        return prevProps;

    }, {})
};

export { addMediaQuery } from './tachyons/mediaQueries';
export { default as tachyonsConfig } from './config';
export default getTachyons;
