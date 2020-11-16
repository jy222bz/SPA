import Controller from './game_controller.js'
import UIController from './ui_controller.js'
import { getWord } from './word.js'
import { getDashedString } from './string_maker.js'
import { init } from './init.js'

/**
 * @author Jacob Yousif
 * @class GameHandler
 * It handles the game.
 */
export default class HangmanHandler {
  constructor (id) {
    /** @private */
    this.id = id
    /** @private */
    this.inputField = document.getElementById('input' + id)
    /** @private */
    this.buttonAdd = document.getElementById('next_btn' + id)
    /** @private */
    this.imageHolder = document.getElementById('img' + id)
    /** @private */
    this.outputField = document.getElementById('par1' + id)
    /** @private */
    this.statusField = document.getElementById('par2' + id)
    /** @private */
    this.buttonReset = document.getElementById('new_game_btn' + id)
    /** @private */
    this.close = document.getElementById('close_btn3' + id)
    /** @private */
    this.word = getWord()
    /** @private */
    this.dashed = getDashedString(this.word.length)
    /** @private */
    this.statusField.textContent = this.statusField.textContent + this.dashed
    /** @private */
    this.controller = new Controller(this.word, this.dashed)
    /** @private */
    this.uiController = new UIController(this.inputField, this.buttonAdd, this.imageHolder, this.outputField,
      this.statusField)
    /** @private */
  }

  /**
   * It runs the controllers.
   */
  run () {
    this.uiController.run(this.controller.run(this.inputField.value))
  }

  /**
   * It returns false since it does not need name change.
   *
   * @returns {boolean} whether it needs update about name change.
   */
  needNameUodate () {
    return false
  }

  /**
   * It returns false since it does not have timer.
   *
   * @returns {boolean} whether it has timer.
   */
  hasTimer () {
    return false
  }

  /**
   * It intilizes the values.
   */
  initGame () {
    init(this.word, this.dashed, this.statusField, this.inputField, this.controller, this.outputField,
      this.imageHolder, this.buttonAdd)
  }
}
