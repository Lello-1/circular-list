
// Circular list (30 mins)

// Write a function that receives the head of a linked list,
// and returns a boolean reflecting whether the list is circular or not.
// A list is considered linear when its last node "next" property
// is undefined (or null), and circular when instead
// it points back to one of the previous nodes.
// As a constraint, to solve this problem you are not allowed
// to keep track of the nodes you visit (or their values).
// You need to think out of the box.

function circularDetector (head) {
  // Check if the head is not undefined
  if (!head) return false;
  // Create the 2 tracking variables
  let runner1 = head;
  let runner2 = head.next;

  // While runner2.next is not a falsey value
  while (runner2.next) {
    // if both trackers equal the same node then return true
    if (runner1 === runner2) return true;
    // Change the first tracker to the next node
    runner1 = runner1.next;
    // Change the second tracker to the node after next
    runner2 = runner2.next.next;
  }
  // return false 
  return false;
}

module.exports = circularDetector;
