/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var output = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;

        if (output.hasOwnProperty(complement)) {
            return [output[complement], i];
        }

        output[num] = i;
    }

    return [];
};