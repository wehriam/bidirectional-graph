// @flow

const expect = require('expect');
const uuid = require('uuid');
const DirectedGraphMap = require('../src');

test('Documentation', () => {
  const directedGraphMap = new DirectedGraphMap([['A', 'B']]);
  expect(directedGraphMap.hasEdge('A', 'B')).toEqual(true); // true
  directedGraphMap.addEdge('B', 'C');
  expect(directedGraphMap.hasEdge('B', 'C')).toEqual(true); // true
  expect(directedGraphMap.getTargets('A')).toEqual(new Set(['B'])); // new Set(["B"]);
  expect(directedGraphMap.getTargets('B')).toEqual(new Set(['C'])); // new Set(["C"]);
  expect(directedGraphMap.getTargets('C')).toEqual(new Set()); // new Set();
  expect(directedGraphMap.getSources('A')).toEqual(new Set()); // new Set();
  expect(directedGraphMap.getSources('B')).toEqual(new Set(['A'])); // new Set(["A"]);
  expect(directedGraphMap.getSources('C')).toEqual(new Set(['B'])); // new Set(["B"]);
  directedGraphMap.removeSource('A');
  expect(directedGraphMap.hasEdge('A', 'B')).toEqual(false); // false
  expect(directedGraphMap.getTargets('A')).toEqual(new Set()); // new Set();
  directedGraphMap.removeTarget('C');
  expect(directedGraphMap.getTargets('B')).toEqual(new Set()); // new Set();
  expect(directedGraphMap.hasEdge('B', 'C')).toEqual(false); // false
  directedGraphMap.addEdge('A', 'B');
  expect(directedGraphMap.hasEdge('A', 'B')).toEqual(true); // true
  directedGraphMap.removeEdge('A', 'B');
  expect(directedGraphMap.hasEdge('A', 'B')).toEqual(false); // false
});

test('Add and remove pairs', () => {
  const directedGraphMap = new DirectedGraphMap();
  const A = uuid.v4();
  const B = uuid.v4();
  expect(directedGraphMap.hasSource(A)).toEqual(false);
  expect(directedGraphMap.hasTarget(B)).toEqual(false);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set());
  directedGraphMap.addEdge(A, B);
  expect(directedGraphMap.hasSource(A)).toEqual(true);
  expect(directedGraphMap.hasTarget(B)).toEqual(true);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(true);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set([B]));
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set([A]));
  directedGraphMap.removeEdge(A, B);
  expect(directedGraphMap.hasSource(A)).toEqual(false);
  expect(directedGraphMap.hasTarget(B)).toEqual(false);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set());
  expect(directedGraphMap.sources).toEqual(new Set());
  expect(directedGraphMap.targets).toEqual(new Set());
});

test('Remove sources', () => {
  const directedGraphMap = new DirectedGraphMap();
  const A = uuid.v4();
  const B = uuid.v4();
  expect(directedGraphMap.hasSource(A)).toEqual(false);
  expect(directedGraphMap.hasTarget(B)).toEqual(false);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set());
  directedGraphMap.addEdge(A, B);
  expect(directedGraphMap.hasSource(A)).toEqual(true);
  expect(directedGraphMap.hasTarget(B)).toEqual(true);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(true);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set([B]));
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set([A]));
  directedGraphMap.removeSource(A);
  expect(directedGraphMap.hasSource(A)).toEqual(false);
  expect(directedGraphMap.hasTarget(B)).toEqual(false);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set());
  expect(directedGraphMap.sources).toEqual(new Set());
  expect(directedGraphMap.targets).toEqual(new Set());
});

test('Remove targets', () => {
  const directedGraphMap = new DirectedGraphMap();
  const A = uuid.v4();
  const B = uuid.v4();
  expect(directedGraphMap.hasSource(A)).toEqual(false);
  expect(directedGraphMap.hasTarget(B)).toEqual(false);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set());
  directedGraphMap.addEdge(A, B);
  expect(directedGraphMap.hasSource(A)).toEqual(true);
  expect(directedGraphMap.hasTarget(B)).toEqual(true);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(true);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set([B]));
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set([A]));
  directedGraphMap.removeTarget(B);
  expect(directedGraphMap.hasSource(A)).toEqual(false);
  expect(directedGraphMap.hasTarget(B)).toEqual(false);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set());
  expect(directedGraphMap.sources).toEqual(new Set());
  expect(directedGraphMap.targets).toEqual(new Set());
});

test('Add and remove groups pairs', () => {
  const directedGraphMap = new DirectedGraphMap();
  const A = uuid.v4();
  const B = uuid.v4();
  const C = uuid.v4();
  const D = uuid.v4();
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.hasEdge(B, C)).toEqual(false);
  expect(directedGraphMap.hasEdge(C, D)).toEqual(false);
  expect(directedGraphMap.hasEdge(D, A)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getTargets(C)).toEqual(new Set());
  expect(directedGraphMap.getTargets(D)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(C)).toEqual(new Set());
  expect(directedGraphMap.getSources(D)).toEqual(new Set());
  directedGraphMap.addEdge(A, B);
  directedGraphMap.addEdge(B, C);
  directedGraphMap.addEdge(C, D);
  directedGraphMap.addEdge(D, A);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(true);
  expect(directedGraphMap.hasEdge(B, C)).toEqual(true);
  expect(directedGraphMap.hasEdge(C, D)).toEqual(true);
  expect(directedGraphMap.hasEdge(D, A)).toEqual(true);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set([B]));
  expect(directedGraphMap.getTargets(B)).toEqual(new Set([C]));
  expect(directedGraphMap.getTargets(C)).toEqual(new Set([D]));
  expect(directedGraphMap.getTargets(D)).toEqual(new Set([A]));
  expect(directedGraphMap.getSources(A)).toEqual(new Set([D]));
  expect(directedGraphMap.getSources(B)).toEqual(new Set([A]));
  expect(directedGraphMap.getSources(C)).toEqual(new Set([B]));
  expect(directedGraphMap.getSources(D)).toEqual(new Set([C]));
  directedGraphMap.removeEdge(A, B);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.hasEdge(B, C)).toEqual(true);
  expect(directedGraphMap.hasEdge(C, D)).toEqual(true);
  expect(directedGraphMap.hasEdge(D, A)).toEqual(true);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set([]));
  expect(directedGraphMap.getTargets(B)).toEqual(new Set([C]));
  expect(directedGraphMap.getTargets(C)).toEqual(new Set([D]));
  expect(directedGraphMap.getTargets(D)).toEqual(new Set([A]));
  expect(directedGraphMap.getSources(A)).toEqual(new Set([D]));
  expect(directedGraphMap.getSources(B)).toEqual(new Set([]));
  expect(directedGraphMap.getSources(C)).toEqual(new Set([B]));
  expect(directedGraphMap.getSources(D)).toEqual(new Set([C]));
  directedGraphMap.removeSource(B);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.hasEdge(B, C)).toEqual(false);
  expect(directedGraphMap.hasEdge(C, D)).toEqual(true);
  expect(directedGraphMap.hasEdge(D, A)).toEqual(true);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set([]));
  expect(directedGraphMap.getTargets(B)).toEqual(new Set([]));
  expect(directedGraphMap.getTargets(C)).toEqual(new Set([D]));
  expect(directedGraphMap.getTargets(D)).toEqual(new Set([A]));
  expect(directedGraphMap.getSources(A)).toEqual(new Set([D]));
  expect(directedGraphMap.getSources(B)).toEqual(new Set([]));
  expect(directedGraphMap.getSources(C)).toEqual(new Set([]));
  expect(directedGraphMap.getSources(D)).toEqual(new Set([C]));
  directedGraphMap.removeTarget(D);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.hasEdge(B, C)).toEqual(false);
  expect(directedGraphMap.hasEdge(C, D)).toEqual(false);
  expect(directedGraphMap.hasEdge(D, A)).toEqual(true);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set([]));
  expect(directedGraphMap.getTargets(B)).toEqual(new Set([]));
  expect(directedGraphMap.getTargets(C)).toEqual(new Set([]));
  expect(directedGraphMap.getTargets(D)).toEqual(new Set([A]));
  expect(directedGraphMap.getSources(A)).toEqual(new Set([D]));
  expect(directedGraphMap.getSources(B)).toEqual(new Set([]));
  expect(directedGraphMap.getSources(C)).toEqual(new Set([]));
  expect(directedGraphMap.getSources(D)).toEqual(new Set([]));
  directedGraphMap.removeEdge(D, A);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  expect(directedGraphMap.hasEdge(B, C)).toEqual(false);
  expect(directedGraphMap.hasEdge(C, D)).toEqual(false);
  expect(directedGraphMap.hasEdge(D, A)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B)).toEqual(new Set());
  expect(directedGraphMap.getTargets(C)).toEqual(new Set());
  expect(directedGraphMap.getTargets(D)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B)).toEqual(new Set());
  expect(directedGraphMap.getSources(C)).toEqual(new Set());
  expect(directedGraphMap.getSources(D)).toEqual(new Set());
  expect(directedGraphMap.sources).toEqual(new Set());
  expect(directedGraphMap.targets).toEqual(new Set());
});

test('Add and remove pairs', () => {
  const directedGraphMap = new DirectedGraphMap();
  const A = uuid.v4();
  const B1 = uuid.v4();
  const B2 = uuid.v4();
  expect(directedGraphMap.hasEdge(A, B1)).toEqual(false);
  expect(directedGraphMap.hasEdge(A, B2)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B1)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B2)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B1)).toEqual(new Set());
  expect(directedGraphMap.getSources(B2)).toEqual(new Set());
  directedGraphMap.addEdge(A, B1);
  directedGraphMap.addEdge(A, B2);
  expect(directedGraphMap.hasEdge(A, B1)).toEqual(true);
  expect(directedGraphMap.hasEdge(A, B2)).toEqual(true);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set([B1, B2]));
  expect(directedGraphMap.getTargets(B1)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B2)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B1)).toEqual(new Set([A]));
  expect(directedGraphMap.getSources(B2)).toEqual(new Set([A]));
  directedGraphMap.removeEdge(A, B2);
  expect(directedGraphMap.hasEdge(A, B1)).toEqual(true);
  expect(directedGraphMap.hasEdge(A, B2)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set([B1]));
  expect(directedGraphMap.getTargets(B1)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B2)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B1)).toEqual(new Set([A]));
  expect(directedGraphMap.getSources(B2)).toEqual(new Set([]));
  directedGraphMap.removeEdge(A, B1);
  expect(directedGraphMap.hasEdge(A, B1)).toEqual(false);
  expect(directedGraphMap.hasEdge(A, B2)).toEqual(false);
  expect(directedGraphMap.getTargets(A)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B1)).toEqual(new Set());
  expect(directedGraphMap.getTargets(B2)).toEqual(new Set());
  expect(directedGraphMap.getSources(A)).toEqual(new Set());
  expect(directedGraphMap.getSources(B1)).toEqual(new Set());
  expect(directedGraphMap.getSources(B2)).toEqual(new Set());
});

test('Initialize with edges', () => {
  const A = uuid.v4();
  const B = uuid.v4();
  const C = uuid.v4();
  const directedGraphMap = new DirectedGraphMap([[A, B], [B, C]]);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(true);
  expect(directedGraphMap.hasEdge(B, C)).toEqual(true);
  expect(directedGraphMap.hasEdge(A, C)).toEqual(false);
});

test('Remove edges that do not exist', () => {
  const A = uuid.v4();
  const B = uuid.v4();
  const directedGraphMap = new DirectedGraphMap();
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  directedGraphMap.removeEdge(A, B);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  directedGraphMap.removeSource(A);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
  directedGraphMap.removeTarget(B);
  expect(directedGraphMap.hasEdge(A, B)).toEqual(false);
});

test('Get edges, sources, and targets', () => {
  const A = uuid.v4();
  const B = uuid.v4();
  const C = uuid.v4();
  const directedGraphMap = new DirectedGraphMap([[A, B], [B, C]]);
  expect(directedGraphMap.edges).toEqual([[A, B], [B, C]]);
  expect(directedGraphMap.sources).toEqual(new Set([A, B]));
  expect(directedGraphMap.targets).toEqual(new Set([B, C]));
  for (const [source, target] of directedGraphMap) {
    if (source === A) {
      expect(target).toEqual(B);
    } else if (source === B) {
      expect(target).toEqual(C);
    } else {
      throw new Error('Unknown edge.');
    }
  }
  directedGraphMap.removeEdge(A, B);
  expect(directedGraphMap.edges).toEqual([[B, C]]);
  expect(directedGraphMap.sources).toEqual(new Set([B]));
  expect(directedGraphMap.targets).toEqual(new Set([C]));
  for (const [source, target] of directedGraphMap) {
    if (source === B) {
      expect(target).toEqual(C);
    } else {
      throw new Error('Unknown edge.');
    }
  }
  directedGraphMap.removeEdge(B, C);
  expect(directedGraphMap.edges).toEqual([]);
  expect(directedGraphMap.sources).toEqual(new Set());
  expect(directedGraphMap.targets).toEqual(new Set());
  for (const [source, target] of directedGraphMap) { // eslint-disable-line no-unused-vars
    throw new Error('Unknown edge.');
  }
});

test('Stringifies', () => {
  const A = uuid.v4();
  const B = uuid.v4();
  const C = uuid.v4();
  const directedGraphMap = new DirectedGraphMap([[A, B], [B, C]]);
  expect(directedGraphMap.toString()).toEqual(expect.any(String));
});
