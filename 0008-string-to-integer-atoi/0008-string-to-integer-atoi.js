/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let n = s.length;
    while(i<n && s[i] === ' '){
        i++;
    }
    let sign = 1;
    if(s[i] === '-'){
        sign = -1;
        i++
    }else if(s[i] === '+'){
        i++;
    }
    let result = 0;
    while(i<n && s[i] >= '0' && s[i] <= '9'){
        let digit = s[i] - '0'
        if(result > 2147483647 / 10 || (result === Math.floor(2147483647/10) && digit > 7)){
            return sign === 1 ? 2147483647 : -2147483648;
        }
        result = result * 10 + digit;
        i++;
    }
    return result * sign;
};