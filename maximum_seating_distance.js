/*
you are given an array representing a row of seats where seats[i] = 1 represents a person
sitting at ith position and seats[i] = 0 represents the ith seat is empty.

There is at least one person sitting and one seat that is empty.

Write a function that returns the maximum distance to the closest person.
 */

var middleDist = function(numEmpty) {
    if(numEmpty % 2 === 0) {
        return numEmpty / 2;
    } else {
        return Math.floor(numEmpty / 2) + 1;
    }
}

var maxDistToClosest = function(seats) {
    let max = 0;
    let numEmpty = 0;
    let middle = false;
    
    //loop through each seat
    for(let i = 0; i < seats.length; i++) {
        let seat = seats[i]
        
        //count each empty seat
        if(seat === 0) {
            numEmpty++;
        }
        
        //if occupied seat is hit and seat is not in the middle (between two people)
        if(middle === false && seat === 1) {
            if(numEmpty > max) {
                max = numEmpty;
            }
            
            middle = true;
            numEmpty = 0;
        }
        
        //if occupied seat is hit and seat is in the middle
        if(middle === true && seat === 1) {
            if(middleDist(numEmpty) > max) {
                max = middleDist(numEmpty);
            }
            
            numEmpty = 0;
        }
        
        //if seat is the last seat
        if(i === seats.length - 1) {
            if(numEmpty > max) {
                max = numEmpty;
            }
        }
    }
    
    
    return max;
};