/* Contamination #1 -String-

An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"
 */

function contamination(text, char){
    //param input a string and a char
    //res string with the new char
    // abc z zzz
    //pseudo find out the length of text
            //push length to new string 
            //return new string
    let arr = []
  
    let leng = text.length -1
  
    arr.push(char.repeat(leng +1))
  
    return arr.toString()
    
  }