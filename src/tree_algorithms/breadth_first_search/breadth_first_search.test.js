import BinarySearchTree from "./../../tree/binary_search_tree";
import breadth_first_search from "./breadth_first_search";

describe("[TEST GRAPH] -", () => {
  it("should return breadth first search found value in binary search tree", () => {
    const Graph = new BinarySearchTree();
    Graph.insert(10);
    Graph.insert(4);
    Graph.insert(17);
    Graph.insert(1);
    Graph.insert(9);
    Graph.insert(12);
    Graph.insert(18);
    const root = Graph.getRootNode();
    expect(breadth_first_search(root, 18)).toStrictEqual([10, 4, 17, 1, 9, 12, 18]);
  });

  it("should return breadth first search not found in binary search tree", () => {
    const Graph = new BinarySearchTree();
    Graph.insert(15);
    Graph.insert(25);
    Graph.insert(10);
    Graph.insert(7);
    Graph.insert(22);
    Graph.insert(17);
    Graph.insert(13);
    Graph.insert(5);
    Graph.insert(9);
    Graph.insert(27);
    const root = Graph.getRootNode();
    expect(breadth_first_search(root, 44)).toStrictEqual(null);
  });
});
