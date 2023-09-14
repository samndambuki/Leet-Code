const { findNeedleInHayStack } = require("./solution");

describe("findNeedleInHayStack", () => {
  it("should return the correct starting position", () => {
    expect(findNeedleInHayStack("sadbutsad", "sad")).toBe(0);
    expect(findNeedleInHayStack("apple", "pl")).toBe(2);
  });

  it("should return -1 if needle is not found in haystack", () => {
    expect(findNeedleInHayStack("banana", "orange")).toBe(-1);
    expect(findNeedleInHayStack("cat", "caterpillar")).toBe(-1);
  });
});
