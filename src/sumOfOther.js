module.exports = function sumOfOther(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    let tmp = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (i !== j) {
        tmp += arr[j];
      }
    }
    res.push(tmp);
  }
  return res;
};
