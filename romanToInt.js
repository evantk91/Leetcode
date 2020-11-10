/**
 * @param {string} s
 * @return {number}
 */

 /* Inefficient Solution */

var romanToInt = function(s) {
    const numeralValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    
    //for each numeral
    for(let i = 0; i < s.length; i++) {
        //convert numeral and next numeral to integers
        let currentNum = numeralValues[s[i]];
        
        let nextNum;
        
        //store current numeral value in variable
        let value = currentNum;
        console.log('current:', value)
        
        if(i !== s.length - 1) {
            nextNum = numeralValues[s[i + 1]];
            console.log('next:', nextNum)
            
            //if next numeral is higher
            if(currentNum < nextNum) {
                //then subtract current from next
                value = nextNum - currentNum;
                 console.log('value:', value)
            
                //skip next numeral
                i++ 
            }
            
        }
      
        //add to total
        total += value
        console.log('total:', total)
    }
         
    return total;
};

