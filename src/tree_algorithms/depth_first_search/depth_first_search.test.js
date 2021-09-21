import BinarySearchTree from "./../../tree/binary_search_tree";
import depth_first_search from "./depth_first_search";

describe("[TEST DEPTH FIRST SEARCH TREE] -", () => {
  it("should return depth first search found in binary search tree", () => {
    const Tree = new BinarySearchTree();
    Tree.insert(10);
    Tree.insert(4);
    Tree.insert(17);
    Tree.insert(1);
    Tree.insert(9);
    Tree.insert(12);
    Tree.insert(18);
    const root = Tree.getRootNode();
    expect(depth_first_search(root, 18)).toStrictEqual([
      10,
      4,
      1,
      9,
      17,
      12,
      18,
    ]);
  });

  it("should return breadth first search not found in binary search tree", () => {
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
    expect(depth_first_search(root, 44)).toStrictEqual(null);
  });
});
