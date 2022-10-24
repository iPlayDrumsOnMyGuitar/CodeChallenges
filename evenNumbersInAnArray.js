/* Even numbers in an array


Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6] */

/* function evenNumbers(array, number) {
    
    let ans = []
    
    let rev = array.reverse()
    
    for(let i = 0; i < rev.length; i++){
    
        if (ans.length !== number && rev[i] % 2 == 0){
     
    
            console.log([i])
    
            ans.push(rev[i])
    
        }
    
    }return ans.reverse()
  
}
  */

function evenNumbers(array, number) {
   
    let evenNums = []
   
    for (let i = 0; i < array.length; i++){
   
    if(array[i] % 2 == 0){
   
        evenNums.push(array[i])
        
      }
    
    }

    return evenNums.slice(-number)
  
}

/* const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number); */