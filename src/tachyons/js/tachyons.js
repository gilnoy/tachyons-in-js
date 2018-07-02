import aspectRatios from './aspectRatios';
import backgroundPosition from './backgroundPosition';
import backgroundSize from './backgroundSize';
import borderRadius from './borderRadius';
import borderStyle from './borderStyle';
import borderWidths from './borderWidths';
import borders from './borders';
import boxShadow from './boxShadow';
import boxSizing from './boxSizing';
import clears from './clears';
import code from './code';
import coordinates from './coordinates';
import debugChildren from './debugChildren';
import debugGrid from './debugGrid';
import display from './display';
import flexbox from './flexbox';
import floats from './floats';
import fontFamily from './fontFamily';
import fontStyle from './fontStyle';
import fontWeight from './fontWeight';
import forms from './forms';
import heights from './heights';
import hovers from './hovers';
import letterSpacing from './letterSpacing';
import lineHeight from './lineHeight';
import links from './links';
import lists from './lists';
import maxWidths from './maxWidths';
import negativeMargins from './negativeMargins';
import nested from './nested';
import opacity from './opacity';
import outlines from './outlines';
import overflow from './overflow';
import position from './position';
import rotations from './rotations';
import skins from './skins';
import spacing from './spacing';
import tables from './tables';
import textAlign from './textAlign';
import textDecoration from './textDecoration';
import textTransform from './textTransform';
import typeScale from './typeScale';
import typography from './typography';
import utilities from './utilities';
import verticalAlign from './verticalAlign';
import visibility from './visibility';
import whiteSpace from './whiteSpace';
import widths from './widths';
import wordBreak from './wordBreak';
import zIndex from './zIndex';

let tachyons = {
    ...aspectRatios,
    ...backgroundPosition,
    ...backgroundSize,
    ...borderRadius,
    ...borderStyle,
    ...borderWidths,
    ...borders,
    ...boxShadow,
    ...boxSizing,
    ...clears,
    ...code,
    ...coordinates,
    ...debugChildren,
    ...debugGrid,
    ...display,
    ...flexbox,
    ...floats,
    ...fontFamily,
    ...fontStyle,
    ...fontWeight,
    ...forms,
    ...heights,
    ...hovers,
    ...letterSpacing,
    ...lineHeight,
    ...links,
    ...lists,
    ...maxWidths,
    ...negativeMargins,
    ...nested,
    ...opacity,
    ...outlines,
    ...overflow,
    ...position,
    ...rotations,
    ...skins,
    ...spacing,
    ...tables,
    ...textAlign,
    ...textDecoration,
    ...textTransform,
    ...typeScale,
    ...typography,
    ...utilities,
    ...verticalAlign,
    ...visibility,
    ...whiteSpace,
    ...widths,
    ...wordBreak,
    ...zIndex
};

export const addTachyon = (tachyon) => {
    tachyons = {...tachyons, ...tachyon};
}

export const getTachyon = (tachyonName) => tachyons[tachyonName];


export default tachyons;