import { getProp, getPropAsKabab } from './utils';
import { addTachyon } from './tachyons/tachyons';
import { getMediaQuery, getMediaQueries, addMediaQuery as _addMediaQuery } from './tachyons/mediaQueries';
import { getSkinTachyons } from './tachyons/skins';
import { addColor } from './tachyons/colors';
import _tachyonsConfig from './config';

const mdRegex = () => {
    const md = Object.keys(getMediaQueries()).map( name => `-${name}`);
    return `^(.*?)(${md.join("|")})$`;
};

const pseudoRegEx = '^(hover-|active-|focus-|visited-|before-|after-)(.*)';

const matchClassName = (className) => {
    const config = _tachyonsConfig();
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

export const addSkin = (colorName, color) => {
    addColor(colorName, color);
    const skinProps = getSkinTachyons(colorName, color);
    addTachyon(skinProps);
}

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

export const tachyonsConfig = _tachyonsConfig;
export const addMediaQuery = _addMediaQuery;
export default getTachyons;
