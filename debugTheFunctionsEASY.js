/* Debug the functions EASY


function multi(arr) {
    return arr * arr;
  }
  function add(arr) {
    return arr + arr;
  }
  function reverse(str) {
    return str.reverse();
  }
 */

function multi(arr) {
 
    return arr.reduce((a,b)=>a * b)
 
}

function add(arr) {

    return arr.reduce((a,b)=>a + b);

}

function reverse(str) {

    return str.split('').reverse().join('')

}