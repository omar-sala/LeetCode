/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const nums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let ans = nums[s[s.length - 1]];
    for (let i = 0; i < s.length - 1; ++i) {
        const sign = nums[s[i]] < nums[s[i + 1]] ? -1 : 1;
        ans += sign * nums[s[i]];
    }
    return ans;
};