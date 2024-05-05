import { Node } from "../../tree";

/**
 * Depth-first search (DFS) function
 * @param tree The root node of the tree to search
 * @param searchValue The value to search for in the tree
 * @returns An array representing the path from the root to the node containing the search value, or null if not found
 */
function depthFirstSearch<T>(tree: Node<T> | null, searchValue: T): T[] | null {
  if (!tree) {
    return null;
  }

  const stack: Node<T>[] = [];
  const path: T[] = [];
  stack.push(tree);

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    path.push(currentNode.data);

    if (currentNode.data === searchValue) {
      return path;
    }

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }

  return null;
}

export default depthFirstSearch;
