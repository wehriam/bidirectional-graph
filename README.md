# Directed Graph Map

[![CircleCI](https://circleci.com/gh/wehriam/directed-graph-map.svg?style=svg)](https://circleci.com/gh/wehriam/directed-graph-map) [![npm version](https://badge.fury.io/js/directed-graph-map.svg)](http://badge.fury.io/js/directed-graph-map) [![codecov](https://codecov.io/gh/wehriam/directed-graph-map/branch/master/graph/badge.svg)](https://codecov.io/gh/wehriam/directed-graph-map)

Directed graph data structure [implemented](https://github.com/wehriam/directed-graph-map/blob/master/src/index.js) using native `Map` and `Set` objects. Similiar to multi-key maps or bidirectional maps.

```js
const dg = new DirectedGraphMap();
                      //  A
dg.addEdge('A', 'X'); //  ├── X
dg.addEdge('A', 'Y'); //  ├── Y
dg.addEdge('A', 'Z'); //  └── Z

dg.getTargets('A');   //  X, Y, Z

dg.size; // 3
dg.edges; // [['A', 'X'], ['A', 'Y'], ['A', 'Z']]
dg.sources; // ['A']
dg.targets; // ['X', 'Y', 'z']

```

## Install

`yarn add directed-graph-map`

## Usage

```js

const DirectedGraphMap = require('directed-graph-map');

const dgm = new DirectedGraphMap([['A', 'B']]);

//  A
//  └── B

dgm.hasEdge('A', 'B'); // true

dgm.addEdge('B', 'C');

//  A
//  └── B
//      └── C

dgm.hasEdge('B', 'C'); // true
dgm.getTargets('A'); // new Set(['B']);
dgm.getTargets('B'); // new Set(['C']);
dgm.getTargets('C'); // new Set();
dgm.getSources('A'); // new Set();
dgm.getSources('B'); // new Set(['A']);
dgm.getSources('C'); // new Set(['B']);

dgm.removeSource('A');

//  B
//  └── C

dgm.hasEdge('A', 'B'); // false
dgm.getTargets('A'); // new Set();

dgm.removeTarget('C');

//  Empty

dgm.getTargets('B'); // new Set();
dgm.hasEdge('B', 'C'); // false

dgm.addEdge('A', 'B');

//  A
//  └── B

dgm.hasEdge('A', 'B'); // true

dgm.removeEdge('A', 'B');

//  Empty

dgm.hasEdge('A', 'B'); // false
```

## API

<a name="DirectedGraphMap"></a>

## DirectedGraphMap
Class representing a Directed Graph Map

**Kind**: global class

* [DirectedGraphMap](#DirectedGraphMap)
    * [new DirectedGraphMap([edges])](#new_DirectedGraphMap_new)
    * [.edges](#DirectedGraphMap+edges) : <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
    * [.size](#DirectedGraphMap+size) : <code>number</code>
    * [.sources](#DirectedGraphMap+sources) : <code>Set.&lt;string&gt;</code>
    * [.targets](#DirectedGraphMap+targets) : <code>Set.&lt;string&gt;</code>
    * [.addEdge(source, target)](#DirectedGraphMap+addEdge) ⇒ <code>void</code>
    * [.removeEdge(source, target)](#DirectedGraphMap+removeEdge) ⇒ <code>void</code>
    * [.hasEdge(source, target)](#DirectedGraphMap+hasEdge) ⇒ <code>boolean</code>
    * [.removeSource(source)](#DirectedGraphMap+removeSource) ⇒ <code>void</code>
    * [.removeTarget(target)](#DirectedGraphMap+removeTarget) ⇒ <code>void</code>
    * [.getSources(target)](#DirectedGraphMap+getSources) ⇒ <code>Set.&lt;string&gt;</code>
    * [.getTargets(source)](#DirectedGraphMap+getTargets) ⇒ <code>Set.&lt;string&gt;</code>

<a name="new_DirectedGraphMap_new"></a>

### new DirectedGraphMap([edges])
Create a directed graph map.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [edges] | <code>Array.&lt;Array.&lt;string&gt;&gt;</code> | <code>[]</code> | Array of source -> target pairs |

<a name="DirectedGraphMap+edges"></a>

### directedGraphMap.edges : <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
Array of edges

**Kind**: instance property of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Read only**: true
<a name="DirectedGraphMap+size"></a>

### directedGraphMap.size : <code>number</code>
Edge count

**Kind**: instance property of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Read only**: true
<a name="DirectedGraphMap+sources"></a>

### directedGraphMap.sources : <code>Set.&lt;string&gt;</code>
Set of sources

**Kind**: instance property of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Read only**: true
<a name="DirectedGraphMap+targets"></a>

### directedGraphMap.targets : <code>Set.&lt;string&gt;</code>
Set of targets

**Kind**: instance property of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Read only**: true
<a name="DirectedGraphMap+addEdge"></a>

### directedGraphMap.addEdge(source, target) ⇒ <code>void</code>
Add an edge to the graph map.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+removeEdge"></a>

### directedGraphMap.removeEdge(source, target) ⇒ <code>void</code>
Remove an edge from the graph map.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+hasEdge"></a>

### directedGraphMap.hasEdge(source, target) ⇒ <code>boolean</code>
Test if a edge exists in the graph map.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Returns**: <code>boolean</code> - - Whether the edge exists in the graph map.

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+removeSource"></a>

### directedGraphMap.removeSource(source) ⇒ <code>void</code>
Remove all edges from a source.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |

<a name="DirectedGraphMap+removeTarget"></a>

### directedGraphMap.removeTarget(target) ⇒ <code>void</code>
Remove all edges to a target.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+getSources"></a>

### directedGraphMap.getSources(target) ⇒ <code>Set.&lt;string&gt;</code>
Get all sources with edges to a target.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Returns**: <code>Set.&lt;string&gt;</code> - - Set of sources

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | Target of the edge |

<a name="DirectedGraphMap+getTargets"></a>

### directedGraphMap.getTargets(source) ⇒ <code>Set.&lt;string&gt;</code>
Get all targets with edges from a source.

**Kind**: instance method of [<code>DirectedGraphMap</code>](#DirectedGraphMap)
**Returns**: <code>Set.&lt;string&gt;</code> - - Set of targets

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the edge |

