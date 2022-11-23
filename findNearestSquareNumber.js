/* Find Nearest square number


Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)
 */
function nearestSq(n){
    let num = Math.sqrt(n)
    console.log(num)
    console.log(Math.round(num))
    
      return (Math.round(num) ** 2)

}
