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

  //TODO: add parent
  insertNode(node, newNode) {
    if (node.left === null) node.left = newNode;
    else if (node.right === null) node.right = newNode;
    else if (node.left.left === null || node.left.right == null) this.insertNode(node.left, newNode);
    else if (node.right.left === null || node.right.right == null) this.insertNode(node.right, newNode);
    else this.insertNode(node.left, newNode);
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    //TODO: remove node tree
  }

  findMinNode(node) {
    // TODO: find min node
  }

  findMaxNode(node) {
    //TODO: find max node
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
    // TODO: search
    //   if (node === null) return null;
    //   else if (data < node.data) return this.search(node.left, data);
    //   else if (data > node.data) return this.search(node.right, data);
    //   else return node;
  }

  //TODO: prev
  //TODO: next
}

export default BinaryTree;
