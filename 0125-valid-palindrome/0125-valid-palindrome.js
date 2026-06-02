/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let string = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9')
        ) {
            string += char;
        }
    }
    let reversed = string.split('').reverse().join('');
    return string === reversed;
};