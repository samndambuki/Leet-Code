const {searchInsert} = require('./solution')

describe("tests for search Insert",()=>{
    it("should return the right index",()=>{
        expect(searchInsert([1,3,5,6],5)).toBe(2)
    })

    it("should return 0 if the target is smaller than all elements",()=>{
        expect(searchInsert([1,3,5,6],0)).toBe(0)
    })

    it("should return the last index if the target is larger than all the elements",()=>{
        expect(searchInsert([1,3,5,6],10)).toBe(4)
    })

    it("should return 0 if the array is empty",()=>{
        expect(searchInsert([],5)).toBe(0)
    })

    it("should return index where the target would be inserted in order (middle case)",()=>{
        expect(searchInsert([1,3,5,6],2)).toBe(1)
    })

    it("should return index where the target would be inserted in order (end case)",()=>{
        expect(searchInsert([1,3,5,6],7)).toBe(4)
    })


})