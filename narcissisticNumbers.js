/* Narcissistic Numbers

A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.
 */
function isNarcissistic(n){
  
    const arr = [...n.toString()]
  
    const pow = arr.length
  
    return n === arr.reduce((a,b)=>a + b**pow,0)
  
}