




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

console.log(dfs(node1, 15))