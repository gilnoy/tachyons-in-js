import { kebabCase, getPropAsKabab, getProp } from '../utils';

test('string as kebabCase', () => {
    expect(kebabCase("myClassName")).toEqual('my-class-name');
});

test('get props as kebab case format', () => {
    const prop = getPropAsKabab({"paddingTop":10});
    
    expect(prop["padding-top"]).toBeDefined();
});

test('get prop', () => {
    const prop1 = getProp("pt3");
    const prop2 = getProp("flex");
    const prop3 = getProp("mb3", true);
    expect(prop1.paddingTop).toBeDefined();
    expect(prop2.display).toBeDefined();
    expect(prop3["margin-bottom"]).toBeDefined();
});



