/**
 * Node class
 */
class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

/**
 * Binary Tree class
 */
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (node.left === null) {
      newNode.parent = node;
      node.left = newNode;
    } else if (node.right === null) {
      newNode.parent = node;
      node.right = newNode;
    } else if (node.left.left === null || node.left.right === null) this.insertNode(node.left, newNode);
    else if (node.right.left === null || node.right.right === null) this.insertNode(node.right, newNode);
    else this.insertNode(node.left, newNode);
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) return null;
    if (node.left === null && node.right === null) {
      if (node.data === data) return null;
      else return node;
    }

    let keyNode = null;
    let tempNode;
    let lastNode;
    const queue = [];
    queue.push(node);

    while (queue.length > 0) {
      tempNode = queue.shift();
      if (tempNode.data === data) keyNode = tempNode;
      if (tempNode.left) {
        lastNode = tempNode;
        queue.push(tempNode.left);
      }
      if (tempNode.right) {
        lastNode = tempNode;
        queue.push(tempNode.right);
      }
    }

    if (keyNode !== null) {
      keyNode.data = tempNode.data;
      if (lastNode.right === tempNode) lastNode.right = null;
      else lastNode.left = null;
    }
    return node;
  }

  findMinNode(node) {
    if (node === null) return null;
    let currentNode = node;
    const leftNode = this.findMinNode(node.left);
    const rightNode = this.findMinNode(node.right);
    if (leftNode && leftNode.data < currentNode.data) currentNode = leftNode;
    if (rightNode && rightNode.data < currentNode.data) currentNode = rightNode;
    return currentNode;
  }

  findMaxNode(node) {
    if (node === null) return null;
    let currentNode = node;
    const leftNode = this.findMaxNode(node.left);
    const rightNode = this.findMaxNode(node.right);
    if (leftNode && leftNode.data > currentNode.data) currentNode = leftNode;
    if (rightNode && rightNode.data > currentNode.data) currentNode = rightNode;
    return currentNode;
  }

  getRootNode() {
    return this.root;
  }

  inOrder(node) {
    if (node !== null) {
      return [...this.inOrder(node.left), node.data, ...this.inOrder(node.right)];
    }
    return [];
  }

  preOrder(node) {
    if (node !== null) {
      return [node.data, ...this.preOrder(node.left), ...this.preOrder(node.right)];
    }
    return [];
  }

  postOrder(node) {
    if (node !== null) {
      return [...this.postOrder(node.left), ...this.postOrder(node.right), node.data];
    }
    return [];
  }

  search(node, data) {
    if (node === null) return null;
    if (node.data === data) return node;
    let currentNode = null;
    const leftNode = this.search(node.left, data);
    const rightNode = this.search(node.right, data);
    if (leftNode && leftNode.data === data) currentNode = leftNode;
    if (rightNode && rightNode.data === data) currentNode = rightNode;
    return currentNode;
  }

  findSuccessor(node) {
    if (node.right !== null) return this.findMinNode(node.right);
    let tempNode = node.parent;
    while (tempNode !== null && tempNode.left !== node) {
      node = tempNode;
      tempNode = tempNode.parent;
    }
    return tempNode;
  }

  findPredecessor(node) {
    if (node.left !== null) return this.findMaxNode(node.left);
    let tempNode = node.parent;
    while (tempNode !== null && tempNode.right !== node) {
      node = tempNode;
      tempNode = tempNode.parent;
    }
    return tempNode;
  }
}

export default BinaryTree;
