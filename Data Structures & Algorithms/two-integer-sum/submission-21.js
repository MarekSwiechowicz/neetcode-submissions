class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {




        for (let i = 0; nums.length > i; i++){
            for (let j = i + 1; nums.length > j; j++){
                if (nums[i] + nums[j] == target){
                    return [i,j]
                }
            }
        }
    }
}