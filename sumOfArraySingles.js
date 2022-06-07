
/* Sum of array singles
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
More examples in the test cases.
 */
function repeats(arr) {
 
    const onces = new Set();
 
    const twices = new Set();
 
    for (const num of arr){
 
        if (twices.has(num)) continue;
 
        if (onces.has(num)) {
 
            onces.delete(num)
 
            twices.add(num)
      
      }else onces.add(num)
 
    }
   
  return [...onces].reduce((sum,num)=> sum + num)
 
};