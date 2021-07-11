// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// let twoSumLink = "https://leetcode.com/problems/two-sum/"

let nums1 = [1,3,7,2]
let nums1Answer = 9
let nums2 = [1,9,8]
let nums2Answer = 10
let nums3 = [1,2,3,4,5,6]
let nums3Answer = 10
let nums4 = [1,2,3,4,5,6,7,8,9]
let nums4Answer = 17


// this is NOT good and requires to much brute force doesn't account for if array index of 2 and 0 equals 9 as well and so forth. not going to work every time.
const twoSumIf = (x,y) => {
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

console.log (twoSumIf(nums1,nums1Answer));

// is a for loop a better option to iterate through the array?


const twoSumFor = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
            // setting j to i+1 keeps j from comparing it self to make sure we don't use the same element twice like mentioned in line 2
        for(var j = i+1; j < nums.length; j++) {
            // console.log(`${i} this is i`)
            // console.log(`${j} this is j`)
            if(nums[i] + nums[j] === target) {
                return [i,j] 
            }
        }
    }
}

console.log(twoSumFor(nums1,nums1Answer))
console.log(twoSumFor(nums2,nums2Answer))
console.log(twoSumFor(nums3,nums3Answer))
console.log(twoSumFor(nums4,nums4Answer))
// can I substract the Target/Answer from a number and see if that number is in the array? 