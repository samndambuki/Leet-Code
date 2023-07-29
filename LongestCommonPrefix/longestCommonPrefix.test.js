const longestCommonPrefix = require('./index')

describe('longestCommonPrefix',()=>{
    test("should return the longest common prefix for the given array of strings",()=>{
        expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
        expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
        expect(longestCommonPrefix(["apple","app","april"])).toBe("ap")
        expect(longestCommonPrefix(["banana","mango","peach"])).toBe("")
        expect(longestCommonPrefix(["hello","hell","hey"])).toBe("he")
    })

    test("should return an empty string for an empty for an empty array",()=>{
        expect(longestCommonPrefix([])).toBe("")
    })
})