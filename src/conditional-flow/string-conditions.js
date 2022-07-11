// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello'

let answerOne

if (STR_ONE === 'Hello') {
  answerOne = true
}

// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo

if (STR_TWO !== 'Hello') {
  answerTwo = true
}

// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello'
const STR_FOUR = 'Good'

let answerThree

if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
}

// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex'

let answerFour

let numberOfVowelsSTR_FIVE = 0

const vowels = {
  a: 'Vowel',
  e: 'Vowel',
  i: 'Vowel',
  o: 'Vowel',
  u: 'Vowel'
}

let lowerCaseCurrentLetter

for (let currentLetter = 0; currentLetter < STR_FIVE.length; currentLetter++) {
  lowerCaseCurrentLetter = STR_FIVE[currentLetter].toLowerCase()
  if (vowels[lowerCaseCurrentLetter] === 'Vowel') {
    numberOfVowelsSTR_FIVE++
  }
}

if (numberOfVowelsSTR_FIVE % 2 === 0) {
  answerFour = true
} else {
  answerFour = false
}

// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna'

let answerFive

let numberOfVowelsSTR_SIX = 0

for (let currentLetter = 0; currentLetter < STR_SIX.length; currentLetter++) {
  lowerCaseCurrentLetter = STR_SIX[currentLetter].toLowerCase()
  if (vowels[lowerCaseCurrentLetter] === 'Vowel') {
    numberOfVowelsSTR_SIX++
  }
}

if (numberOfVowelsSTR_SIX % 2 === 0) {
  answerFive = true
} else {
  answerFive = false
}

// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla'

let answerSix

if (STR_SEVEN.length % 2 !== 0) {
  let middleCharacterIndexSTR_SEVEN = Math.floor(STR_SEVEN.length / 2)
  answerSix = STR_SEVEN[middleCharacterIndexSTR_SEVEN]
}

// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex'

let answerSeven

if (STR_EIGHT.length % 2 === 0) {
  let middleCharacterIndexSTR_EIGHT = STR_EIGHT.length / 2
  answerSeven =
    STR_EIGHT[middleCharacterIndexSTR_EIGHT - 1] +
    STR_EIGHT[middleCharacterIndexSTR_EIGHT]
}

// Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'January'

let seasonsByMonth = {
  March: 'Spring',
  April: 'Spring',
  May: 'Spring',
  June: 'Summer',
  July: 'Summer',
  August: 'Summer',
  September: 'Autumn',
  October: 'Autumn',
  November: 'Autumn',
  December: 'Winter',
  January: 'Winter'
}

let answerEight = seasonsByMonth[MONTH]

module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
