function mergeTwoSortedLists(list1, list2) {
  //ListNode is a constructor function that creates a node for a linked list
  //linked list consisits of two parts val(value) and next(pointer)
  //val - holds data
  //next - points to the next node
  //new ListNode(0) - creates a new linked list node. 0 is the initial value of the node
  //newly created node will have val - 0 and next - null
  //const- constant variable
  //constant varibale cannot be assigned to a different value
  ///creating a dummy head node is to simplify the process of merging two linked lists
  const dummyHead = new ListNode(0);

  //let - can be reassgined to a different value
  //makes current point to the same linked list node that dummyHead points to
  //current - keeps track of position where we are curently in the merged linked list
  let current = dummyHead;

  //while - repeatedly executes a block of code as long as a given condition is true
  //null - represents the absence of ny object
  //indicates the end of a linked list
  //while loop runs as long as both lists have nodes to process
  //list1 or 2 is null- indicates end of at least one of the lists
  while (list1 !== null && list2 !== null) {
    //compares values of current nodes from list1 and list2
    //if value of list1 is less than list2 we move to the next node
    if (list1.val <= list2.val) {
      //we want to connect this smaller node to the merged list
      //current points to the last node of the merged list
      //we set next pointer to the current node in list1
      //this effectively connects the current node from list1 to the merged list making it the next node in the merged list
      current.next = list1;
      //we move on to the next node
      list1 = list1.next;
    }
    //we have found the smaller node in list2
    else {
      //current points to the last node of the merged list
      //we set the next pointer to the current node in list2
      //makes it the next node in the merged list
      current.next = list2;
      //move on the the next node in list2 
      list2 = list2.next
    }
    //we update the current to point tot the next node in the merged list
    current.next
  }
  //ternary operator - ? -> shorthand way of writing if else statement
  //condition ? expressionIfTrue : expressionIfFalse
  //list1!==null - checks if there are remaining nodes in list1
  //if condition is true mean list1 still has nodes to attach to the merged list
  //if false means list1 has been completely processed, and we should attachh the remaining nodes from list 2
  //if there are remaining nodes in list1 the expresssion list1 is assgined to current.next
  //if list1!==null is false the expression list2 is assigned to current.next
  current.next = list1!=null ? list1:list2;

  //returning the actual merged list
  //dummyHead.next points to the first node of the merged list
  return dummyHead.next;
}


