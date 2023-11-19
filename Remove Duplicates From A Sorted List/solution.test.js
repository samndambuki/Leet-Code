const { ListNode, deleteDuplicates } = require("./solution");

describe("deleteDuplicates", () => {
  test("Removes duplicates from the linked list", () => {
    let head = new ListNode(1, new ListNode(1, new ListNode(2)));
    let result = deleteDuplicates(head);
    expect(result).toEqual(new ListNode(1, new ListNode(2)));
  });
});
