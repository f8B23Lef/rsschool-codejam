const recursion = function(tree) {
  const res = [];
  let lvl = 0;

  const transformToArray = function(tree, lvl) {

    if(!res[lvl]) {
      res[lvl] = [];
    }
    res[lvl].push(tree.value);

    if(tree.left) {
      transformToArray(tree.left, lvl+1);
    }

    if(tree.right) {
      transformToArray(tree.right, lvl+1);
    }

    return res;
  }

  return transformToArray(tree, lvl);
}