import BinarySearchTree from "./binary_search_tree";

describe("[TEST BINARY SEARCH TREE] -", () => {
  it("should return inOrder tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(10);
    Tree.insert(7);
    Tree.insert(22);
    Tree.insert(17);
    Tree.insert(13);
    Tree.insert(5);
    Tree.insert(9);
    Tree.insert(27);
    const root = Tree.getRootNode();

    expect(Tree.inOrder(root)).toStrictEqual([
      5, 7, 9, 10, 13, 15, 17, 22, 25, 27,
    ]);
  });

  it("should return postOrder tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(10);
    Tree.insert(7);
    Tree.insert(22);
    Tree.insert(17);
    Tree.insert(13);
    Tree.insert(5);
    Tree.insert(9);
    Tree.insert(27);
    const root = Tree.getRootNode();

    expect(Tree.postOrder(root)).toStrictEqual([
      5, 9, 7, 13, 10, 17, 22, 27, 25, 15,
    ]);
  });

  it("should return preOrder tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(10);
    Tree.insert(7);
    Tree.insert(22);
    Tree.insert(17);
    Tree.insert(13);
    Tree.insert(5);
    Tree.insert(9);
    Tree.insert(27);
    const root = Tree.getRootNode();

    expect(Tree.preOrder(root)).toStrictEqual([
      15, 10, 7, 5, 9, 13, 25, 22, 17, 27,
    ]);
  });

  it("should return insert node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.inOrder(root)).toStrictEqual([10, 15, 25]);

    Tree.insert(22);

    expect(Tree.inOrder(root)).toStrictEqual([10, 15, 22, 25]);
  });

  it("should return new tree after remove leaf node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(8);
    Tree.insert(3);
    Tree.insert(10);
    Tree.insert(1);
    Tree.insert(6);
    Tree.insert(14);
    Tree.insert(4);
    Tree.insert(7);
    Tree.insert(13);
    const root = Tree.getRootNode();

    expect(Tree.inOrder(root)).toStrictEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);

    Tree.remove(13);

    expect(Tree.inOrder(root)).toStrictEqual([1, 3, 4, 6, 7, 8, 10, 14]);
  });

  it("should return new tree after remove node tree with left child", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(8);
    Tree.insert(3);
    Tree.insert(10);
    Tree.insert(1);
    Tree.insert(6);
    Tree.insert(14);
    Tree.insert(4);
    Tree.insert(7);
    Tree.insert(13);
    const root = Tree.getRootNode();

    expect(Tree.inOrder(root)).toStrictEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
    expect(Tree.search(root, 13).parent.data).toBe(14);

    Tree.remove(14);

    expect(Tree.inOrder(root)).toStrictEqual([1, 3, 4, 6, 7, 8, 10, 13]);
    expect(Tree.search(root, 13).parent.data).toBe(10);
  });

  it("should return new tree after remove node tree with right child", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(8);
    Tree.insert(3);
    Tree.insert(10);
    Tree.insert(1);
    Tree.insert(6);
    Tree.insert(14);
    Tree.insert(4);
    Tree.insert(7);
    Tree.insert(15);
    const root = Tree.getRootNode();

    expect(Tree.inOrder(root)).toStrictEqual([1, 3, 4, 6, 7, 8, 10, 14, 15]);
    expect(Tree.search(root, 15).parent.data).toBe(14);

    Tree.remove(14);

    expect(Tree.inOrder(root)).toStrictEqual([1, 3, 4, 6, 7, 8, 10, 15]);
    expect(Tree.search(root, 15).parent.data).toBe(10);
  });

  it("should return new tree after remove node tree with both children's", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(8);
    Tree.insert(3);
    Tree.insert(10);
    Tree.insert(1);
    Tree.insert(6);
    Tree.insert(14);
    Tree.insert(4);
    Tree.insert(7);
    Tree.insert(13);
    const root = Tree.getRootNode();

    expect(Tree.inOrder(root)).toStrictEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
    expect(Tree.search(root, 4).parent.data).toBe(6);

    Tree.remove(3);

    expect(Tree.inOrder(root)).toStrictEqual([1, 4, 6, 7, 8, 10, 13, 14]);
    expect(Tree.search(root, 4).parent.data).toBe(8);
  });

  it("should return new tree after remove root node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(8);
    Tree.insert(3);
    Tree.insert(10);
    Tree.insert(1);
    Tree.insert(6);
    Tree.insert(14);
    Tree.insert(4);
    Tree.insert(7);
    Tree.insert(13);

    expect(Tree.getRootNode().data).toBe(8);

    Tree.remove(8);

    expect(Tree.getRootNode().data).toBe(10);
  });

  it("should return search node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.search(root, 6)).toBeTruthy();
  });

  it("should not return search node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.search(root, 69)).toBeNull();
  });

  it("should return interactive search node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.interactiveSearch(root, 6)).toBeTruthy();
  });

  it("should not return interactive search node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.interactiveSearch(root, 69)).toBeNull();
  });

  it("should return min node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.findMinNode(root).data).toBe(2);
  });

  it("should return max node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.findMaxNode(root).data).toBe(100);
  });

  it("should return successor node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.findSuccessor(Tree.search(root, 5)).data).toBe(6);
  });

  it("should return predecessor node tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.findPredecessor(Tree.search(root, 5)).data).toBe(3);
  });
});
