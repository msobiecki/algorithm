import Node from "../node";

/**
 * Binary Search Tree class
 */
class BinarySearchTree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  insert(data: T): void {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: Node<T>, newNode: Node<T>): void {
    if (newNode.data < node.data) {
      if (node.left === null) {
        newNode.parent = node;
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      newNode.parent = node;
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  remove(data: T): void {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node: Node<T> | null, data: T): Node<T> | null {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    if (node.left === null) {
      if (node.right) {
        node.right.parent = node.parent;
      }
      node = node.right;
      return node;
    }
    if (node.right === null) {
      if (node.left) {
        node.left.parent = node.parent;
      }
      node = node.left;
      return node;
    }

    const aux = this.findMinNode(node.right);
    if (aux) {
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
    }
    return node;
  }

  findMinNode(node: Node<T> | null): Node<T> | null {
    if (node === null || node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  findMaxNode(node: Node<T> | null): Node<T> | null {
    if (node === null || node.right === null) {
      return node;
    }
    return this.findMaxNode(node.right);
  }

  inOrder(node: Node<T> | null): T[] {
    if (node === null) {
      return [];
    }
    return [...this.inOrder(node.left), node.data, ...this.inOrder(node.right)];
  }

  preOrder(node: Node<T> | null): T[] {
    if (node === null) {
      return [];
    }
    return [
      node.data,
      ...this.preOrder(node.left),
      ...this.preOrder(node.right),
    ];
  }

  postOrder(node: Node<T> | null): T[] {
    if (node === null) {
      return [];
    }
    return [
      ...this.postOrder(node.left),
      ...this.postOrder(node.right),
      node.data,
    ];
  }

  search(node: Node<T> | null, data: T): Node<T> | null {
    if (node === null || node.data === data) {
      return node;
    }
    if (data < node.data) {
      return this.search(node.left, data);
    }
    return this.search(node.right, data);
  }

  interactiveSearch(node: Node<T> | null, data: T): Node<T> | null {
    let temporaryNode: Node<T> | null = node;

    while (temporaryNode !== null && temporaryNode.data !== data) {
      temporaryNode =
        data < temporaryNode.data ? temporaryNode.left : temporaryNode.right;
    }

    return temporaryNode;
  }

  findSuccessor(node: Node<T> | null): Node<T> | null {
    if (node === null) {
      return null;
    }
    if (node.right !== null) {
      return this.findMinNode(node.right);
    }
    let temporaryNode = node.parent;
    while (temporaryNode !== null && temporaryNode.left !== node) {
      node = temporaryNode;
      temporaryNode = temporaryNode.parent;
    }
    return temporaryNode;
  }

  findPredecessor(node: Node<T> | null): Node<T> | null {
    if (node === null) {
      return null;
    }
    if (node.left !== null) {
      return this.findMaxNode(node.left);
    }
    let temporaryNode = node.parent;
    while (temporaryNode !== null && temporaryNode.right !== node) {
      node = temporaryNode;
      temporaryNode = temporaryNode.parent;
    }
    return temporaryNode;
  }

  getRootNode(): Node<T> | null {
    return this.root;
  }
}

export default BinarySearchTree;
