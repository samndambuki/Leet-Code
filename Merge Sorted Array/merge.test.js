const { merge } = require("./solution");

describe("merge sorted array", () => {
  it("merges two sorted arrays correctly", () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });
  it("handles cases where nums1 is empty", () => {
    let nums1 = [];
    const m = 0;
    let nums2 = [1];
    const n = 1;

    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });
  it("handles cases when nums2 is empty", () => {
    let nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0;

    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });

  it("handles cases where both arrays are empty", () => {
    let nums1 = [];
    const m = 0;
    let nums2 = [];
    const n = 0;

    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([]);
  });
});
