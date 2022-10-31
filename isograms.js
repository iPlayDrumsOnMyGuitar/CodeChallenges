/* 
Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case) */


function isIsogram(str){
   
    return new Set(str.toUpperCase()).size == str.length;
  
}

/* function isIsogram(str){
    let letters = str.toLowerCase().split('')
    for(let i = 0; i < letters.length; i++){
      if(letters.indexOf(letters[i]) !== letters.lastIndexOf(letters[i])){
        return (false)
      }
    }return true
  } */