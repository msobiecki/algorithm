export function depth_first_search(tree, searchValue) {
  let queue = [];
  let path = [];
  queue.push(tree);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    path.push(currentNode.data);

    if (currentNode.data === searchValue) return path;

    if (currentNode.right !== null) queue.unshift(currentNode.right);

    if (currentNode.left !== null) queue.unshift(currentNode.left);
  }
  return null;
}

export default depth_first_search;
