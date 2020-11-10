// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */

var convert = function(s, numRows) {
    let stringArray = [];
    
    if(numRows === 1) return s;
    
    for (let i = 0; i < numRows; i++) {
        if(s.length !== 0) {
           char = s[0] 
           s = s.slice(1);
           stringArray.push(char);
        }
    }
    
    while (s.length > 0) {
        for (let j = numRows - 2; j >= 0; j--) {
            if(s.length !== 0) {
               stringArray[j] += s[0]
               s = s.slice(1)
            }
        }
        for (let k = 1; k < numRows; k++) {
            if(s.length !== 0) {
               stringArray[k] += s[0]
               s = s.slice(1)
            }
        }
    }
    
    return stringArray.join('')  
};