/**
 * It constructs a HTML div for the Game.
 *
 * @param {string} id the unique id.
 * @returns {object} the HTML element.
 */
export function getGameHTML (id) {
  var div = document.createElement('div')
  div.id = 'main_div' + id
  div.className = 'column-eq1 column-eq'
  var btn = document.createElement('button')
  btn.type = 'button'
  btn.name = 'close_btn' + id
  btn.textContent = 'X'
  btn.className = 'close_btn'
  btn.id = 'close_btn' + id
  var div2 = document.createElement('div')
  div2.className = 'dropdown'
  div2.id = 'dropdown' + id
  div2.style.width = '95%'
  var btn2 = document.createElement('button')
  btn2.type = 'button'
  btn2.name = 'btn_choose' + id
  btn2.id = 'btn_choose' + id
  btn2.className = 'btn20'
  var time = document.createElement('div')
  time.id = 'time' + id
  time.className = 'time'
  time.textContent = 'Welcome!'
  var aTag = document.createElement('a')
  aTag.innerText = '4X4'
  aTag.id = 'item1' + id
  var aTag2 = document.createElement('a')
  aTag2.innerText = '2X2'
  aTag2.id = 'item2' + id
  var aTag3 = document.createElement('a')
  aTag3.innerText = '2X4'
  aTag3.id = 'item3' + id
  var obj = document.createElement('span')
  obj.textContent = 'Dimenision'
  btn2.appendChild(obj)
  var div3 = document.createElement('div')
  div3.className = 'dropdown-content'
  div3.id = 'dropdown-content' + id
  div.appendChild(btn)
  div.appendChild(time)
  div3.appendChild(aTag)
  div3.appendChild(aTag2)
  div3.appendChild(aTag3)
  div2.appendChild(btn2)
  div2.appendChild(div3)
  div.appendChild(div2)
  return div
}
