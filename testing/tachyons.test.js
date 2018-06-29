import renderer from 'react-test-renderer';
import tachyonsConfig from '../config';

test('Link changes the class when hovered', () => {
  const config = tachyonsConfig();
  console.log(config)
  expect(config.pseudo).toEqual("&");
});