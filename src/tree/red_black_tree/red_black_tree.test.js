import RedBlackTree, { COLOR_BLACK, COLOR_RED } from "./red_black_tree";

describe("[TEST RED BLACK TREE] -", () => {
  it("should return root black", () => {
    const Tree = new RedBlackTree();
    Tree.insert(1);

    const root = Tree.getRootNode();

    expect(root.color).toBe(COLOR_BLACK);
  });

  it("should return a new node as red", () => {
    const Tree = new RedBlackTree();
    Tree.insert(1);
    Tree.insert(2);

    const root = Tree.getRootNode();

    expect(root.right.color).toBe(COLOR_RED);
  });

  it("should return balance tree by rotating left", () => {
    const Tree = new RedBlackTree();
    Tree.insert(1);
    Tree.insert(2);
    Tree.insert(3);

    const root = Tree.getRootNode();

    expect(root.color).toBe(COLOR_BLACK);
    expect(root.left.color).toBe(COLOR_RED);
    expect(root.right.color).toBe(COLOR_RED);
  });

  it("should return balance tree by rotating right", () => {
    const Tree = new RedBlackTree();
    Tree.insert(3);
    Tree.insert(2);
    Tree.insert(1);

    const root = Tree.getRootNode();

    expect(root.color).toBe(COLOR_BLACK);
    expect(root.left.color).toBe(COLOR_RED);
    expect(root.right.color).toBe(COLOR_RED);
  });

  it("should return tree with changed colors", () => {
    const Tree = new RedBlackTree();
    Tree.insert(1);
    Tree.insert(2);
    Tree.insert(3);
    Tree.insert(4);

    const root = Tree.getRootNode();

    expect(root.color).toBe(COLOR_BLACK);
    expect(root.left.color).toBe(COLOR_BLACK);
    expect(root.right.color).toBe(COLOR_BLACK);
    expect(root.right.right.color).toBe(COLOR_RED);
  });

  xit("should return tree with balanced grandparent", () => {
    const Tree = new RedBlackTree();
    Tree.insert(1);
    Tree.insert(2);
    Tree.insert(3);
    Tree.insert(4);
    Tree.insert(5);

    const root = Tree.getRootNode();

    expect(root.data).toBe(2);
    expect(root.color).toBe(COLOR_BLACK);
    expect(root.left.data).toBe(1);
    expect(root.left.color).toBe(COLOR_BLACK);
    expect(root.right.data).toBe(4);
    expect(root.right.color).toBe(COLOR_BLACK);
    expect(root.right.left.data).toBe(3);
    expect(root.right.left.color).toBe(COLOR_RED);
    expect(root.right.right.data).toBe(5);
    expect(root.right.right.color).toBe(COLOR_RED);
  });

  it("should return balanced tree with ll rotation", () => {
    const Tree = new RedBlackTree();
    Tree.insert(1);
    Tree.insert(2);
    Tree.insert(3);

    const root = Tree.getRootNode();

    expect(root.data).toStrictEqual(2);
    expect(root.left.data).toStrictEqual(1);
    expect(root.right.data).toStrictEqual(3);
  });

  it("should return balanced tree with rr rotation", () => {
    const Tree = new RedBlackTree();
    Tree.insert(3);
    Tree.insert(2);
    Tree.insert(1);

    const root = Tree.getRootNode();

    expect(root.data).toStrictEqual(2);
    expect(root.left.data).toStrictEqual(1);
    expect(root.right.data).toStrictEqual(3);
  });

  it("should return balanced tree with lr rotation", () => {
    const Tree = new RedBlackTree();
    Tree.insert(3);
    Tree.insert(1);
    Tree.insert(2);

    const root = Tree.getRootNode();

    expect(root.data).toStrictEqual(2);
    expect(root.left.data).toStrictEqual(1);
    expect(root.right.data).toStrictEqual(3);
  });

  it("should return balanced tree with rl rotation", () => {
    const Tree = new RedBlackTree();
    Tree.insert(1);
    Tree.insert(3);
    Tree.insert(2);

    const root = Tree.getRootNode();

    expect(root.data).toStrictEqual(2);
    expect(root.left.data).toStrictEqual(1);
    expect(root.right.data).toStrictEqual(3);
  });

  it("should return not balanced tree inOrder", () => {
    const Tree = new RedBlackTree();
    Tree.insert(30);
    Tree.insert(20);
    Tree.insert(40);
    Tree.insert(10);
    Tree.insert(50);

    const root = Tree.getRootNode();

    expect(Tree.inOrder(root)).toStrictEqual([10, 20, 30, 40, 50]);
  });

  it("should return not balanced tree postOrder tree", () => {
    const Tree = new RedBlackTree();
    Tree.insert(30);
    Tree.insert(20);
    Tree.insert(40);
    Tree.insert(10);
    Tree.insert(50);
    const root = Tree.getRootNode();

    expect(Tree.postOrder(root)).toStrictEqual([10, 20, 50, 40, 30]);
  });

  it("should return preOrder tree", () => {
    const Tree = new RedBlackTree();
    Tree.insert(30);
    Tree.insert(20);
    Tree.insert(40);
    Tree.insert(10);
    Tree.insert(50);
    const root = Tree.getRootNode();

    expect(Tree.preOrder(root)).toStrictEqual([30, 20, 10, 40, 50]);
  });

  it("should return inOrder tree", () => {
    const Tree = new RedBlackTree();
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

    expect(Tree.inOrder(root)).toStrictEqual([5, 7, 9, 10, 13, 15, 17, 22, 25, 27]);
  });

  it("should return postOrder tree", () => {
    const Tree = new RedBlackTree();
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

    expect(Tree.postOrder(root)).toStrictEqual([5, 9, 7, 13, 10, 17, 27, 25, 22, 15]);
  });

  it("should return preOrder tree", () => {
    const Tree = new RedBlackTree();
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

    expect(Tree.preOrder(root)).toStrictEqual([15, 10, 7, 5, 9, 13, 22, 17, 25, 27]);
  });

  it("should return insert node tree", () => {
    const Tree = new RedBlackTree();
    Tree.insert(15);
    Tree.insert(25);
    Tree.insert(10);
    const root = Tree.getRootNode();

    expect(Tree.inOrder(root)).toStrictEqual([10, 15, 25]);

    Tree.insert(22);

    expect(Tree.inOrder(root)).toStrictEqual([10, 15, 22, 25]);
  });

  xit("should return balanced tree after remove with ll rotation", () => {
    const Tree = new RedBlackTree();
    Tree.insert(3);
    Tree.insert(1);
    Tree.insert(5);
    Tree.insert(6);
    Tree.remove(1);

    const root = Tree.getRootNode();

    expect(root.data).toStrictEqual(3);
    expect(root.right.data).toStrictEqual(5);
    expect(root.right.right.data).toStrictEqual(6);
  });

  xit("should return balanced tree after remove with rr rotation", () => {
    const Tree = new RedBlackTree();
    Tree.insert(3);
    Tree.insert(4);
    Tree.insert(2);
    Tree.insert(1);
    Tree.remove(4);

    const root = Tree.getRootNode();
    console.log(root);
    expect(root.data).toStrictEqual(3);
    expect(root.left.data).toStrictEqual(2);
    expect(root.left.left.data).toStrictEqual(1);
  });

  xit("should return balanced tree after remove with lr rotation", () => {
    const Tree = new RedBlackTree();
    Tree.insert(3);
    Tree.insert(4);
    Tree.insert(1);
    Tree.insert(2);
    Tree.remove(4);

    const root = Tree.getRootNode();

    expect(root.data).toStrictEqual(2);
    expect(root.left.data).toStrictEqual(1);
    expect(root.right.data).toStrictEqual(3);
  });

  xit("should return balanced tree after remove with rl rotation", () => {
    const Tree = new RedBlackTree();
    Tree.insert(1);
    Tree.insert(-1);
    Tree.insert(3);
    Tree.insert(2);
    Tree.remove(-1);

    const root = Tree.getRootNode();

    expect(root.data).toStrictEqual(2);
    expect(root.left.data).toStrictEqual(1);
    expect(root.right.data).toStrictEqual(3);
  });

  xit("should return new tree after remove leaf node tree", () => {
    const Tree = new RedBlackTree();
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

  xit("should return new tree after remove node tree with left child", () => {
    const Tree = new RedBlackTree();
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

  xit("should return new tree after remove node tree with right child", () => {
    const Tree = new RedBlackTree();
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

  xit("should return new tree after remove node tree with both children's", () => {
    const Tree = new RedBlackTree();
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

  xit("should return new tree after remove root node tree", () => {
    const Tree = new RedBlackTree();
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
    const Tree = new RedBlackTree();
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
    const Tree = new RedBlackTree();
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
    const Tree = new RedBlackTree();
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
    const Tree = new RedBlackTree();
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
    const Tree = new RedBlackTree();
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
    const Tree = new RedBlackTree();
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

  xit("should return successor node tree", () => {
    const Tree = new RedBlackTree();
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

  xit("should return predecessor node tree", () => {
    const Tree = new RedBlackTree();
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
