module.exports.make = (function f() {
  let params = [];
  return function calc(...args) {
    if (typeof args[0] === 'function') {
      if (params.length === 0) return undefined;
      const res = params.reduce(args[0]);
      params = [];
      return res;
    }
    params = params.concat([...args]);
    return calc;
  };
}());
