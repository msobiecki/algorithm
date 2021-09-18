/**
 * Node class
 */
export class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

/**
 * Binary Search Tree class
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        newNode.parent = node;
        node.left = newNode;
      } else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) {
        newNode.parent = node;
        node.right = newNode;
      } else this.insertNode(node.right, newNode);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) return null;
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node.right.parent = node.parent;
        node = node.right;
        return node;
      } else if (node.right === null) {
        node.left.parent = node.parent;
        node = node.left;
        return node;
      }
      const aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  findMaxNode(node) {
    if (node.right === null) return node;
    else return this.findMaxNode(node.right);
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
    else if (data < node.data) return this.search(node.left, data);
    else if (data > node.data) return this.search(node.right, data);
    else return node;
  }

  interactiveSearch(node, data) {
    if (node === null) return null;
    let tempNode = node;
    while (tempNode !== null && tempNode.data !== data) {
      if (data < tempNode.data) tempNode = tempNode.left;
      else tempNode = tempNode.right;
    }
    return tempNode;
  }

  findSuccessor(node) {
    if (node === null) return null;
    if (node.right !== null) return this.findMinNode(node.right);
    let tempNode = node.parent;
    while (tempNode !== null && tempNode.left !== node) {
      node = tempNode;
      tempNode = tempNode.parent;
    }
    return tempNode;
  }

  findPredecessor(node) {
    if (node === null) return null;
    if (node.left !== null) return this.findMaxNode(node.left);
    let tempNode = node.parent;
    while (tempNode !== null && tempNode.right !== node) {
      node = tempNode;
      tempNode = tempNode.parent;
    }
    return tempNode;
  }
}

export default BinarySearchTree;
