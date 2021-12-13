/* Remove duplicates from list


Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
 */

function distinct(a) {

    let final = []

    for(let i = 0; i < a.length; i++){

        if(!final.includes(a[i])){

            final.push(a[i])

        }

    }return final

}