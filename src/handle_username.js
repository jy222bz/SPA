import { isName } from './name_validator.js'

/**
 * It opens the prompt to allow the user enters its username.
 * It saves the username in the local storage.
 * Invalid input will be ignored and nothing changes.
 *
 * @param {Map} users the list of users to be notified of the name change.
 */
export function openPrompt (users) {
  var userName = prompt('Please enter your username!')
  if (userName != null) {
    if (isName(userName)) {
      localStorage.setItem('username', userName.toUpperCase())
      if (users.size !== 0) {
        users.forEach((value, key) => {
          if (value.needNameUodate()) {
            value.updateName(userName.toUpperCase())
          }
        })
      }
    }
  }
}

/**
 * It opens the prompt to allow the user enters its username.
 * It saves the username in the local storage.
 * The user will be forced to provide name with this method.
 *
 *@returns {boolean} whether the user has provided its name.
 */
export function forceUsername () {
  if (localStorage.getItem('username') === null) {
    var userName = prompt('Please enter your username!')
    var isValidName = false
    while (true) {
      if (userName == null) {
        break
      } else if (!isName(userName)) {
        userName = prompt('Invalid input! Please enter your username!')
      } else {
        localStorage.setItem('username', userName.toUpperCase())
        isValidName = true
        break
      }
    }
    return isValidName
  } else {
    return true
  }
}
