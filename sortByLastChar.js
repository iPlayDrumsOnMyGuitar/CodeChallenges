/* Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string. */

//

function sortLastChar(x){
    //split sort
    //sort -> 
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1))

}

console.log(sortLastChar('man i need a taxi up to ubud'), "['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']")

/* function sortLastChar(x){
    //split sort
    //sort -> 
    return x.split(' ').sort((a,b) => a.slice(-1) > b.slice(-1))

} */