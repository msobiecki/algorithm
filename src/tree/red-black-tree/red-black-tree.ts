import BasicNode from "../node";
import BinarySearchTree from "../binary_search_tree";

export const COLOR_RED = Symbol("RED");
export const COLOR_BLACK = Symbol("BLACK");

/**
 * Node class
 */
class Node<T> extends BasicNode<T> {
  parent: Node<T> | null;

  left: Node<T> | null;

  right: Node<T> | null;

  color: symbol | null;

  constructor(data: T) {
    super(data);
    this.parent = null;
    this.left = null;
    this.right = null;
    this.color = null;
  }

  get sibling(): Node<T> | null {
    const { parent } = this;
    if (!parent) return null;
    return parent.right === this ? parent.left : parent.right;
  }

  get uncle(): Node<T> | null {
    const { parent } = this;
    if (!parent) return null;
    return parent.sibling;
  }

  get grandparent(): Node<T> | null {
    const { parent } = this;
    return parent && parent.parent;
  }
}

/**
 * Red Black Tree class
 */
class RedBlackTree<T> extends BinarySearchTree<T> {
  root!: Node<T> | null;

  insert(data: T): void {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }

    newNode.color = COLOR_RED;
    this.balance(newNode);
  }

  remove(data: T): void {
    super.remove(data);
    this.balance(this.root);
  }

  balance(node: Node<T> | null): void {
    if (!node || node === this.root) {
      if (node) node.color = COLOR_BLACK;
      return;
    }

    if (node.parent?.color !== COLOR_RED) {
      return;
    }

    let { parent } = node;
    const { grandparent } = node;

    const { uncle } = node;
    if (uncle && uncle.color === COLOR_RED) {
      parent.color = COLOR_BLACK;
      uncle.color = COLOR_BLACK;
      if (grandparent) {
        grandparent.color = COLOR_RED;
        this.balance(grandparent);
      }
    } else if (grandparent) {
      if (parent === grandparent.left) {
        if (node === parent.right) {
          this.leftRotation(parent);
          node = parent;
          parent = node.parent!;
        }
        this.rightRotation(grandparent);
      } else {
        if (node === parent.left) {
          this.rightRotation(parent);
          node = parent;
          parent = node.parent!;
        }
        this.leftRotation(grandparent);
      }

      parent.color = COLOR_BLACK;
      grandparent.color = COLOR_RED;
    }
  }

  leftRotation(node: Node<T>): void {
    const { parent } = node;
    const grandparent = parent!.parent;

    if (parent && grandparent) {
      const grandparentIsLeft = grandparent.left === parent;

      if (grandparentIsLeft) {
        grandparent.left = node;
      } else {
        grandparent.right = node;
      }

      node.parent = grandparent;

      parent.right = node.left;
      if (node.left) {
        node.left.parent = parent;
      }

      node.left = parent;
      parent.parent = node;
    }
  }

  rightRotation(node: Node<T>): void {
    const { parent } = node;
    const grandparent = parent!.parent;

    if (parent && grandparent) {
      const grandparentIsLeft = grandparent.left === parent;

      if (grandparentIsLeft) {
        grandparent.left = node;
      } else {
        grandparent.right = node;
      }

      node.parent = grandparent;

      parent.left = node.right;
      if (node.right) {
        node.right.parent = parent;
      }

      node.right = parent;
      parent.parent = node;
    }
  }
}

export default RedBlackTree;
