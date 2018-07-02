import kebabCase from 'lodash/kebabCase';
import mapKeys from 'lodash/mapKeys';
import { addTachyon, getTachyon } from './js/tachyons';
import mediaQueries from './js/mediaQueries';
import { getSkinTachyons } from './js/skins';
import { addColor } from './js/colors';
import tachyonsConfig  from './config';

const mdRegex = (() => {
    const md = Object.keys(mediaQueries).map( name => `-${name}`);
    return `^(.*?)(${md.join("|")})$`;
})();

const pseudoRegEx = '^(hover-|active-|focus-|visited-|before-|after-)(.*)';

const matchClassName = (className: string) => {
    const config: Object = tachyonsConfig();
    const md = new RegExp(mdRegex,'gm').exec(className);
    const pseudo = new RegExp(pseudoRegEx,'gm').exec(className);

    if(pseudo) {
        return [pseudo[2], `${config.pseudo}:${pseudo[1].replace('-','')}`];
    }
    else if(md) {
        return [md[1], mediaQueries[md[2].replace("-","")]];
    } 
    else {
        return [];
    }
}

const getProp = (tachyonName: string, asCss: boolean) => {
    const prop: Object = getTachyon(tachyonName);
    
    if(asCss) {
        return mapKeys(prop, function(value, key) {
            return kebabCase(key);
        });
    }
    
    return prop;
}

export const addSkin = (colorName: string, color: string) => {
    addColor(colorName, color);
    const skinProps = getSkinTachyons(colorName, color);
    addTachyon(skinProps);
}

export const tachyonsToCss = (classesStr: string) => {
    const cssAsObj: Object = getTachyons(classesStr, true);

    const css: string = JSON.stringify(cssAsObj)
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

const getTachyons = (classesStr: string, asCss: boolean) => {
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
            } else{
                console.warn(`class '${className}' does not exists in tachyons`);
            }
        }
        
        return prevProps;

    }, {})
};

export default getTachyons;
