module.exports = function recursion(tree) {
  const res = [];
  const lvl = 0;

  const transformToArray = function f(curTree, curLvl) {
    if (!res[curLvl]) {
      res[curLvl] = [];
    }
    res[curLvl].push(curTree.value);

    if (curTree.left) {
      transformToArray(curTree.left, curLvl + 1);
    }

    if (curTree.right) {
      transformToArray(curTree.right, curLvl + 1);
    }
    return res;
  };

  return transformToArray(tree, lvl);
};
