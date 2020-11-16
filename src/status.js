/**
 * An object with static properties.
 * It acts as en enum.
 *
 * @author Jacob Yousif
 *
 */
const chanceEnum = [
  { desc: 'Game Over!', value: 6 },
  { desc: 'Last chacne!', value: 5 },
  { desc: 'You have two chances!', value: 4 },
  { desc: 'You have three chances!', value: 3 },
  { desc: 'You have four chances!', value: 2 },
  { desc: 'You have five chances!', value: 1 },
  { desc: 'You have all of your six chances.', value: 0 }
]

/**
 * An object with static properties.
 * It acts as en enum.
 *
 */
const responseEnum = [
  { classification: 'invalid', desc: 'Invalid Input! ' },
  { classification: 'provided', desc: 'You have already provided this input. ' },
  { classification: 'wrong', desc: 'Unfortunately, it was a wrong guess. ' },
  { classification: 'lost', desc: 'Unfortunately, it was a wrong guess and you lost. The wrod is: ' },
  { classification: 'hit', desc: 'Nice, it was a good guess. ' },
  { classification: 'jackpot', desc: 'Congratulations, you guessed the word. The word is: ' }
]

/**
 * It finds the object that is related to the value and it returns its description.
 * It acts as en enum.
 *
 * @param {number} val the value that is related to the object.
 * @returns {string} the decription of the object that is related to the value.
 *
 */
function getStatus (val) {
  return chanceEnum.find((item) => {
    return item.value === val
  }).desc
}

/**
 * It finds the object that is related to the classification and it returns its description.
 * It acts as en enum.
 *
 * @param {string} classification the classification that is related to the object.
 * @returns {string} the decription of the object that is related to the classification.
 *
 */
function getString (classification) {
  return responseEnum.find((item) => {
    return item.classification === classification
  }).desc
}

/**
 * It returns an update and a status.
 *
 * @param {object} classification the classification.
 * @param {number} mistakes the number of mistakes.
 * @returns {string} the string.
 */
export function getUpdate (classification, mistakes) {
  return getString(classification) + getStatus(mistakes)
}

/**
 * It returns a string when the user wins.
 *
 * @param {string} word the reandom word.
 * @returns {string} the string.
 */
export function getStringForWinner (word) {
  return getString('jackpot') + '"' + word + '"' + '.'
}

/**
 * It returns a string when the user loses.
 *
 * @param {string} word the random word.
 * @param {number} mistakes the number of mistakes.
 * @returns {string} the string.
 */
export function getStringForLoser (word, mistakes) {
  return getString('lost') + '"' + word + '"' + '. ' + getStatus(mistakes)
}
