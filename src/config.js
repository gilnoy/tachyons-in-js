let config = {
  pseudo: "&"
}

export default (params) => {
  if(params) {
    config = {...config, ...params};
  }
  
  return config;
}
  