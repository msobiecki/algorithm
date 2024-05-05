import BasicNode from "../node";
import BinarySearchTree from "../binary-search-tree";

/**
 * Node class for Balanced Binary Search Tree
 */
class Node<T> extends BasicNode<T> {
  parent: Node<T> | null;

  left: Node<T> | null;

  right: Node<T> | null;

  constructor(data: T) {
    super(data);
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  get height(): number {
    return Math.max(this.leftSubtreeHeight, this.rightSubtreeHeight);
  }

  get leftSubtreeHeight(): number {
    return this.left ? this.left.height + 1 : 0;
  }

  get rightSubtreeHeight(): number {
    return this.right ? this.right.height + 1 : 0;
  }

  get balanceFactor(): number {
    return this.leftSubtreeHeight - this.rightSubtreeHeight;
  }
}

/**
 * Balanced Binary Search Tree class (AVL Tree)
 */
class BalancedBinarySearchTree<T> extends BinarySearchTree<T> {
  root: Node<T> | null = null;

  insert(data: T): void {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    this.root = this.balanceUpstream(this.root);
  }

  remove(data: T): void {
    super.remove(data);
    this.root = this.balanceUpstream(this.root);
  }

  balanceUpstream(node: Node<T> | null): Node<T> | null {
    let currentNode: Node<T> | null = node;
    let newParentNode: Node<T> | null = null;

    while (currentNode !== null) {
      newParentNode = this.balance(currentNode);
      currentNode = currentNode.parent;
    }

    return newParentNode;
  }

  balance(node: Node<T>): Node<T> {
    if (node.balanceFactor > 1) {
      if (node.left!.balanceFactor < 0) {
        return this.leftRightRotation(node);
      }
      return this.rightRotation(node);
    }
    if (node.balanceFactor < -1) {
      if (node.right!.balanceFactor > 0) {
        return this.rightLeftRotation(node);
      }
      return this.leftRotation(node);
    }
    return node;
  }

  leftRotation(node: Node<T>): Node<T> {
    const newParentNode = node.right!;
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

  rightRotation(node: Node<T>): Node<T> {
    const newParentNode = node.left!;
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

  leftRightRotation(node: Node<T>): Node<T> {
    this.leftRotation(node.left!);
    return this.rightRotation(node);
  }

  rightLeftRotation(node: Node<T>): Node<T> {
    this.rightRotation(node.right!);
    return this.leftRotation(node);
  }

  swapParentChildNode(
    oldChildNode: Node<T>,
    newChildNode: Node<T>,
    parentNode: Node<T> | null,
  ): void {
    if (parentNode) {
      const side = parentNode.right === oldChildNode ? "right" : "left";
      parentNode[side] = newChildNode;
    } else {
      newChildNode.parent = null;
    }
  }

  getRootNode(): Node<T> | null {
    return this.root;
  }
}

export default BalancedBinarySearchTree;
