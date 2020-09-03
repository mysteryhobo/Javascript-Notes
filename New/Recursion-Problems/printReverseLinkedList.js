const printReverseLinkedList = (root) => {
  if (root.next) printReverseLinkedList(root.next);
  console.log(root.value);
}


const test = {value: 1, next: {value: 2, next: {value: 3, next:{ value: 4, next: {value: 5}}}}};

printReverseLinkedList(test);