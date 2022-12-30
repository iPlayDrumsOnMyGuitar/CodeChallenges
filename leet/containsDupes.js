/* const { distinct } = require("../../../../Downloads/todo-CRUD-exercise-main/models/TodoTask")

Given an integer array SVGAnimatedNumberList, return true if any value appears at least twice in the array, and return false if every element is distinct.

Ex 1:

Input: nums = [1,2,3,1]
Ouput: true

Ex 2:
Input: nums = [1,2,3,4]
Output: false

ex3
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true */

function doesRepeat(arr){
    let obj = {},
        count = 0

    for(const num of arr){
        if(!obj[num]){
            obj[num] = true
        }else {
            return true
        }
     
      
    } return false
}

function containsDupes(arr){
    let numsMap = {}
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        if(numsMap[num]){
            return true
        }else{
            numsMap[num] = true
        }
    }
}

console.log(doesRepeat([1,2,3,1]), true)
console.log(doesRepeat([1,2,3,4]), false)
console.log(doesRepeat([1,1,1,3,3,4,3,2,4,2]), true)


