import Node from "../node";

/**
 * Binary Tree class
 */
class BinaryTree<T> {
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
    if (node.left === null) {
      newNode.parent = node;
      node.left = newNode;
    } else if (node.right === null) {
      newNode.parent = node;
      node.right = newNode;
    } else if (node.left.left === null || node.left.right === null) {
      this.insertNode(node.left, newNode);
    } else if (node.right.left === null || node.right.right === null) {
      this.insertNode(node.right, newNode);
    } else {
      this.insertNode(node.left, newNode);
    }
  }

  remove(data: T): void {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node: Node<T> | null, data: T): Node<T> | null {
    if (node === null) return null;
    if (node.left === null && node.right === null) {
      if (node.data === data) return null;
      return node;
    }

    let keyNode = null;
    let temporaryNode;
    let lastNode;
    const queue = [];
    queue.push(node);

    while (queue.length > 0) {
      temporaryNode = queue.shift();
      if (temporaryNode?.data === data) keyNode = temporaryNode;
      if (temporaryNode?.left) {
        lastNode = temporaryNode;
        queue.push(temporaryNode.left);
      }
      if (temporaryNode?.right) {
        lastNode = temporaryNode;
        queue.push(temporaryNode.right);
      }
    }

    if (keyNode !== null) {
      if (temporaryNode) {
        keyNode.data = temporaryNode.data;
      }
      if (lastNode && lastNode?.right === temporaryNode) lastNode.right = null;
      else if (lastNode) lastNode.left = null;
    }
    return node;
  }

  findMinNode(node: Node<T> | null): Node<T> | null {
    if (node === null) return null;
    let currentNode = node;
    const leftNode = this.findMinNode(node.left);
    const rightNode = this.findMinNode(node.right);
    if (leftNode && leftNode.data < currentNode.data) currentNode = leftNode;
    if (rightNode && rightNode.data < currentNode.data) currentNode = rightNode;
    return currentNode;
  }

  findMaxNode(node: Node<T> | null): Node<T> | null {
    if (node === null) return null;
    let currentNode = node;
    const leftNode = this.findMaxNode(node.left);
    const rightNode = this.findMaxNode(node.right);
    if (leftNode && leftNode.data > currentNode.data) currentNode = leftNode;
    if (rightNode && rightNode.data > currentNode.data) currentNode = rightNode;
    return currentNode;
  }

  getRootNode(): Node<T> | null {
    return this.root;
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
    if (node === null) return null;
    if (node.data === data) return node;
    let currentNode = null;
    const leftNode = this.search(node.left, data);
    const rightNode = this.search(node.right, data);
    if (leftNode && leftNode.data === data) currentNode = leftNode;
    if (rightNode && rightNode.data === data) currentNode = rightNode;
    return currentNode;
  }

  findSuccessor(node: Node<T> | null): Node<T> | null {
    if (node?.right !== null) return this.findMinNode(node!.right);
    let temporaryNode = node.parent;
    while (temporaryNode !== null && temporaryNode.left !== node) {
      node = temporaryNode;
      temporaryNode = temporaryNode.parent;
    }
    return temporaryNode;
  }

  findPredecessor(node: Node<T> | null): Node<T> | null {
    if (node?.left !== null) return this.findMaxNode(node!.left);
    let temporaryNode = node.parent;
    while (temporaryNode !== null && temporaryNode.right !== node) {
      node = temporaryNode;
      temporaryNode = temporaryNode.parent;
    }
    return temporaryNode;
  }
}

export default BinaryTree;
