import { getWord } from './word.js'
import { getDashedString } from './string_maker.js'
/**
 * @author Jacob Yousif
 *
 * It resets the main entry point.
 */

/**
 * It initializes the fields to start a new game.
 *
 * @param {string} word the word.
 * @param {string} dashed the dashed word.
 * @param {object} statusField the status field.
 * @param {object} inputField the input field.
 * @param {object} controller the controller.
 * @param {object} outputField the outputfield.
 * @param {object} imageHolder the image holder.
 * @param {object} buttonAdd  the buttom for add.
 */
export function init (word, dashed, statusField, inputField, controller, outputField, imageHolder, buttonAdd) {
  word = getWord()
  dashed = getDashedString(word.length)
  statusField.textContent = 'The word is: ' + dashed
  inputField.value = ''
  controller.set(dashed, word)
  outputField.textContent = 'Welcome to the game!'
  imageHolder.src = 'img/hangman_img/0.jpg '
  buttonAdd.disabled = false
  buttonAdd.style.visibility = 'visible'
  inputField.disabled = false
  inputField.style.visibility = 'visible'
}
