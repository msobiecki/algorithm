import BinarySearchTree, { Node as BasicNode } from "../binary_search_tree/binary_search_tree";

/**
 * Node class
 */
export class Node extends BasicNode {
  get height() {
    return Math.max(this.leftSubtreeHeight, this.rightSubtreeHeight);
  }

  get leftSubtreeHeight() {
    return this.left ? this.left.height + 1 : 0;
  }

  get rightSubtreeHeight() {
    return this.right ? this.right.height + 1 : 0;
  }

  get balanceFactor() {
    return this.leftSubtreeHeight - this.rightSubtreeHeight;
  }
}

/**
 * Balanced Binary Search Tree class
 */
class BalancedBinarySearchTree extends BinarySearchTree {
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
    this.root = this.balanceUpstream(this.root);
  }

  remove(data) {
    super.remove(data);
    this.root = this.balanceUpstream(this.root);
  }

  balanceUpstream(node) {
    let currentNode = node;
    let newParentNode;
    while (currentNode !== null) {
      newParentNode = this.balance(currentNode);
      currentNode = currentNode.parent;
    }
    return newParentNode;
  }

  balance(node) {
    if (node.balanceFactor > 1) {
      if (node.left.balanceFactor < 0) return this.leftRightRotation(node);
      return this.rightRotation(node);
    } else if (node.balanceFactor < -1) {
      if (node.right.balanceFactor > 0) return this.rightLeftRotation(node);
      return this.leftRotation(node);
    }
    return node;
  }

  leftRotation(node) {
    const newParentNode = node.right;
    const grandparentNode = node.parent;
    const previousLeftNode = newParentNode.left;

    this.swapParentChildNode(node, newParentNode, grandparentNode);

    newParentNode.left = node;
    if (node) {
      node.parent = newParentNode;
    }

    node.right = previousLeftNode;
    if (previousLeftNode) {
      previousLeftNode.parent = node;
    }

    return newParentNode;
  }

  rightRotation(node) {
    const newParentNode = node.left;
    const grandparentNode = node.parent;
    const previousRightNode = newParentNode.right;

    this.swapParentChildNode(node, newParentNode, grandparentNode);

    newParentNode.right = node;
    if (node) {
      node.parent = newParentNode;
    }

    node.left = previousRightNode;
    if (previousRightNode) {
      previousRightNode.parent = node;
    }

    return newParentNode;
  }

  leftRightRotation(node) {
    this.leftRotation(node.left);
    return this.rightRotation(node);
  }

  rightLeftRotation(node) {
    this.rightRotation(node.right);
    return this.leftRotation(node);
  }

  swapParentChildNode(oldChildNode, newChildNode, parentNode) {
    if (parentNode) {
      const side = oldChildNode.parent.right === oldChildNode ? "right" : "left";
      parentNode[side] = newChildNode;
    } else {
      newChildNode.parent = null;
    }
  }
}

export default BalancedBinarySearchTree;
