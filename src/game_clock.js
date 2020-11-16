/**
 * @author Jacob Yousif
 * @class Timer
 * It handles the time of thegame.
 */
export default class GameClock {
  constructor () {
    /** @private */
    this.timerMain = null
    /** @private */
    this.owner = null
    /** @private */
    this.timer1 = null
  }

  /**
   * It sets the target object and sets the the timer for 10 seconds.
   *
   * @param {object} owner - the object that should notified when the time changes.
   */
  setOwner (owner) {
    this.owner = owner
  }

  /**
   * It sets the interval.
   */
  runGameTimer () {
    this.timerMain = setInterval(() => {
      this.owner.updateMe()
    }, 1000)
  }

  /**
   * It sets the interval.
   */
  runTimerOne () {
    this.timer1 = setInterval(() => {
      this.owner.InformMeAboutTimerOne()
    }, 1000)
  }

  /**
   * It stops the timer.
   */
  stopTimerOne () {
    clearInterval(this.timer1)
  }

  /**
   * It stops the timer.
   */
  stopGameTimer () {
    clearInterval(this.timerMain)
  }
}
