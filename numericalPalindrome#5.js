/* Numerical Palindrome #5

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

232
110011
54322345
Complete the function to test if the given number (num) can be rearranged to form a numerical palindrome or not. Return a boolean (true if it can be rearranged to a palindrome, and false if it cannot). Return "Not valid" if the input is not an integer or is less than 0.

For this kata, single digit numbers are NOT considered numerical palindromes.

Examples
5        =>  false
2121     =>  true
1331     =>  true 
3357665  =>  true 
1294     =>  false 
"109982" =>  "Not valid"
-42      =>  "Not valid"
 */
function palindrome(num) { 
    //Code goes here
  
    // Check for errors
    // If errors return "Not valid"
    if (typeof num != 'number' || num < 0) return "Not valid";
    
    // check smallest possible number
    if (num < 11) return false;
    
    // Convert Number to number array
    const numsArr = Array.from(String(num), Number);
    
    // Count each instance of a number
    let counts = {};
    
    for (const number of numsArr) {
    counts[number] = counts[number] ? counts[number] + 1 : 1;
  }
    let evenEntries = 0;
    let oddEntries = 0;
    
    Object.values(counts).forEach(value => value % 2 === 0 ? evenEntries++ : oddEntries++);
    
    // if those instances are all even return true
    // other wise if they are all even and there is a single instance of a single digit return true
    // otherwise return false
    const response = evenEntries > 0 && (oddEntries === 1 || oddEntries === 0) ? true : false;
    
    return response;
  }