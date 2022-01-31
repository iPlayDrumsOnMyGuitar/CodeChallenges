/* Thinking & Testing #37: Convert number

function testIt(f){
  
    return c?
  }
 */
function testIt(f){
    let tmp = +((f - 32) / 1.8).toFixed(2)
    if (tmp < -273.15) return 'Invalid input!'
    return tmp
  }