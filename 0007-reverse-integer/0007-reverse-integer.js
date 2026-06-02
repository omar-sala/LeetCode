/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversedStr = String(Math.abs(x)).split('').reverse().join('');
    const reversedNum = Number(reversedStr);
    if (reversedNum > 2**31 - 1) return 0;
    return reversedNum * Math.sign(x);
};