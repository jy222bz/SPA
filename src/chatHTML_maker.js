import { getEmoj } from './emoji.js'
/**
 * It constructs a HTML div for the Chat.
 *
 * @param {string} id the unique id.
 * @returns {object} the HTML element.
 */
export function getChatHTML (id) {
  var div = document.createElement('div')
  div.id = 'main_div' + id
  var par2 = document.createElement('div')
  par2.id = 'par5' + id
  par2.className = 'px'
  par2.textContent = 'Welcome  to the Chat App!'
  div.className = 'column-eq2 column-eq'
  var btn = document.createElement('button')
  btn.type = 'button'
  btn.name = 'close_btn' + id
  btn.textContent = 'X'
  btn.className = 'close_btn'
  btn.id = 'close_btn20' + id
  var input = document.createElement('INPUT')
  input.setAttribute('type', 'text')
  input.className = 'input2'
  input.id = 'input7' + id
  input.placeholder = 'Insert a URL:'
  var connect = document.createElement('button')
  connect.type = 'button'
  connect.name = 'connect' + id
  connect.className = 'btn41'
  connect.id = 'connect' + id
  var obj = document.createElement('span')
  obj.textContent = 'Connect'
  connect.appendChild(obj)
  var terminate = document.createElement('button')
  terminate.type = 'button'
  terminate.className = 'btn41'
  terminate.id = 'terminate' + id
  var obj4 = document.createElement('span')
  obj4.textContent = 'Close'
  terminate.appendChild(obj4)
  var input2 = document.createElement('INPUT')
  input2.setAttribute('type', 'text')
  input2.className = 'input2'
  input2.id = 'input9' + id
  input2.placeholder = 'Write a message...'
  var send = document.createElement('button')
  send.type = 'button'
  send.name = 'send_btn' + id
  send.className = 'btn40'
  send.id = 'send_btn2' + id
  var obj2 = document.createElement('span')
  obj2.textContent = 'Send'
  send.appendChild(obj2)
  var checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.id = 'checkbox' + id
  checkbox.style.margin = '5px'
  var div3 = document.createElement('div')
  div3.id = 'con' + id
  div3.className = 'divs'
  var label = document.createElement('label')
  label.htmlFor = 'checkbox' + id
  label.className = 'lab'
  label.appendChild(document.createTextNode(String.fromCodePoint(10100) + ' ' +
        String.fromCodePoint(10101)))
  div.style.padding = '0 5 0 0px'
  div.appendChild(btn)
  div.appendChild(par2)
  div.appendChild(input)
  div.appendChild(connect)
  div.appendChild(terminate)
  div.appendChild(input2)
  div.appendChild(send)
  div.appendChild(checkbox)
  div.appendChild(label)
  div.appendChild(getEmoj(id))
  div.appendChild(div3)
  return div
}
