/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    const charSet = new Set();

    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];

      while (charSet.has(currentChar)) {
        charSet.delete(s[start]);
        start++;
      }

      charSet.add(currentChar);

      maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
};