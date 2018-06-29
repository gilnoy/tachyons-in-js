import utilsCls from './tachyons/tachyons';
import mediaQueries from './tachyons/mediaQueries';
import tachyonsConfig  from './config';

const config = tachyonsConfig();


// TODO - add to config file - pseudo syntax and in skins if wanna generate border color   + change variables values
// check if for clears\debug-children\links\nested need to add psuedo config also since it is using :before

// TODO:do freeze only in development
//Object.freeze(cssUtils);



export {
    tachyonsConfig,
    mediaQueries
}

const mdRegex = (() => {
    const md = Object.keys(mediaQueries).map( name => `-${name}`);
    return `^(.*?)(${md.join("|")})$`;
})();

const pseudoRegEx = '^(hover-|active-|focus-|visited-|before-|after-)(.*)';

const matchClassName = (className) => {
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

export default (classesStr) => {
    const classesArr = classesStr.split(" ");

    return classesArr.reduce((prevProps, className) => {
        className = className.trim();
        const match = matchClassName(className);
        
        if(match.length) {
            const [utilName, selector] = match;
            const prop = utilsCls[utilName];
            
            if(prop && selector) {
                prevProps = {...prevProps, [selector]: {...(prevProps[selector] || {}), ...prop}};
            } else {
                console.error(`media query '${prop}' dpes not exists in tachyons`);
            }
        } else {
            if(utilsCls[className]) {
                prevProps = {...prevProps, ...utilsCls[className]};
            } else{
                console.error(`class '${className}' does not exists in tachyons`);
            }
        }
        
        return prevProps;

    }, {})
}
