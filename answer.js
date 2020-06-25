
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
  // REMOVE-START
  var runner1 = head;
  var runner2 = head;
  while (runner2 !== undefined && runner2.next !== undefined) {
    runner1 = runner1.next;
    runner2 = runner2.next.next;
    if (runner1 === runner2) return true;
  }
  return false;
  // In case you wanna find out more:
  // https://en.wikipedia.org/wiki/Cycle_detection
  // REMOVE-END
}

module.exports = circularDetector;
