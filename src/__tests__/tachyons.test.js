import tac, { tachyonsToCss as tacCss }  from '../';
import tachyons, { getTachyon } from '../tachyons/tachyons';
import camelCase from 'lodash/camelCase';


test('Check all tachyons utils exists and match by passing single class', () => {
    const utilsArr = Object.keys(tachyons);
    
    utilsArr.forEach((tachyonName) => {
      expect(tac(tachyonName)).toEqual(getTachyon(tachyonName));
    });
});

test('Check tachyons utils by passing multiple class', () => {
  const utilsArr = ["f1","underline","measure-wide","w-100","b--dotted"];
  const props = tac(utilsArr.join(" "));
  
  expect(props.fontSize).toEqual(getTachyon('f1').fontSize);
  expect(props.textUnderline).toEqual(getTachyon('underline').textUnderline);
  expect(props.maxWidth).toEqual(getTachyon('measure-wide').maxWidth);
  expect(props.width).toEqual(getTachyon('w-100').width);
  expect(props.borderStyle).toEqual(getTachyon('b--dotted').borderStyle);
  
});

test('Check all props assigned', () => {
  const utilsArr = ["f1","underline","measure-wide","w-100","b--dotted"];
  const props = tac(utilsArr.join(" "));
  const totalProps = Object.keys(props);

  expect(totalProps).toHaveLength(utilsArr.length);
  
});

test('props that are not defined are not assigned to props', () => {
  const utilsArr = ["f1","not-a-prop","measure-wide","w-100","b--dotted"];
  const props = tac(utilsArr.join(" "));
  const totalProps = Object.keys(props);

  expect(totalProps).toHaveLength(utilsArr.length-1);
  
});

test('check skins (background, color, border) colors', () => {
  const props = tac("bg-red red b--red");

  expect(props.backgroundColor).toBeDefined();
  expect(props.color).toBeDefined();
  expect(props.borderColor).toBeDefined();
  expect(props.display).toBeUndefined();
  
});

