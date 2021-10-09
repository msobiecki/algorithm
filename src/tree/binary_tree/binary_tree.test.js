import BinaryTree from "./binary_tree";

describe("[TEST BINARY TREE] -", () => {
  it("should return inOrder tree", () => {
    const Tree = new BinaryTree();
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
      5, 7, 9, 25, 27, 22, 15, 17, 10, 13,
    ]);
  });

  it("should return postOrder tree", () => {
    const Tree = new BinaryTree();
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
      5, 9, 7, 27, 22, 25, 17, 13, 10, 15,
    ]);
  });

  it("should return preOrder tree", () => {
    const Tree = new BinaryTree();
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
      15, 25, 7, 5, 9, 22, 27, 10, 17, 13,
    ]);
  });

  it("should return insert node tree", () => {
    const Tree = new BinaryTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(10);
    const root = Tree.getRootNode();
    expect(Tree.inOrder(root)).toStrictEqual([25, 15, 10]);
    Tree.insert(22);
    expect(Tree.inOrder(root)).toStrictEqual([22, 25, 15, 10]);
    Tree.insert(2);
    Tree.insert(4);
    Tree.insert(8);
    Tree.insert(12);
    expect(Tree.inOrder(root)).toStrictEqual([12, 22, 25, 2, 15, 4, 10, 8]);
  });

  it("should return remove node tree", () => {
    const Tree = new BinaryTree();
    Tree.insert(13);
    Tree.insert(12);
    Tree.insert(10);
    Tree.insert(4);
    Tree.insert(19);
    Tree.insert(16);
    Tree.insert(9);
    const root = Tree.getRootNode();
    expect(Tree.inOrder(root)).toStrictEqual([4, 12, 19, 13, 16, 10, 9]);
    Tree.remove(12);
    expect(Tree.inOrder(root)).toStrictEqual([4, 9, 19, 13, 16, 10]);
  });

  it("should return search node tree", () => {
    const Tree = new BinaryTree();
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
    const Tree = new BinaryTree();
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

  it("should return min node tree", () => {
    const Tree = new BinaryTree();
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
    const Tree = new BinaryTree();
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
    const Tree = new BinaryTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.findSuccessor(Tree.search(root, 5)).data).toBe(2);
  });

  it("should return predecessor node tree", () => {
    const Tree = new BinaryTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(2);
    Tree.insert(100);
    Tree.insert(3);
    Tree.insert(5);
    Tree.insert(6);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.findPredecessor(Tree.search(root, 5)).data).toBe(15);
  });
});
