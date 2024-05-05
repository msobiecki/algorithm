import { Node } from "../../tree";

/**
 * Breadth-first search (BFS) function
 * @param tree The root node of the tree to search
 * @param searchValue The value to search for in the tree
 * @returns An array representing the path from the root to the node containing the search value, or null if not found
 */
function breadthFirstSearch<T>(
  tree: Node<T> | null,
  searchValue: T,
): T[] | null {
  if (!tree) {
    return null;
  }

  const queue: Node<T>[] = [];
  const path: T[] = [];
  queue.push(tree);

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    path.push(currentNode.data);

    if (currentNode.data === searchValue) {
      return path;
    }

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }

  return null;
}

export default breadthFirstSearch;
