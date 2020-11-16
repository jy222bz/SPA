/**
 * @author Jacob Yousif
 */

/**
 * It creates a dashed string.
 *
 * @param {number} number the amount of dashes.
 * @returns {string} the ddashed string.
 *
 */
export function getDashedString (number) {
  var str = ''
  for (let index = 0; index < number; index++) { str += '-' }
  return str
}

/**
 * It creates a dashed string.
 *
 * @param {string} letter the letter.
 * @param {string} dashedString the dashed string.
 * @param {string} word the target word.
 * @returns {string} the ddashed string.
 */
export function getNewString (letter, dashedString, word) {
  var newStr = ''
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter.toUpperCase()) { newStr += letter.toUpperCase() } else { newStr += dashedString.charAt(i) }
  }
  return newStr
}
