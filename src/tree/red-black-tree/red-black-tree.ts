import BasicNode from "../node";
import BinarySearchTree from "../binary-search-tree";

export const COLOR_RED = Symbol("RED");
export const COLOR_BLACK = Symbol("BLACK");

/**
 * Node class
 */
class Node<T> extends BasicNode<T> {
  parent: Node<T> | null;

  left: Node<T> | null;

  right: Node<T> | null;

  color: symbol;

  constructor(data: T) {
    super(data);
    this.parent = null;
    this.left = null;
    this.right = null;
    this.color = COLOR_RED;
  }

  get sibling(): Node<T> | null {
    const { parent } = this;
    if (!parent) return null;
    return parent.left === this ? parent.right : parent.left;
  }

  get uncle(): Node<T> | null {
    const { parent } = this;
    if (!parent || !parent.parent) return null;
    return parent.sibling;
  }

  get grandparent(): Node<T> | null {
    const { parent } = this;
    if (!parent || !parent.parent) return null;
    return parent.parent;
  }
}

/**
 * Red Black Tree class
 */
class RedBlackTree<T> extends BinarySearchTree<T> {
  root: Node<T> | null = null;

  insert(data: T): void {
    const newNode = new Node(data);

    if (this.root) {
      this.insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }

    this.balance(newNode);
  }

  remove(data: T): void {
    super.remove(data);
    this.balance(this.root);
  }

  balance(node: Node<T> | null): void {
    if (!node) return;
    if (node === this.root) {
      node.color = COLOR_BLACK;
      return;
    }

    let current = node;
    let { parent } = current;

    while (parent && parent.color === COLOR_RED) {
      const grandparent = parent.parent;

      if (parent === grandparent?.left) {
        const uncle = grandparent.right;

        if (uncle && uncle.color === COLOR_RED) {
          parent.color = COLOR_BLACK;
          uncle.color = COLOR_BLACK;
          grandparent.color = COLOR_RED;
          current = grandparent;
        } else {
          if (current === parent.right) {
            this.leftRotate(parent);
            current = parent;
            parent = current.parent;
          }
          if (grandparent) grandparent.color = COLOR_RED;
          if (parent) parent.color = COLOR_BLACK;
          if (grandparent) {
            this.rightRotate(grandparent);
          }
        }
      } else {
        const uncle = grandparent?.left;

        if (uncle && uncle.color === COLOR_RED) {
          parent.color = COLOR_BLACK;
          uncle.color = COLOR_BLACK;
          grandparent.color = COLOR_RED;
          current = grandparent;
        } else {
          if (current === parent.left) {
            this.rightRotate(parent);
            current = parent;
            parent = current.parent;
          }
          if (grandparent) grandparent.color = COLOR_RED;
          if (parent) parent.color = COLOR_BLACK;
          if (grandparent) {
            this.leftRotate(grandparent);
          }
        }
      }

      parent = current.parent;
    }

    if (this.root) this.root.color = COLOR_BLACK;
  }

  leftRotate(node: Node<T>): void {
    const rightChild = node.right;
    if (!rightChild) return;

    node.right = rightChild.left;
    if (rightChild.left) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;
    if (!node.parent) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  rightRotate(node: Node<T>): void {
    const leftChild = node.left;
    if (!leftChild) return;

    node.left = leftChild.right;
    if (leftChild.right) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;
    if (!node.parent) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  getRootNode(): Node<T> | null {
    return this.root;
  }
}

export default RedBlackTree;
