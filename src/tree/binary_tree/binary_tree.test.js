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
    expect(Tree.inOrder(root)).toStrictEqual([5, 7, 9, 25, 27, 22, 15, 17, 10, 13]);
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
    expect(Tree.postOrder(root)).toStrictEqual([5, 9, 7, 27, 22, 25, 17, 13, 10, 15]);
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
    expect(Tree.preOrder(root)).toStrictEqual([15, 25, 7, 5, 9, 22, 27, 10, 17, 13]);
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

  // it("should return remove node tree", () => {
  //   const Tree = new BinaryTree();
  //   Tree.insert(15);
  //   Tree.insert(2);
  //   Tree.insert(8);
  //   Tree.insert(25);
  //   Tree.insert(5);
  //   Tree.insert(10);
  //   const root = Tree.getRootNode();
  //   expect(Tree.inOrder(root)).toStrictEqual([25, 2, 5, 15, 10, 8]);
  //   Tree.remove(8);
  //   expect(Tree.inOrder(root)).toStrictEqual([25, 2, 5, 15, 10]);
  // });
});
