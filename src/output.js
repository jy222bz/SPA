/**
 * @class a class for providing an output.
 * @author Jacob Yousif
 *
 */
export default class Output {
  /**
   * A constructo to construct the object.
   *
   * @constructs Output the output object.
   * @param {string} text the output text.
   * @param {boolean} isOn whether the game is still on.
   * @param {number} mistakes the amount of mistakes.
   * @param {string} dashedWord the dashedWord.
   */
  constructor (text, isOn, mistakes, dashedWord) {
    /** @private */
    this.text = text
    /** @private */
    this.isOn = isOn
    /** @private */
    this.mistakes = mistakes
    /** @private */
    this.dashedWord = dashedWord
  }

  /**
   * This method return the value.
   *
   * @returns {string} the output text.
   */
  getText () {
    return this.text
  }

  /**
   * This method return the value.
   *
   * @returns {boolean} whether the game is still on.
   */
  isGameOn () {
    return this.isOn
  }

  /**
   * This method return the value.
   *
   * @returns {number} the amount of mistakes.
   */
  getMistakesCount () {
    return this.mistakes
  }

  /**
   * This method return the value.
   *
   * @returns {string} the dashed word.
   */
  getDashedWord () {
    return this.dashedWord
  }
}
