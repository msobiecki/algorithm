import BinarySearchTree from './graph';

describe('[TEST GRAPH] -', () => {
  it('should return inOrder graph', () => {
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
    expect(Graph.inOrder(root)).toStrictEqual([
      5,
      7,
      9,
      10,
      13,
      15,
      17,
      22,
      25,
      27,
    ]);
  });

  it('should return postOrder graph', () => {
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
    expect(Graph.postOrder(root)).toStrictEqual([
      5,
      9,
      7,
      13,
      10,
      17,
      22,
      27,
      25,
      15,
    ]);
  });

  it('should return preOrder graph', () => {
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
    expect(Graph.preOrder(root)).toStrictEqual([
      15,
      10,
      7,
      5,
      9,
      13,
      25,
      22,
      17,
      27,
    ]);
  });

  it('should return insert node graph', () => {
    const Graph = new BinarySearchTree();
    Graph.insert(15);
    Graph.insert(25);
    Graph.insert(10);
    const root = Graph.getRootNode();
    expect(Graph.inOrder(root)).toStrictEqual([10, 15, 25]);
    Graph.insert(22);
    expect(Graph.inOrder(root)).toStrictEqual([10, 15, 22, 25]);
  });

  it('should return remove node graph', () => {
    const Graph = new BinarySearchTree();
    Graph.insert(15);
    Graph.insert(25);
    Graph.insert(10);
    const root = Graph.getRootNode();
    expect(Graph.inOrder(root)).toStrictEqual([10, 15, 25]);
    Graph.remove(15);
    expect(Graph.inOrder(root)).toStrictEqual([10, 25]);
  });
});
