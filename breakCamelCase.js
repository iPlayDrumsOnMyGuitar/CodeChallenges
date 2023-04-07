/* Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

function solution(string) {
 
    let res = "";
 
    let letters = string.split("");
 
    letters.forEach(letter=>{
 
        if(letter.toUpperCase() == letter)
 
        res+=" "+letter
 
        else
 
        res+=letter
 
    })
 
    return res;
 
}

