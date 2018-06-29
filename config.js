let config = {
  pseudo: "&",
  useBorderColor: true,
  useBackgroundColor: true,
  useColor: true
}

export default (params) => {
  if(!params) {
    return config;
  } 

  config = {...config, ...parmas};
}