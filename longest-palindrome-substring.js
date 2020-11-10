/**
 * @param {string} s
 * @return {string}
 */

 /* Brute Force Solution */
 /* Time complexity: O(n^3) */
 /* Space complexity: O(1) */

 var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while(start < end) {
        if(s[start++] !== s[end--]) {
            return false;
        }
    }
    
    return true;   
}

var getSubstrings = function(idx, string) {
    let substrings = []
    let i = idx + 1;
    while(i <= string.length) {
        substrings.push(string.slice(idx, i))
        i++;
    }
    
    return substrings;
}

var longestPalindrome = function(s) {
    let longest = '';
    //for each character in string
    for(var i = 0; i < s.length; i++) {
        //find all substrings starting with that character
        let substrings = getSubstrings(i, s)
        //for each substring starting with that character
        for(let j = 0; j < substrings.length; j++) {
            let substring = substrings[j]
            //if substring is a palindrome
            if(isPalindrome(substring)) {
                //determine if the palindrome is the longest
                if(substring.length > longest.length) {
                    longest = substring;    
                } 
            }  
        }
    }
    
    return longest;
};

// console.log(getSubstrings(0, 'babad'))

 /* Dynamic Programming */

 /* We can avoid unncessary recomputation while validating the palindrome */
 /* We can solve the problem in O(n^2) time using only constant space */
 /* a palindrome mirrors around a center of a single or two identical characters */
 /* Thus, we can expand around each center (2n - 1) centers to determine the largest palindrome */
 /* we then compare the largest palindrome around each center to the longest */
 /* if it is the longest, we find the indices of that palindrome and store it */

 /* Time complexity: O(n^2) */
 /* Space complexity: O(1) */

 const longestPalindrome = function(s) {
    if(s === null || s.length < 1) {
        return '';
    }
    
    let start = 0, end = 0;
    
    for(let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.slice(start, end + 1);
};

expandAroundCenter = (s, left, right) => {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    
    return right - left - 1;
} 