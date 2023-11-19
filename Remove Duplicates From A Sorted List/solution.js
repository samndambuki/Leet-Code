//function to represent each node in the linked list

//val - represents the value
//next - points to the next node in the linked list
function ListNode(val, next) {
  //this -   represents the object being constructed
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// let node1 = new ListNode();
// console.log(node1.val);

// let node2 = new ListNode(42);
// console.log(node2.val);

//head is the first node in the linked list
function deleteDuplicates(head) {
  //this variable is used to traverse the linked list
  let current = head;

  //the while loop continues as long as the two conditions are met
  //current!==null - meaning there are still noded to process
  //current.next!==null - meaning we dont go beyond the end of the list
  while (current !== null && current.next !== null) {
    //checking for duplicates
    if (current.val === current.next.val) {
      //if a duplicate is found
      //update next pointer of current to skip duplicate code
      current.next = current.next.next;
    } else {
      //when no duplicate is found it moves the current pointer to the next node
      current = current.next;
    }
  }
  return head;
}

//example 1
let head = new ListNode(1, new ListNode(1, new ListNode(2)));
let result = deleteDuplicates(head);
console.log(result);

///example 2
let head2 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3))));
let result2 = deleteDuplicates(head2);
console.log(result2);

module.exports = { ListNode, deleteDuplicates };
