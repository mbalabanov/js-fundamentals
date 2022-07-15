const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array

for (let currentNumber = 0; currentNumber <= 3; currentNumber++) {
  numsZeroToThree.push(currentNumber)
}

// TODO: Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

for (let currentNumber = 5; currentNumber <= 10; currentNumber++) {
  numsFiveToTen.push(currentNumber)
}

// TODO: Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

// for (let currentNumber = 0; currentNumber <= 6; currentNumber++) {
//   if (currentNumber % 2 === 0) {
//     evenNums.push(currentNumber)
//   }
// }

// TODO: Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

for (let currentNumber = 3; currentNumber >= 0; currentNumber--) {
  countdown.push(currentNumber)
}

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
