class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const hashmap = {};

        for ( let i = 0 ; i < nums.length; i++){
            
            hashmap[nums[i]] = i;

        }

        for ( let i = 0 ; i<nums.length; i++){

            let diff = target - nums[i]

            if ( hashmap[diff] !== undefined && hashmap[diff] !== i){
                return [i, hashmap[diff]]
            }
        }

    }
}
