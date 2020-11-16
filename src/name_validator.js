/**
 * @author Jacob Yousif
 * Provides validator methods.
 */

/**
 * It checks whether the provided input has the characteristics of a name.
 *
 * @param {string} someName the input.
 * @returns {boolean} whether it is a name.
 */
export function isName (someName) {
  if (someName === '') {
    return false
  } else if (someName.length < 2 || /[^a-zA-Z]/.test(someName) || someName.length > 10) {
    return false
  } else {
    return true
  }
}
