import colors, { addColor, getColor } from '../tachyons/js/colors';

test('return a list of colors', () => {
    expect(Object.keys(colors).length).toBeGreaterThan(0);
});

test('get color', () => {
    Object.keys(colors).forEach((colorName)=>{
        expect(getColor(colorName)).toEqual(colors[colorName]);
    })    
});

test('add a new color', () => {
    const newColorName = "newColor";
    const newColor = "#myColor";
    addColor(newColorName, newColor);
    expect(getColor(newColorName)).toEqual(newColor);
});


