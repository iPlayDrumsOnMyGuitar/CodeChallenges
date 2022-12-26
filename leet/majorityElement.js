/* Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

 */

function majorityElement(arr){
    let map = {},
        count = 0,
        majElem = arr[0]

    for (const num of arr){
        arr[num] = arr[num] + 1 || 1
    }
    for(const elem in map){
        if(map[elem] > count){
            majElem = map[elem]
        }
    }return majElem
}

console.log(majorityElement([3,2,3]), 3)
console.log(majorityElement([2,2,1,1,1,2,2]), 2)
