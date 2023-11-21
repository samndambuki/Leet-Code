const { ListNode, deleteDuplicates } = require("./solution");

describe("deleteDuplicates", () => {
  //test case 1
  test("Removes duplicates from the linked list", () => {
    let head = new ListNode(1, new ListNode(1, new ListNode(2)));
    let result = deleteDuplicates(head);
    expect(result).toEqual(new ListNode(1, new ListNode(2)));
  });

  //test case 2
  test("Remove duplicates from the linked list", () => {
    let head = new ListNode(
      1,
      new ListNode(1, new ListNode(2, new ListNode(3)))
    );
    let result = deleteDuplicates(head);
    expect(result).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
  });
});
