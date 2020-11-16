/**
 * @author Jacob Yousif
 */

/**
 * It checks how many times the letter occurs in the word
 * and it returns the count and the positions.
 *
 * @param {string} word  the word to be scanned.
 * @param {string} letter the letter to check its occurance in the word.
 * @returns {number} the amount of times the letter occured in the word and the their positions in the word.
 */
export function getLetterCount (word, letter) {
  var counter = 0
  var tempLetter = letter.toUpperCase()
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === tempLetter) {
      counter++
    }
  }
  return counter
}

/**
 * It checks whethere the input is an English letter.
 *
 * @param {string} letter the input.
 * @returns {boolean} whether it is an english letter.
 */
export function isLetter (letter) {
  if (letter === '') {
    return false
  } else if (letter.length > 1 || /[^a-zA-Z]/.test(letter)) {
    return false
  } else {
    return true
  }
}

/**
 * It checks whethere the input is provided previousley.
 *
 * @param {string} letter the input.
 * @param {string[]} letters the previous inputs.
 * @returns {boolean} whether it was provided before.
 */
export function exist (letter, letters) {
  for (let i = 0; i < letters.length; i++) {
    if (letters.charAt(i) === letter.toUpperCase()) {
      return true
    }
  }
  return false
}
