//l1and l2 represent the two input linked lists
function addTwoNumbers(l1,l2){

    //linked list - linear data structire consisting of individual elements called nodes

    //Representation
    //Node A contains data(value) and reference to node B
    //Node B contains data and a reference to node C
    //Node C contains data but its refence is null indicating the end of the list
    //First node is usually referred to as head and last node is usually tail
    //A -> B -> C -> null


    //why linked lists are stored in reverse order
    //1. Easy digit access - least significant to most significant -> least significant is mostly accessed
    //2. Sinplified addition and subtraction
    //3. Dynamic size - grow or shrink as needed
    //4. Sinplified instertion and deletion

    //head refers to first node in the list
    //linked lists consists of individual nodes connected to each other through pointers
    //by accessing the head node, you can  traverse,retrieve,modify its elements and perform various operations 


    //create a new instance of the list node 
    //list node class represents a node in a linked list and has two properties
    //val to store the current value and next to store the reference to the next node
    //here we initiaze dummy node to zero to keep track of the head of the resulting linked list
    //keeps track of the head of the reusult linked list
    // let dummyNode = new ListNode(0);

    let dummyNode = {val:0,next:null}



    //this line assigns dummyNode to currentNode variable
    //we use currrent node to traverse and construct the linked list
    //constructs linked list by updating next property with new nodes
    let currentNode = dummyNode;
    //this line initializes carry variable to zero
    //used to keep track of any carry that might occur during additions
    //it starts with zero indicating no carry initially
    let carry = 0;

    // || - logical or operator
    // if expression on the left hand returns true, overall result will be true
    //expression on the right hand will not be evaluated
    //if evaluated to false moves to right

    //executes as long as l1 and l2 has remaining nodes or there is a non-zero carry value
    //if l1 has remaining nodes, expression l1 will be truthy and loop wil continue
    // if carry is non zero, it will be truthy and loop will continue even if l1 and l2 are exhausted
    while(l1 || l2 || carry){
        //?  ternary operator 
        //checks if l1 is truthy(not null or undefined)
        // if l1 is not null or undefined, l1.val represents the value strored in the current node
        //if undefined expresssion evaluates to 0
        //carry represent carr value obtained from previous addition operation
        //the three values are added together
        //the result of this is assigned to a variable sum
        //() - operation treated as a single unit also enforce precedence
        let sum = (l1 ? l1.val :0) + (l2 ? l2.val :0) + carry;

        //handles situations when the sum of two digits exceeds 9
        //e.g sum must contain single digit result

        //Math.floor() - returns the largest integer less than or equal to a given number
        //rounds of the result to the nearest integer
        //resullting value assigned to variable carry
        
        // carry  = Math.floor(sum/10)

        carry = sum >= 10 ? 1 : 0

        sum %= 10

        //ensures linked list is constructed correctly
        //each new node connected to the previous one

        //listNode creates a new node which represents the digit sum
        //next property is assigned to this new node
        // currentNode.next = new ListNode(sum)

        currentNode.next = { val: sum, next: null };



        //updates current node pointer to this newly created node
        currentNode = currentNode.next

        //updating l1 and l2 to move forward to the next nodes
        //checks if there are more nodes remaining
        //if there are it moves the pointers to next node
        .//other wise they are st to null

        //checks if l1 is truthy - not nul or undefined
        //if truthy it means there are more nodes remaining
        //l1 is updated to l1.next which moves the pointer to the next node
        //if l1 is falsy it means there are no more remaining nodes in that case l2 is updated to null
        // l1 = l1 ? l1.next : null

        l1 = l1?.next;

        
        // l2 = l2 ? l2.next : null


        l2 = l2?.next;
        
    }
    //dummyNode , initial placeholder
    //dummyNode.next - accesses the next node after dummy node which is the head of the resulting linked list
    //skip placeholder node and provide head of the resulting node

    return dummyNode.next

}


// Test Example 1: [2,4,3] + [5,6,4] = [7,0,8]
let l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
let l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

let result = addTwoNumbers(l1, l2);
console.log(result);