import GameClock from './game_clock.js'

/**
 * @author Jacob Yousif
 * @class GameHandler
 * It handles the game.
 */
export default class MemoryGameHandler {
  constructor (id) {
    /** @private */
    this.id = id
    /** Initialize the objects. */
    this.init()
  }

  /**
   * It returns false since it does not care about name change.
   *
   * @returns {boolean} whether it needs name update.
   */
  needNameUodate () {
    return false
  }

  /**
   * It stops the timing.
   */
  stopTiming () {
    this.gameTimer.stopGameTimer()
    if (this.timerOneIsOn) {
      this.gameTimer.stopTimerOne()
    }
  }

  /**
   * It returns a boolean.
   *
   * @returns {boolean} whether it has a timer.
   */
  hasTimer () {
    return true
  }

  /**
   * It informs this object about every seonds passes by
   * This object decides what do next based on the current time.
   */
  InformMeAboutTimerOne () {
    this.counter++
    if (this.counter === this.maxDisplayTime) {
      this.gameTimer.stopTimerOne()
      this.counter = 0
      this.flipped = 0
      if (this.firstIsflipped) {
        this.firstIsflipped = false
        this.imageHolders[this.firstIndex].src = this.question
        this.first = ''
      }
      if (this.secondIsFlipped) {
        this.secondIsFlipped = false
        this.imageHolders[this.secondIndex].src = this.question
        this.second = '*'
      }
    }
  }

  /**
   * It updates the time in the div and displays it.
   */
  updateMe () {
    this.timeField.textContent = this.word + (++this.time) + this.seconds
  }

  /**
   * It handles the events.
   *
   * @param {number} pos the position of the image.
   */
  handle (pos) {
    if (this.flipped === 0) {
      this.timerOneIsOn = true
      this.gameTimer.runTimerOne()
      this.firstIsflipped = true
      this.flipped++
      this.first = this.images[pos]
      this.imageHolders[pos].src = this.images[pos]
      this.firstIndex = pos
    } else if (this.flipped === 1 && pos !== this.firstIndex) {
      this.flipped++
      this.secondIsFlipped = true
      this.second = this.images[pos]
      this.imageHolders[pos].src = this.images[pos]
      this.secondIndex = pos
      this.checkMatch()
    } else if (pos !== this.secondIndex && pos !== this.firstIndex) {
      this.firstIsflipped = true
      this.secondIsFlipped = false
      this.counter = 0
      this.flipped = 1
      this.second = '*'
      this.imageHolders[this.firstIndex].src = this.question
      this.imageHolders[this.secondIndex].src = this.question
      this.first = this.images[pos]
      this.imageHolders[pos].src = this.images[pos]
      this.firstIndex = pos
    }
  }

  /**
   * It checks whethre there is a match.
   */
  checkMatch () {
    this.attempts++
    if (this.first === this.second) {
      this.hits++
      this.gameTimer.stopTimerOne()
      this.counter = 0
      this.firstIsflipped = false
      this.secondIsFlipped = false
      this.timerOneIsOn = false
      this.removeTwoPieces()
      this.flipped = 0
      this.first = ''
      this.second = '*'
      if (this.hits === this.max) {
        this.gameTimer.stopGameTimer()
        this.remove(this.max * 2)
        this.button.style.display = 'block'
        this.timeField.textContent = 'Congrats, you have made ' +
                        this.attempts + ' attempts and won in ' + (++this.time) + this.seconds
      } else {
        this.focus(0, 100, true)
      }
    }
  }

  /**
   * It removes the images.
   *
   * @param {number} max the amount of images.
   */
  remove (max) {
    for (let index = 0; index < max; index++) {
      this.holder.removeChild(document.getElementById(index))
    }
  }

  /**
   * It removes the two pieces that are match.
   */
  removeTwoPieces () {
    var div = document.createElement('img')
    var div2 = document.createElement('img')
    div.id = this.divCounter++
    div2.id = this.divCounter++
    div.style.height = this.att1
    div.style.width = this.att2
    div.style.margin = this.margin
    div2.style.height = this.att1
    div2.style.width = this.att2
    div2.style.margin = this.margin
    div.src = this.empty
    div2.src = this.empty
    this.holder.replaceChild(div, this.imageHolders[this.firstIndex])
    this.holder.replaceChild(div2, this.imageHolders[this.secondIndex])
    this.tracker[this.firstIndex] = false
    this.tracker[this.secondIndex] = false
  }

  /**
   * It sets the images and thier listeners.
   *
   * @param {string[]} images the sources of the images.
   * @param {number} amount the amount of images.
   */
  setImages (images, amount) {
    this.timeField.textContent = ''
    this.max = amount / 2
    this.size = amount
    this.images = images
    this.setValues(amount)
    for (let index = 0; index < amount; index++) {
      this.tracker.push(true)
      var image = document.createElement('img')
      image.style.height = this.att1
      image.style.width = this.att2
      image.id = this.id + index
      image.style.cursor = 'pointer'
      this.imageHolders.push(image)
      image.style.margin = this.margin
      image.tabIndex = 0
      this.keyHandler(image, index, this.imageHolders, this, this.limit, this.size)
      image.addEventListener('click', () => this.handle(index))
      image.src = this.question
      this.holder.appendChild(image)
    }
    this.imageHolders[0].focus()
    this.timeField.textContent = this.word + '0 second[s].'
    this.gameTimer.runGameTimer()
  }

  /**
   * It sets the height, the width and the margine based on the amount of images.
   *
   * @param {number} amount the amount of images.
   */
  setValues (amount) {
    if (amount === 16) {
      this.att1 = '20%'
      this.att2 = '22%'
      this.margin = '0 0 0 10px'
      this.limit = 4
    } else if (amount === 4) {
      this.att1 = '40%'
      this.att2 = '40%'
      this.margin = '0 0 0 20px'
    } else {
      this.att1 = '22%'
      this.att2 = '40%'
      this.margin = '0 10px 0 10px'
    }
  }

  /**
   * It handles the key events.
   * If the event Enter than it handels the flipping and decides accoerdingly.
   * Otherwise, it moves the focus based on the key event.
   *
   * @param {object} obj the target image div that should be listened to.
   * @param {number} pos the position of the target image div.
   * @param {object[]} item the image div array.
   * @param {object} object the main object that controlls all the images.
   * @param {number} limit  the max limit for subtraction and additition.
   * @param {number} size the amount of image divs in the array.
   */
  keyHandler (obj, pos, item, object, limit, size) {
    obj.onkeydown = function (e) {
      if (e.key === 'ArrowUp') {
        item[pos].blur()
        if (pos - limit >= 0) {
          object.focus(pos - limit, pos, false)
        } else {
          object.focus((pos - limit) + size, pos, false)
        }
      } else if (e.key === 'ArrowDown') {
        item[pos].blur()
        if (pos + limit < size) {
          object.focus(pos + limit, pos, true)
        } else {
          object.focus((pos + limit) - size, pos, true)
        }
      } else if (e.key === 'ArrowRight') {
        item[pos].blur()
        if (pos + 1 < size) {
          object.focus(pos + 1, pos, true)
        } else {
          object.focus(0, pos, true)
        }
      } else if (e.key === 'ArrowLeft') {
        item[pos].blur()
        if (pos - 1 >= 0) {
          object.focus(pos - 1, pos, false)
        } else {
          object.focus(size - 1, pos, false)
        }
      } else if (e.key === 'Enter') {
        object.handle(pos)
      }
    }
  }

  /**
   * It sets the focus.
   * If the item in question is gone, then it counts the next item to sets the focus on it.
   *
   * @param {number} pos the actual position of the item that should be focused.
   * @param {number} old the old position of the last item.
   * @param {boolean} isIncreasing whether the movement increasing.
   */
  focus (pos, old, isIncreasing) {
    var temp = pos
    while (true) {
      if (this.tracker[pos]) {
        this.imageHolders[pos].focus()
        break
      } else if (isIncreasing) {
        temp++
        if (temp < this.size && this.tracker[temp] && temp !== old) {
          this.imageHolders[temp].focus()
          break
        } else if (temp === this.size) {
          temp = -1
        }
      } else {
        temp--
        if (temp < this.size && this.tracker[temp] && temp !== old) {
          this.imageHolders[temp].focus()
          break
        } else if (temp < 0) {
          temp = this.size
        }
      }
    }
  }

  /**
   * It initializes the values.
   */
  init () {
    this.divCounter = 0
    this.time = 0
    this.tracker = []
    this.limit = 2
    this.size = 0
    this.margin = '0 0 0 0px'
    this.holder = document.getElementById('main_div' + this.id)
    this.timeField = document.getElementById('time' + this.id)
    this.images = null
    this.imageHolders = []
    this.word = 'Time is: '
    this.button = document.getElementById('dropdown' + this.id)
    this.first = ''
    this.second = '*'
    this.question = 'img/card_img/0.png'
    this.hits = 0
    this.max = 0
    this.maxDisplayTime = 5
    this.counter = 0
    this.empty = 'img/card_img/empty.png'
    this.seconds = ' second[s].'
    this.gameTimer = new GameClock()
    this.gameTimer.setOwner(this)
    this.timerOneIsOn = false
    this.flipped = 0
    this.max = 0
    this.firstIndex = 0
    this.secondIndex = 0
    this.timeField.textContent = 'Welcome!'
    this.firstIsflipped = false
    this.secondIsFlipped = false
    this.att1 = null
    this.att2 = null
    this.attempts = 0
  }
}
