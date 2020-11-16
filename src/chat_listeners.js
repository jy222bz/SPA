import { getEMOJI } from './emoji.js'
/**
 * @author Jacob Yousif
 * @class ChatListener
 * It intilizes and controlls the listeners of the chat.
 */
export default class ChatListener {
  init (item, id) {
    document.getElementById('connect' + id).addEventListener('click', function () {
      item.connect(document.getElementById('input7' + id).value)
    })

    document.getElementById('send_btn2' + id).addEventListener('click', function () {
      item.sendMessage()
    })

    document.getElementById('terminate' + id).addEventListener('click', function () {
      item.closeConnection()
    })
    for (let index = 0; index < 11; index++) {
      var obj = document.getElementById('em' + id + index)
      obj.addEventListener('click', function () {
        item.informMe(getEMOJI(index))
      })
    }
  }
}
