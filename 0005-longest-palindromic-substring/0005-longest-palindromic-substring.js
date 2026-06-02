/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = "";

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let current = s.substring(left, right + 1);
      if (current.length > longest.length) {
        longest = current;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return longest;  
};