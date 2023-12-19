console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
// [3, 1, 0, 8, 12, null, 1]
//        3
//      /   \
//     1     0
//    / \     \
//   8  12    1
function transformTree(tree) {
    function recursiveTree(i) {
      if (i >= tree.length || tree[i] === null) {
        return null;
      }
  
      let obj = {
        value: tree[i],
        left: recursiveTree(2 * i + 1),
        right: recursiveTree(2 * i + 2),
      };

      return obj
    }
  
    let output = recursiveTree(0);
    return output;
  }