const {removeElement} = require('./index')


describe('removeElement function',()=>{
    describe('basic cases',()=>{
        test.skip('remove all occurences of a value from the array',()=>{
            //test case 1
            let nums1 = [3,2,2,3]
            let val1 = 3
            expect(removeElement(nums1,val1)).toBe(2)
        
            //test case 2
            let nums2 = [0,1,2,2,3,0,4,2]
            let val2 = 2
            expect(removeElement(nums2,val2)).toBe(5)
        })    


        test.skip('array with no elements',()=>{
        let nums = []
        let val = 5
        expect(removeElement(nums,val)).toBe(0) 
        })


        test('array with no occcurences of the value',()=>{
        let nums = [1,2,3,4,5]
        let val = 6
        expect(removeElement(nums,val)). toBe(5)
        })

        
    })
})

