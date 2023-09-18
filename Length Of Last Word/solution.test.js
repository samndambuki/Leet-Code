const {lengthOfLastWord} = require('./solutions')

describe("length of last word",()=>{
    it("should return the length of the last word",()=>{
        expect(lengthOfLastWord("Hello World")).toBe(5)
    })

    it("should remove spaces in the beginning and the end",()=>{
        expect(lengthOfLastWord(" fly me to the moon ")).toBe(4)
    })

    it("should handle input with only one word",()=>{
        expect(lengthOfLastWord("Hello")).toBe(5)
    })

    it("should handle empty input",()=>{
        expect(lengthOfLastWord("")).toBe(0)
    })

    it("should handle input with spaces",()=>{
        expect(lengthOfLastWord("    ")).toBe(0)
    })
})