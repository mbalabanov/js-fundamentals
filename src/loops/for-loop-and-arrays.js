const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10]
const letters = ['H', 'e', 'l', 'l', 'o']
let sum = 0
let word = ''

// TODO: Add code below this line to make the tests pass

// Use a for loop to set the sum variable to the sum of all the values in nums
// nums.forEach(function (currentNum) {
//   sum = sum + currentNum
// })

nums.forEach((currentNum) => (sum = sum + currentNum))

// Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
const doubledNums = []

nums.forEach((currentNum2) => doubledNums.push(currentNum2 * 2))

// Use a for loop to set word equal to all the letters in the letters array
word = ''

letters.forEach((currentLetter) => (word += currentLetter))

// Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = []

// for (let numberIndex = 0; numberIndex < nums.length; numberIndex++) {
//   if (numberIndex % 2 !== 0) {
//     everySecondNum.push(nums[numberIndex])
//   }
// }

nums.map((num, i) => {
  if (i % 2 !== 0) {
    everySecondNum.push(num)
  }
})

// Use a for loop to populate numsReversed with the numbers from nums in reverse order
// const numsReversed = []
// for (
//   let currentReversedNumber = nums.length - 1;
//   currentReversedNumber >= 0;
//   currentReversedNumber--
// ) {
//   numsReversed.push(nums[currentReversedNumber])
// }

const numsReversed = nums.reverse()
console.log(numsReversed)

// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}
