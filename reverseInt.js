// https:leetcode.com/problems/reverse-integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.



//my though process
let myNum = -3120
let numStr = myNum.toString()
let numArray = numStr.split('')
let arrayReverse = numArray.reverse()
let arrayJoin = arrayReverse.join('')
let testParse = parseFloat(arrayJoin)

console.log(arrayJoin)



// moving thought process to function

const reverse = x =>  x.toString().split('').reverse().join('')

console.log(reverse(myNum))

// how do I deal with the negative? and remove 0's when reversed? is there a funtion I'm not aware of that does this?
// Do I for loop and check does index 0 have a 0 if so remove?
// If I do the for loop how to I keep it from removing 0s from the middle of the number that need to be included?

