export function breadth_first_search(tree, searchValue) {
  let queue = [];
  let path = [];
  queue.push(tree);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    path.push(currentNode.data);

    if (currentNode.data === searchValue) return path;

    if (currentNode.left !== null) queue.push(currentNode.left);

    if (currentNode.right !== null) queue.push(currentNode.right);
  }
  return null;
}

export default breadth_first_search;
