/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x).split('');
    let start = 0;
    let end = str.length - 1;
    
    while(start < end) {
        if(str[start++] !== str[end--]) {
            return false;
        }
    }
    
    return true;
};