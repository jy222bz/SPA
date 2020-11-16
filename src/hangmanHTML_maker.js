/**
 * It constructs a HTML div for the Hangman.
 *
 * @param {string} id the unique id.
 * @returns {object} the HTML element.
 */
export function getHangmanHTML (id) {
  var div = document.createElement('div')
  div.id = 'main_div' + id
  div.className = 'column-eq3 column-eq'
  var btn = document.createElement('button')
  btn.type = 'button'
  btn.name = 'close_btn' + id
  btn.textContent = 'X'
  btn.className = 'close_btn'
  btn.id = 'close_btn3' + id
  var par = document.createElement('div')
  par.id = 'par1' + id
  par.className = 'status'
  par.textContent = 'Welcome to the game!'
  var par2 = document.createElement('P')
  par2.id = 'par2' + id
  par2.className = 'status'
  par2.textContent = 'The word is: '
  div.appendChild(btn)
  div.appendChild(par)
  div.appendChild(par2)
  var divImg = document.createElement('div')
  divImg.id = 'div_img' + id
  divImg.className = 'div_img'
  var img = document.createElement('IMG')
  img.src = 'img/hangman_img/0.jpg'
  img.id = 'img' + id
  img.className = 'hangman_img'
  divImg.appendChild(img)
  var container = document.createElement('div')
  container.id = 'container' + id
  container.className = 'container'
  var input = document.createElement('INPUT')
  input.setAttribute('type', 'text')
  input.className = 'input'
  input.id = 'input' + id
  input.placeholder = 'Insert a letter:'
  var nextBtn = document.createElement('button')
  nextBtn.type = 'button'
  nextBtn.name = 'next_btn' + id
  nextBtn.className = 'btn3'
  nextBtn.id = 'next_btn' + id
  var obj = document.createElement('span')
  obj.textContent = 'Next'
  nextBtn.appendChild(obj)
  container.appendChild(input)
  container.appendChild(nextBtn)
  var reset = document.createElement('button')
  reset.type = 'button'
  reset.name = 'new_game_btn' + id
  reset.className = 'btn20'
  reset.id = 'new_game_btn' + id
  var obj2 = document.createElement('span')
  obj2.textContent = 'Play New Game'
  reset.appendChild(obj2)
  div.appendChild(divImg)
  div.appendChild(container)
  div.appendChild(reset)
  return div
}
