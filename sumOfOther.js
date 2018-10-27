const sumOfOther = function(arr) {
  const res = [];
  for(let i = 0; i < arr.length; i++) {
    let tmp = 0;
    for(let j = 0; j < arr.length; j++) {
      if(i != j) {
        tmp += arr[j];
      }
    }
    res.push(tmp);
  }
  return res;
}