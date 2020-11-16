import { getJSON } from './json.js'
import { generateID } from './id_generator.js'
/**
 * @author Jacob Yousif
 * @class A chat handler class.
 */
export default class ChatHandler {
  constructor (id) {
    /** @private */
    this.id = id
    /** @private */
    this.websocket = null
    /** @private */
    this.url = document.getElementById('input7' + id)
    /** @private */
    this.messageField = document.getElementById('input9' + id)
    /** @private */
    this.output = document.getElementById('con' + id)
    /** @private */
    this.checkbox = document.getElementById('checkbox' + id)
    /** @private */
    this.items = []
    /** @private */
    this.counter = 0
    /** @private */
    this.closed = true
    /** @private */
    this.channelID = generateID()
    /** @private */
    this.times = []
    /** @private */
    this.data = []
    /** @private */
    this.bools = []
    /** @private */
    this.names = []
    /** @private */
    this.parts = []
    /** @private */
    this.username = localStorage.getItem('username')
  }

  /**
   * It returns true since it need update about name change.
   *
   * @returns {boolean} whether it needs name change update.
   */
  needNameUodate () {
    return true
  }

  /**
   * It sets the emoji in the text field.
   *
   * @param {string} emo the content.
   */
  informMe (emo) {
    var content = this.messageField.value
    this.messageField.value = content + emo
  }

  /**
   * It updates the content on name change.
   *
   * @param {string} name the new username.
   */
  updateName (name) {
    this.username = name
    for (let index = 0; index < this.counter; index++) {
      if (this.names[index] !== 'Sender') {
        this.names[index] = name
        if (this.bools[index] === true) {
          this.items[index].textContent = this.times[index] + this.username + ' wrote: '
          var code = document.createElement('code')
          code.className = 'code'
          code.textContent = this.data[index]
          this.items[index].appendChild(code)
        } else {
          this.items[index].textContent = this.times[index] + this.username + ' wrote: ' +
                        this.data[index]
        }
      }
    }
  }

  /**
   * It sends the message to the user.
   */
  sendMessage () {
    if (!this.closed) {
      const messageText = this.messageField.value
      if (this.websocket != null || this.websocket.readyState !== 3) {
        var obj = this.getItem()
        var now = new Date().toLocaleTimeString()
        var temp = this.counter++
        if (this.checkbox.checked === true) {
          this.websocket.send(getJSON(messageText, this.channelID, 'code', this.username))
          this.checkbox.checked = false
          obj.textContent = now + ':   ' + this.username + ' wrote: '
          var code = document.createElement('code')
          code.className = 'code'
          code.textContent = messageText
          obj.appendChild(code)
          this.bools[temp] = true
        } else {
          this.websocket.send(getJSON(messageText, this.channelID, 'message', this.username))
          obj.textContent = now + ': ' + this.username + ' wrote: ' + messageText
          this.bools[temp] = false
        }
        this.times[temp] = now + ': '
        this.names[temp] = this.username
        this.parts[temp] = ' wrote: '
        this.data[temp] = messageText
        this.output.appendChild(obj)
        this.gotoBottom()
      }
    }
    this.messageField.value = ''
    this.url.value = ''
    this.checkbox.checked = false
  }

  /**
   * It sets the recieve listener.
   */
  recieve () {
    this.websocket.onmessage = (event) => {
      this.onRecieve(event)
    }
  }

  /**
   * It returns false since it does not have a timer.
   *
   * @returns {boolean} whether it has a timer.
   */
  hasTimer () {
    return false
  }

  /**
   * It handles the incomming messages.
   *
   * @param {Event} ev the event in question.
   */
  onRecieve (ev) {
    var data = JSON.parse(ev.data)
    if (data.type !== 'heartbeat' && data.channel === this.channelID) {
      var now = new Date().toLocaleTimeString()
      var obj = this.getItem()
      var temp = this.counter++
      if (data.type === 'code') {
        obj.textContent = now + ': Sender wrote: '
        var code = document.createElement('code')
        code.className = 'code'
        code.textContent = data.data
        obj.appendChild(code)
        this.bools[temp] = true
      } else {
        obj.textContent = now + ': ' + 'Sender wrote: ' + data.data
        this.bools[temp] = false
      }
      this.times[temp] = now + ': '
      this.names[temp] = 'Sender'
      this.parts[temp] = ' wrote: '
      this.data[temp] = data.data
      this.output.appendChild(obj)
      this.gotoBottom()
    }
  }

  /**
   * It intilizes the connection by launching the websocket.
   *
   * @param {string} url the url to be connected to.
   */
  connect (url) {
    if (url != null && url !== '') {
      try {
        this.counter = 0
        this.times = []
        this.data = []
        this.bools = []
        this.parts = []
        this.names = []
        this.websocket = new WebSocket(url)
        this.closed = false
        this.url.value = ''
        this.url.placeholder = 'STATUS: CONNECTED'
        this.recieve()
      } catch (err) {
        this.url.value = ''
        this.url.placeholder = 'STATUS: FAILED'
      }
    }
  }

  /**
   * It returns a par element.
   *
   * @returns {object} the par element.
   */
  getItem () {
    var par = document.createElement('P')
    par.className = 'nice'
    this.items.push(par)
    return par
  }

  /**
   * It returns the array of par elements.
   *
   * @returns {object[]} the par elements.
   */
  getItems () {
    return this.items
  }

  /**
   * It closes the connection.
   */
  closeConnection () {
    this.url.value = ''
    this.url.placeholder = 'Insert a URL:'
    this.new = true
    if (this.websocket !== null) {
      this.reset()
      this.websocket.close()
      this.closed = true
    }
  }

  /**
   * It rsets the chat div by removing the par elements.
   */
  reset () {
    if (this.items) {
      for (let index = 0; index < this.items.length; index++) {
        this.items[index].remove()
      }
    }
  }

  /**
   * It places the view in the bottom when the scroll is shown.
   */
  gotoBottom () {
    this.output.scrollTop = this.output.scrollHeight - this.output.clientHeight
  }
}
