import v from './variables';

export default {
    br0: {        borderRadius: v.borderRadiusNone },
    br1: {        borderRadius: v.borderRadius1 },
    br2: {        borderRadius: v.borderRadius2 },
    br3: {        borderRadius: v.borderRadius3 },
    br4: {        borderRadius: v.borderRadius4 },
    'br-100': {     borderRadius: v.borderRadiusCircle },
    'br-pill': {    borderRadius: v.borderRadiusPill },
    'br--bottom': { 
        borderTopLeftRadius: v.borderRadiusNone, 
        borderTopRightRadius: v.borderRadiusNone 
    },
    'br--top': { 
        borderBottomLeftRadius: v.borderRadiusNone, 
        borderBottomRightRadius: v.borderRadiusNone
    },
    'br--right': { 
        borderTopLeftRadius: v.borderRadiusNone, 
        borderBottomLeftRadius: v.borderRadiusNone
    },
    'br--left': { 
        borderTopRightRadius: v.borderRadiusNone, 
        borderBottomRightRadius: v.borderRadiusNone
    }
}

  
