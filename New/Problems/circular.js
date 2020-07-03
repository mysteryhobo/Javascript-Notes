// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let first = list.getFrist();
  let second = list.getFirst();

  while(first && first.next) {
    first = first.next.next;
    second = second.next;

    if (first === second) return true;
  }

  return false;
}

module.exports = circular;
