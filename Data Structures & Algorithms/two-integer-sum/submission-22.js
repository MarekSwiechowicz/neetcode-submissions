class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const indices = {};

        for (let i = 0; i < nums.length; i++){
            indices[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if ( indices[diff] !== undefined && indices[diff] !== i){
                return [i, indices[diff]]
            }
        }

        for (let i = 0; nums.length > i; i++){
            for (let j = i + 1; nums.length > j; j++){
                if (nums[i] + nums[j] == target){
                    return [i,j]
                }
            }
        }
    }
}