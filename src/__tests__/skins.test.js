import colors, { getColor } from '../tachyons/js/colors';
import skins from '../tachyons/js/skins';

test('return a list of skins by colors', () => {
    const colorNameArr = Object.keys(colors);
    const colorName = colorNameArr[4]; 
    const color = getColor(colorName);
    
    expect(skins[`bg-${colorName}`].backgroundColor).toEqual(color);
    expect(skins[`${colorName}`].color).toEqual(color);
    expect(skins[`b--${colorName}`].borderColor).toEqual(color);
});
