/* Find the position!


When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */

function position(letter){
    let position = +[...letter].map(a => parseInt(a, 36) - 9).filter(a => a >= 0) ;
    return "Position of alphabet: " + position
    }