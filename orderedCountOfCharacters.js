/* 
Ordered Count of Characters
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
 */


var orderedCount = function (text) {
  
    const counts = {};
     
     const order = {};
     
     for(const char of text){
  
        if (!(char in counts)) {
  
            counts[char] = 0
       
     }
  
     counts[char]++
  
    }
  
    return Object.entries(counts).sort((a,b)=> text.indexOf(a[0]) - text.
    
    indexOf(b[0]));
   
}