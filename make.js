const make = (function() {
  let params = [];
  return f = function() {
    if(typeof arguments[0] === 'function') {
      return params.reduce(arguments[0], 0);
    } else {
      params = params.concat([...arguments]);
      return f;
    }
  }
})();