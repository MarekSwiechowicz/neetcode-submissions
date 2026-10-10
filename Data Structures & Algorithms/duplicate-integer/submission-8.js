class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let set = new Map()

        for ( let i in nums){
            if ( set.has(nums[i])){
                return true
            }
            else (set.set(nums[i]))
        } 
        return false
    }
}
