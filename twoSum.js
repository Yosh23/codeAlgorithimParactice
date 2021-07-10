let nums1 = [11,7,2,15]
let nums1Answer = 9

let nums2 = [3,2,4]
let nums2Answer = 6

let nums3 = [3,3]
let nums3Answer = 6

const sumTwo = (x,y) => {
    let result
    if (x[0] + x[1] == y) {
        result = `${x[0]} + ${x[1]} = ${y}`
    } else if (x[1] + x[2] == y) {
        result = `${x[1]}[1] + ${x[2]}[2] = ${y}`
        
    } else if (x[2] + x[3] == y) {
        result = `${x[2]} + ${x[3]} = ${y}`
    } else {
        result = "incorrect"
    }
    return result;
}

console.log (sumTwo(nums1,nums1Answer));
