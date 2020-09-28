



// DFS for x children
const dfs = (node, value) => {
  console.log('NODE: ', node)
  if (node.value === value) return node;
  for (let currChild of node.children) {
    const result = dfs(currChild, value);
    if (result) return result;
  }
  // return node.children.find((currChild) => dfs(currChild, value));
}

const node1 = {value: 1, children: [
  {value: 2, children: [
    {value: 5, children: []},
    {value: 6, children: []}
  ]},
  {value: 3, children: [
    {value: 7, children: [
      {value: 11, children: []},
      {value: 12, children: []},
      {value: 13, children: []}
    ]},
    {value: 8, children: []}
  ]},
  {value: 4, children: [
    {value: 9, children: []},
    {value: 10, children: [
      {value: 14, children: []},
      {value: 15, children: []}
    ]}
  ]}
]}

// console.log(dfs(node1, 15))




// DFS for 2 Children max
const value = 10
const isAMatch = (node) => {return node.value === value}

const dfs2 = (node, isAMatch) => {
  if (!node) return null
  if (isAMatch(node)) return node;

  return dfs2(node.left, isAMatch) || dfs2(node.right, isAMatch);
}

const node2 = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      right: {
        value: 4
      }
    },
    right: {
      value: 5,
      left: {
        value: 6
      }
    }
  },
  right: {
    value: 7,
    left: {
      value: 8,
      left: {
        value: 9
      },
      right: {
        value: 10,
        left: {
          value: 12
        }
      }
    },
    right: {
      value: 11
    }
  }
}

console.log(dfs2(node2, isAMatch))
