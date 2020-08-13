// Given a singly linked list, find middle of the linked list. For example, if given linked list is 1->2->3->4->5 then output should be 3.
// If there are even nodes, then there would be two middle nodes, we need to print second middle element. For example, if given linked list is 1->2->3->4->5->6 then output should be 4.

const findMiddle = (linkedList) => {
  if (!linkedList) return null;
  let singleStepper = linkedList;
  let twoStepper = linkedList;

  while (twoStepper.next && twoStepper.next.next) {
    twoStepper = twoStepper.next.next;
    singleStepper = singleStepper.next;
  }

  if (twoStepper.next === null) return singleStepper;
  else return singleStepper.next;
}



