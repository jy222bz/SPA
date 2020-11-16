import { getLetterCount, isLetter, exist } from './validator.js'
import { getUpdate, getStringForWinner, getStringForLoser } from './status.js'
import Output from './output.js'
import { getNewString } from './string_maker.js'

/**
 * @author Jacob Yousif
 * @class A controller.
 * It manages the model to produce the output according to the input.
 */
export default class Controller {
  constructor (word, dashed) {
    /** @private */
    this.word = word
    /** @private */
    this.mistakes = 0
    /** @private */
    this.max = 6
    /** @private */
    this.guessed = 0
    /** @private */
    this.providedLetters = ''
    /** @private */
    this.dashedWord = dashed
  }

  /**
   * This method checks the input and produces an output for the view.
   *
   * @param {string} letter the user input.
   * @returns {object} the output for the view.
   */
  run (letter) {
    if (!isLetter(letter)) {
      return new Output(getUpdate('invalid', this.mistakes), true, this.mistakes, this.get())
    } else if (exist(letter, this.providedLetters)) {
      return new Output(getUpdate('provided', this.mistakes), true, this.mistakes, this.get())
    } else if (getLetterCount(this.word, letter) === 0) {
      if (++this.mistakes === this.max) { return new Output(getStringForLoser(this.word, this.mistakes), false, this.mistakes, '') }
      this.providedLetters += letter.toUpperCase()
      return new Output(getUpdate('wrong', this.mistakes), true, this.mistakes, this.get())
    } else {
      this.dashedWord = getNewString(letter, this.dashedWord, this.word)
      this.guessed += getLetterCount(this.word, letter)
      if (this.guessed === this.word.length) { return new Output(getStringForWinner(this.word), false, this.mistakes, '') }
      this.providedLetters += letter.toUpperCase()
      return new Output(getUpdate('hit', this.mistakes), true, this.mistakes, this.get())
    }
  }

  /**
   * This method sets the controller for a new game.
   *
   * @param {string} dashed the dashed word.
   * @param {string} word the random word.
   */
  set (dashed, word) {
    this.dashedWord = dashed
    this.word = word
    this.mistakes = 0
    this.guessed = 0
    this.providedLetters = ''
  }

  /**
   * It returns a dashed string.
   *
   * @returns {string} the new dashed string.
   */
  get () {
    return 'The word is: ' + this.dashedWord
  }
}
