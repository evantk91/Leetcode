/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let string = x.toString();
    let newStr = '';
    
    for(let i = 0; i < string.length; i++) {
        var char = string[i];
        
        if(char !== '-') {
            newStr = char + newStr;
        }
    }
    
    while(newStr[0] === '0') {
        newStr = newStr.slice(1)
    }
    
    if(string[0] === '-') {
        newStr = '-' + newStr;
    }
    
    if(parseInt(newStr) < (2**31 - 1) &&
        parseInt(newStr) > -(2**31)) {
        return parseInt(newStr);     
    } else {
        return 0;
    }
};

var reverse_refactor = function(x) {
    const limit = 2 ** 31 - 1;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
}