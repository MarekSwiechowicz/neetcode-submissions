class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = {};

        // Populate the hash map with the indices
        for (let i = 0; i < nums.length; i++) {
            indices[nums[i]] = i;
        }

        // Check for the complement
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (indices[diff] !== undefined && indices[diff] !== i) {
                return [i, indices[diff]];
            }
        }

        // Return an empty array if no solution is found
        return [];
    }
}
