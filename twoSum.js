// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let nums1 = [11,7,2,15]
let nums1Answer = 9



// this is NOT good and requires to much brute force doesn't account for if array index of 2 and 0 equals 9 as well and so forth. not going to work every time.
const sumTwoIf = (x,y) => {
    let result
    if (x[0] + x[1] == y) {
        result = `${x[0]} + ${x[1]} = ${y}`
    } else if (x[1] + x[2] == y) {
        result = `${x[1]} (array index [1]) + ${x[2]} (array index [2]) = ${y}`

    } else if (x[2] + x[3] == y) {
        result = `${x[2]} + ${x[3]} = ${y}`
    } else {
        result = "Solution not found"
    }
    return result;
}

console.log (sumTwoIf(nums1,nums1Answer));

// is a for loop a better option to iterate through the array?. or would .reduce() be better? probably not reduce.





