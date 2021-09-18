import BinarySearchTree, { Node as BasicNode } from "../binary_search_tree/binary_search_tree";

export const COLOR_RED = Symbol("RED");
export const COLOR_BLACK = Symbol("BLACK");

/**
 * Node class
 */
export class Node extends BasicNode {
  constructor(data) {
    super(data);
    this.color = null;
  }

  get sibling() {
    const { parent } = this;
    if (!parent) return null;
    return parent.right === this ? parent.left : parent.right;
  }

  get uncle() {
    const { parent } = this;
    if (!parent) return null;
    return parent.sibling;
  }

  get grandparent() {
    const { parent } = this;
    return parent && parent.parent;
  }
}

/**
 * Red Black Tree class
 */
class RedBlackTree extends BinarySearchTree {
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);

    if (newNode === this.root) {
      newNode.color = COLOR_BLACK;
    } else {
      newNode.color = COLOR_RED;
      this.balance(newNode);
    }
  }

  remove(data) {
    super.remove(data);
    this.balance(this.root);
  }

  balance(node) {
    // console.log(node);
    if (node === this.root) return;

    if (node.parent.color === COLOR_BLACK) return;

    if (node.uncle && node.uncle.color === COLOR_RED) {
      node.uncle.color = COLOR_BLACK;
      node.parent.color = COLOR_BLACK;

      if (node.grandparent !== this.root) node.grandparent.color = COLOR_RED;
      else return;
      this.balance(node.grandparent);
    } else if (!node.uncle || node.uncle.color === COLOR_BLACK) {
      if (node.grandparent) {
        let newGrandparentNode;

        if (node.grandparent.left === node.parent) {
          if (node.parent.left === node) newGrandparentNode = this.leftLeftRotation(node.grandparent);
          else newGrandparentNode = this.leftRightRotation(node.grandparent);
        } else {
          if (node.parent.right === node) newGrandparentNode = this.rightRightRotation(node.grandparent);
          else newGrandparentNode = this.rightLeftRotation(node.grandparent);
        }

        if (newGrandparentNode && newGrandparentNode.parent === null) {
          this.root = newGrandparentNode;

          this.root.color = COLOR_BLACK;
        }

        this.balance(newGrandparentNode);
      }
    }

    // if (node.uncle && node.uncle.color === COLOR_RED) {
    //   node.parent.color = COLOR_BLACK;
    //   node.uncle.color = COLOR_BLACK;
    //   node.grandparent.color = COLOR_BLACK;
    // } else if (node.uncle && node.uncle.color === COLOR_BLACK) {
    // } else if (node.parent && node.color === COLOR_RED && node.parent.color === COLOR_RED) {
    //   if (node.parent.left === node) {
    //     this.rightRotation(node.parent);
    //   } else {
    //     this.leftRotation(node.parent);
    //   }
    // }
  }

  leftRotation(node) {
    // const parentNode = node.parent;
    // const grandparentNode = parentNode.parent;
    // if (grandparentNode) {
    //   // do nothing
    // } else {
    //   this.root = node;
    //   node.parent = null;
    //   node.left = parentNode;
    //   if (parentNode) {
    //     parentNode.parent = node;
    //   }
    //   parentNode.right = null;
    //   // re-color
    //   node.color = COLOR_BLACK;
    //   node.right.color = COLOR_RED;
    //   node.left.color = COLOR_RED;
    // }
  }

  rightRotation(node) {
    // const parentNode = node.parent;
    // const grandparentNode = parentNode.parent;
    // if (grandparentNode) {
    //   // do something
    // } else {
    //   this.root = node;
    //   node.parent = null;
    //   node.right = parentNode;
    //   if (parentNode) {
    //     parentNode.parent = node;
    //   }
    //   parentNode.left = null;
    //   // re-color
    //   node.color = COLOR_BLACK;
    //   node.right.color = COLOR_RED;
    //   node.left.color = COLOR_RED;
    // }
  }

  leftLeftRotation(grandparentNode) {
    const grandparentParentNode = grandparentNode.parent;
    let grandparentNodeIsLeft;

    if (grandparentParentNode) {
      grandparentNodeIsLeft = grandparentParentNode.left === grandparentNode;
    }

    const parentNode = grandparentNode.left;

    const parentRightNode = parentNode.right;

    if (parentNode.right) parentNode.right.parent = null;

    parentNode.right = grandparentNode;
    if (grandparentNode) parentNode.right.parent = parentNode;

    if (grandparentNode.left) grandparentNode.left.parent = null;

    grandparentNode.left = parentRightNode;
    if (grandparentNode.left) grandparentNode.left.parent = grandparentNode;

    if (grandparentParentNode) {
      if (grandparentNodeIsLeft) {
        if (grandparentParentNode.left) grandparentParentNode.left.parent = null;
        grandparentParentNode.left = parentNode;
        if (grandparentParentNode.left) grandparentParentNode.left.parent = grandparentParentNode;
      } else {
        if (grandparentParentNode.right) grandparentParentNode.right.parent = null;
        grandparentParentNode.right = parentNode;
        if (grandparentParentNode.right) grandparentParentNode.right.parent = grandparentParentNode;
      }
    } else {
      parentNode.parent = null;
    }

    const tempParentNodeColor = parentNode.color;
    parentNode.color = grandparentNode.color;
    grandparentNode.color = tempParentNodeColor;

    return parentNode;
  }

  leftRightRotation(grandparentNode) {
    const parentNode = grandparentNode.left;
    const childNode = parentNode.right;

    const childLeftNode = childNode.left;

    if (childNode.left) childNode.left.parent = null;
    childNode.left = parentNode;
    if (childNode.left) childNode.left.parent = childNode;

    if (parentNode.right) parentNode.right.parent = null;
    parentNode.right = childLeftNode;
    if (parentNode.right) parentNode.right.parent = parentNode;

    if (grandparentNode.left) grandparentNode.left.parent = null;
    grandparentNode.left = childNode;
    if (grandparentNode.left) grandparentNode.left.parent = grandparentNode;

    return this.leftLeftRotation(grandparentNode);
  }

  rightRightRotation(grandparentNode) {
    const grandparentParentNode = grandparentNode.parent;
    let grandparentNodeIsLeft;

    if (grandparentParentNode) {
      grandparentNodeIsLeft = grandparentParentNode.left === grandparentNode;
    }

    const parentNode = grandparentNode.right;

    const parentLeftNode = parentNode.left;

    if (parentNode.left) parentNode.left.parent = null;

    parentNode.left = grandparentNode;
    if (grandparentNode) parentNode.left.parent = parentNode;

    if (grandparentNode.right) grandparentNode.right.parent = null;

    grandparentNode.right = parentLeftNode;
    if (grandparentNode.right) grandparentNode.right.parent = grandparentNode;

    if (grandparentParentNode) {
      if (grandparentNodeIsLeft) {
        if (grandparentParentNode.left) grandparentParentNode.left.parent = null;
        grandparentParentNode.left = parentNode;
        if (grandparentParentNode.left) grandparentParentNode.left.parent = grandparentParentNode;
      } else {
        if (grandparentParentNode.right) grandparentParentNode.right.parent = null;
        grandparentParentNode.right = parentNode;
        if (grandparentParentNode.right) grandparentParentNode.right.parent = grandparentParentNode;
      }
    } else {
      parentNode.parent = null;
    }

    const tempParentNodeColor = parentNode.color;
    parentNode.color = grandparentNode.color;
    grandparentNode.color = tempParentNodeColor;

    return parentNode;
  }

  rightLeftRotation(grandparentNode) {
    const parentNode = grandparentNode.right;
    const childNode = parentNode.left;

    const childRightNode = childNode.right;

    if (childNode.right) childNode.right.parent = null;
    childNode.right = parentNode;
    if (childNode.right) childNode.right.parent = childNode;

    if (parentNode.left) parentNode.left.parent = null;
    parentNode.left = childRightNode;
    if (parentNode.left) parentNode.left.parent = parentNode;

    if (grandparentNode.right) grandparentNode.right.parent = null;
    grandparentNode.right = childNode;
    if (grandparentNode.right) grandparentNode.right.parent = grandparentNode;

    return this.rightRightRotation(grandparentNode);
  }
}

export default RedBlackTree;
