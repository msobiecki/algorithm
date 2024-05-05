/**
 * Node class for Binary Search Tree
 */
class Node<T> {
  data: T;

  parent: Node<T> | null;

  left: Node<T> | null;

  right: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

export default Node;
