
let mediaQueries = {
  ns: '@media screen and (min-width: 30em)',
  m : '@media screen and (min-width: 30em) and (max-width: 60em)',
  l : '@media screen and (min-width: 60em)'
};

export const addMediaQuery = (name, query) => {
  mediaQueries[name] = query;
}

export const getMediaQuery = (name) => mediaQueries[name];
export const getMediaQueries = (name) => mediaQueries;

export default mediaQueries;