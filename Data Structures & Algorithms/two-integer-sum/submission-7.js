class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let array = new Array();

        for (let i = 0; i < nums.length; i++){
            for (let j = i + 1; j < nums.length; j++){

                if (nums[i] + nums[j] == target){
                    array[0] = i
                    array[1] = j
                    return array
                }

            }
        }

    }
}
