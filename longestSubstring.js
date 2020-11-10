var lengthOfLongestSubstring = function(s) {
    //Store initial character in substring
    let subStr = s[0];
    let longest = 1;
    
    if(s.length === 0) {
        return 0;
    }
    
    for(var i = 1; i < s.length; i++) {
        let idx = subStr.indexOf(s[i])
        
        if(idx !== -1) {
            if(subStr.length > longest) {
                longest = subStr.length;    
            }
            subStr += s[i];
            subStr = subStr.slice(idx + 1);
        } else {
            subStr += s[i];
        }
        
        if(i == s.length - 1 && subStr.length > longest) {
            longest = subStr.length;
        }
    }
    
    return longest;
};