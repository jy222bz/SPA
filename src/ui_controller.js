/**
 * @author Jacob Yousif
 * @class A view controller.
 * It manages the view accouring to the output of the main controller.
 */
export default class UIController {
  constructor (inputField, buttonAdd, imageHolder, outputField, statusField) {
    /** @private */
    this.inputField = inputField
    /** @private */
    this.buttonAdd = buttonAdd
    /** @private */
    this.imageHolder = imageHolder
    /** @private */
    this.outputField = outputField
    /** @private */
    this.statusField = statusField
  }

  /**
   * This method controlls the view according to the output of the main controller.
   *
   * @param {object} output the output of the main controller.
   */
  run (output) {
    this.inputField.value = ''
    this.statusField.textContent = output.getDashedWord()
    this.outputField.textContent = output.getText()
    this.imageHolder.src = 'img/hangman_img/' + output.getMistakesCount() + '.jpg'
    if (!output.isGameOn()) {
      this.buttonAdd.disabled = true
      this.buttonAdd.style.visibility = 'hidden'
      this.inputField.disabled = true
      this.inputField.style.visibility = 'hidden'
    }
  }
}
