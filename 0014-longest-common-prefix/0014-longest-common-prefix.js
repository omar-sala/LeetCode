/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

  // نبدأ بأول كلمة كـ prefix مبدئي
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // نختصر الـ prefix لحد ما الكلمة تبدأ بيه
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};