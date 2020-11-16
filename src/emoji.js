/** This array holds the values of the emojis */
var items = []
items.push(128512)
items.push(128513)
items.push(128521)
items.push(128523)
items.push(128526)
items.push(129321)
items.push(129324)
items.push(128513)
items.push(9969)
items.push(129327)
items.push(129347)

/**
 * It constructs a HTML div for the EMOJIS.
 *
 * @param {string} id the unique id.
 * @returns {object} the HTML element.
 */
export function getEmoj (id) {
  var emoj = document.createElement('div')
  for (let index = 0; index < items.length; index++) {
    var par = document.createElement('a')
    par.id = 'em' + id + index
    par.textContent = String.fromCodePoint(items[index])
    emoj.appendChild(par)
  }
  return emoj
}

/**
 * It returns the emoji.
 *
 * @param {number} pos the position in the array.
 * @returns {string} the content.
 */
export function getEMOJI (pos) {
  return String.fromCodePoint(items[pos])
}
